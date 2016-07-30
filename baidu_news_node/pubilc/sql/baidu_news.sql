-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-07-02 03:45:57
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news`
--

-- --------------------------------------------------------

--
-- 表的结构 `baidu_news`
--

CREATE TABLE `baidu_news` (
  `news_id` int(11) NOT NULL,
  `news_type` varchar(11) NOT NULL,
  `news_title` varchar(200) NOT NULL,
  `src` varchar(400) NOT NULL,
  `src2` varchar(400) NOT NULL,
  `src3` varchar(400) NOT NULL,
  `detail` varchar(999) NOT NULL,
  `address` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `baidu_news`
--

INSERT INTO `baidu_news` (`news_id`, `news_type`, `news_title`, `src`, `src2`, `src3`, `detail`, `address`) VALUES
(1, '推荐', '记者卧底毒窝拍下这组照片', 'http://timg01.baidu-img.cn/timg?tc&size=b510_319&sec=0&quality=75&cut_x=63&cut_y=0&cut_h=0&cut_w=510&di=9a3490edf9c556b408c6c04e57b46cf0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fnews%2Fcrop%253D0%252C40%252C638%252C319%2Fsign%3Dff37922252afa40f2889949d96542f7b%2F0823dd54564e92585dcea3fe9482d158ccbf4e23.jpg', '', '', '', 1),
(2, '推荐', '湖南载55人大巴起火 35人遇难', 'http://timg01.baidu-img.cn/timg?tc&size=b510_319&sec=0&quality=75&cut_x=64&cut_y=0&cut_h=0&cut_w=510&di=f21cb99324089b74a0360b31d90e6720&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fnews%2Fcrop%253D0%252C187%252C639%252C319%2Fsign%3D1ea62126be003af359f58620081aea6d%2F0b7b02087bf40ad14aac06cc5f2c11dfa9ecce51.jpg', '', '', '', 1),
(3, '推荐', '大妈公园“躺大石”称可治病', 'http://timg01.baidu-img.cn/timg?tc&size=b478_299&sec=0&quality=75&cut_x=59&cut_y=0&cut_h=0&cut_w=478&di=fd3cf022271110931156d4bef640646a&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fnews%2Fcrop%253D0%252C25%252C598%252C299%2Fsign%3D53ecb6cfc61b9d169e88c021ceee98bd%2F472309f79052982257241dd3dfca7bcb0a46d48e.jpg', '', '', '', 1),
(4, '推荐', '记者卧底毒窝拍下这组照片', 'http://timg01.baidu-img.cn/timg?tc&size=b510_319&sec=0&quality=75&cut_x=63&cut_y=0&cut_h=0&cut_w=510&di=9a3490edf9c556b408c6c04e57b46cf0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fnews%2Fcrop%253D0%252C40%252C638%252C319%2Fsign%3Dff37922252afa40f2889949d96542f7b%2F0823dd54564e92585dcea3fe9482d158ccbf4e23.jpg', '', '', '', 1),
(5, '推荐', '美国队长恋情曝光', '', '', '', '', 2),
(6, '推荐', '小区挂横幅贺高考状元', '', '', '', '', 2),
(7, '推荐', '翻墙盗取505枚硬币', '', '', '', '', 2),
(8, '推荐', '高考状元毕业回西安', '', '', '', '', 2),
(9, '推荐', '湖南大巴起火', '', '', '', '', 2),
(10, '推荐', '甘肃工人挖出太岁', '', '', '', '', 2),
(11, '推荐', '赵薇澄清离婚传言', '', '', '', '', 2),
(12, '推荐', '中俄联合声明：协作推进信息网络空间发展', 'http://g.hiphotos.baidu.com/news/q%3D100/sign=bd861f740123dd542773a368e108b3df/a5c27d1ed21b0ef46d40fb4ed5c451da81cb3e71.jpg', '', '', '', 3),
(13, '推荐', '男子224万买商铺门宽仅70厘米 开发商：没问题', 'http://t11.baidu.com/it/u=http://n1.itc.cn/img7/adapt/wb/bindTVPic/2016/06/27/146699280652177180_720_1000.JPEG&fm=36', '', '', '', 3),
(14, '推荐', '一夜述评|这是44年来防守最好的德国，阿扎尔竟是抢断王', 'http://t10.baidu.com/it/u=http://image.thepaper.cn/image/4/999/203.jpg&fm=36', '', '', '', 3),
(15, '推荐', '朱军告别“星光大道” 小尼不舍', 'http://t10.baidu.com/it/u=http://www.dowei.com/d/file/huabian/baoliao/2016-06-27/1466989111370763.jpg&fm=36', 'http://t11.baidu.com/it/u=http://www.dowei.com/d/file/huabian/baoliao/2016-06-27/1466989123511057.jpg&fm=36', 'http://t12.baidu.com/it/u=http://www.dowei.com/d/file/huabian/baoliao/2016-06-27/1466989166599989.jpg&fm=36', '', 5),
(16, '推荐', '《三人行》首周战绩突围 杜琪峯藏彩蛋观众约二刷', 'http://t10.baidu.com/it/u=http://y1.ifengimg.com/cmpp/2016/06/27/09/42941b97-d4ae-4e25-a21d-10a481ddeddb_size433_w450_h629.jpg&fm=36', '', '', '', 3),
(17, '推荐', '《赏金猎人》曝“必杀器”海报 众主创撩情魅惑', 'http://t11.baidu.com/it/u=http://www.hinews.cn/pic/003/009/363/00300936395_6e0fe4cc.jpg&fm=36', 'http://t12.baidu.com/it/u=http://www.hinews.cn/pic/003/009/363/00300936396_abc5e343.jpg&fm=36', 'http://t12.baidu.com/it/u=http://www.hinews.cn/pic/003/009/363/00300936397_1574e377.jpg&fm=36', '', 5),
(18, '百家', '证监会“大棒”为实，范冰冰“暴富”成空', 'http://e.hiphotos.baidu.com/news/crop%3D0%2C1%2C640%2C384%3Bw%3D638/sign=0afa9037f5faaf5190acdbffb164b8df/ac6eddc451da81cbfd3abbdc5a66d016082431c6.jpg', 'http://e.hiphotos.baidu.com/news/w%3D638/sign=59e5cb7d183853438ccf8422ab12b01f/b90e7bec54e736d143e1b41993504fc2d5626934.jpg', 'http://d.hiphotos.baidu.com/news/w%3D638/sign=a1754a31b112c8fcb4f3f5cec40292b4/9f510fb30f2442a70acdc5b4d943ad4bd01302db.jpg', '', 5),
(19, '百家', '华生的两难及“独懂”制度对上市公司决策的扭曲', 'http://g.hiphotos.baidu.com/news/crop%3D0%2C2%2C807%2C484%3Bw%3D638/sign=0dfd1635dc0735fa85bf14f9a3612381/63d0f703918fa0ecae1fd0232e9759ee3c6ddbc0.jpg', '', '', '', 3),
(20, '百家', '华为的焦虑症', 'http://d.hiphotos.baidu.com/news/w%3D638/sign=c24452cf7e094b36db9218ee9bcd7c00/f2deb48f8c5494ee03f6a30925f5e0fe98257ece.jpg', 'http://f.hiphotos.baidu.com/news/w%3D638/sign=4ac14f428d35e5dd902ca6dc4ec6a7f5/9358d109b3de9c82d45b569f6481800a19d843e7.jpg', 'http://c.hiphotos.baidu.com/news/w%3D638/sign=fa67afbb0b3b5bb5bed723fd0ed3d523/30adcbef76094b367efcb5fdabcc7cd98d109db0.jpg', '', 5),
(21, '百家', '周琦NBA之路上的买断迷局和道德陷阱', 'http://a.hiphotos.baidu.com/news/crop%3D0%2C8%2C469%2C281%3Bw%3D638/sign=05f7acfdef1190ef15b4c89ff32bb12e/d788d43f8794a4c2fddc9b3b06f41bd5ad6e3926.jpg', 'http://h.hiphotos.baidu.com/news/w%3D638/sign=c47ad5a2d958ccbf1bbcb63921d9bcd4/cc11728b4710b912bf588aeecbfdfc0392452200.jpg', 'http://h.hiphotos.baidu.com/news/w%3D638/sign=c47ad5a2d958ccbf1bbcb63921d9bcd4/cc11728b4710b912bf588aeecbfdfc0392452200.jpg', '', 5),
(22, '百家', '平安成汽车之家最大股东 李想喊话想避免秦致被清洗', '', '', '', '在秦致公开与澳大利亚电讯、中国平安矛盾后，随着中国平安入主成为汽车之家大股东，秦致可能会面临着...', 4),
(23, '百家', 'iPhone 7 真机谍照现身网络，传闻再度被证实', 'http://e.hiphotos.baidu.com/news/crop%3D2%2C2%2C795%2C477%3Bw%3D638/sign=2ddc873bb851f819e56a590ae78666df/500fd9f9d72a605931e3e00a2034349b033bba2a.jpg', 'http://b.hiphotos.baidu.com/news/w%3D638/sign=52d2dfe4bf4543a9f51bf9cf26168a7b/1e30e924b899a901adc35a2615950a7b0208f528.jpg', 'http://b.hiphotos.baidu.com/news/w%3D638/sign=67b83dd79852982205333ac0efcb7b3b/d439b6003af33a87c8cb010ace5c10385343b57f.jpg', '', 5),
(24, '娱乐', '"余罪"见面会 张一山成万千少女的梦', 'http://timg01.baidu-img.cn/timg?tc&size=b343_193&sec=0&quality=100&cut_x=21&cut_y=0&cut_h=0&cut_w=343&di=6df2b05731930f0338bfca3694ffcec3&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fnews%2Fcrop%253D7%252C121%252C387%252C193%2Fsign%3Df2e02074bb19ebc4d4372cd9bf11e3cd%2Fa686c9177f3e670942ec5aee33c79f3df8dc5536.jpg', '', '', '', 1),
(25, '娱乐', '女神哭了！柳岩素装动情落泪', 'http://timg01.baidu-img.cn/timg?tc&size=b348_196&sec=0&quality=100&cut_x=22&cut_y=0&cut_h=0&cut_w=348&di=15c32f2dd8c3f49ea71e317ee2dbb6d8&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fnews%2Fcrop%253D5%252C64%252C393%252C196%2Fsign%3D628d109dd958ccbf0ff3ef7a24ed9008%2F5243fbf2b2119313612d469f6d380cd791238db7.jpg', '', '', '', 1),
(26, '娱乐', '"余罪"见面会 张一山成万千少女的梦', 'http://timg01.baidu-img.cn/timg?tc&size=b348_196&sec=0&quality=100&cut_x=22&cut_y=0&cut_h=0&cut_w=348&di=15c32f2dd8c3f49ea71e317ee2dbb6d8&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fnews%2Fcrop%253D5%252C64%252C393%252C196%2Fsign%3D628d109dd958ccbf0ff3ef7a24ed9008%2F5243fbf2b2119313612d469f6d380cd791238db7.jpg', '', '', '', 1),
(27, '娱乐', '女神哭了！柳岩素装动情落泪', 'http://timg01.baidu-img.cn/timg?tc&size=b348_196&sec=0&quality=100&cut_x=22&cut_y=0&cut_h=0&cut_w=348&di=15c32f2dd8c3f49ea71e317ee2dbb6d8&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fnews%2Fcrop%253D5%252C64%252C393%252C196%2Fsign%3D628d109dd958ccbf0ff3ef7a24ed9008%2F5243fbf2b2119313612d469f6d380cd791238db7.jpg', '', '', '', 1),
(28, '娱乐', '关晓彤被扒家底', '', '', '', '', 2),
(29, '娱乐', '杨幂竹竿腿抢镜', '', '', '', '', 2),
(30, '娱乐', '魏晨相恋女友曝光', '', '', '', '', 2),
(31, '娱乐', 'EXO粉丝团遭攻击', '', '', '', '', 2),
(32, '娱乐', '金贤重上诉前女友', '', '', '', '', 2),
(33, '娱乐', '孙俪妹妹疑曝光', '', '', '', '', 2),
(34, '娱乐', '王菲窦靖童同台', '', '', '', '', 2),
(35, '娱乐', '新一轮巡演即将举行 李宇春分享突破心得', 'http://t10.baidu.com/it/u=http://i0.sinaimg.cn/dy/slidenews/35_img/2016_25/21247_5129264_774660.jpg&fm=36', '', '', '', 3),
(36, '娱乐', '《变形金刚5》片场幕后照曝光 新款汽车人登场', 'http://t12.baidu.com/it/u=http://img1.dzwww.com:8080/tupian/20160627/10/10905767665045001994.jpg&fm=36', 'http://t12.baidu.com/it/u=http://img1.dzwww.com:8080/tupian/20160627/68/4209823426819038676.jpg&fm=36', 'http://t12.baidu.com/it/u=http://img1.dzwww.com:8080/tupian/20160627/76/11564516076921717592.jpg&fm=36', '', 5),
(37, '娱乐', '《寒战2》开战发哥入伙 把梁家辉郭富城拉下来', 'http://t11.baidu.com/it/u=http://mobile.pic.people.com.cn/thumbs/320/477/data/cms/NMediaFile/2016/0627/WIRELESS201606270753000335867229184.jpg&fm=36', 'http://t11.baidu.com/it/u=http://mobile.pic.people.com.cn/thumbs/320/469/data/cms/NMediaFile/2016/0627/WIRELESS201606270753000331975972864.jpg&fm=36', 'http://t10.baidu.com/it/u=http://mobile.pic.people.com.cn/thumbs/320/494/data/cms/NMediaFile/2016/0627/WIRELESS201606270753000335497209856.jpg&fm=36', '', 5),
(38, '娱乐', '李克勤开唱不看时间：时间是用来煮雨的', 'http://t11.baidu.com/it/u=http://n.sinaimg.cn/ent/transform/20160627/hsbo-fxtniax8138766.jpg&fm=36', '', '', '', 3),
(39, '娱乐', '《火星情报局》收官 火星思维的网综到底哪里好', 'http://t11.baidu.com/it/u=http://images.rednet.cn/articleimage/2016/06/27/171923876.jpg&fm=36', '', '', '', 3),
(40, '互联网', '麦肯锡：77%的受访者尝试O2O服务后增加了整体旅游支出', 'http://t12.baidu.com/it/u=http://www.199it.com/wp-content/uploads/2016/06/1467026430-3547-0627.jpg&fm=36', '', '', '', 3),
(41, '互联网', '分答获王思聪等2500万美元投资', '', '', '', '会上宣布了在行&分答的A轮融资情况，投资方包括元璟资本、红杉资本、王思聪和罗辑思维，估值超1亿美元', 4),
(42, '互联网', '三大女性垂直电商完成合并 美丽联合集团正式亮相 ', '', '', '', '美丽联合集团成立之后，将整合现有资源，包括电商、社区、红人、内容等以服务于不同的女性用户。', 4),
(43, '互联网', '海稀矿商品交易中心签订“互联网+金融”战略合作协议', '', '', '', '以“创新发展，合作共赢”为主题的内蒙古市海稀矿资源交易所2016会员大会在内蒙古赤峰市隆重举行。', 4),
(44, '互联网', '淘品牌裂帛冲刺IPO：家族色彩浓厚 营收连续2年下降', 'http://c.hiphotos.baidu.com/news/crop%3D0%2C1%2C649%2C389%3Bw%3D638/sign=e18704a3d958ccbf0ff3ef7a24e8900f/83025aafa40f4bfba9b433450b4f78f0f73618be.jpg', 'http://e.hiphotos.baidu.com/news/w%3D638/sign=c0c21065e3f81a4c2632efcaef2b6029/64380cd7912397dd6db53a155182b2b7d1a287d7.jpg', 'http://a.hiphotos.baidu.com/news/w%3D638/sign=2221b5d4e8fe9925cb0c6a530ca85ee4/960a304e251f95cac9c03fa7c1177f3e670952ed.jpg', '', 5),
(45, '互联网', '麦肯锡：77%的受访者尝试O2O服务后增加了整体旅游支出', 'http://t12.baidu.com/it/u=http://www.199it.com/wp-content/uploads/2016/06/1467026430-3547-0627.jpg&fm=36', '', '', '', 3),
(46, '互联网', '投资大鳄邂逅电商女王 盈信资本壕掷100亿？ ', 'http://t12.baidu.com/it/u=http://www.techsir.com/d/file/p/201606/8e3909e0efa26e3e8362402b1655f457.jpg&fm=36', 'http://t12.baidu.com/it/u=http://www.techsir.com/d/file/p/201606/9413661d58a435bfb551b7892eb5ff70.jpg&fm=36', 'http://t11.baidu.com/it/u=http://www.techsir.com/d/file/p/201606/130a8892df1a89166d20348009ef7f6e.jpg&fm=36', '', 5),
(47, '推荐', '终于下雨了 可是为什么又很热了', ' ', ' ', '', '           ', 2),
(48, '下雨', ' 哈哈 没下了吧', ' ', ' ', '', '   ', 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `baidu_news`
--
ALTER TABLE `baidu_news`
  ADD PRIMARY KEY (`news_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
