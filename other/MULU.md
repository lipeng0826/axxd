-.storybook
    storybook编译配置文件
-lib
    打包出来的库
-src
    -components
        -Button
            -*.scss 样式
            *.test.tsx 单元测试
            *.stories.tsx 文档页面
            index.tsx 组件源码
    -styles
-tsconfig.build.json
    tsconfig打包配置

1.使用storybook打包生成文档
2.使用 tsc 和 node-sass打包生成组件的代码和样式
3.调试组件使用npm link
4.发布到npm 使用 npm publish
5.使用持续集成工具集成项目