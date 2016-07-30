//var restify = require('restify');
//var server = require('./config');
//var server = restify.createServer();
//var orm = require("orm");
//var db1= require('../news_model');
var News = require('./model');
var db ={};

db.cb1 = function respond(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
 /*   orm.connect("mysql://root:@127.0.0.1/news", function (err, db) {
        if (err) throw err;

     //   var News = db1(db);
            News = db.define("baidu_news", {
               news_id: {type: 'serial', key: true},
               news_type: String,
               news_title: String,
               src: String,
               src2: String,
               src3: String,
               detail: String,
               address: Number // FLOAT
           });*/
        // query the person table by surname
        News.fisrt.find({
            news_type:req.params.id
        }, function (err, baidu_news) { //?????????�� ????*
            //  console.log(baidu_news);
            //  res.send('hello ' + req.params.name);
            res.charSet('utf-8');
            res.json(baidu_news);
        });

   /* });*/
}

db.cb2 = function respond2(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    //通过news_id字段查找新闻，并将新闻内容呈现在edit.html 的 form表单里
    News.fisrt.find({},function (err,baidu_news) {
            if (err) throw err;
            // res.send('getnews' + req.params.news_id);
            res.json(baidu_news);
        });
}
db.cb3 = function respond3(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
        //对应新闻后台管理系统的删除功能
    News.fisrt.find({ news_id:req.params.news_id_d}).remove(function (err) {
            if (err) throw err;
        });
}
db.cb4 = function respond4(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");

        //对应新闻后台管理系统的添加功能
        News.fisrt.create({
            news_id: req.params.news_id_c,
            news_type:req.params.news_type_c,
            news_title:req.params.news_title_c,
            src:req.params.src_c,
            src2:req.params.src2_c,
            src3:req.params.src3_c,
            detail:req.params.detail_c,
            address:req.params.address_c
        }, function(err) {
            if (err) throw err;
        })
}
db.cb5 = function respond5(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
        //通过news_id字段查找新闻，并将新闻内容呈现在edit.html 的 form表单里
    News.fisrt.find({ news_id:req.params.news_id},function (err,baidu_news) {
            if (err) throw err;
            // res.send('getnews' + req.params.news_id);
            res.json(baidu_news);
        });
        //如果管理员对edit.html的form表单进行了修改，实现保存功能
    News.fisrt.find({news_id: req.params.news_id }).each(function (news) {
            news.news_id = req.params.news_id,
                news.news_type = req.params.news_type,
                news.news_title = req.params.news_title,
                news.src = req.params.src,
                news.src2 = req.params.src2,
                news.src3 = req.params.src3,
                news.detail = req.params.detail,
                news.address = req.params.address
        }).save(function (err) {
            if (err) throw err;
        });

}

module.exports = db;
/*server.get('/hello/:id', respond);
server.get('/hello/:news_id/:news_type/:news_title/:src/:src2/:src3/:detail/:address', respond5);
server.get('/getnews/:news_id', respond5);
server.get('/add/:news_id_c/:news_type_c/:news_title_c/:src_c/:src2_c/:src3_c/:detail_c/:address_c', respond4);
server.get('/delete/:news_id_d', respond3);
server.get('/main/:id', respond2);*/
//server.head('/hello/:name', respond);

/*server.listen(3900, function() {
    console.log('%s listening at %s', server.name, server.url);
});*/
