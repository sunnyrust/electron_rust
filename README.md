# 使用手册

### 集成技术
- rust ffi(动态库)与node通讯
- electron集成bootstrap样式库

### 根据流程运行项目
> 1、 cd new-app/

> 2、 npm install

> 3、 npm start

### 打包命令
> npm run packager

### blibli时间
完成工具，可以快乐的用electron开发客户端了，如果你熟悉rust语言，可以作为业务逻辑处理，前端用electron做界面；如果你不熟悉rust，直接用electron与系统API通讯也是可以的。

### 项目图片
![描述](https://gitee.com/walkerr/electron_rust/raw/master/src/assets/demo.jpg)


### 特殊注意

sudo chown -R 1002:1002 "～/.npm"

npm和node升级的正确方式
一、先说一下 npm 的更新：

1、检查 npm 的当前版本，使用命令
复制代码
npm -v
复制代码

2、官网提供命令
复制代码
npm install npm@latest -g
复制代码
运行后会自动完成安装：


二、接着就是 node 的更新：

1、检查 node 的当前版本，使用命令
复制代码
node -v
复制代码

2、清除npm cache
复制代码
sudo npm cache clean -f
复制代码

如果出现这种情况，请参考blog.csdn.net/hengwen1991…
3、安装 n 模块
复制代码
sudo npm install -g n
复制代码
4、安装最新的稳定版本
复制代码
sudo n stable
复制代码
你也可以定制一个自己喜欢的版本：

sudo n v12.16.3

复制代码
5、查看 node 的版本，检查升级是否成功
复制代码
node -v
复制代码

如果这个方法不行的话, 就只能暴力解决了（从官网上下载最新的稳定版然后覆盖安装...）

覆盖之前检查一下已经安装 node 的路径：

where node
