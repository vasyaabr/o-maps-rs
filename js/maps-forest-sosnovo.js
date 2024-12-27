// types can be ORIENT, ROGAINE, SPRINT, CITY, RELIEF
let sosnovoMaps = [
    // --- СОСНОВО - ПЕТЯЯРВИ - ЛОСЕВО ---
    {
        name: 'Сосново, юг',
        year: 1989,
        url: './maps/forest/sosnovo/sosnovo_south_1989.webp',
        link: './original_maps/forest/sosnovo/sosnovo_south_1989_full.jpg',
        bounds: [[60.55445209468727, 30.23523330688477], [60.54968381690081, 30.297031402587894], [60.52874571620552, 30.22725105285645]],
        author: ['MLVA_M','KAZNTSVA_O'],
        types: ['ORIENT'],
    },
    {
        name: '69км, Игора',
        year: 1974,
        url: './maps/forest/sosnovo/69_km_1974.webp',
        link: './original_maps/forest/sosnovo/69_km_1974_full.jpg',
        bounds: [[60.52752109355479, 30.196094512939457], [60.52460715000577, 30.235576629638675], [60.51218827743973, 30.19051551818848]],
        author: 'SHRNN',
        types: ['ORIENT'],
    },
    {
        name: '69км',
        year: 1989,
        url: './maps/forest/sosnovo/69_km_1989.webp',
        link: './original_maps/forest/sosnovo/69_km_1989_full.jpg',
        bounds: [[60.54314211550559, 30.23669242858887], [60.53841438550446, 30.297718048095707], [60.509484218309254, 30.229053497314457]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S'],
        types: ['ORIENT'],
    },
    {
        name: '69км, запад',
        year: 1994,
        url: './maps/forest/sosnovo/69_km_west_1994.webp',
        link: './original_maps/forest/sosnovo/69_km_west_1994_full.jpg',
        bounds: [[60.54103160709596, 30.186395645141605], [60.540229577809804, 30.236349105834964], [60.504624794985865, 30.1820182800293]],
        author: 'SHRNN',
        types: ['ORIENT'],
    },
    {
        name: 'Сосново',
        year: 1990,
        url: './maps/forest/sosnovo/sosnovo_1990.webp',
        link: './original_maps/forest/sosnovo/sosnovo_1990_full.jpg',
        bounds: [[60.546096596045366, 30.18879890441895], [60.54335315877627, 30.25720596313477], [60.51003349858368, 30.18004417419434]],
        author: 'LVCHV',
        types: ['ORIENT'],
    },
    {
        name: 'Колосково',
        year: 1987,
        url: './maps/forest/sosnovo/koloskovo_1987.webp',
        link: './original_maps/forest/sosnovo/koloskovo_1987_full.jpg',
        bounds: [[60.632964120663054, 30.16794204711914], [60.628249519190376, 30.268020629882816], [60.57566873393276, 30.15403747558594]],
        author: ['ARTMV','BLZRV_V','URVNTSV','MNV_Y','PRSCHPA'],
        types: ['ORIENT'],
    },
    {
        name: 'Колосково',
        year: 1994,
        url: './maps/forest/sosnovo/koloskovo_1994.webp',
        link: './original_maps/forest/sosnovo/koloskovo_1994_full.jpg',
        bounds: [[60.630249099534126, 30.177898406982425], [60.62702866180913, 30.224289894104007], [60.601063980517786, 30.170903205871582]],
        author: 'MLVA_M',
        types: ['ORIENT'],
    },
    {
        name: 'Замостье',
        year: 1991,
        url: './maps/forest/sosnovo/zamostie_1991.webp',
        link: './original_maps/forest/sosnovo/zamostie_1991_full.jpg',
        bounds: [[60.52663426892839, 30.328273773193363], [60.5241425840469, 30.374622344970707], [60.49295920575224, 30.32381057739258]],
        author: ['KAZNTSVA_O','MLVA_M','KAZNTSV_S'],
        types: ['ORIENT'],
    },
    {
        name: 'Замостье',
        year: 1999,
        url: './maps/forest/sosnovo/zamostie_1999.webp',
        link: './original_maps/forest/sosnovo/zamostie_1999_full.jpg',
        bounds: [[60.538562137521424, 30.337886810302734], [60.538688781570556, 30.37153244018555], [60.51373033511651, 30.336771011352543]],
        author: ['KAZNTSVA_O','MLVA_M','KAZNTSV_S'],
        types: ['ORIENT'],
    },
    {
        name: 'Замостье',
        year: 2006,
        url: './maps/forest/sosnovo/zamostie_2006.webp',
        link: './original_maps/forest/sosnovo/zamostie_2006_full.jpg',
        bounds: [[60.54394407261173, 30.314283370971683], [60.538118879447, 30.377626419067386], [60.51700432381264, 30.306472778320316]],
        author: ['SHRNN','RYLOV_V'],
        types: ['ORIENT'],
    },
    {
        name: 'Игора',
        year: 2019,
        url: './maps/forest/sosnovo/69_km_2019.webp',
        bounds: [[60.52724660281343, 30.230169296264652], [60.525789651465296, 30.25621891021729], [60.50844901094424, 30.225105285644535]],
        author: ['DBRTSV_V','KAZNTSVA_O'],
        owner: 'SHLKHN_AN',
        types: ['ORIENT'],
    },
    {
        name: 'Игора, север',
        year: 2019,
        url: './maps/forest/sosnovo/igora_north_2019.webp',
        bounds: [[60.54225571873845, 30.220599174499515], [60.540060727006335, 30.24167060852051], [60.528365665856704, 30.216135978698734]],
        author: 'RYLOV_V',
        owner: 'SHLKHN_AN',
        types: ['ORIENT'],
    },
    {
        name: 'Игора',
        year: 2023,
        url: './maps/forest/sosnovo/igora_2023.webp',
        bounds: [[60.51935927881255, 30.20602941513062], [60.5171099308425, 30.22598505020142], [60.51230446242403, 30.20278930664063]],
        author: ['IVNVA_G','TKMKVA_P','CHSNKV'],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Сосново, оз Уловное',
        year: 1981,
        info: 'Первый чемпионат СССР.',
        url: './maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981.webp',
        link: './original_maps/forest/sosnovo/sosnovo_ulovnoe_oz_1981_full.jpg',
        bounds: [[60.60475042664144, 30.21566390991211], [60.60226475491396, 30.262098312377933], [60.58557630901257, 30.209827423095707]],
        author: ['ARTMV','PRSCHPA','BLZRV_V','SRKN_A','TRSV','SNTSNA','DRSVNA','FDRV_L','KRCHKN_V'],
        types: ['ORIENT'],
    },
    {
        name: 'Сосново, оз Уловное',
        year: 2023,
        url: './maps/forest/sosnovo/sosnovo_ulovnoe_oz_2023.webp',
        bounds: [[60.62879678508205, 30.18914222717285], [60.62345002044758, 30.264759063720707], [60.588611213413415, 30.17704010009766]],
        author: 'MKHLV_A',
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Сосново, Чёрный лес',
        year: 1974,
        url: './maps/forest/sosnovo/sosnovo_black_forest_1974.webp',
        link: './original_maps/forest/sosnovo/sosnovo_black_forest_1974_full.jpg',
        bounds: [[60.54495704265323, 30.218925476074222], [60.55179376102548, 30.26218414306641], [60.51341347994116, 30.23600578308106]],
        author: ['SHRNN','GRZNVCH'],
        types: ['ORIENT'],
    },
    {
        name: 'Сосново, Чёрный лес',
        year: 1986,
        url: './maps/forest/sosnovo/sosnovo_black_forest_1986.webp',
        link: './original_maps/forest/sosnovo/sosnovo_black_forest_1986_full.jpg',
        bounds: [[60.54052506459614, 30.245018005371097], [60.53744342689857, 30.319004058837894], [60.508470137955726, 30.241327285766605]],
        author: 'SHRNN',
        types: ['ORIENT'],
    },
    {
        name: 'Сосново, юг',
        year: 2021,
        url: './maps/forest/sosnovo/sosnovo_south_2012.webp',
        bounds: [[60.53915313884433, 30.23669242858887], [60.534931464055, 30.27965068817139], [60.52334013623886, 30.230298042297367]],
        author: 'DBRTSV_V',
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Сосново, гора Каланчёвка',
        year: 2010,
        url: './maps/forest/sosnovo/sosnovo_kalanchevka_2010.webp',
        link: './original_maps/forest/sosnovo/sosnovo_kalanchevka_2010.jpg',
        bounds: [[60.59151939590076, 30.304927825927738], [60.58566061576298, 30.37058830261231], [60.56419744911603, 30.294799804687504]],
        author: ['SHRNN','RYLOV_V'],
        types: ['ORIENT'],
    },
    {
        name: 'Снегирёвка, Щучьи оз',
        year: 1978,
        url: './maps/forest/sosnovo/snegirevka_schuchji_1978.webp',
        link: './original_maps/forest/sosnovo/snegirevka_schuchji_1978_full.jpg',
        bounds: [[60.53816109476326, 30.30183792114258], [60.537147911976085, 30.359859466552738], [60.514680882049724, 30.302696228027347]],
        author: 'SPZHNKV_Y',
        owner: 'KSLV_VN',
        types: ['ORIENT'],
    },
    {
        name: 'Снегирёвка',
        year: 1991,
        url: './maps/forest/sosnovo/snegirevka_1991.webp',
        link: './original_maps/forest/sosnovo/snegirevka_1991_full.jpg',
        bounds: [[60.52488166312165, 30.276002883911136], [60.52226313556185, 30.34831523895264], [60.494206271637864, 30.27016639709473]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S'],
        types: ['ORIENT'],
    },
    {
        name: 'Снегирёвка',
        year: 1987,
        url: './maps/forest/sosnovo/snegirevka_1987.webp',
        link: './original_maps/forest/sosnovo/snegirevka_1987_full.jpg',
        bounds: [[60.55335503108095, 30.303297042846683], [60.55291197561523, 30.339131355285648], [60.53193374068237, 30.302824974060062]],
        author: ['MLVA_M','KOUKNN_M'],
        types: ['ORIENT'],
    },
    {
        name: 'Снегирёвка',
        year: 1988,
        url: './maps/forest/sosnovo/snegirevka_1988.webp',
        link: './original_maps/forest/sosnovo/snegirevka_1988_full.jpg',
        bounds: [[60.538562137521424, 30.276474952697757], [60.53816109476326, 30.33908843994141], [60.514490774894206, 30.27467250823975]],
        author: ['MLVA_M','KAZNTSVA_O','KAZNTSV_S','KOUKNN_M'],
        types: ['ORIENT'],
    },
    {
        name: 'Снегирёвка',
        year: 2004,
        url: './maps/forest/sosnovo/snegirevka_2004.webp',
        link: './original_maps/forest/sosnovo/snegirevka_2004_full.jpg',
        bounds: [[60.54189693219184, 30.323939323425297], [60.54060948889669, 30.361232757568363], [60.51459639011832, 30.32200813293457]],
        author: 'RYLOV_V',
        owner: ['ILVS','RYLOV_V'],
        types: ['ORIENT'],
    },
    {
        name: 'Снегирёвка',
        year: 2021,
        url: './maps/forest/sosnovo/snegirevka_2021.webp',
        bounds: [[60.55225793026478, 30.294713973999027], [60.54926181156153, 30.353164672851566], [60.52308672753701, 30.28913497924805]],
        author: 'DJCHKV',
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Снегирёвка',
        year: 2022,
        url: './maps/forest/sosnovo/snegirevka_2022.webp',
        bounds: [[60.51717329489512, 30.27668952941895], [60.51474425085366, 30.314712524414066], [60.50625172654163, 30.273470878601078]],
        author: 'DBRTSV_V',
        owner: 'SHLKHN_AN',
        types: ['ORIENT'],
    },
    {
        name: 'Запорожское',
        year: 2019,
        url: './maps/forest/sosnovo/zaporozhskoe_2020.webp',
        bounds: [[60.599483946158216, 30.54727077484131], [60.596302575735564, 30.585122108459476], [60.586313985618425, 30.542464256286625]],
        author: 'MKHLV_A',
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Колосково, г Смуглянка',
        year: 1981,
        url: './maps/forest/sosnovo/koloskovo_1981.webp',
        link: './original_maps/forest/sosnovo/koloskovo_1981_full.jpg',
        bounds: [[60.59569154818186, 30.18356323242188], [60.59265730907164, 30.21600723266602], [60.573138653409046, 30.175409317016605]],
        author: 'BLZRV_V',
        types: ['ORIENT'],
    },
    {
        name: 'Кривко, оз Уловное',
        year: 1992,
        url: './maps/forest/sosnovo/krivko_ulovnoe_1992.webp',
        link: './original_maps/forest/sosnovo/krivko_ulovnoe_1992_full.jpg',
        bounds: [[60.61582829627545, 30.21471977233887], [60.614017345690115, 30.26063919067383], [60.575753066539036, 30.2094841003418]],
        author: 'MLVA_M',
        types: ['ORIENT'],
    },
    {
        name: 'Кривко, оз Уловное',
        year: 2021,
        url: './maps/forest/sosnovo/krivko_2021.webp',
        bounds: [[60.628838882073644, 30.19051551818848], [60.62332370820346, 30.245618820190433], [60.59678717557373, 30.177726745605472]],
        author: ['DJCHKV','PPV_D'],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Кривко, оз Туманное',
        year: 2009, //уже в 2009 использовалась для 50-летия ориентрования
        info: 'Год и авторы - не точно',
        url: './maps/forest/sosnovo/krivko_ulovnoe_2023.webp',
        link: './original_maps/forest/sosnovo/krivko_ulovnoe_2023_full.jpg',
        bounds: [[60.629722906202076, 30.178756713867188], [60.62408157424831, 30.258493423461918], [60.58751530860598, 30.165367126464847]],
        author: ['ARTMV','BLZRV_V','VLKV_K','SKLVA','YKVLVA'],
        owner: 'RDNV_I',
        types: ['ORIENT'],
    },
    {
        name: 'Раздолье',
        year: 2024,
        url: './maps/forest/sosnovo/razdolje_2024.webp',
        bounds: [[60.594343032664085, 30.117559432983402], [60.59010748493463, 30.155110359191898], [60.583510724895596, 30.112752914428714]],
        author: 'MKHLV_A',
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Петяярви - Ягодное',
        year: 1985,
        url: './maps/forest/sosnovo/petjajarvy_yagodnoe_1985.webp',
        link: './original_maps/forest/sosnovo/petjajarvy_yagodnoe_1985_full.jpg',
        bounds: [[60.637088831496946, 30.015935897827152], [60.63161716201196, 30.102453231811527], [60.60946846339769, 30.008382797241214]],
        author: ['LVCHV','SVTKN'],
        types: ['ORIENT'],
    },
    {
        name: 'Петяярви',
        year: 1995,
        url: './maps/forest/sosnovo/petjajarvy_1995.webp',
        link: './original_maps/forest/sosnovo/petjajarvy_1995_full.jpg',
        bounds: [[60.63191181402526, 30.109448432922367], [60.6278706373631, 30.16159057617188], [60.61370147180539, 30.104727745056156]],
        author: ['LVCHV','SVTKN','KAZNTSVA_O'],
        types: ['ORIENT'],
    },
    {
        name: 'Петяярви - кентавр',
        url: './maps/forest/sosnovo/petjajarvy_kentavr.webp',
        link: './original_maps/forest/sosnovo/petjajarvy_kentavr_full.jpg',
        bounds: [[60.635110719708734, 30.137214660644535], [60.632501109973745, 30.17905712127686], [60.619197236209565, 30.133953094482425]],
        author: 'TRSV',
        types: ['ORIENT'],
    },
    {
        name: 'Петровское',
        year: 2014,
        url: './maps/forest/sosnovo/petjajarvy_kentavr_2014.webp',
        bounds: [[60.635300118645006, 30.13858795166016], [60.63195390695019, 30.174379348754886], [60.62433419230599, 30.13455390930176]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Петровское, "Связист"',
        year: 2023,
        url: './maps/forest/sosnovo/petrovskoe_svjazist_2023.webp',
        bounds: [[60.66458042842836, 30.1730489730835], [60.65875593567393, 30.23197174072266], [60.64523148134875, 30.165109634399418]],
        author: ['TKMKV_K','KVZN'],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Петровское, лагерь "Связист"',
        year: 2010,
        url: './maps/forest/sosnovo/petrovskoe_svjazist_2010.webp',
        bounds: [[60.64896547114925, 30.197918415069584], [60.647703325825276, 30.214891433715824], [60.64274892755333, 30.196609497070316]],
        author: 'SHRNN',
        owner: 'PPLVSKY',
        types: ['ORIENT'],
    },
    {
        name: 'Петяярви, запад',
        year: 2019,
        url: './maps/forest/sosnovo/petyajarvi_west_2019.webp',
        bounds: [[60.632080185395296, 30.048379898071293], [60.630564811411745, 30.083227157592773], [60.61342771193733, 30.044517517089847]],
        author: 'DJCHKV',
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Петяярви, юг',
        year: 2019,
        url: './maps/forest/sosnovo/petyajarvi_south_2019.webp',
        bounds: [[60.61098482874486, 30.08786201477051], [60.609426341120916, 30.123052597045902], [60.59857802491448, 30.08563041687012]],
        author: 'DJCHKV',
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Петяярви',
        year: 2014,
        url: './maps/forest/sosnovo/petyajarvi.webp',
        bounds: [[60.635110719708734, 30.071811676025394], [60.62888097901027, 30.160732269287113], [60.61443850605954, 30.068721771240238]],
        types: ['ORIENT'],
    },
    {
        name: 'Петяярви',
        year: 2021,
        url: './maps/forest/sosnovo/petjajarvy_2024.webp',
        bounds: [[60.63456356097567, 30.088205337524418], [60.62723915775856, 30.161161422729496], [60.61170086539145, 30.07936477661133]],
        author: ['MKHLV_A','IVNV_P','USNKO'],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Варшко',
        year: 1988,
        url: './maps/forest/sosnovo/varshko_1988.webp',
        link: './original_maps/forest/sosnovo/varshko_1988_full.jpg',
        bounds: [[60.66989935154745, 30.036277770996097], [60.663045556032735, 30.122537612915043], [60.6504273943483, 30.03499031066895]],
        author: ['VLKV_K','OVCHNNKV'],
        types: ['ORIENT'],
    },
    {
        name: 'Лосево',
        year: 1990,
        url: './maps/forest/sosnovo/losevo_1990.webp',
        link: './original_maps/forest/sosnovo/losevo_1990_full.jpg',
        bounds: [[60.69452732858858, 29.919462203979496], [60.69036795262589, 29.994564056396488], [60.67044591045741, 29.912509918212894]],
        author: ['RYLOV_V','VSLVSKY'],
        types: ['ORIENT'],
    },
    {
        name: 'Лосево',
        year: 2005,
        url: './maps/forest/sosnovo/losevo_2005.webp',
        link: './original_maps/forest/sosnovo/losevo-2005.gif',
        bounds: [[60.695241510752176, 29.892425537109375], [60.68944357380662, 30.01078605651856], [60.67120266901343, 29.88813400268555]],
        author: ['RYLOV_V','VSLVSKY','BRDR','FDRV_A','FDRV_L','SHKLV'],
        types: ['ORIENT'],
    },
    {
        name: 'Лосево',
        year: 2022,
        url: './maps/forest/sosnovo/losevo_2022.webp',
        bounds: [[60.698476137242736, 29.897747039794922], [60.68994778372843, 29.98701095581055], [60.67372506905266, 29.887275695800785]],
        author: ['KVZN','TKMKV_K'],
        owner: 'ILVS',
        types: ['ORIENT'],
    },
];
