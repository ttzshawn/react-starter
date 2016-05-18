# React-Starter
React.js starter. Built with Node, SASS, Webpack and stuff.

# Tutorial Page (教程地址)
## http://

# 第一天 
## 1.1 开始
正常来说，按照视频一步一步是可以做下来这个项目并且能够基本熟悉React的，但是开源的大部分东西都更新的非常快，你现在装的很多东西可能已经不是最新的了，会和视频不一样甚至可能做不出来。所以这里写的是我自己按照这个视频，再加上一些自己的理解和最新的开源资源来记录一路走过的步骤。

React在imooc上的教程有三部分，你可以先看看视频大概的`目录`，接下来我做到什么地方就会提前说一下需要看视频的哪些部分:

第一 [React入门](http://www.imooc.com/learn/504)

第二 [React实战--打造画廊应用（上）](http://www.imooc.com/learn/507)

第三 [React实践图片画廊应用（下）](http://www.imooc.com/learn/652)


## 1.2 更新
可能我更新不一定快，不过我会尽量有空就去学，然后去更新。
关注更新你需要注册一个Github账号，然后右上角`Watch`我这个项目。

## 1.3 大概了解即将要做什么
你可以参考我，我是先用`1.5倍播放速度`先看了视频的第一部分和第二部分的前面一点，也就二三十分钟左右，大部分不懂也没关系，只是为了有一个大概的认识，不需要动手做什么。

## 1.4 开始搭建环境
你看完前面的几节视频，应该有了个大概。现在开始你要重新开始这个视频，并动手做下面的步骤。

关联视频 [React实战--打造画廊应用（上）2-1 项目生成](http://www.imooc.com/video/9882)

### 1.4.1 选好你的编辑器
推荐[Visual Studio Code](http://code.visualstudio.com), Sublime或者Atom也可以

### 1.4.2 安装Node
建议你先了解一下Node是什么，简单来说，Node是一个类后台语言，但是我们暂时先不用他的后台特性，只是使用Node配套的'NPM包管理工具'，类似一个应用市场或者安装器一样的工具

- 下载地址: https://nodejs.org/
- 选择的版本： 最新版 V6.1.0 Current
- 安装：下载完之后安装，中间没有什么特殊步骤
- 测试安装好了没：打开CMD命令行
    
    ``
    node -v
    ``

    ``
    npm -v
    ``

    分别返回node和npm的版本

### 1.4.2 安装Yeoman和React-webpack包
``
npm install -g yo
``

``
npm install -g generator-react-webpack
``

-g是参数的意思，g代表global，全局，如果不带-g的包，会安装到当前CMD所在的文件夹，这样全局的yo命令就用不了了

这一步你可以在视频上看到，也需要按视频去看一下Yeoman的官网，了解一下。

你已经装好的Node了，所以你才可以使用NPM这个包管理器安装


# 第二天

### 1.4.3 通过Yeoman自动生成项目
关于Git和Github项目相关的内容，暂时略过，不过，强烈建议，了解他们

在自己建立的项目文件夹下：

``
yo react-webpack
``
    - React-router -- no
    - Architectures -- no
    - Styles language --SCSS
    - Suffix -- js
    
    以上是生成项目时候的选择，因为版本更新已经和视频不一样了。
    生成的项目里面，已经没有了.jshintrc, 也没有使用Grunt了。

## 1.5 项目初始内容，了解基本内容
在项目路径下安装所需要的包，它会自动安装到`node_modules`文件夹内

很有可能是你没有安装所需要的NPM包，参看`package.json`文件里的`devDependencies`等都包含哪些包

``
npm install
``

### 1.5.1 运行项目
视频中是使用grunt serve来运行项目的，但是新的react-webpack集成包不用grunt，使用NPM的scripts, 参看`package.json`文件里面的`scripts`都包含哪些命令

运行项目的命令：

``
npm run serve
``

可以看到自动打开网页，显示`App ready.`

### 1.5.2 Hello World!
修改Main.js(视频中是修改GalleryByReactApp.js, 已经更新了)

虽然刚开始，不过已经发现了更新很大，视频中的版本使用`React.createClass()`创建React模块，在自己项目`Main.js`中使用的是继承`extends React.Component`, 搜索了一下两者的区别，当然你也是需要了解一下的，后者全文是使用ES6规范写的代码等。
参考React.createClass versus extends React.Component[https://toddmotto.com/react-create-class-versus-component/]，或百度

视频中运行了`grunt build`，但我们用以下替代：

    ``
    npm run clean
    npm run copy
    npm run dist
    ``










