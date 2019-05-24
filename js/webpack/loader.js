//loader简单实现
module.exports = function (source) {
    //source 为 compiler 传递给 Loader 的一个文件的原内容
    return sourse;
}

//获得loader的options
const loaderUtils = require('loader-utils');
module.exports = function (source) {
    //／获取用户为当前 Loader 传入的 options
    const options = loaderUtils.getOptions(this);
    return source;
}

//带有压缩功能
var Minimize = require('minimize');
module.exports = function (source) {
    var minimize = new Minimize();
    return minimize.parse(source);
}

//写成异步不阻碍其他编译进度
var Minimize = require('minimize');
const loaderUtils = require('loader-utils');
module.exports = function (source) {
    var callback = this.async();
    if(this.cacheable){
        this.cacheable();
    }
     //这里拿到 webpack.config.js 的 loader 配置
    var opts = loaderUtils.getOptions(this) || {};
    //压缩
    var minimize = new Minimize(opts);
    minimize.parse(source,callback);
}



function replace(source) {
    return source.replace(/(\/\/ *@require) +(('|").+('|")).*/, 'require($2);');
}
module.exports = function (content) {
    return replace(content);
}
