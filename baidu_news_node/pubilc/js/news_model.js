module.exports=function(db1){
    db1.define("baidu_news", {
        news_id: {type: 'serial', key: true},
        news_type: String,
        news_title: String,
        src: String,
        src2: String,
        src3: String,
        detail: String,
        address: Number // FLOAT
    })
}
