## 说明

语法方面：

1. 会使用到 scss 的一些其他语法，优化组件;
2. 会使用到 ts 的一些语法，提高组件的健壮性，可维护性等;
   TODO: 1.scss 语法 2.ts 语法

---

## 参考使用文档地址

1. 文档生成工具: [storybook](https://storybook.js.org/)
2. 单元测试工具: [Jest](https://www.jestjs.cn/docs/getting-started)
   1. create react app 内置
3. [reactTest](https://github.com/testing-library/react-testing-library)
   1. create react app 内置
4. [模块化介绍](https://juejin.cn/post/6844903576309858318)
5. [icon库](https://github.com/FortAwesome/react-fontawesome)
   1. [使用文档](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)
6. [transition-group](https://github.com/reactjs/react-transition-group)

---

Test: 1.组件，方便测试 2.函数式组件 3.单项数据流
指定的文件会被识别为 test 文件： 1.**test**下的.js
2..test.js
3..spec.js

## 模块

1.amd
2.cmd
3.commonjs
4.umd（兼容 amd+commonjs）
5.module

## npm link

1.  在当前包
    1. `npm link`
2.  在需要使用的项目
    1. `js npm link 包名`
3.  如果不使用的话
    1. `npm unlink npm unlink 包名`

## npm 发版

## 打包

1.使用 tsc 打包成 es6 module 2.使用 less 将 css 单独打包出来
3.TODO: 分包方案

## 发包

1.npm 源切到 npm 2.先查下有没有别人先注册的包名

## 组件库需求分析

1.代码结构 2.样式解决方案 3.组件需求分析和编码 4.测试用例编写 5.代码打包输出和发布 6.CI/CD，文档生成


## storybook 安装
   1.npx sb init


## 切换源
   npm config set registry https://registry.npm.taobao.org
   npm config set registry https://registry.npmjs.org/