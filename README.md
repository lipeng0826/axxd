# 组件库搭建

## 1.使用 create react app 创建项目

1.代码结构
​ 基本代码结构

## 2.样式解决方案

    1.less/sass(公共参数)
        增加sass依赖
    ​ 1.颜色体系
    ​ 2.字体
    ​ 3.表单
    ​ 4.按钮
    ​ 5.边框和阴影

## 3.引入样式

​ 1.[normalize](https://github.com/necolas/normalize.css)

​ 2.约定的规范

## 4.Button 按钮开发(需求分析)

    1.新增component目录
    2.增加Button文件
        2.1增加Button文件
        2.2增加Button的Test文件
    3.完成Button组件
        1.写声明
        2.写props声明

## 5.单元测试

    1.jest
    2.

## 6.增加 storybook

    1.npx sb init
        基于已有框架执行上面的命令，不支持在空项目上执行

## 7.模块

1. [npm link](https://docs.npmjs.com/cli/v6/commands/npm-link)
2. npm unlink
3. 打包 (tsc 打包 js, node-sass 转化 scss)
4. 按需加载

## 8.发包

    1.npm login
    2.npm publish

## 9.持续集成

    1.提交之前自动跑test,自动lint代码质量
    2.jenkins配置打包
    3.类似蜂巢手动部署
