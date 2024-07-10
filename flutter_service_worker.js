'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f1d735247a1d884623036e7c90aa920a",
".git/config": "217c4baa955315cf91e81c212e6e3025",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "32e8aa27c9fb0412cb6537e13cefafe4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "d4aa70162abd29e1e34b68543d68d896",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9079fab8c5176e1b80906ac255c3aa8b",
".git/logs/refs/heads/main": "64b5d74e22110108f5c2d3af3e45fffd",
".git/logs/refs/remotes/origin/main": "64940ca1c6b30d99448f8e31fc22ced1",
".git/objects/00/e92ced0a13b7bbc4889eb041e279964b6c4e42": "06de4f30ecb13ec2417b1e4f92c47830",
".git/objects/03/412c9b552e53627fef861b73377678c6bff010": "a7569d617423ed8159ce85f2c891a276",
".git/objects/06/67e6bc76b21cd16beaf78dc52fa17a6089eb1c": "25f4369684b8d95195bb76cb5dcd088d",
".git/objects/07/43987a4c48e4805ff4bf173b756eca3f11b047": "c2ee846591f93019cfbe352c6f5d1a52",
".git/objects/09/c6078b2fff0cf24c08ab758a3703b1070b4875": "94ad367082982b8de0461b2a8422ad79",
".git/objects/09/e057f93bd6087390dd942808b49b63cf74384e": "38599520b3b3a16046eb263b8ba31bca",
".git/objects/0b/593e970fb5d8d158ae30c0344c6781e7f9e0de": "84abe752a2f6f091332d6072f7215030",
".git/objects/0b/71b52a3ed52df2026ae61d0d4175d4f0879bfe": "140a1f5b75f40458eeeaf2f7e05d2620",
".git/objects/0c/2fe0015fd21938a452c8e037eef158cd673b41": "3808323b6f645890153c434171e98213",
".git/objects/0c/f9e8468b3eb708fe59f95f2280de8460acb73e": "6e03f0cf11ae6d869ecded82fe5b87f2",
".git/objects/0d/7f7d04aef0f1c3ebe8d941c61d6e2f656059fb": "ff580af3328ef8b18ed02a70d87bc543",
".git/objects/0e/a1e7dfaa1a9068a2fc38ada2180821da036275": "4d159d6c79d04fd27511392afb5b4c69",
".git/objects/0f/97d224f7e37bf19c138f9af0c9f0d0c0b423a1": "66ebb1a4c2c907578c163a0dc3c754b7",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/c6a1d3f7e620423f0b08880354daedab7dcf7a": "0328463188f49997a2f17ec4bb96bf87",
".git/objects/10/828e76f160a2d37b13b31fd09017e9ee59bac3": "20456e2338f696123168befba010d39e",
".git/objects/13/53096b0bc5c31d16f68259f1cb80a917b4824e": "68b8e98776060b796ee981892d5369ad",
".git/objects/14/cb9e3da0c52440a3304f75f7c4660e63d5d0c2": "979ce44c3323a488e1ac2bf512cd336b",
".git/objects/15/3b21a892e4f99528cd916c34474c2ba1b3c42b": "a836993a4e2d3b8d37cc196a868252e2",
".git/objects/17/65a9edf5a8aa5ed2ab50a3c9eb863516115c03": "3006292c7dc8d7c96376c613819d32d8",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/3da7e46554b4a8e6e973696d1a3a13d502b238": "ba39bcbd9bf432debd9b151c066c1b94",
".git/objects/22/12d1c3d54610b76818e9c8e98e28b20246451e": "f261dc194d96a025e23f525734fe5d4b",
".git/objects/23/8001319e6f299bed0eb5acb0048d25a46fddba": "b8e1eeb4db2f99b70d390c9ea8054679",
".git/objects/26/430f67da4462f76886cf583fb81d2c4c8b0f5c": "f4e74374dc24968b1b729414199a882a",
".git/objects/28/79942fdf1b0270fa43037744dcdb1207e4660a": "2782a383207d58a1ad4a3a313ac49b74",
".git/objects/28/cf88e40ac4863567c9dfd1b8125d97f4e25113": "07de175388831c0b40aa8ab4f61bf01b",
".git/objects/29/d74dcfbe27be1d8450d91d360e42fc7fd09c66": "2e36862e8cc603026ed08834120bb2e8",
".git/objects/2b/b32940209e2f70a9ee67e64656ecc1ae2909f9": "5ffc91dc62da7de65e8cd80e08f9bbe7",
".git/objects/2d/9c4dfd9910a2d9844664c43294f7ce6a7120d2": "5c977ab5345018cc6e76210910c72e0a",
".git/objects/2e/f706981cf7bc7c1a5d4365aed3ed1754ad56e7": "97b61b2a732174e0c559b0cd2e569d74",
".git/objects/30/0503a7d32f8df316d11f4a4f0193096976d2b0": "445af4980d6cef98336e60bf6115c1c6",
".git/objects/31/50c60629a7c57dc054a71c976b4164206d5331": "579e117b5313fed8e5d49a6c6ff9ce7a",
".git/objects/34/c57d0d1f9ee4b71509458a9e54829293d6a55c": "983d2213d3086f4f3f6a84c367fa070a",
".git/objects/35/fce79113fe7f502713f48b2f3521c8134e38a7": "47bc6c503c81e22f01b2e13c0f3366dc",
".git/objects/36/970f30d89558295f6e013b4257c8390157bc01": "e374c0182c51cf6b81b07e0c7eec08d9",
".git/objects/39/2a52faa8098c1062f39e8a8c3dcdda4faf6f0f": "abdbcb0258f2b87fcd930119291e2e9d",
".git/objects/39/deb2e7b5de843c5aa177c4acbf21671c9de84a": "fef06a3050e8fec45ee99c1a31bcf3d4",
".git/objects/39/e3dcd51c16beb20bbb91153c6605b1b5863626": "cc04cf8b3099c1921873b4e4ad07fca4",
".git/objects/3a/971a44867340e7a385785e2561a004c970c9a0": "1282aa9263ae7f786d5442792048819b",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/f1882b25e34d900fc951f587f098064021ac25": "49e6ec19784f843f6c7341ef4ac9251c",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/9b61152e790e5693d8ba2013c9138e3db01568": "fb29747a7f57b82a4e19f9cc94696c93",
".git/objects/51/3ed2e9c3c90caa33facf1999c6b2a34b8cd044": "956e0d13862947be4d9e8c243eb231ee",
".git/objects/53/719016696386d7cbaa0bee2267e606eaa42198": "8461f55675010a12c0faacc8ec8e058a",
".git/objects/53/c755f5907ed7e3cf1cc2536d355e099f70b179": "2933e11f30cd8da02b21a3407188ce9f",
".git/objects/54/5d88f35df1a9a143fec4713d977a843e746d20": "4485ab75183a5f4ef8a8c9878b765800",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5e/9c1480930c78c1f4d0e365045b8ebf977a7b1b": "2afa57bdd5257eb7a8af47e1857cf52b",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/69a9da6f1ac56d7e8b4d5dfb27ee0630812dc1": "3ae655aed5e626fb1ee3caa41ca660c3",
".git/objects/64/6d682d5f4921ddd02ac2964b74ed5432461004": "f1f4dfb5e879a0e8f263f3bec1329d55",
".git/objects/70/0f91dd31189d85b0b31e033f7403315f507c3a": "68295b72158d68812d22291c06dbe743",
".git/objects/70/19dcef2154dbe3ab684b8f94a0ad93484212e7": "e3ff71bc0ece408bdedb508aa5d65544",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/a42c468c7124a841561bd0a895d5aa14ff4ecf": "349a344d87879be97d1ed99259e7b2d4",
".git/objects/72/e0e3f7f23899ec7079e8bc9edc955316f22077": "161578ee914d2669287ffb567e2baf02",
".git/objects/75/fd116a089d4d25edf749a0461453afea66e960": "11e78cca10b5e18fb7ea9f64942d89ef",
".git/objects/77/d53c67532f9550109f0ffc4ea9ec604b310648": "bbdf67042f52075ad8fa85cefba54e31",
".git/objects/79/9a0753b7f5050126532477109181ff303d5b2e": "8d4895e29420021c244182e787e663ff",
".git/objects/79/cf9dd6992507f82dab2f7822133bd961c0eb18": "40a82746b0ea70ae81ac5b373ff5e34b",
".git/objects/7a/653209e51e814618c58813adc62ea53431b812": "5a28ece1f016ca524333def527da8d01",
".git/objects/7c/f31ed47f43facc11d2a33b81483b8fa2971f55": "d5a81efd7b5760f65314cdfac3d8618b",
".git/objects/7d/22d9f88f0221bc9e170dcaa6c7e0bdee0ab3e0": "40e4cdaa4833c7760a1cb8fac0977345",
".git/objects/7d/5873b6070004b0daf6a7a9d2b9170882600637": "d616a41eb90159d48ef51c8e7c21429a",
".git/objects/80/138c2ac25f7cbd74f15ad160ed3a17b80065bc": "9337850bcf748041bc67f1609bf5aadc",
".git/objects/80/54b64bf8f5bdf50f4897742b9ec4013661b2b3": "66f7f077de9361b1d01766f0ffcdf4c4",
".git/objects/81/ac5d29a736df49449a0f013576dbac62d945a6": "4db44b0abc6e5e8b8a5cbe1b132e7b2a",
".git/objects/82/2a430d02621dcc1ff661b0e88ab818110b0922": "d1db6435927dc78e7f9be76d0fa50eed",
".git/objects/82/807ab483af0570e7fcbe6bf84057170599e4f0": "bb7bc457e64ad81626c5ab296c72df9a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/1300dc9cb01dddd67902def3654c2300483d42": "abbd50340a83f24d6d3842d6bf66947e",
".git/objects/8b/ef68a05e75c5e198e09c78bf826f2b217706c0": "094472ec7e2ae4c31aa9e789bb471b9c",
".git/objects/8e/947b72dc5a8be3f0ed776260490cfee901ddfd": "b9a52e2330167b24873da36ad4054dca",
".git/objects/92/a73450d2db62d0755546b1f8790a55fd87d8d5": "9a3a7bd1ebd3577c61f9901eeae778fd",
".git/objects/92/d72d9c00d1cbe89e74aeb389666dc4d4060d9f": "2f1232529cf66b4500342d4b89e6d6ee",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/b952306016e24ab3c887dcc5b3926a5621d7a0": "1e52541bbfa1953dbef1d92d4feb11ea",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/9d494947626beea0b3a6e94e864d16d2045c4e": "41e10fa2160342b57acb2e7ef6021092",
".git/objects/9b/0016e4c22f269597c355fef37d485a51a4c975": "fe113e293b4202f122c9247e31f88a2b",
".git/objects/9c/6514b68615585852fec6617360479ccd8d6092": "138b26ca9feb97494e6a272c150e8850",
".git/objects/a1/38987197e755f1b5a3caac3e311bd8b4d91892": "ccc6fdc8fe838519b36e3b22660dbdf2",
".git/objects/a4/67a06a17c9b5fcb5c4f6e217b00ac5b29d2635": "92055341dd9960eddf1519e7946781cf",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/482632ff898b6b933ffecdbb0d93ae3c52b456": "a69e551b65fda2f8b00e96de52894953",
".git/objects/b8/c6af84b294bffa6d0945ee59a2cbb38f3d3fa8": "b9593f61bb6b160ebb1e5d16f7f25584",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/91a57fe33cb9f0a76d9b2b8a718059fdcfb7ff": "e8014aaeae7632279825e310fd7f6cd1",
".git/objects/bf/418ba463d5ece450b6709816e9a897140f4aa2": "31e24a40b2e969fe4b08db8f8c446704",
".git/objects/c0/143813fef3b7ba8cbe98aa54b3f56340d500a1": "0bece6033ba043ae04e6a6d6661c30e2",
".git/objects/c2/b7a456dc8564484af57335726afb19ce7528da": "33cd0b9ab17997b091e26a1871a5ca5c",
".git/objects/c4/1e3c0f69ed7c45761e78f85c6879f8aa8c8402": "239d1f5f2ef40f2c9741d8d314560f18",
".git/objects/c5/6851a5365d8a195557c4d69b937c528193606c": "b7e022cd6f169c7444a98fa2e69c0acf",
".git/objects/c5/d0981a92d20033975e9826f7a9f2567b801fed": "47ca84f83917c7ea1b964023f4098424",
".git/objects/c6/c42275ccba2d3bc5eb1c38f9ca49f8397cc5b2": "92d259cc2c503788a62198f0a57e6afb",
".git/objects/c7/eae590197515eede10e9032372b6063922a1cc": "e312672cc91006383e7b419dc74976fc",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cd/18bc7a32a9e7bca4124b7850ed8c56fd44346e": "b876695acee2048d4fef354154ea5223",
".git/objects/cd/3171aa62d06302b3d4ec32951803e835975db2": "f1a6474127e0912f10af5b3f4e484bcc",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/a14509fa2a4c23dfa1e6191c16b0f2573f7994": "af38b1e8c89ea66ad8d87088c757ef6f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/494adee19b1b2b104fb8a9fac3c4782b49f423": "696c7bacf867326d5111a3415c731380",
".git/objects/d5/9d3cdfe74235590a03f191dc22308bac0aa3c7": "4d58b610277aa35fcb8b688243a732b2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/094e76c33afc72da5d4068e827f229fd3fe444": "75462adca48cd39031f3bf6c8faca4b5",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/e1/a385236e028fdc0688b3553d6c80a80bee29d6": "00f8109d0b87309d242bb419c96c35fb",
".git/objects/e4/8fdf0c11b6f0e48686925aade19396a66f6bb5": "c524acf46013513fed77d85339ad9c3e",
".git/objects/e5/3dcdfe9b36e40b3f0d5d10e285973dfcb7843a": "ee4218d1c45daee88a4999210aded648",
".git/objects/e9/730e9dc0f3f4618c2526127d5d929ee266c14f": "9ff0306334334383e3a8bfe78924542d",
".git/objects/e9/d0635504b4e81a78a591905365ac12a445def0": "48120a00b0d921119b0bde3ced3cbf1f",
".git/objects/ea/a9d6b589e79e5f0fcba756ee9515f847777742": "aa33f10aa7cb4d5df543f0eb0bb04d6e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/2f4a0b6409a1dbeea12c550da4baad5544fb76": "93c7ab8c3a8fe5ebeb6ec2e87d3db8fd",
".git/objects/f1/13838b95758f7f2b14b3d48657a73435ce445d": "7778a50bfaad9b7d4751796010c8cb9a",
".git/objects/f1/fcc694a1b8860355009c772cb354bd1f0765c4": "488d2ad6f3be4b062177e340a50947e5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/f7458ba3cab5b1d314422e79cc72abc570744e": "d3e48bab80b23b4ca04ae230f9d7cd6e",
".git/objects/f6/fa195db54fcd1dafc4bb2b8ad9918f654a3860": "ec68c62875d4437a733bd794f5374be8",
".git/objects/f8/3551465e8fb300acbaa6d75adb502a6d7f3f8f": "0c29a71ea13a38760c23122691b19620",
".git/objects/fb/e116f84100ae8a1b48d966e4ff1cd215c753a4": "f5816d5c059d678970af89092db5fc44",
".git/objects/ff/49e946383087465b809def0c42721609a1df53": "f655a1f3596fbdbcdaf30b39afd2d6c6",
".git/ORIG_HEAD": "a13700481c1d7f14d4e3fb0caeeeac5a",
".git/refs/heads/main": "a6de2719dce6333e9b96dadfda586863",
".git/refs/remotes/origin/main": "d18aaa96e4edf09253e849dffceeba4e",
"assets/AssetManifest.bin": "6968f9f99995a577b8eb346da1e273c9",
"assets/AssetManifest.bin.json": "b0d8706781eb4fdf43d67e36c89b1002",
"assets/AssetManifest.json": "cace6d36dcd6e5a2cf2c24984cebb210",
"assets/assets/animations/BackgroundPhoto.json": "fcbe28dd876bf1e54d7bcb2ce22e0f92",
"assets/assets/animations/ProjectNotFound.gif": "d4fe28a3266f618765975cfbbde9a0dd",
"assets/assets/animations/RoundedCircleforImage.json": "e1c550001b7eacfb9f184f2a3f90fa84",
"assets/assets/animations/SplashAnimation.mp4": "b97fa5e18354bd9310d139b393aca766",
"assets/assets/animations/SplashScreen.json": "727becff89e015eb9c9cb8f3bcf3f3f3",
"assets/assets/audio/BackMusic.mp3": "ff3c180037199ecbccc60450ed699f1a",
"assets/assets/images/certifications/FlutterCertificate.jpg": "41377863c3e102ad218a2e0f11e633f4",
"assets/assets/images/certifications/NetCertification.jpg": "3404477240b138dd39cddb4e5e49f58b",
"assets/assets/images/design/blob_ash.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/images/design/blob_black.png": "14198d608b7f0980998d329cd353e290",
"assets/assets/images/design/blob_femur_ash.png": "b899f92250a0f7220db5c45bea2080c8",
"assets/assets/images/design/blob_small_bean_ash.png": "411605e065607a48e110cedc91bebd82",
"assets/assets/images/design/box_cover_dark.png": "34f90bdba46732221c608605016c40d5",
"assets/assets/images/design/box_cover_gold.png": "a58f0270c1fd04d7eae1217c7e5645b9",
"assets/assets/images/design/dots_globe_grey.png": "bb16bba932c2e98f3dbe3e6b1b6a864b",
"assets/assets/images/design/icon_box.jpg": "7a18b9b091db5fe0fc16c76a3ffd5db2",
"assets/assets/images/icons/blog.png": "383501168390c3833d9c81843c33d566",
"assets/assets/images/icons/deploy.png": "d0b2151a4ba98ce30faa1ace6da8f82d",
"assets/assets/images/icons/develop.png": "723c47f15273f7013cacb03032b547c2",
"assets/assets/images/icons/learn.png": "7827c9e2366da4aaeec20a4342b76953",
"assets/assets/images/Me.jpg": "a97af093ecb60c4b4ad2e263357afa6d",
"assets/assets/images/projects/billboard.png": "8d35a940de276611ac93690a43481e44",
"assets/assets/images/projects/jobapp.jpg": "040ae32e023a4f59623c2294d6ddda0c",
"assets/assets/images/tech/firebase.png": "9ed79d8d77f3aab27b935896f7258479",
"assets/assets/images/tech/flutter.png": "e31f1c20d27c4415bce49ca10cc44ba1",
"assets/assets/images/tech/flutter_bird.png": "94b8139a9f1f2c226184af4106495c66",
"assets/assets/images/tech/nest.js.png": "69c1af485509a20dedc6e60259bc94c5",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "5c77d27e7e378c65dea0a5178d5acaf1",
"assets/NOTICES": "543450ed3789d79b391ba171c629285a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "6ae30d2af4e89fd90dd400c83083c9bf",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b70ccf6f1e4435bd08808199af3f7fa2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "95bc6ac2008f8d482b2179c77c2f8df9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "e73b4276c3525eae3b275accafaa388d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "28242fc025c53604a08024bec9cd2489",
"/": "28242fc025c53604a08024bec9cd2489",
"main.dart.js": "518e04494d5df315909ba15786e202e9",
"manifest.json": "8542b4849da903a211dc6140ab03c23b",
"version.json": "528590cfb00fc1ca502120db4808bb64"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
