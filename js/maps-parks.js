// types can be ORIENT, ROGAINE, PARK, CITY, PARK, RELIEF, VELO
let parkMaps = [
    // --- городские парки ---
    {
        name: 'Парк Авиаторов',
        year: 2020,
        url: './maps/parks/aviatorov_2020.webp',
        bounds: [[59.873033427709515, 30.297803878784183], [59.8714502016217, 30.30941247940064], [59.86461022951216, 30.293469429016117]],
        owner: 'SHRNN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Победы',
        year: 1984,
        url: './maps/parks/pobedy_1984.webp',
        link: './original_maps/parks/pobedy_1984_full.jpg',
        bounds: [[59.87226874969168, 30.320806503295902], [59.87180562628519, 30.33831596374512], [59.864502502163894, 30.319154262542728]],
        author: 'TRSV',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Победы',
        year: 2020,
        url: './maps/parks/pobedy_2020.webp',
        bounds: [[59.873216517019806, 30.318918228149418], [59.87246261338842, 30.34007549285889], [59.86449172940988, 30.31690120697022]],
        author: 'FDRV_L',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Интернационалистов',
        year: 2020,
        url: './maps/parks/internatsionalistov_2021.webp',
        bounds: [[59.86276804382595, 30.392925739288334], [59.86294041640396, 30.412087440490726], [59.855441383514496, 30.39324760437012]],
        author: 'SRBRNTSKY',
        owner: 'SFSO_SPB',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Екатерингоф',
        year: 1986,
        url: './maps/parks/ekateringof_1986.webp',
        bounds: [[59.906952348502685, 30.255017280578617], [59.90583339361939, 30.27119636535645], [59.90037794856062, 30.253279209136966]],
        author: 'CHGRVSKY_V',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Екатерингоф',
        year: 2020,
        url: './maps/parks/ekateringof_2020.webp',
        bounds: [[59.90692007148612, 30.25269985198975], [59.905940987073635, 30.270016193389893], [59.9003349040107, 30.251369476318363]],
        author: 'SHRNN',
        owner: 'SHRNN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Полежаевский парк, север',
        year: 2017,
        url: './maps/parks/polezhaevsky_north_2017.webp',
        bounds: [[59.84853345120984, 30.17757654190064], [59.84579574590888, 30.212037563323978], [59.84222776838285, 30.173478126525882]],
        author: 'ZCHNV',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Полежаевский парк',
        year: 2015,
        url: './maps/parks/polezhaevsky_2015.webp',
        bounds: [[59.84651791838533, 30.179958343505863], [59.84528913795502, 30.21223068237305], [59.83302040442371, 30.177898406982425]],
        types: ['ORIENT', 'PARK'],
        owner: 'ELTSV',
    },
    {
        name: 'Полежаевский парк',
        year: 2001,
        url: './maps/parks/polezhaevsky_2001.webp',
        link: './original_maps/parks/polezhaevsky_2001_full.jpg',
        bounds: [[59.84684127411712, 30.180387496948246], [59.84563406335706, 30.21124362945557], [59.833343891273, 30.17807006835938]],
        author: 'KRCHKN_V',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Полюстровский парк',
        year: 2022,
        url: './maps/parks/polyustrovsky_2022.webp',
        link: './original_maps/parks/polyustrovsky_2022_full.jpg',
        bounds: [[59.96915633177583, 30.420584678649906], [59.968082430555185, 30.433566570281986], [59.96020967154, 30.41796684265137]],
        author: ['FDRV_L','TKMKVA_P','RDNV_I'],
        owner: 'RDNV_I',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Пулковский парк',
        year: 2024,
        url: './maps/parks/pulkovsky_2024.webp',
        bounds: [[59.84401180495004, 30.3233814239502], [59.84255116579194, 30.339174270629886], [59.832470469568456, 30.31857490539551]],
        types: ['ORIENT', 'PARK'],
        author: 'IVNVA_G',
        owner: 'ANCHKV',
    },
    {
        name: 'Сосновка',
        year: 1975,
        url: './maps/parks/sosnovka_1975.webp',
        link: './original_maps/parks/sosnovka_1975_full.jpg',
        info: '2-е соревнования на Приз газеты Ленинские Искры',
        bounds: [[60.02974305713079, 30.340890884399418], [60.02905702197842, 30.368185043334964], [60.01237340874599, 30.338916778564457]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сосновка',
        year: 1981,
        url: './maps/parks/sosnovka_1981.webp',
        link: './original_maps/parks/sosnovka_1981_full.jpg',
        bounds: [[60.0331730192314, 30.33157825469971], [60.0316081431942, 30.36882877349854], [60.01155831217308, 30.327758789062504]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сосновка',
        year: 1997,
        url: './maps/parks/sosnovka_1997.webp',
        link: './original_maps/parks/sosnovka_1997_full.jpg',
        bounds: [[60.036302548936476, 30.32724380493164], [60.03370891864321, 30.371446609497074], [60.012137461804485, 30.32187938690186]],
        author: ['DBRTSV_V','SHLKHN_Y'],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сосновка',
        year: 2004,
        url: './maps/parks/sosnovka_2004.webp',
        link: './original_maps/parks/sosnovka_2004_full.jpg',
        bounds: [[60.03430911566367, 30.332007408142093], [60.03190826215154, 30.37054538726807], [60.01248065679911, 30.32655715942383]],
        author: ['SHKLV','BRDR','DRBSHV'],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сосновка',
        year: 2011,
        url: './maps/parks/sosnovka_2019.webp',
        bounds: [[60.03385896892066, 30.335440635681156], [60.03184395117591, 30.37007331848145], [60.01198731287414, 30.330247879028324]],
        author: ['DBRTSV_V','SHKLV','BRDR'],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сосновка',
        year: 2024,
        url: './maps/parks/sosnovka_2024.webp',
        author: 'ZCHNV',
        bounds: [[60.03570238813511, 30.334196090698246], [60.03145808269312, 30.373206138610843], [60.0129310948235, 30.324754714965824]],
        owner: 'SFSO_SPB',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Удельный парк',
        year: 1987,
        url: './maps/parks/udelny_1987.webp',
        link: './original_maps/parks/udelny_1987_full.jpg',
        bounds: [[60.01741369119426, 30.29788970947266], [60.015354775032456, 30.324969291687015], [60.00194723757934, 30.29338359832764]],
        types: ['ORIENT', 'PARK'],
        author: 'VSLVSKY'
    },
    {
        name: 'Удельный парк',
        year: 2004,
        url: './maps/parks/udelny_2004.webp',
        link: './original_maps/parks/udelny_2004_full.jpg',
        bounds: [[60.01726356622507, 30.29643058776856], [60.01499016193073, 30.331192016601566], [60.00265529149791, 30.29239654541016]],
        author: 'DBRTSV_V',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Удельный парк',
        year: 2022,
        url: './maps/parks/udelny_2022.webp',
        bounds: [[60.01657727196921, 30.293726921081547], [60.0135102204092, 30.324454307556152], [60.003470607537736, 30.288448333740238]],
        types: ['ORIENT', 'PARK'],
        author: 'LVCHV',
        owner: 'SFSO_SPB',
    },
    {
        name: 'Пискарёвский парк',
        year: 2001,
        url: './maps/parks/piskarevsky_2001.webp',
        link: './original_maps/parks/piskarevsky_2001_full.jpg',
        bounds: [[60.00640986958004, 30.395436286926273], [60.00450045170369, 30.422172546386722], [59.994597601104296, 30.39123058319092]],
        author: ['RDKV','DBRTSV_V','BRDR'],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Пискарёвский парк',
        year: 2024,
        url: './maps/parks/piskarevsky_2024.webp',
        bounds: [[60.0064313230872, 30.39530754089356], [60.004586270603426, 30.422816276550297], [59.994350796655525, 30.390887260437015]],
        types: ['ORIENT', 'PARK'],
        author: 'DBRTSV_V',
        owner: 'SFSO_SPB',
    },
    {
        name: 'Парк Лесотехнической академии',
        year: 1984,
        url: './maps/parks/lesotekchnicheskaya_1984.webp',
        link: './original_maps/parks/lesotekchnicheskaya_1984_full.jpg',
        bounds: [[59.99787026863688, 30.330977439880375], [59.99596035773898, 30.35460233688355], [59.9907021683028, 30.329711437225345]],
        author: ['KLCHTSKA','AZBKNA'],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Лесотехнической академии',
        year: 2024,
        url: './maps/parks/lesotekchnicheskaya_2024.webp',
        link: './original_maps/parks/lesotekchnicheskaya_2024_full.jpg',
        bounds: [[59.99796683423708, 30.330204963684086], [59.996421750809226, 30.353980064392093], [59.99045533479755, 30.328638553619385]],
        author: ['SHRNN','RDNV_I'],
        owner: ['RDNV_I'],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парки Пионерский и им.акд. Сахарова',
        year: 2015,
        url: './maps/parks/sakharova_2015.webp',
        bounds: [[59.98593688316973, 30.405607223510746], [59.98421949511812, 30.424554347991947], [59.97620026042496, 30.402088165283207]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Таврический сад',
        year: 2023,
        url: './maps/parks/tavrichesky_2023.jpg',
        bounds: [[59.94823046787108, 30.367712974548343], [59.947607215923064, 30.37899971008301], [59.943663263827155, 30.366854667663574]],
        author: 'FDRV_L',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'ЦПКиО - Елагин остров',
        year: 1984,
        url: './maps/parks/elagin_1984.webp',
        link: './original_maps/parks/elagin_1984_full.jpg',
        bounds: [[59.98456297985705, 30.237379074096683], [59.98181500214218, 30.273942947387695], [59.97726316222692, 30.235877037048343]],
        author: 'CHGRVSKY_V',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'ЦПКиО - Елагин остров',
        year: 2017,
        url: './maps/parks/elagin_2017.webp',
        bounds: [[59.98518553686155, 30.23699283599854], [59.9827167074759, 30.275316238403324], [59.97616805074679, 30.23497581481934]],
        author: ['DBRTSV_V','URVNTSV'],
        owner: 'GLFSTRM',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Александрино, север',
        year: 2013,
        url: './maps/parks/aleksandrino_north.webp',
        bounds: [[59.84785443506803, 30.217809677124027], [59.84677660322206, 30.238409042358402], [59.83603949282227, 30.214891433715824]],
        author: 'URVNTSV',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Александрино, юг',
        year: 1986,
        url: './maps/parks/aleksandrino_1986.webp',
        link: './original_maps/parks/aleksandrino_1986.jpg',
        bounds: [[59.8382605045259, 30.223817825317386], [59.83750580842855, 30.24514675140381], [59.827369660673696, 30.220642089843754]],
        author: 'VLKV_K',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Александрино, юг',
        year: 2007,
        url: './maps/parks/aleksandrino_south_2007.webp',
        bounds: [[59.838713313973486, 30.226092338562015], [59.83765674901652, 30.244331359863285], [59.82784418747832, 30.22325992584229]],
        author: ['DBRTSV_V','SHRNN'],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Александровский сад',
        year: 2020,
        url: './maps/parks/aleksandrovsky_sad_2020.jpg',
        bounds: [[59.93639742638281, 30.300679206848148], [59.94020251615056, 30.310270786285404], [59.933602449579325, 30.30462741851807]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сад 9 Января',
        year: 2018,
        url: './maps/parks/sad_9_janvarya_2018.webp',
        link: './original_maps/parks/sad_9_janvarya_2018_full.jpg',
        bounds: [[59.896030167287805, 30.27392148971558], [59.89523372984083, 30.28205394744873], [59.88972272059391, 30.271797180175785]],
        author: 'BVZ',
        owner: 'BVZ',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Луга, парк Зелёного Бора',
        year: 2019,
        url: './maps/parks/luga_zeleny_bor_park_2019.webp',
        bounds: [[58.70154817741037, 29.82069253921509], [58.700611802096766, 29.833266735076908], [58.6919379869104, 29.817280769348148]],
        owner: 'SHEIN',
        types: ['ORIENT', 'PARK'],
        author: 'TKMKV_K',
    },
    {
        name: 'Воронцовский сквер',
        year: 2024,
        url: './maps/parks/vorontsovsky_skver_2024.webp',
        bounds: [[59.85116316078165, 30.22746562957764], [59.851120052463955, 30.243279933929447], [59.84347822095314, 30.22772312164307]],
        author: 'SVTLNV',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Новознаменка, запад',
        year: 2014,
        url: './maps/parks/novoznamenka_2014.webp',
        bounds: [[59.85326462355383, 30.101037025451664], [59.85022554227052, 30.132408142089847], [59.84259428520911, 30.097217559814457]],
        types: ['ORIENT', 'PARK'],
        author: 'ZCHNV',
        owner: 'ZCHNV',
    },
    {
        name: 'Новознаменка, восток',
        year: 2021,
        url: './maps/parks/novoznamenka_2021.webp',
        bounds: [[59.84954656065081, 30.131399631500248], [59.84733708013794, 30.148158073425297], [59.845310695897346, 30.12912511825562]],
        types: ['ORIENT', 'PARK'],
        author: 'ZCHNV',
        owner: 'ZCHNV',
    },
    {
        name: 'Петергоф, Английский парк',
        year: 2010,
        url: './maps/parks/english_2010.webp',
        bounds: [[59.88594413724038, 29.86993789672852], [59.884049301223534, 29.896545410156254], [59.87063163340102, 29.866118431091312]],
        types: ['ORIENT', 'PARK'],
        author: 'ZCHNV',
        owner: 'ZCHNV',
    },
    {
        name: 'Петергоф, Сергиевка',
        year: 1989,
        info: 'Карта фотоквеста.',
        url: './maps/parks/sergievka_1989.webp',
        bounds: [[59.899850648980106, 29.820370674133304], [59.8984946973319, 29.853544235229496], [59.885491970278125, 29.821143150329593]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Петергоф, Знаменка',
        year: 2023,
        info: 'Карта фотоквеста.',
        url: './maps/parks/peterhof_znamenka_2023.webp',
        bounds: [[59.88422156350759, 29.948644638061527], [59.882154357168154, 29.97696876525879], [59.87274263673272, 29.945297241210938]],
        author: ['SHRNN','RYLOV_V'],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Петергоф, Александрийский парк',
        url: './maps/parks/aleksandrijsky.webp',
        bounds: [[59.87819185228175, 29.919676780700687], [59.87765343201456, 29.946413040161136], [59.86332825143852, 29.918217658996586]],
        author: ['FDRV_L','LSNNKV','NKFRV','BLZRV_V'],
        owner: 'GLTV_YU',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сосновая поляна',
        year: 2015,
        url: './maps/parks/sosnovaya_poljana_2015.webp',
        bounds: [[59.8368373490284, 30.12556314468384], [59.83567290383133, 30.142879486083988], [59.825784260738835, 30.122966766357425]],
        author: ['SHKLV','BRDR'],
        owner: 'SHKLV',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Южно-Приморский парк',
        year: 2021,
        url: './maps/parks/yuzhno_promorsky_2021.jpg',
        bounds: [[59.85716544875492, 30.1600456237793], [59.85613102033116, 30.174851417541507], [59.847466419624396, 30.157384872436523]],
        types: ['ORIENT', 'PARK'],
        author: 'ZCHNV',
        owner: 'ZCHNV',
    },
    {
        name: 'Нижне-Ивановский сквер',
        year: 2020,
        url: './maps/parks/ivanovka_2020.webp',
        bounds: [[59.844922650798985, 30.158393383026127], [59.8439417388524, 30.16927242279053], [59.83431433296779, 30.1545524597168]],
        types: ['ORIENT', 'PARK'],
        author: 'ZCHNV',
        owner: 'ZCHNV',
    },
    {
        name: 'парк Литания',
        year: 2021,
        url: './maps/parks/litania_2021.webp',
        bounds: [[59.8477358752735, 30.147514343261722], [59.84629156750396, 30.161354541778568], [59.83768909333919, 30.143458843231205]],
        types: ['ORIENT', 'PARK'],
        author: 'ZCHNV',
        owner: 'ZCHNV',
    },
    {
        name: 'Полежаевский парк, юг',
        year: 2021,
        url: './maps/parks/polezhaevsky_south_2021.webp',
        bounds: [[59.840610734212255, 30.184464454650882], [59.839176898218604, 30.20021438598633], [59.827779479675755, 30.179936885833744]],
        types: ['ORIENT', 'PARK'],
        author: 'ZCHNV',
        owner: 'ZCHNV',
    },
    {
        name: 'Гатчина - Приоратский парк',
        year: 2021,
        url: './maps/parks/gatchina_prioratsky_2021.webp',
        bounds: [[59.56522340529709, 30.11159420013428], [59.562527651928654, 30.137000083923343], [59.544869479437935, 30.1030969619751]],
        author: ['DBRTSV_V','KTS_JU'],
        owner: 'SHEIN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Гатчина - парк Зверинец',
        year: 1986,
        url: './maps/parks/gatchina_zverinets_1986.webp',
        link: './original_maps/parks/gatchina_zverinets_1986_full.jpg',
        bounds: [[59.5939719186284, 30.07962226867676], [59.591712909974746, 30.124168395996097], [59.563245091244305, 30.073528289794925]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Гатчина - парк Зверинец',
        year: 2005,
        url: './maps/parks/gatchina_zverinets_2005.webp',
        bounds: [[59.58639060698327, 30.08018016815186], [59.58306645580455, 30.124039649963382], [59.56650598635047, 30.074558258056644]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк 300-летя СПб',
        year: 2022,
        url: './maps/parks/300_let_spb_2022.webp',
        bounds: [[59.987976165748115, 30.18676042556763], [59.9856148796975, 30.213110446929935], [59.97932445028676, 30.18249034881592]],
        types: ['ORIENT', 'PARK'],
        author: ['TKMKV_K','TKMKVA_P','IVNVA_G'],
        owner: 'SFSO_SPB',
    },
    {
        name: 'Куракина дача',
        year: 2023,
        url: './maps/parks/kurakina_dacha_2023.webp',
        bounds: [[59.87711500302675, 30.447857379913334], [59.876005811825685, 30.46041011810303], [59.86784188771747, 30.44393062591553]],
        types: ['ORIENT', 'PARK'],
        author: 'ZCHNV',
        owner: 'ZCHNV',
    },
    {
        name: 'Ладожский парк',
        year: 2024,
        url: './maps/parks/ladozhsky_park_2024.webp',
        bounds: [[59.94731707739835, 30.452792644500736], [59.945898585833646, 30.466396808624268], [59.939589861695225, 30.44942378997803]],
        author: 'RDNV_I',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Политеха',
        year: 2022,
        url: './maps/parks/politekh_2022.webp',
        bounds: [[60.009649191555134, 30.36827087402344], [60.00945612827708, 30.385394096374515], [60.00235490683813, 30.367970466613773]],
        types: ['ORIENT', 'PARK'],
        author: 'ZCHNV',
        owner: 'SFSO_SPB',
    },
    {
        name: 'Яблоновский сад',
        year: 2024,
        url: './maps/parks/yablonovsky_sad_2024.webp',
        bounds: [[59.93024816649769, 30.452105998992923], [59.928850448435995, 30.473091602325443], [59.9221835982304, 30.449767112731937]],
        author: 'RYLOV_V',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Крестовский о-в - юг',
        year: 2023,
        url: './maps/parks/krestovsky_south_2023.webp',
        bounds: [[59.97251741755084, 30.24821519851685], [59.97133624417131, 30.26769876480103], [59.96627819811851, 30.244867801666263]],
        author: 'CHSNKV',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Крестовский о-в',
        year: 2021,
        url: './maps/parks/krestovsky_2021.jpg',
        bounds: [[59.97625394315225, 30.23162841796875], [59.974686371680654, 30.249352455139164], [59.969854348897655, 30.229310989379886]],
        owner: 'GLFSTRM',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Северомуринский парк',
        year: 1999,
        url: './maps/parks/severomurinsky_1999.webp',
        link: './original_maps/parks/severomurinsky_1999_full.jpg',
        bounds: [[60.035745257125406, 30.36558866500855], [60.03470566842663, 30.39204597473145], [60.02675226833321, 30.36380767822266]],
        author: ['SHRNN','FRSHLVA'],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Муринский парк - центр',
        year: 2014,
        url: './maps/parks/murinsky_center_2014.webp',
        bounds: [[60.031222271957226, 30.39024353027344], [60.03017182186756, 30.410585403442386], [60.02412572517976, 30.389170646667484]],
        author: ['SHRNN','FRSHLVA'],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Муринский парк - запад',
        year: 2019,
        url: './maps/parks/murinsky_north_2019.webp',
        bounds: [[60.036527606425715, 30.366189479827884], [60.0340411719127, 30.38573741912842], [60.03137233352936, 30.364451408386234]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Муринский парк - восток',
        year: 2023,
        url: './maps/parks/murinsky_east_2023.webp',
        bounds: [[60.025712396620634, 30.40728092193604], [60.02525141209402, 30.430841445922855], [60.017563815481694, 30.407409667968754]],
        types: ['ORIENT', 'PARK'],
        author: ['SHRNN','CHGRVSKY_M'],
        owner: 'SHRNN',
    },
    {
        name: 'Новоорловский лесопарк',
        year: 2015,
        url: './maps/parks/novoorlovsky_2015.webp',
        bounds: [[60.05858651266601, 30.269222259521488], [60.05674437067704, 30.294284820556644], [60.046953588726694, 30.266175270080566]],
        info: 'Ковидный полигон от O-Time',
        author: 'DBRTSV_V',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Невский лесопарк',
        year: 2007,
        url: './maps/parks/nevsky_2007.webp',
        bounds: [[59.837419556356814, 30.56602478027344], [59.834551547747445, 30.59846878051758], [59.825493056630116, 30.56233406066895]],
        author: ['VLKV_K','URVNTSV'],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Колпино, Чухонка',
        year: 2020,
        url: './maps/parks/kolpino_chuhonka_2020.jpg',
        bounds: [[59.73920630976902, 30.589885711669925], [59.73907654981489, 30.60121536254883], [59.730143528979355, 30.589885711669925]],
        types: ['ORIENT', 'PARK'],
        author: ['SRBRNTSKY','BBCH_A'],
        owner: 'BBCH_A',
    },
    {
        name: 'Колпино, Никольский сквер',
        year: 2019,
        url: './maps/parks/kolpino_nikolsky_skver_2019.jpg',
        bounds: [[59.74800718414132, 30.594584941864017], [59.74740179281272, 30.6049919128418], [59.740493068716916, 30.592632293701175]],
        types: ['ORIENT', 'PARK'],
        author: 'DRBSHV',
        owner: 'BBCH_A',
    },
    {
        name: 'Павловский парк',
        year: 2012,
        url: './maps/parks/pavlovsk_2012.webp',
        bounds: [[59.703265193681084, 30.442900657653812], [59.70060215436709, 30.486330986022953], [59.68739208083911, 30.439124107360843]],
        owner: 'SFSO_SPB',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Павловск, парк Мариенталь',
        year: 2022,
        url: './maps/parks/pavlovsk_mariental_2022.webp',
        bounds: [[59.68612493929105, 30.442535877227787], [59.684543652697684, 30.45796394348145], [59.679398539446694, 30.439789295196533]],
        author: 'SHRNN',
        owner: 'EGRV_EGR',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Павловский, сад Миранда',
        year: 2022,
        url: './maps/parks/pavlovsk_sad_miranda_2020.webp',
        bounds: [[59.69078171961171, 30.43049812316895], [59.69061928468438, 30.44324398040772], [59.685215167081445, 30.43047666549683]],
        author: 'SHRNN',
        owner: 'EGRV_EGR',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Пушкин, Буферный парк',
        year: 2020,
        url: './maps/parks/pushkin_buferny_2020.webp',
        bounds: [[59.74850446167098, 30.39279699325562], [59.748947681057956, 30.416679382324222], [59.74082826669703, 30.393354892730716]],
        author: 'SHRNN',
        owner: 'EGRV_EGR',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Пушкин, Баболовский парк',
        year: 2019,
        url: './maps/parks/pushkin_babolovsky_2019.webp',
        bounds: [[59.71739957067682, 30.344924926757816], [59.71471601335688, 30.380845069885257], [59.70421777418931, 30.34037590026856]],
        author: 'NGN',
        owner: 'EGRV_EGR',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Пушкин, Нижний (Отдельный) парк',
        year: 2019,
        url: './maps/parks/pushkin_nizhny_2019.webp',
        bounds: [[59.71269238223668, 30.416615009307865], [59.71050629026535, 30.440797805786136], [59.70025572717896, 30.41152954101563]],
        author: ['SHRNN', 'RDNV_B','NGN'],
        owner: 'SFSO_SPB',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Пушкин, Александровский дворец',
        url: './maps/parks/pushkin_aleksandrovsky_palace.webp',
        bounds: [[59.72503787398899, 30.381939411163334], [59.724908059040835, 30.396316051483158], [59.71544102788412, 30.38200378417969]],
        owner: 'EGRV_EGR',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сестрорецк, парк "Дубки"',
        year: 1985,
        url: './maps/parks/sestroretsk_dubki_1985.webp',
        link: './original_maps/parks/sestroretsk_dubki_1985_full.jpg',
        bounds: [[60.09512961893958, 29.917917251586918], [60.09416678778534, 29.946155548095707], [60.08676274626006, 29.9168872833252]],
        author: 'VLKV_K',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сестрорецк, парк "Дубки"',
        year: 2020,
        url: './maps/parks/sestroretsk_dubki_2020.webp',
        bounds: [[60.09616730546285, 29.921779632568363], [60.09412399463667, 29.94609117507935], [60.0876936926033, 29.918518066406254]],
        author: 'DBRTSV_V',
        owner: 'SFSO_SPB',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сестрорецк, сквер Генерала Андреева',
        year: 2023,
        url: './maps/parks/sestroretsk_skver_generala_andreeva_2023.webp',
        bounds: [[60.109536630930116, 29.96332168579102], [60.10845124409252, 29.972677230834964], [60.106504943636345, 29.96155142784119]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сестрорецк, сквер Пограничников',
        url: './maps/parks/sestroretsk_skver_pogranichnikov.webp',
        bounds: [[60.11275515399254, 29.971089363098148], [60.110199608247775, 29.985723495483402], [60.105922100518434, 29.96630430221558]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Охтинский (Ржевский) лесопарк',
        year: 1990,
        url: './maps/parks/rzhevsky_1990.webp',
        link: './original_maps/parks/rzhevsky_1990_full.jpg',
        bounds: [[59.97910973876822, 30.492811203002933], [59.97554532414374, 30.56233406066895], [59.94628545318887, 30.48585891723633]],
        author: 'RYLOV_V',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Ржевский лесопарк',
        year: 2024,
        url: './maps/parks/rzhevsky_2024.webp',
        link: './original_maps/parks/rzhevsky_2024_full.jpg',
        bounds: [[59.98001151778878, 30.49615859985352], [59.972538893040515, 30.55855751037598], [59.95165814413096, 30.484828948974613]],
        author: 'RDNV_I',
        owner: 'RDNV_I',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сосновый Бор',
        url: './maps/parks/sosnovy_bor.webp',
        bounds: [[59.90344472915467, 29.072313308715824], [59.901314153719255, 29.097247123718265], [59.88372630703435, 29.06510353088379]],
        author: ['DBRTSV_V','PPV_D'],
        owner: 'YUVNT',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Новое Девяткино',
        year: 2020,
        url: './maps/parks/new_devjatkino_2020.webp',
        bounds: [[60.05669081849984, 30.473477840423588], [60.05640163524139, 30.47938942909241], [60.05402381016011, 30.472801923751835]],
        author: 'TKMKVA_P',
        owner: 'SHEIN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Всеволожск, парк Песчанка',
        year: 2021,
        url: './maps/parks/vsevolozhsk_peschanka_2021.webp',
        bounds: [[60.034400216043906, 30.64094424247742], [60.0335427907553, 30.649087429046634], [60.03056842429522, 30.63917398452759]],
        author: 'DBRTSV_V',
        owner: 'INGR',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Тосно',
        year: 2018,
        url: './maps/parks/tosno_2018.webp',
        bounds: [[59.53418744665217, 30.86621761322022], [59.533436748788205, 30.882761478424076], [59.52739791868607, 30.865123271942142]],
        author: 'RYLOV_V',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Приозерск, крепость Карела',
        year: 2020,
        url: './maps/parks/priozersk_karela.webp',
        info: 'Карта фотоквеста.',
        bounds: [[61.032226926267995, 30.121947526931766], [61.03167093183312, 30.12731194496155], [61.02892199371037, 30.12032747268677]],
        author: 'MKHLV_A',
        owner: 'VST_PRZRSK',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Приозерск, КЦ "Карнавал"',
        year: 2023,
        url: './maps/parks/priozersk_karnaval_2023.webp',
        author: 'PSHKV',
        bounds: [[61.040202035371664, 30.140733718872074], [61.04305388390088, 30.149917602539066], [61.0382227328721, 30.142976045608524]],
        owner: 'VST_PRZRSK',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Приозерск, набережная',
        year: 2020,
        url: './maps/parks/priozersk_naberezhnaja_2020.webp',
        author: 'PSHKV',
        bounds: [[61.03406111916813, 30.140036344528202], [61.03340643359281, 30.15008926391602], [61.031852800244216, 30.139381885528568]],
        owner: 'VST_PRZRSK',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Зеленогорск, Центральный парк',
        year: 2024,
        url: './maps/parks/zelenogorsk_tspko_2024.webp',
        bounds: [[60.19371335499176, 29.696130752563477], [60.19243341635954, 29.70834016799927], [60.18712113764485, 29.693555831909183]],
        owner: 'SFSO_SPB',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Всеволожск, Румболовский парк',
        year: 2014,
        url: './maps/parks/vsevolozhsk_rumbolovo_2014.webp',
        bounds: [[60.04215354531248, 30.63297271728516], [60.04129632127576, 30.651855468750004], [60.03469495084697, 30.631041526794437]],
        author: ['KZNTSV_S','MSPN','GRBTNKV'],
        owner: 'WN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'парк Есенина',
        year: 1999,
        url: './maps/parks/esenina_1999.webp',
        link: './original_maps/parks/esenina_1999_full.jpg',
        bounds: [[59.91332106580055, 30.47620296478272], [59.915429358415565, 30.485000610351566], [59.90658654047794, 30.482554435729984]],
        author: 'FDRV_L',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'парк Есенина',
        year: 2014,
        url: './maps/parks/esenina_2014.webp',
        bounds: [[59.91496683629783, 30.47916412353516], [59.914568846991216, 30.49088001251221], [59.907264358045, 30.478713512420658]],
        author: 'DRBSHV',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Шуваловский парк',
        year: 1988,
        url: './maps/parks/shuvalovsky_park_1988.webp',
        link: './original_maps/parks/shuvalovsky_park_1988_full.jpg',
        bounds: [[60.08522181178067, 30.27892112731934], [60.082739043608704, 30.322523117065433], [60.0687806949504, 30.272741317749027]],
        author: ['VLKV_A','SHVR'],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Шуваловский парк',
        year: 2004,
        url: './maps/parks/shuvalovsky_2004.webp',
        link: './original_maps/parks/shuvalovsky_2004_full.jpg',
        bounds: [[60.08877441342627, 30.29316902160645], [60.08644172418347, 30.32308101654053], [60.068395257960205, 30.28587341308594]],
        author: ['DBRTSV_V','DRBSHV'],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Малиновка',
        year: 2003,
        url: './maps/parks/malinovka_2003.webp',
        link: './original_maps/parks/malinovka_2003_full.jpg',
        bounds: [[59.944598248579176, 30.462234020233158], [59.94790809763683, 30.47519445419312], [59.94125582542067, 30.465517044067386]],
        author: 'DRBSHV',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'парк Бабушкина',
        year: 1999,
        url: './maps/parks/babushkina_1999.webp',
        link: './original_maps/parks/babushkina_1999_full.jpg',
        bounds: [[59.88530894856813, 30.433888435363773], [59.884652215311405, 30.44545412063599], [59.88141142348299, 30.433030128479007]],
        author: 'DRBSHV',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'сад Бенуа',
        url: './maps/parks/sad_benua.webp',
        bounds: [[60.021145149902296, 30.367112159729007], [60.02122020365796, 30.374364852905277], [60.01642714320145, 30.367026329040527]],
        author: 'SHRNN',
        owner: 'SHRNN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сквер Маршала Говорова',
        url: './maps/parks/skver_govorova.webp',
        bounds: [[59.9209683666848, 30.31458377838135], [59.92100063004424, 30.317759513854984], [59.919871393799674, 30.314455032348636]],
        author: 'SHRNN',
        owner: 'SHRNN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Юсуповский сад',
        url: './maps/parks/yusupovsky_sad.webp',
        bounds: [[59.924947277727036, 30.309712886810306], [59.9245279014899, 30.317008495330814], [59.921559856624285, 30.309004783630375]],
        author: 'SHRNN',
        owner: 'SHRNN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Польский сад',
        url: './maps/parks/polsky_sad.webp',
        bounds: [[59.91943044350125, 30.309884548187256], [59.91907552802983, 30.31357526779175], [59.91696746701024, 30.30885457992554]],
        author: 'SHRNN',
        owner: 'VOLKOV_AM',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Измайловский сад',
        url: './maps/parks/izmajlovsky_sad.webp',
        bounds: [[59.92028007421066, 30.311944484710697], [59.919935922620226, 30.314497947692875], [59.91864532236978, 30.311236381530765]],
        author: 'SHRNN',
        owner: 'SHRNN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Лопухинский сад',
        url: './maps/parks/lopukhinsky_sad.webp',
        bounds: [[59.97889502585721, 30.302932262420658], [59.97830455817192, 30.309455394744877], [59.97581374221907, 30.301988124847416]],
        author: 'LMVA',
        owner: 'SHRNN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Пионерская пл, ТЮЗ',
        url: './maps/parks/tuz_2023.webp',
        bounds: [[59.923721393827826, 30.331149101257328], [59.92266752760656, 30.340633392333988], [59.91855928056855, 30.328745841979984]],
        author: 'SHRNN',
        owner: 'VOLKOV_AM',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Кириши, сквер Спортивный',
        year: 2023,
        url: './maps/parks/kirishi_skver_sportivny_2023.webp',
        bounds: [[59.454520376667574, 32.026691436767585], [59.45308085117713, 32.0353388786316], [59.44722396790875, 32.02255010604859]],
        owner: 'MLV_AL',
        types: ['ORIENT', 'PARK'],
    },
];
