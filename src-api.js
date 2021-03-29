(function () {

  'use strict';

  // UI elements
  var setSrc1;
  var setSrc2;
  var setSrc3;
  var setSrc4;
  var setSrc5;
  var setSrc6;
  var setSrc7;
  var setSrc8;
  var setSrc9;
  var setSrc10;
  var setSrc11;
  var setSrc12;
  var src1 = {};
  var src2 = {};
  var src3 = {};
  var src4 = {};
  var src5 = {};
  var src6 = {};
  var src7 = {};
  var src8 = {};
  var src9 = {};
  var src10 = {};
  var src11 = {};
  var src12 = {};
  var isHls = false;
  var isDash = false;
  var isMp4 = false;
  if (document.getElementById('setSrcHls1')) {
    setSrc1 = document.getElementById('setSrcHls1');
    setSrc2 = document.getElementById('setSrcHls2');
    setSrc3 = document.getElementById('setSrcHls3');
    setSrc4 = document.getElementById('setSrcHls4');
    setSrc5 = document.getElementById('setSrcHls5');
    setSrc6 = document.getElementById('setSrcHls6');
    setSrc7 = document.getElementById('setSrcHls7');
    setSrc8 = document.getElementById('setSrcHls8');
    setSrc9 = document.getElementById('setSrcHls9');
    setSrc10 = document.getElementById('setSrcHls10');
    setSrc11 = document.getElementById('setSrcHls11');
    setSrc12 = document.getElementById('setSrcHls12');
    src1.hls = 'https://abp-i.akamaihd.net/hls/live/765530/abpananda/master.m3u8';
    src2.hls = 'https://news18bangla-lh.akamaihd.net/i/n18bangla_1@2289/index_4_av-p.m3u8';
    src3.hls = 'https://abp-i.akamaihd.net/hls/live/765529-b/abphindi/master.m3u8';
    src4.hls = 'https://m-c036-j2apps.s.llnwi.net/hls/0442.IndiaNews.in.m3u8';
    src5.hls = 'https://republic.pc.cdn.bitgravity.com/live/bharat_hls/master.m3u8';
    src6.hls = 'https://feeds.intoday.in/aajtak/api/aajtakhd/master.m3u8';
    src7.hls = 'https://vidcdn.vidgyor.com/news24-origin/liveabr/news24-origin/live1/playlist.m3u8';
    src8.hls = 'https://cnbctv18-lh.akamaihd.net/i/cnbctv18_1@174868/index_5_av-p.m3u8';
    src9.hls = 'https://ndtvindiaelemarchana.akamaized.net/hls/live/2003679/ndtvindia/masterp_480p@3.m3u8';
    src10.hls = 'https://d39iawgzv3h0yo.cloudfront.net/out/v1/1ef4344a3b4a41908915d58ac7bd5e23/index_14.m3u8';
    src11.hls = 'https://cdn3.wowza.com/1/T1F1bFkvQVNVbnBm/MVUxbXYx/hls/live/playlist.m3u8';
    src12.hls = 'https://zmcl-live.akamaized.net/zeenewsclean_mbr/index.m3u8?hdnts=st=1616602810~exp=1616605810~acl=/*~hmac=6cc6f28f8958231bbeb62a9448758abd6291aee1ec44a6881caa91d04deb0709';
    isHls = true;
  } else if (document.getElementById('setSrcDash1')) {
    setSrc1 = document.getElementById('setSrcDash1');
    setSrc2 = document.getElementById('setSrcDash2');
    setSrc3 = document.getElementById('setSrcDash3');
    src1.dash = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';
    src2.dash = 'https://storage.googleapis.com/shaka-demo-assets/sintel/dash.mpd';
    src3.dash = 'https://storage.googleapis.com/shaka-demo-assets/sintel/dash.mpd';
    isDash = true;
  } else if (document.getElementById('setSrcMp41')) {
    setSrc1 = document.getElementById('setSrcMp41');
    setSrc2 = document.getElementById('setSrcMp42');
    setSrc3 = document.getElementById('setSrcMp43');
    src1.mp4 = [
      'https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4',
      'https://www.rmp-streaming.com/media/big-buck-bunny-576p.mp4',
      'https://www.rmp-streaming.com/media/big-buck-bunny-720p.mp4'
    ];
    src2.mp4 = [
      'https://www.rmp-streaming.com/media/ed-360p.mp4',
      'https://www.rmp-streaming.com/media/ed-720p.mp4'
    ];
    src3.mp4 = [
      'https://www.rmp-streaming.com/media/ed-360p.mp4',
      'https://www.rmp-streaming.com/media/ed-720p.mp4'
    ];
    isMp4 = true;
  }

  var getSrc = document.getElementById('getSrc');
  var getSrcResult = document.getElementById('getSrcResult');
  getSrc.textContent = 'getSrc()';

  var srcChanged = document.getElementById('srcChanged');

  var debugLog = false;
  if (window.console && window.console.log) {
    debugLog = true;
  }
  var _log = function (data) {
    if (debugLog && data) {
      window.console.log(data);
    }
  };


  // player settings
  var src;
  if (isHls) {
    src = {
      hls: 'https://abp-i.akamaihd.net/hls/live/765530/abpananda/master.m3u8',
    };
  } else if (isDash) {
    src = {
      dash: 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd',
    };
  } else if (isMp4) {
    src = {
      mp4: [
        'https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4',
        'https://www.rmp-streaming.com/media/big-buck-bunny-576p.mp4',
        'https://www.rmp-streaming.com/media/big-buck-bunny-720p.mp4'
      ]
    };
  }
  var settings = {
    licenseKey: 'Kl8lbz16cz1rN2l2enM9Z2M9NnZvMnllaT9yb201ZGFzaXMzMGRiMEElXyo=',
    src: src,
    delayToFade: 3000,
    width: 1280,
    height: 800,
    // autoplay: true,
    //loop: true,
    scaleMode: 'stretch',
    posterScaleMode: 'stretch',
    automaticFullscreenOnLandscape: true,
    
    contentMetadata: {
      poster: ['https://i.ibb.co/MPDKMn9/hello.jpg']
    }
  };
  var elementID = 'rmpPlayer';
  var rmp = new RadiantMP(elementID);
  var rmpContainer = document.getElementById(elementID);

  var _getTime = function () {
    return Math.round(performance.now());
  };

  var wireUI = function () {
    _log('player ready - wire UI');
    rmpContainer.removeEventListener('ready', wireUI);

    // click interactions
    setSrc1.addEventListener('click', function () {
      if (rmp.getSrc() === src1) {
        _log('this src is already loaded - exit');
        return;
      }
      rmp.setSrc(src1);
    });
    setSrc2.addEventListener('click', function () {
      if (rmp.getSrc() === src2) {
        _log('this src is already loaded - exit');
        return;
      }
      rmp.setSrc(src2);
    });
    setSrc3.addEventListener('click', function () {
      if (rmp.getSrc() === src3) {
        _log('this src is already loaded - exit');
        return;
      }
      rmp.setSrc(src3);
    });
    setSrc4.addEventListener('click', function () {
      if (rmp.getSrc() === src4) {
        _log('this src is already loaded - exit');
        return;
      }
      rmp.setSrc(src4);
    });
    setSrc5.addEventListener('click', function () {
      if (rmp.getSrc() === src5) {
        _log('this src is already loaded - exit');
        return;
      }
      rmp.setSrc(src5);
    });
    setSrc6.addEventListener('click', function () {
      if (rmp.getSrc() === src6) {
        _log('this src is already loaded - exit');
        return;
      }
      rmp.setSrc(src6);
    });
    setSrc7.addEventListener('click', function () {
      if (rmp.getSrc() === src7) {
        _log('this src is already loaded - exit');
        return;
      }
      rmp.setSrc(src7);
    });
    setSrc8.addEventListener('click', function () {
      if (rmp.getSrc() === src8) {
        _log('this src is already loaded - exit');
        return;
      }
      rmp.setSrc(src8);
    });
    setSrc9.addEventListener('click', function () {
      if (rmp.getSrc() === src9) {
        _log('this src is already loaded - exit');
        return;
      }
      rmp.setSrc(src9);
    });
    setSrc10.addEventListener('click', function () {
      if (rmp.getSrc() === src10) {
        _log('this src is already loaded - exit');
        return;
      }
      rmp.setSrc(src10);
    });
    setSrc11.addEventListener('click', function () {
      if (rmp.getSrc() === src11) {
        _log('this src is already loaded - exit');
        return;
      }
      rmp.setSrc(src11);
    });
    setSrc12.addEventListener('click', function () {
      if (rmp.getSrc() === src12) {
        _log('this src is already loaded - exit');
        return;
      }
      rmp.setSrc(src12);
    });

    // log player event
    rmpContainer.addEventListener('srcchanged', function () {
      _log('srcchanged');
      var newDiv = document.createElement('div');
      newDiv.textContent = 'srcchanged event fires at ' + _getTime() + ' ms';
      srcChanged.appendChild(newDiv);
    });
    rmpContainer.addEventListener('error', function () {
      _log('error');
      var newDiv = document.createElement('div');
      newDiv.textContent = 'error changing source at ' + _getTime() + ' ms';
      srcChanged.appendChild(newDiv);
    });
    rmpContainer.addEventListener('warning', function () {
      var errorData = rmp.getErrorData();
      if (errorData) {
        if (errorData.code === 1005) {
          _log('warning');
          var newDiv = document.createElement('div');
          newDiv.textContent = 'warning changing source at ' + _getTime() + ' ms';
          srcChanged.appendChild(newDiv);
        }
      }
    });
  };

  // on ready event we wire UI
  rmpContainer.addEventListener('ready', wireUI);

  // init player after we have attached our listener and set our UI
  rmp.init(settings);

})();
