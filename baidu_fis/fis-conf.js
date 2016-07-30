// 设置图片合并的最小间隔
fis.config.set('settings.spriter.csssprites.margin', 20);
//取消下面的注释开启simple插件，注意需要先进行插件安装 npm install -g fis-postpackager-simple
 fis.config.set('modules.postpackager', 'simple');

 //取消下面的注释设置打包规则
fis.config.set('pack', {
    '/static/lib.js': [
        'baidu_index/js/jquery.min.js',
        'baidu_index/js/bootstrap.min.js',
        'baidu_index/js/a_click.js',
        'baidu_index/js/baidu_index.js',
        'baidu_index/js/change_to_change.js',
        'baidu_index/js/channel_setting.js',
        'baidu_index/js/head_scroll.js',
        'baidu_index/js/load_more.js',
        'baidu_index/js/skin_change1.js',
        'baidu_index/js/skin_change2.js',
        'baidu_index/js/to_top.js',
   ],
   //  取消下面的注释设置CSS打包规则，CSS打包的同时会进行图片合并
    '/static/aio.css': '**.css'
 });

//取消下面的注释可以开启simple对零散资源的自动合并
 fis.config.set('settings.postpackager.simple.autoCombine', true);