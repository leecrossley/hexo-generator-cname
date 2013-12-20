var util = hexo.util,
    file = util.file,
    extend = hexo.extend,
    route = hexo.route;

extend.generator.register(function(locals, render, callback){
    route.set("CNAME", hexo.config.url.replace("http://", ""));
    callback();
});