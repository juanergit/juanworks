var restify = require('restify');
var server = restify.createServer();
server.get(/\/(.+)\/.*/, restify.serveStatic({
 directory: './public'
})); //官网
/*server.get(/^\/((.*)(\.)(.+))*$/, restify.serveStatic({ directory: './public' }));*/
/*server.get(/\/docs\/public\/?.*!/, restify.serveStatic({
 directory: './public'
}));*/
server.listen(3900, function() {
 console.log('%s listening at %s', server.name, server.url);
 });


module.exports = server;