const path = require("path");
function resolve (dir) {
  return path.join(__dirname,dir)
}

module.exports = {
  chainWebpack: (config)=>{
    config.resolve.alias
    .set("@",resolve("src"))
    .set('commom',resolve("src/commom"))
    .set('compontents',resolve("src/compontents"))
  }
}