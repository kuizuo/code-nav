import { DefaultFooter } from '@ant-design/pro-layout';
import { Tooltip } from 'antd';
import { GithubOutlined, InfoCircleOutlined, WechatOutlined } from '@ant-design/icons';
import wechat from '@/assets/wechat.png';
import React from 'react';

const GlobalFooter: React.FC = () => {
  return (
    <DefaultFooter
      copyright="2021 资源导航 | 闽ICP备2020017848号-2"
      links={[
        {
          key: 'github',
          title: (
            <Tooltip title="查看本站技术及源码，欢迎 star">
              <GithubOutlined /> 查看源码
            </Tooltip>
          ),
          href: 'https://github.com/kuizuo/code-nav',
          blankTarget: true,
        },
        {
          key: 'contact',
          title: (
            <Tooltip title={<img src={wechat} alt="微信 code_nav" width="200" />}>
              <WechatOutlined /> 联系作者
            </Tooltip>
          ),
          href: 'https://kuizuo.cn/about',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default GlobalFooter;
