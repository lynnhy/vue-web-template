# 前期准备

* 确认node npm使用的最新稳定版 npm install -g @vue/cli
* 配置npm国内镜像`npm config set registry=https://registry.npm.taobao.org`
* vs Code配置（plugin：ESLint Vetur TODO Highlight）

```console
npm uninstall -g @vue/cli
npm cache clean --force
npm install -g @vue/cli
```

# 配置骨架

* git init 或git clone
* cmd上vue create .（POWERSHELL不好用，不知道为什么）搭建项目的基础框架
* 引入UI框架（例如Element-ui）

```console
vue add element
? How do you want to import Element? Fully import
? Do you wish to overwrite Element's SCSS variables? Yes
? Choose the locale you want to load zh-CN
```

* git remote add origin

```console
git remote add origin https://github.com/lynnhy/vue-web-template.git
git remote --verbose
origin  git@github.com:lynnhy/vue-web-template.git (fetch)
origin  git@github.com:lynnhy/vue-web-template.git (push)

 ERROR  Failed to compile with 1 errors                       12:33:40
This dependency was not found:

* element-ui in ./src/plugins/element.js

To install it, you can run: npm install --save element-ui
```

* git push -u origin master
* 完善代码组织结构
  * 根据模块来建立试图文件，所有试图页面根据模块来保存在对应的文件夹里
  * 在views下创建layout文件夹，用来博爱村页面的这题布局
  * 创建utils文件夹，用户保存功能文件
  * 创建services文件夹，用于保存服务（接口）调用文件
  * 创建policies文件夹，用来保存安全策略相关的文件
* 优化路由
  * 创建router文件夹，存放所有路由文件，中大型路由根据模块分文件夹或者文件并保存，使用`require.context`进行自动加载处理
  * 添加全局路由守卫，用于页面加载状态展示和页面级的权限控制
  