hexo.extend.generator.register(function(locals) {
  return {
    path: "CNAME",
    data: this.config.url.replace(/^(http|https):\/\//, "")
  };
});