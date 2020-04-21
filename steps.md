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
git remote add origin git@github.com:lynnhy/vue-web-template.git
git remote --verbose
origin  git@github.com:lynnhy/vue-web-template.git (fetch)
origin  git@github.com:lynnhy/vue-web-template.git (push)

 ERROR  Failed to compile with 1 errors                       12:33:40
This dependency was not found:

* element-ui in ./src/plugins/element.js

To install it, you can run: npm install --save element-ui
```

* 
* git push -u origin master
