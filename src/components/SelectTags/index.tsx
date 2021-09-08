import React, { CSSProperties } from 'react';
import { Select, Tabs, Tag, message } from 'antd';
import { GroupTag, TagType } from '@/models/tag';
import './index.less';

const { Option } = Select;

interface SelectTagsProps {
  allTags: TagType[];
  groupTags: GroupTag[];
  value?: string[];
  onChange?: (tags: string[]) => void;
  onTagsChange?: (tags: string[]) => void; // 当tags改变时触发
  tagLoading?: boolean;
  maxTagsNumber?: number; // 最大tags数量
  placeholder?: string;
  style?: CSSProperties;
}

/**
 * 标签选择器
 * @param props
 * @constructor
 */
const SelectTags: React.FC<SelectTagsProps> = (props) => {
  const {
    allTags,
    groupTags,
    onChange,
    value = [],
    onTagsChange,
    tagLoading,
    maxTagsNumber = 5,
    placeholder,
    style,
  } = props;

  const handleChange = (tag: any, checked: any) => {
    const nextSelectedTags = checked ? [...value, tag] : value.filter((t) => t !== tag);
    if (nextSelectedTags.length > maxTagsNumber) {
      message.warning(`最多只能选择 ${maxTagsNumber} 个标签！`);
      return;
    }
    onChange?.(nextSelectedTags);
    onTagsChange?.(nextSelectedTags);
  };

  /**
   * 分组标签视图
   */
  const groupTagsView =
    groupTags &&
    groupTags.map((groupTag) => {
      return (
        <Tabs.TabPane tab={groupTag.name} key={groupTag.name}>
          {groupTag.tags.map((tag) => {
            return (
              <Tag.CheckableTag
                key={tag}
                checked={value.indexOf(tag) > -1}
                onChange={(checked) => handleChange(tag, checked)}
              >
                {tag}
              </Tag.CheckableTag>
            );
          })}
        </Tabs.TabPane>
      );
    });

  /**
   * 全部选项组视图
   */
  const optionTagsView =
    allTags &&
    allTags.map((tag) => {
      return (
        <Option key={tag} value={tag}>
          {tag}
        </Option>
      );
    });

  return (
    <Select
      style={style}
      value={value}
      mode="multiple"
      showSearch
      dropdownRender={(e) => {
        return (
          <>
            {e.props.searchValue.length > 0 ? (
              e
            ) : (
              <div style={{ paddingLeft: '10px' }}>
                <Tabs>{groupTagsView}</Tabs>
              </div>
            )}
          </>
        );
      }}
      onChange={(value1: string[]) => {
        onChange?.(value1);
      }}
      optionFilterProp="children"
      placeholder={placeholder ?? `可选至多 ${maxTagsNumber} 个标签，支持搜索`}
      loading={tagLoading}
      tokenSeparators={[',']}
      allowClear
    >
      {optionTagsView}
    </Select>
  );
};

export default SelectTags;
