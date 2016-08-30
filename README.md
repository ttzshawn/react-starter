# React-Starter
快速了解React以及Webpack, Node等相关技术工具

# 第一天 
## 1.1 开始
1. 安装Nodejs（以下软件如无说明，都是去官网，安装最新版）, 了解npm
    ``
    $ node -v
    $ npm -v
    `` 
2. 安装编辑器（Visual Studio Code或Sublime）
3. 创建项目目录，使用npm初始化
    ``
    $ npm init
    ``

正常来说，按照视频一步一步是可以做下来这个项目并且能够基本熟悉React的，但是开源的大部分东西都更新的非常快，你现在装的很多东西可能已经不是最新的了，会和视频不一样甚至可能做不出来。所以这里写的是我自己按照这个视频，再加上一些自己的理解和最新的开源资源来记录一路走过的步骤。

React在imooc上的教程有三部分，你可以先看看视频大概的`目录`，接下来我做到什么地方就会提前说一下需要看视频的哪些部分:

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

# 第三天
（今日无啥更新，看完了篇文章[JavaScript 原型系统的变迁，以及 ES6 class](https://segmentfault.com/a/1190000003798438)， 多了解了下JS的原型链和类，尤其是ES6标准的class和extends等，在大部分新代码中，应该是主要以ES6为标准了。另外看了视频中的Webpack部分，不好懂，不过这种应该直接用，逐步了解，用着用着就会熟悉然后理解的）

# 第四天
视频[3-1 舞台构建](http://www.imooc.com/video/9885)首先提到要装和配置`autoprefixer-loader`，视频中间部分又需要装`json-loader`

我觉得有点不好理解，这里问题出现在不理解Webpakc的loader，遂查询相关信息和资料: [Webpack中文指南-loader](http://zhaoda.net/webpack-handbook/loader.html)，此处解释的还可以，需要看完，当然此文档其他内容也顺便翻阅了一下。

现在马上清晰了很多

> * Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。
> * Loader 可以理解为是模块和资源的转换器，它本身是一个函数，接受源文件作为参数，返回转换的结果。这样，我们就可以通过 require 来加载任何类型的模块或文件，比如 CoffeeScript、 JSX、 LESS 或图片。

按照视频添加`data`、`imageDatas.json`、图片等

（发现了几个网站，去codeschool看了[powering-up-with-react - Level1教程](http://campus.codeschool.com/courses/powering-up-with-react/contents)，非常，非常清晰明了，有些单词不懂，0.75倍速+开翻译做完了，后面的要钱就没继续，不过感叹课程实在是很棒，你也去试试）










