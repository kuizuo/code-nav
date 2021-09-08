interface CategoryType {
  name: string;
  mapTag: string;
}

declare type CategoryMapType = { [key: string]: CategoryType };

/**
 * 分类专栏映射
 */
export const CATEGORY_MAP: CategoryMapType = {
  tutorial: {
    name: '贴心教程',
    mapTag: '教程',
  },
  project: {
    name: '项目',
    mapTag: '项目'
  },
  algorithm: {
    name: '算法数据结构',
    mapTag: '算法',
  },
  system: {
    name: '计算机系统',
    mapTag: '系统',
  },
  vue: {
    name: 'Vue',
    mapTag: 'Vue',
  },
  react: {
    name: 'React',
    mapTag: 'React',
  },
  javascript: {
    name: 'JavaScript',
    mapTag: 'JavaScript',
  },
  css: {
    name: 'Css',
    mapTag: 'Css',
  },
  nodejs: {
    name: 'Nodejs',
    mapTag: 'Nodejs',
  },
  python: {
    name: 'Python',
    mapTag: 'Python',
  },
  go: {
    name: 'Go',
    mapTag: 'Go',
  },
  database: {
    name: '数据库',
    mapTag: '数据库'
  },
  reverse: {
    name: '逆向',
    mapTag: '逆向'
  },
  http: {
    name: 'HTTP',
    mapTag: 'HTTP'
  },
  tool: {
    name: '工具',
    mapTag: '工具',
  },

  icon: {
    name: '图标',
    mapTag: '图标'
  },
  chart: {
    name: '动态图表',
    mapTag: '图表',
  },
  color: {
    name: '渐变配色',
    mapTag: '配色',
  },
  background: {
    name: '背景',
    mapTag: '背景',
  },
  static_website: {
    name: '静态站点',
    mapTag: '静态站点',
  },
  community: {
    name: '技术社区',
    mapTag: '技术社区',
  },
  code: {
    name: '在线编码',
    mapTag: '在线编码',
  },
  hosting: {
    name: '代码托管',
    mapTag: '代码托管',
  },
  cloud: {
    name: '云服务',
    mapTag: '云服务',
  },

  other: {
    name: '其他',
    mapTag: '其他',
  },


};
