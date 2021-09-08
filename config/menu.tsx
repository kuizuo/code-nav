import { MenuDataItem } from "@ant-design/pro-layout";
import * as React from "react";
import {
  FieldBinaryOutlined,
  ContainerOutlined,
  UserOutlined,
  LaptopOutlined,
  ToolOutlined,
  DeploymentUnitOutlined,
  DatabaseOutlined,
  ChromeOutlined,
  FontColorsOutlined,
  GlobalOutlined,
  GithubOutlined

} from '@ant-design/icons';

/**
 * 菜单项
 */
export default [
  {
    path: "/resources/tutorial",
    name: "找教程",
    icon: <ContainerOutlined />,
  },
  // {
  //   path: "/resources/project",
  //   name: "找项目",
  //   icon: <LaptopOutlined />,
  // },
  {
    path: "/resources/tool",
    name: "找工具",
    icon: <ToolOutlined />,
  },
  // {
  //   path: "/resources/basic",
  //   name: "必修基础",
  //   icon: <FieldBinaryOutlined />,
  //   children: [
  //     {
  //       path: "/resources/algorithm",
  //       name: "算法数据结构"
  //     },
  //     {
  //       path: "/resources/system",
  //       name: "计算机系统"
  //     },
  //   ]
  // },
  {
    path: "/resources/frontend",
    name: "前端",
    icon: <ChromeOutlined />,
    children: [
      {
        path: "/resources/vue",
        name: "Vue",
      },
      {
        path: "/resources/react",
        name: "React"
      },
      {
        path: "/resources/javascript",
        name: "Javascript",

      },
      {
        path: "/resources/css",
        name: "Css"
      },
    ]
  },
  {
    path: "/resources/technology",
    name: "技术领域",
    icon: <GlobalOutlined />,
    children: [
      {
        path: "/resources/nodejs",
        name: "NodeJs"
      },
      {
        path: "/resources/python",
        name: "Python"
      },
      {
        path: "/resources/go",
        name: "Go"
      },
      {
        path: "/resources/database",
        name: "数据库",
        icon: <DatabaseOutlined />,
      },
      // {
      //   path: "/resources/reverse",
      //   name: "逆向",
      // },
      {
        path: "/resources/http",
        name: "HTTP",
      }
      // {
      //   path: "/resources/go",
      //   name: "Go"
      // },
      // {
      //   path: "/resources/java",
      //   name: "Java"
      // },
    ]
  },
  {
    path: "/resources/material",
    name: "素材资源",
    icon: <FontColorsOutlined />,
    children: [
      {
        path: "/resources/icon",
        name: "Icon图标"
      },
      {
        path: "/resources/chart",
        name: "动态图表"
      },
      {
        path: "/resources/color",
        name: "渐变配色"
      },
      // {
      //   path: "/resources/background",
      //   name: "背景"
      // },
    ]
  },
  {
    path: "/resources/",
    name: "程序员",
    icon: <DeploymentUnitOutlined />,
    children: [
      {
        path: "/resources/community",
        name: "技术社区",
        icon: <UserOutlined />,
      },
      {
        path: "/resources/static_website",
        name: "静态站点",
        icon: <UserOutlined />,
      }, {
        path: "/resources/code",
        name: "在线编码",
        icon: <UserOutlined />,
      }, {
        path: "/resources/hosting",
        name: "代码托管",
        icon: <UserOutlined />,
      }, {
        path: "/resources/cloud",
        name: "云服务",
        icon: <UserOutlined />,
      },
    ]
  },
  {
    path: "/resources/other",
    name: "其他资源",
    icon: <GithubOutlined />,
  },
  {
    path: "https://kuizuo.cn",
    name: "个人博客",
    icon: <UserOutlined />,
  },
] as MenuDataItem[];
