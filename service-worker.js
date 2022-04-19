/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5717c50fcb545aac5193771d0dbbfcfe"
  },
  {
    "url": "aboutme.html",
    "revision": "310b8c0b457a35c4d6db42bac0491ba3"
  },
  {
    "url": "assets/css/0.styles.af3c543a.css",
    "revision": "9d0b312423c6d7cad5da3126ba279863"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/apple-touch-icon-72x72.png",
    "revision": "3827e419f30d86e5eba9d73fde88a617"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/chips.png",
    "revision": "0f307e7e7bb88e274e375a0d6804e7f2"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/img/docs.png",
    "revision": "c9b2e22056e60c22b895a5d9ffc243d7"
  },
  {
    "url": "assets/img/game.png",
    "revision": "e62aec16cb13b08ece8c2884c1cacc6b"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "70d2b7cf8c256212cc85dc96e8b2ec45"
  },
  {
    "url": "assets/img/me.png",
    "revision": "655abdf163ce3bd059fc611442ee5152"
  },
  {
    "url": "assets/img/wallhaven-kw2grq.jpg",
    "revision": "8696458f3da8aa5dc3331b4f4fee06b1"
  },
  {
    "url": "assets/img/wallpaper.jpg",
    "revision": "0247ecff52a7b59ad13156ff16304cd4"
  },
  {
    "url": "assets/js/1.44aa7ec6.js",
    "revision": "13a78f716a4fb8c7bb8c23151f1eae80"
  },
  {
    "url": "assets/js/10.d6ba2a36.js",
    "revision": "99f471dc5e2fccf9536e4083dd9273bc"
  },
  {
    "url": "assets/js/11.c1bd2a3f.js",
    "revision": "33ee53a561522166590715890572e58f"
  },
  {
    "url": "assets/js/12.9958eda7.js",
    "revision": "c0072c8dbf395ebbf5ad76eda1af26b4"
  },
  {
    "url": "assets/js/13.fb528d26.js",
    "revision": "459c92768db86ebae7427deda7b1695d"
  },
  {
    "url": "assets/js/14.05a2e840.js",
    "revision": "3c201ab1cd95d60b029fc8f273b2708c"
  },
  {
    "url": "assets/js/15.bc3e38d1.js",
    "revision": "4c78fdf88bfaf18254411d9cf387dff4"
  },
  {
    "url": "assets/js/16.25ef844c.js",
    "revision": "ccef2b9f6f24bbd62da5fb6b14d626ee"
  },
  {
    "url": "assets/js/17.91ecad96.js",
    "revision": "3f5a675c2a12f9a406a98d2c0452f6c0"
  },
  {
    "url": "assets/js/18.e071433d.js",
    "revision": "7f49c0d815bd3f8198f8d0985005759c"
  },
  {
    "url": "assets/js/19.9133e9e6.js",
    "revision": "1a949ff7f41155d14ecbcc7fda570a0c"
  },
  {
    "url": "assets/js/20.5865e5b2.js",
    "revision": "b7aee088e7880f4e32de2dcc729d47b7"
  },
  {
    "url": "assets/js/3.26460982.js",
    "revision": "e1469a3afc2730e4aee691d84b8d14a8"
  },
  {
    "url": "assets/js/4.7a2d525a.js",
    "revision": "9c4209e3b45bd74235a891447e952efe"
  },
  {
    "url": "assets/js/5.ced7dd83.js",
    "revision": "752ba3656cf81cb29fc078b2b50eb7e0"
  },
  {
    "url": "assets/js/6.7ecf0000.js",
    "revision": "3061b753e035ab77a3d34b58d955299b"
  },
  {
    "url": "assets/js/7.4ba63b00.js",
    "revision": "d60952961e1700b11b53b2d11b8af123"
  },
  {
    "url": "assets/js/8.16f4a30c.js",
    "revision": "8a0d8198ebe92b2466501fc3534cdde5"
  },
  {
    "url": "assets/js/9.8ec21a08.js",
    "revision": "8b84d3eb27d485d7ee5302d8e725b6cc"
  },
  {
    "url": "assets/js/app.cb1a3e29.js",
    "revision": "6e9b24729ff13542e26ba32695e3ddb4"
  },
  {
    "url": "Blog made by vuepress.html",
    "revision": "40d7c4eb7cebc94ecc72f404fc544529"
  },
  {
    "url": "categories/index.html",
    "revision": "62f8a5b41ef44f607e83d2da4ff27a27"
  },
  {
    "url": "categories/vuepress/index.html",
    "revision": "98d95741a4bfdeec5f175670d1e6292f"
  },
  {
    "url": "categories/个人笔记/index.html",
    "revision": "8b98dbc383067970cd78677aec8740d7"
  },
  {
    "url": "categories/硬件/index.html",
    "revision": "2eee1cc0f397f020fd772d517b663adb"
  },
  {
    "url": "icons/apple-touch-icon-128x128.png",
    "revision": "27cc5fc95a100a7988433108bb55c6f5"
  },
  {
    "url": "icons/apple-touch-icon-144x144.png",
    "revision": "1d33bd296703c74c3d55ccb1cc262732"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "d6a4f5f2a174f0759e7c5f9eabb1a55b"
  },
  {
    "url": "icons/apple-touch-icon-192x192.png",
    "revision": "9f7a6c67b35a77c9ec84c0b99ab876cd"
  },
  {
    "url": "icons/apple-touch-icon-384x384.png",
    "revision": "14d667e4bac77e996004d4ad2187cbee"
  },
  {
    "url": "icons/apple-touch-icon-512x512.png",
    "revision": "b4aeec2673abb000d5d4b8a344b5f485"
  },
  {
    "url": "icons/apple-touch-icon-72x72.png",
    "revision": "3827e419f30d86e5eba9d73fde88a617"
  },
  {
    "url": "icons/apple-touch-icon-96x96.png",
    "revision": "7d610c8a76d0960873ff9cbcac74f09a"
  },
  {
    "url": "index.html",
    "revision": "b662194f6fd4272ff840458557abd4a2"
  },
  {
    "url": "logo.png",
    "revision": "70d2b7cf8c256212cc85dc96e8b2ec45"
  },
  {
    "url": "tag/index.html",
    "revision": "eeba3672a60dd26a48e8c5cd89f94867"
  },
  {
    "url": "tag/kindle/index.html",
    "revision": "f589f8ee86ef910742f69a751d441628"
  },
  {
    "url": "tag/PWM/index.html",
    "revision": "d7b4a55dd43611c439bc943f8cd69e77"
  },
  {
    "url": "tag/个人笔记/index.html",
    "revision": "ebe1eef6961bfb0d34d8d966a5677cdc"
  },
  {
    "url": "tag/传感器模块/index.html",
    "revision": "2316742718fa9cf6793e80378bfe2961"
  },
  {
    "url": "tag/卡尔曼滤波/index.html",
    "revision": "7da1c1a3c58ca85b75248ebbab0590d8"
  },
  {
    "url": "tag/感知机/index.html",
    "revision": "b5deda5c3d7a2bba48b83da676875b36"
  },
  {
    "url": "tag/搭建博客/index.html",
    "revision": "322a94f1a11baabf5bf5253b3b9c631f"
  },
  {
    "url": "tag/神经网络/index.html",
    "revision": "1a6c30f74b066e77ae3c5cd0fc2d2598"
  },
  {
    "url": "tag/触摸屏/index.html",
    "revision": "2f9dd2d8928db817f08bc2a51efb6bb8"
  },
  {
    "url": "timeline/index.html",
    "revision": "29c0a1a38b6e8e3b2bcf9db69613e96c"
  },
  {
    "url": "文章/硬件/个人笔记/kindle触摸原理.html",
    "revision": "c3191b121aceab7a3d7b84977bd47634"
  },
  {
    "url": "文章/硬件/个人笔记/PWM是什么.html",
    "revision": "f287691318f9ef4e54796753c269a39a"
  },
  {
    "url": "文章/硬件/传感器/激光粉尘传感器模块----ZH07粉尘传感器.html",
    "revision": "fa23277028b0bf80c66eb7c122c4a9d8"
  },
  {
    "url": "文章/软件/个人笔记/卡尔曼滤波.html",
    "revision": "0ccee055c9085d28b0875f44bb014670"
  },
  {
    "url": "文章/软件/个人笔记/感知机.html",
    "revision": "16fc45767de1639c64c181c84bf3ed48"
  },
  {
    "url": "文章/软件/个人笔记/神经网络.html",
    "revision": "346626be34737d13eafbacb59b9a0edd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
