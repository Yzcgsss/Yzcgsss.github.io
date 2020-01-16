const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.5,
    lrcType: 3,
    mutex: true,
    listFolded: false,

    audio: [
        {
            name: '斑马,斑马(单曲版)',
            artist: 'IU',
            lrc: './music/lrc/斑马,斑马(单曲版)-IU.lrc',
            cover: 'http://img3.kuwo.cn/star/starheads/300/49/70/4019182989.jpg',
            url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_7184498&response=res&type=convert_url&'
                  },
				  
		{
            name: '围城',
            artist: '程响',
            lrc: './music/lrc/围城-程响.lrc',
            cover: 'http://img1.kuwo.cn/star/albumcover/300/22/70/1892572730.jpg',
            url: 'https://sharefs.yun.kugou.com/202001160821/a111aa1863b1a4b8c5d1cd8f44cff45c/G121/M0B/05/05/GYcBAFx1FT2AZFhoADj7SLz4aQI356.mp3'
                  },
				  
		{
			name: 'Jam Jam',
			artist: 'IU',
			lrc: './music/lrc/Jam Jam-IU.lrc',
			cover: 'http://img2.kuwo.cn/star/albumcover/300/62/6/2265632096.jpg',
			url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_23683150&response=res&type=convert_url&'
					  
		          },
				  
		{
            name: '一天',
            artist: '黄宣',
            lrc: './music/lrc/一天-黄宣.lrc',
            cover: 'https://p3fx.kgimg.com/stdmusic/240/20191209/20191209175731287742.jpg',
            url: 'https://sharefs.yun.kugou.com/202001160826/5a294207b91d36802c21af79034a5fff/G185/M06/16/19/-Q0DAF3uHAeACIOzADy3gpxXqEE246.mp3'
                  },
				  
		{
            name: '我不能忘记你',
            artist: '林忆莲',
            lrc: './music/lrc/我不能忘记你-林忆莲.lrc',
            cover: 'http://img3.kuwo.cn/star/albumcover/300/66/33/3892601064.jpg',
            url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_23659607&response=res&type=convert_url&'
                  },
				  
		{
            name: '天黑黑',
            artist: '孙燕姿',
            lrc: './music/lrc/天黑黑-孙燕姿.lrc',
            cover: 'https://p3fx.kgimg.com/stdmusic/240/20160908/20160908230505993151.jpg',
            url: 'https://sharefs.yun.kugou.com/202001160907/b9903cdeafaa3f2e9d4921478cab6ea0/G119/M0B/0B/17/F4cBAFw8zvCAW1XsADmqtVwPkMk963.mp3'
                  },

		{
            name: '动物世界',
            artist: '薛之谦',
            lrc: './music/lrc/动物世界-薛之谦.lrc',
            cover: 'http://img2.kuwo.cn/star/albumcover/300/38/10/1208946221.jpg',
            url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_23498554&response=res&type=convert_url&'
                  },	

		{
            name: '男孩',
            artist: '梁博',
            lrc: './music/lrc/男孩-梁博.lrc',
            cover: 'https://p3fx.kgimg.com/stdmusic/240/20170516/20170516174505104261.jpg',
            url: 'https://sharefs.yun.kugou.com/202001160917/ae1b9e518b6e5a2f5ebd43d06e23a9c2/G093/M05/1E/07/_YYBAFjW6r-AWL3wAEwrjOaZzOc726.mp3'
                  },	

		{
            name: '光',
            artist: '陈粒',
            lrc: './music/lrc/光-陈粒.lrc',
            cover: 'https://p3fx.kgimg.com/stdmusic/240/20150717/20150717131952352224.jpg',
            url: 'https://sharefs.yun.kugou.com/202001160921/1fd45c2a7d832c860a12258b5720bd02/G009/M0A/05/0D/qYYBAFUMqtmAVa71ACJ94iUy7yk539.mp3'
                  },	

		{
            name: '我管你(真我版)',
            artist: '华晨宇',
            lrc: './music/lrc/我管你(真我版)-华晨宇.lrc',
            cover: 'http://img3.kuwo.cn/star/albumcover/300/15/8/1417397648.jpg',
            url: 'http://antiserver.kuwo.cn/anti.s?useless=/resource/&format=mp3&rid=MUSIC_20868396&response=res&type=convert_url&'
                  },			  
		
		{
            name: '以后别做朋友',
            artist: '周兴哲',
            lrc: './music/lrc/以后别做朋友-周兴哲.lrc',
            cover: 'https://p3fx.kgimg.com/stdmusic/240/20140924/20140924101122717624.jpg',
            url: 'https://sharefs.yun.kugou.com/202001160933/bf5d08797e5aad4c53cbb3d9a125237b/G008/M09/15/14/SA0DAFUMwDuAI36YAD-m0ELDCkc328.mp3'
                  },	
				  
		{
            name: 'Natural',
            artist: 'Imagine Dragons',
            lrc: './music/lrc/Natural-Imagine Dragons.lrc',
            cover: 'https://p3fx.kgimg.com/stdmusic/240/20180717/20180717140557914821.jpg',
            url: 'https://sharefs.yun.kugou.com/202001160938/4bdb9c1fd07e8e103ac11d67594a0802/G135/M02/13/05/Z5QEAFtNh4KAJZjdAC5D_B_D6g8501.mp3'
                  },

		{
            name: 'Believer',
            artist: 'Imagine Dragons',
            lrc: './music/lrc/Believer-Imagine Dragons.lrc',
            cover: 'https://p3fx.kgimg.com/stdmusic/240/20171016/20171016110253317135.jpg',
            url: 'https://sharefs.yun.kugou.com/202001160936/cd085a25c96d39d19a94fcb380931166/G121/M09/12/01/GYcBAFw0JCmAbsKyADWnrs9xPIU977.mp3'
                  },

		{
            name: '说谎',
            artist: '林宥嘉',
            lrc: './music/lrc/说谎-林宥嘉.lrc',
            cover: 'https://p3fx.kgimg.com/stdmusic/240/20150718/20150718080300634481.jpg',
            url: 'https://sharefs.yun.kugou.com/202001160945/471c41ed932c0c30cb30676c0db4616f/G005/M02/12/09/RQ0DAFS5kmeAR6XIAEEg1sn6TKQ840.mp3'
                  },

		{
            name: '最佳歌手',
            artist: '许嵩',
            lrc: './music/lrc/最佳歌手-许嵩.lrc',
            cover: 'https://p3fx.kgimg.com/stdmusic/240/20160520/20160520093757875480.jpg',
            url: 'https://sharefs.yun.kugou.com/202001160949/05c348d80165aa0e23e22fdfc2517be1/G064/M09/10/08/IJQEAFc-aueAZCXaAEFnB1LjkYU037.mp3'
                  }				  
        ]
});