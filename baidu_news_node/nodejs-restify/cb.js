
var server = require('./config');
var db = require('./app.js');
server.get('/hello/:id',db.cb1);
server.get('/hello/:news_id/:news_type/:news_title/:src/:src2/:src3/:detail/:address', db.cb5);
server.get('/getnews/:news_id',db.cb5);
server.get('/add/:news_id_c/:news_type_c/:news_title_c/:src_c/:src2_c/:src3_c/:detail_c/:address_c',db.cb4);
server.get('/delete/:news_id_d', db.cb3);
server.get('/main/:id',db.cb2);
