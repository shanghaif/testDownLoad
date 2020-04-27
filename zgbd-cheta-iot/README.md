# 一、前端环境搭建

## 1、node

在 [nodejs官网](https://nodejs.org/zh-cn/)下载最新版稳定版的node.js安装，自带了npm工具

![](https://images.gitee.com/uploads/images/2019/0507/165606_dd919529_1639482.png)



安装后，在cmd中输入node -v  npm-v 出现版本号说明配置成功

![](https://qqadapt.qpic.cn/txdocpic/0/6303bb6a9321d1e429632f41bd4917c5/0)

## 2、cnpm

npm是node包管理器，因为npm安装插件是从国外服务器下载，受网络影响大，可能出现异常，全局设置cnpm命令，用cpnm代替npm。

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

大约2分钟


## 3、vue-cli



vue-cli是vue脚手架工具，方便打包，部署，测试等。

```shell
cnpm install -g vue-cli
```

大于安装2分钟，查看是否安装成功

```shell
vue
```


![](https://qqadapt.qpic.cn/txdocpic/0/fabee6ed23c64571ca50a4d85c2b755e/0)

## 4、yarn

yarn和npm也是包管理器，但yarn比npm更好用。

```shell
cnpm install -g yarn
```



## 5、项目依赖


从码云上导出项目

注意：下面两条命令进入*项目根目录* 运行

**下载依赖**


第一次检出项目后，需要下载依赖

```
yarn install
```

该命令会下载所需要的依赖，第一次会很慢，预计6分钟



## 6、项目启动

在项目根目录输入命令：

```shell
yarn run dev
```

启动成功

