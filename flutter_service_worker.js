'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "cc64685a0a278971cc1695136dd8dd29",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4ea98f8afc703c464b3686bd0d3eb790",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f626104067278ee08e5c8b11f7a1b2a5",
".git/logs/refs/heads/master": "f626104067278ee08e5c8b11f7a1b2a5",
".git/objects/00/44ad76fd5ff13ed07fdac757d14a638b3caf51": "d1fd0c4cbcc09739808366a3801ba3c8",
".git/objects/00/8965337168a8980435d0ca591198eec4f3826b": "9c6fd5fdb683c7210a35db18721a6b74",
".git/objects/04/329e18d8ab48b9019c466ed045f57496feddbb": "fdca92d10cc32d5c31f57e291453a307",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0b/dbc3a38234aa71066e6cc9403eeb511aec282e": "8ab9548c0fb8ab04f5bc170e3f165724",
".git/objects/0d/07556b513782fabb44ab0cae98258a49e51b04": "ec50932151ebb56c46fab2e9c2fa92de",
".git/objects/0e/5206201cd6e06088fe1c010e2a27d19b94320d": "b0f3fc74cbefa328376d76f8683bee20",
".git/objects/11/f927fbd2077e28f28a4044eb004f5f42cce74a": "53b750512c709fd143cec707deb6e5dd",
".git/objects/15/52b7b842fd4280fdd96f6010c78a8c39503433": "b4bca24069902381367fcdd554097e52",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1a/41bd8ff2166537878a31664ada4ef89eef3357": "9f536d68c827ad174da7093bfdf1af8d",
".git/objects/1b/7a96b22d87bca82bb40ae29f0ab5ee34707706": "82e1a222b0e790c756bc23d6acff9371",
".git/objects/1c/cc72d2a3768ff056e711f80b684c7e15810ec5": "1c2f9a0f8681c79757003894671f9cdb",
".git/objects/1e/b51f0ffaba9035d31a6048581a6c730506bb3f": "ddcc14eb140849db6bd9802003613779",
".git/objects/1e/d5862f703968d64b66985c40156976559d5a78": "ea60d9362067c5914eeb17e2971907bd",
".git/objects/1f/6c75619a561f54f4b4513dc272ec3ebbcc24fb": "718bc5c2e601b3f51c1415558755e9bc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/371951cae60afddae447477208ea06165bcae9": "ede28598c2f02c5b3ef81aedd12b32c7",
".git/objects/24/b07f57f47dd1c025e3110bf5d4fa9667ecc594": "a96d4a19628f02fe009d4835e11ee007",
".git/objects/25/8091c253a9c174b96ea7b7e4387cea26f4cd9e": "b94b74ed4bbcf5f5aa9e2eb3d1803c75",
".git/objects/30/cc23f6311d29f10ef7f87af9bcbd3ff4f215ee": "adf475ab125bc5214b8b5b30606e717e",
".git/objects/3d/fe9506cf5b3e4188f11e3dbfa689f3b95f6b40": "68dc0c3daf75096657430563aeed27d0",
".git/objects/44/a703799c1c1c256471df24424d6d6b40da2cb2": "e74cd2442b5fbe87e2f2200fae3e294c",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4c/3cabbdfb54d0001f3c9af3d973a5870fd86ded": "fdf8082381bf6c01d7ea83dfc41c2531",
".git/objects/4e/1cd267220549722fc3298f0d64860abec7c981": "84b2b299d6215857bae137a5fc1fd479",
".git/objects/4e/bea8cd5d5d87c43b6cc1b8070688e1dbaabdf1": "6e20adf9a8f8ee7010fec0ba321af349",
".git/objects/4f/944c0641ce4a5537bb5d1d7938575a3540ab5a": "e77f811d4129c7b06523651c314c6dc8",
".git/objects/52/8e9709bb956b325d38aabe93cd53303b951604": "18955d2859322a45a9d7742f3430503c",
".git/objects/53/cffd4a3f0b88cf318fc4295efa4ddfcf277d96": "abd62c76e7ab9d88c925faf61daca635",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/57/0f34fcb6db6c92eebad001f69fd2254f4e3abe": "bd39f880e33f7764975606df02684060",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/9ec41a4f61ed2a2831177eb16bb61ccb0bdebd": "9e3dc335993edbeabee4d2c7627fbd4c",
".git/objects/5f/35ea2dfda393f725767dacafb0f9ec09e3cb59": "87f71f44c432f7434ffd5f23107e96bc",
".git/objects/65/de042b411cf0231a4a91e0b929926c1b7c7e34": "5177e91f5fc7380f761ec37757de043b",
".git/objects/66/e018946c1321139ca6c8ed31d53ed38d7343fb": "6408a69fd503a78c395603687a7c8b70",
".git/objects/6a/9cd52ff2a11b94adaa2a28df43d9961543bd05": "ee18dde4330590365bfefc3336180dd4",
".git/objects/6b/e8ce324c553515a127f2ab1820ee766ded5392": "67c9abd49b699c7ff2d31fc9501ac884",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/571139f4da4bb50210ded62daef582ed47984c": "e53e2e7aaf99566c300c6055b27ad5fc",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/aad807dbc574624fbc67787a817570f078e3c8": "d891f090af18e063a9720ad1df20cf70",
".git/objects/72/8cd3d17c90cd2284f49dc75ceec178608db6a5": "2c1bfa47a863684994e518b186e65816",
".git/objects/75/144edd2fb4852e9bece4fcdcc7d5d618b47dbc": "ce75bd338b30f76f5201ec33f6908d8c",
".git/objects/75/1b6a6c3e9b1a90437b3e36ebd4e8a15ae10ae7": "52a23afbd13111d183af00b49a16732e",
".git/objects/7a/04dc1e747bda0ab38017702f6190e9272c6ff8": "d76bdd56ae733e904c386231a8c3a879",
".git/objects/80/52e35e30ed8cd61d148b8408a39fd9efd29e5f": "373720d1056a2cd2c6f7446a1f2b875c",
".git/objects/84/c404e06d041a5b2447c80e2ef05a9d04febf60": "2f88b73176c9121f228e9e67c28802b9",
".git/objects/85/3868988475d01a8531dedf06c4d8e334ec7e6f": "ca186002c2821566504ed25746d50d82",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/784cc8f495ec3b84b07a9c4a4892cc7d0fa8dc": "c9e6688ff4ea3b5bd7ae9d9549d52e9e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/2dc1e526b2f697722a4540a6593942ee4c3903": "a7f69932b31f127750d3c2e67ff824ba",
".git/objects/8e/d31fa217a2838d7d0ddfdbda038e445cc318fe": "4f33e433a03b5b71f4a53be7ccee7353",
".git/objects/93/17a3bfac79d6298a203ed20b789e59231af47b": "dc1507137f909ddc381ee4c3b168369d",
".git/objects/93/3b3e68f197efa40f5b4e452c8ca94902146f3e": "36924beb997faec3f8053fe9244f285a",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/eaa2e6a52d35a703bfb8c8b33dd083e67763a1": "ff43818facb79852ff94249290665007",
".git/objects/9b/0c6074f0a39c7e40a8b22f533cbcd8e7ba63b8": "8a0bffa7b57b1465fbe338c1954dd43b",
".git/objects/a3/db7a90499d2064125c3353dccb4ef95b99279a": "0a33a2147fa3ed1ee88dec0d19270520",
".git/objects/ac/79d9c1075dae050d71615e71a9ebfb6d073d64": "7d843812e9fd85cb4b64380e0fabc5af",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/cbcdc3b46659fd7f2926d44b159f95029cb50e": "1fb5044dd0e342d2ea51e4503b98f317",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/a1f6b161d14be06269feaddced29d9902c4491": "05fa2a84e41392914e34771a9be1af8a",
".git/objects/b5/bb0c692937754950a3787556d0497bb83bb02f": "9d8c96515100e45a6e37ffe5b8b94f76",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/61b70ee1462adc70ab12473d21ba79b699ee62": "ee2138b5db711aa3ccd85d3f0f504e55",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/3165ca8455e653c6429ccc9d8b069cad06b6e4": "1d9bb1b9eb8fa3d85205e38017bf48ff",
".git/objects/c7/4a0c6e84388fb04ba5a9d0aca987b6b79e532d": "5594f8fe0232c414757cd0fd1ae7c932",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/d0/7c44fe091753723f14cc2c4e813b3a6ce34d5a": "6edf6efaaa5f7ddb377b4909483bc8a5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/5d12458a0deae75b278b71dfa966fd4ad192a3": "9cef17bc04024093061aa8ac46f1eb03",
".git/objects/de/33ea52957708f6f01e15b483ffba07c4301da4": "fd596bdee8c5634343e8d47012fa799c",
".git/objects/e0/86be721fc56ef2201c8fb5039dd2de91b674e2": "d3cbb09d4ae704d2cf86fa6c18498126",
".git/objects/e5/d4bedee1c462a351046a24c8b1c905a16c11cb": "ae59b2ac4273a8b80012290bd2a467d9",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/c86f5d0903a419636beb48049c525e73616873": "e7ea788d2820f9ac463dfc13169f9294",
".git/objects/eb/9543bc9b4fd0ac8d800b3532edc2b33e01de7c": "66bcf36c66f6d93f76516271f26570f1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/233f61ed15b45f253913e0af67e32effc32445": "09116239854a8b2d6d28862b9804e388",
".git/objects/f4/f6c0b7f6b9c7d17f0cbd7b190f50303abe1c08": "9640a0e52a1acfc13e717047243edb15",
".git/objects/f6/c27961b555a1d519dd96b9d3307988ec95e065": "0a860d6965465001d5f2bf1324f466cf",
".git/objects/f7/7cd78c486908637f3f9d316570dcfcfcdff1e2": "58f4d74d040e2da52619a089f73f0cc0",
".git/objects/fd/d7bcc2f20b1d972eee841b451767ea9b870376": "6469d454e409ee7d7b7900e162f3a0ae",
".git/refs/heads/master": "1fef66221c83f5585d18cfa2da1591ac",
"assets/AssetManifest.bin": "ae72a9cf6933b9de19bbb0c53127623c",
"assets/AssetManifest.bin.json": "8d2cec318711296aa6c810d3af4b7cab",
"assets/AssetManifest.json": "91b92b35ef921e399726007c09ec27f0",
"assets/assets/image.png": "a95222780eb4ec349d7f90c8a1076f0d",
"assets/assets%255Cimage.png": "a95222780eb4ec349d7f90c8a1076f0d",
"assets/assets10/image.png": "f4b2082497b9f41a7f776c6fdc2d7a48",
"assets/assets10%255Cimage.png": "f4b2082497b9f41a7f776c6fdc2d7a48",
"assets/assets11/image.png": "f74a4056568bd5ea625274fc7bf0015e",
"assets/assets11%255Cimage.png": "f74a4056568bd5ea625274fc7bf0015e",
"assets/assets12/image.png": "4ececb833f962de09f7128287a886af8",
"assets/assets12%255Cimage.png": "4ececb833f962de09f7128287a886af8",
"assets/assets13/image.png": "06619308fb85e5cdff2bed84ea751d39",
"assets/assets13%255Cimage.png": "06619308fb85e5cdff2bed84ea751d39",
"assets/assets14/image.png": "ca0bbde68b229240e47489c43c94e704",
"assets/assets14%255Cimage.png": "ca0bbde68b229240e47489c43c94e704",
"assets/assets15/image.png": "790fdb627845339fcb09e499698e6c85",
"assets/assets15%255Cimage.png": "790fdb627845339fcb09e499698e6c85",
"assets/assets16/image.png": "1be04b0f45235e7b4f1a5cbfb3909b0d",
"assets/assets16%255Cimage.png": "1be04b0f45235e7b4f1a5cbfb3909b0d",
"assets/assets17/image.png": "ea8165b672fc12c4544cedfab9fa8682",
"assets/assets17%255Cimage.png": "ea8165b672fc12c4544cedfab9fa8682",
"assets/assets18/image.png": "aea9a31bdf098f3ecfe84e28c2a932bb",
"assets/assets18%255Cimage.png": "aea9a31bdf098f3ecfe84e28c2a932bb",
"assets/assets19/image.png": "38f0dbf293f8e4078e47fc5ee61c2fef",
"assets/assets19%255Cimage.png": "38f0dbf293f8e4078e47fc5ee61c2fef",
"assets/assets2/image.png": "c504f72d7166e404c521a2a38f3de75a",
"assets/assets2%255Cimage.png": "c504f72d7166e404c521a2a38f3de75a",
"assets/assets20/image.png": "b053a2f3c44b9f151b8f5788c8cf68ff",
"assets/assets20%255Cimage.png": "b053a2f3c44b9f151b8f5788c8cf68ff",
"assets/assets21/image.png": "205fd20e1da36b5a88b62fcba068e550",
"assets/assets21%255Cimage.png": "205fd20e1da36b5a88b62fcba068e550",
"assets/assets3/image.png": "611935562b187e0e77d4578e9ec9ee1e",
"assets/assets3%255Cimage.png": "611935562b187e0e77d4578e9ec9ee1e",
"assets/assets4/image.png": "75aa34c25d6f454eaea8e8e93f7e2ea2",
"assets/assets4%255Cimage.png": "75aa34c25d6f454eaea8e8e93f7e2ea2",
"assets/assets5/image.png": "1bda754558c1cbc260a20a218114db5d",
"assets/assets5%255Cimage.png": "1bda754558c1cbc260a20a218114db5d",
"assets/assets6/image.png": "26344edc470053fed0e21d9559dbea9e",
"assets/assets6%255Cimage.png": "26344edc470053fed0e21d9559dbea9e",
"assets/assets7/image.png": "29a75e7153cba2f683894c08c06bb7bd",
"assets/assets7%255Cimage.png": "29a75e7153cba2f683894c08c06bb7bd",
"assets/assets8/image.png": "159009a6d7a6c8662cb2cd9fbca4c6d1",
"assets/assets8%255Cimage.png": "159009a6d7a6c8662cb2cd9fbca4c6d1",
"assets/assets9/image.png": "916d95bb1df3f1180fef8c9be0b98987",
"assets/assets9%255Cimage.png": "916d95bb1df3f1180fef8c9be0b98987",
"assets/FontManifest.json": "53e60880d7fdd1080cd0ec0837ab6577",
"assets/fonts/MaterialIcons-Regular.otf": "45a0860458f5a18080536002c17e9c93",
"assets/NOTICES": "ec050e5ea2f91d57f5dea4cfa4900380",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "da59c17e7cab00aaf260355b87dd8c45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a31731e9aa49906388f32ee1f184968e",
"/": "a31731e9aa49906388f32ee1f184968e",
"main.dart": "6559f8ca089d74b445fdad6c61df02c9",
"main.dart.js": "088e673ea626241709dcd47b5bcb63f5",
"manifest.json": "09b576fa710b66a06061caa75c24bfb1",
"styles.css": "ce4c2a577a92344fab12d8a19d611ad0",
"version.json": "617ea52030031260ae87f1d345ff25a8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
