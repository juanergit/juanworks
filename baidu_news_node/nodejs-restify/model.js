//定义表结构Model
var orm = require("orm");
var  News ={};
orm.connect("mysql://root:@127.0.0.1/news", function (err, db) {
    if (err) throw err;

    //   var News = db1(db);
    News.fisrt = db.define("baidu_news", {
        news_id: {type: 'serial', key: true},
        news_type: String,
        news_title: String,
        src: String,
        src2: String,
        src3: String,
        detail: String,
        address: Number // FLOAT
    });
})
module.exports = News;