## 说明

   语法方面：

1. 会使用到scss的一些其他语法，优化组件;
2. 会使用到ts的一些语法，提高组件的健壮性，可维护性等;
TODO: 1.scss语法2.ts语法

----------

## 参考使用文档地址

1. 文档生成工具: [storybook](https://storybook.js.org/)
2. 单元测试工具: [Jest](https://www.jestjs.cn/docs/getting-started)
   1. create react app 内置
3. [reactTest](https://github.com/testing-library/react-testing-library)
   1. create react app 内置
4. [模块化介绍](https://juejin.cn/post/6844903576309858318)

--------------

Test:
   1.组件，方便测试
   2.函数式组件
   3.单项数据流
   指定的文件会被识别为test文件：
      1.__test__下的.js
      2..test.js
      3..spec.js

## 模块

   1.amd
   2.cmd
   3.commonjs
   4.umd（兼容amd+commonjs）
   5.module

## npm link

   1. 在当前包
      1. ```npm link```
   2. 在需要使用的项目
      1. ```js  npm link 包名```
   3. 如果不使用的话
      1. ```npm unlink  npm unlink 包名```
