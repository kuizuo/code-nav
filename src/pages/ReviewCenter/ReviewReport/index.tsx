import { AutoComplete, Divider, message, Modal } from 'antd';
import React, { useRef, useState } from 'react';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { connect } from 'umi';
import type { ConnectState } from '@/models/connect';
import type { ReportType } from '@/models/report';
import type { CurrentUser } from '@@/plugin-dva/connect';
import reviewStatusEnum from '@/constant/reviewStatusEnum';
import { REPORT_REASON_MAP } from '@/constant/reportReasonEnum';
import { NoAuth } from '@/components/NoAuth';
import { reviewReport, searchReportByPage } from '@/services/report';
import { REPORT_TYPE_MAP } from '@/constant/reportTypeEnum';

interface ReviewCenterProps {
  currentUser: CurrentUser;
  currentAuthority: string;
}

/**
 * 审核举报
 * @param props
 * @constructor
 */
const ReviewReport: React.FC<ReviewCenterProps> = (props) => {
  const { currentUser = {}, currentAuthority = 'guest' } = props;
  const actionRef = useRef<ActionType>();
  const [showRejectModal, setShowRejectModal] = useState<boolean>(false);
  const [reviewMessage, setReviewMessage] = useState<string>('');
  const [rejectReportId, setRejectReportId] = useState<string>('');

  const columns: ProColumns<ReportType>[] = [
    {
      title: '_id',
      dataIndex: '_id',
      copyable: true,
      ellipsis: true,
      width: 50,
    },
    {
      title: '举报资源',
      dataIndex: 'reportResourceId',
      render: (text, record) => {
        const url = `../rd/?rid=${record.reportResourceId}`;
        return (
          <a href={url} target="_blank" rel="noreferrer">
            {text}
          </a>
        );
      },
      copyable: true,
      ellipsis: true,
      width: 80,
    },
    {
      title: '被举报人',
      dataIndex: 'reportedUserId',
      copyable: true,
      ellipsis: true,
      width: 80,
    },
    {
      title: '举报人',
      dataIndex: 'reporterId',
      valueType: 'text',
      copyable: true,
      ellipsis: true,
      width: 80,
    },
    {
      title: '类型',
      dataIndex: 'reportType',
      width: 80,
      valueType: 'select',
      valueEnum: REPORT_TYPE_MAP,
      search: false,
      render: (_, record) => REPORT_TYPE_MAP[record.reportType].text,
    },
    {
      title: '原因',
      dataIndex: 'reportReason',
      width: 80,
      valueType: 'select',
      valueEnum: REPORT_REASON_MAP,
      search: false,
      render: (_, record) => REPORT_REASON_MAP[record.reportType].text,
    },
    {
      title: '详情',
      dataIndex: 'reportDetail',
      search: false,
      ellipsis: true,
    },
    {
      title: '举报时间',
      dataIndex: '_createTime',
      search: false,
      sorter: true,
      valueType: 'dateTime',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <div key={record._id}>
          <a
            onClick={() => {
              if (!currentUser._id) {
                message.error('请先登录');
                return;
              }
              reviewReport(record._id, reviewStatusEnum.PASS).then((res) => {
                if (res) {
                  message.success('已通过');
                } else {
                  message.error('操作失败');
                }
              });
            }}
          >
            通过
          </a>
          <Divider type="vertical" />
          <a
            style={{ color: 'red' }}
            onClick={() => {
              setShowRejectModal(true);
              setRejectReportId(record._id);
            }}
          >
            拒绝
          </a>
        </div>
      ),
    },
  ];

  return currentUser._id && currentAuthority.includes('admin') ? (
    <>
      <ProTable<ReportType>
        headerTitle="审核举报"
        actionRef={actionRef}
        rowKey="_id"
        columns={columns}
        search={{
          labelWidth: 'auto',
        }}
        request={(params) => {
          return searchReportByPage({
            ...params,
            pageNum: params.current,
            reviewStatus: reviewStatusEnum.REVIEWING,
          }).then((res) => {
            return {
              data: res.data,
              success: true,
              total: res.total,
            };
          });
        }}
      />
      <Modal
        title="请输入拒绝原因"
        visible={showRejectModal}
        onOk={() => {
          if (!currentUser._id) {
            message.error('请先登录');
            return;
          }
          reviewReport(rejectReportId, reviewStatusEnum.REJECT, reviewMessage).then((res) => {
            if (res) {
              message.success('已拒绝');
            } else {
              message.error('操作失败');
            }
            setShowRejectModal(false);
          });
        }}
        onCancel={() => setShowRejectModal(false)}
      >
        <AutoComplete
          options={[{ value: '举报不属实' }, { value: '恶意举报' }]}
          style={{ width: '100%' }}
          placeholder="请输入拒绝原因"
          value={reviewMessage}
          onChange={(data) => setReviewMessage(data)}
        />
      </Modal>
    </>
  ) : (
    <NoAuth />
  );
};

export default connect(({ user, login }: ConnectState) => ({
  currentUser: user.currentUser,
  currentAuthority: login.currentAuthority,
}))(ReviewReport);
