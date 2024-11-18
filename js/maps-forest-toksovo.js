// types can be ORIENT, ROGAINE, SPRINT, CITY, RELIEF
let toksovoMaps = [
    // --- ТОКСОВО ---
    {
        name: 'оз Хепоярви, восток',
        year: 1985,
        url: './maps/forest/toksovo/hepojarvi_east_1985.webp',
        link: './original_maps/forest/toksovo/hepojarvi_east_1985_full.jpg',
        bounds: [[60.19342537315118, 30.609111785888675], [60.18996939397238, 30.662240982055668], [60.14898192089998, 30.59872627258301]],
        types: ['ORIENT'],
    },
    {
        name: 'Токсово, Малиновая гора',
        year: 1997,
        url: './maps/forest/toksovo/toksovo_malinovaya_gora_1997.webp',
        link: './original_maps/forest/toksovo/toksovo_malinovaya_gora_1997_full.jpg',
        bounds: [[60.18600096914166, 30.451011657714847], [60.18105043355454, 30.51959037780762], [60.14906736463016, 30.439338684082035]],
        types: ['ORIENT'],
    },
    {
        name: 'Сярьги',
        year: 1991,
        url: './maps/forest/toksovo/sjargi_1991.webp',
        link: './original_maps/forest/toksovo/sjargi_1991_full.jpg',
        bounds: [[60.16785958842209, 30.38775444030762], [60.162052230086715, 30.475730895996094], [60.1284690036598, 30.37324905395508]],
        types: ['ORIENT'],
    },
    {
        name: 'оз Тинускеньярви',
        year: 1984,
        url: './maps/forest/toksovo/tinjuskenjarvi_1984.webp',
        link: './original_maps/forest/toksovo/tinjuskenjarvi_1984_full.jpg',
        bounds: [[60.265022945174344, 30.547142028808597], [60.26136162888228, 30.601902008056644], [60.231204060878355, 30.5390739440918]],
        info: 'Автор: Баймаков В.М.',
        types: ['ORIENT'],
    },
    {
        name: 'Ново-Токсово - оз Лассылампи',
        year: 1984,
        url: './maps/forest/toksovo/lassylampi_1984.webp',
        link: './original_maps/forest/toksovo/lassylampi_1984_full.jpg',
        bounds: [[60.243219301102904, 30.563192367553714], [60.24108926071485, 30.607137680053714], [60.212192237555385, 30.555381774902347]],
        info: 'Автор: Баймаков В.М.',
        types: ['ORIENT'],
    },
    {
        name: 'Школьное оз',
        year: 2007,
        url: './maps/forest/toksovo/schkolnoe_oz_2007.webp',
        bounds: [[60.1471875512765, 30.572247505187992], [60.14434626578051, 30.603919029235843], [60.12932396394884, 30.56602478027344]],
        types: ['ORIENT'],
    },
    {
        name: 'Энколово - север',
        url: './maps/forest/toksovo/enkolovo_1985.webp',
        bounds: [[60.13252986721134, 30.408439636230472], [60.13037126003232, 30.444145202636722], [60.113375298370904, 30.406551361083984]],
        types: ['ORIENT'],
    },
    {
        name: 'Энколово - юг',
        url: './maps/forest/toksovo/enkolovo_south.webp',
        bounds: [[60.10963287040107, 30.423932075500492], [60.11602681846594, 30.4656457901001], [60.10133385603849, 30.426807403564457]],
        types: ['ORIENT'],
    },
    {
        name: 'Токсово',
        year: 1989,
        url: './maps/forest/toksovo/toksovo_1989.webp',
        bounds: [[60.16275685400291, 30.473070144653324], [60.160194512798185, 30.5116081237793], [60.14661076881676, 30.46920776367188]],
        types: ['ORIENT'],
    },
    {
        name: 'Токсово - юг,запад',
        year: 1983,
        url: './maps/forest/toksovo/toksovo_south_west_1983.webp',
        link: './original_maps/forest/toksovo/toksovo_south_west_1983_full.jpg',
        bounds: [[60.15453530155787, 30.44998168945313], [60.1514169802039, 30.51066398620606], [60.113760209697055, 30.441055297851566]],
        types: ['ORIENT'],
    },
    {
        name: 'Токсово - юг,восток',
        year: 1982,
        url: './maps/forest/toksovo/toksovo_south_1982.webp',
        link: './original_maps/forest/toksovo/toksovo_south_1982_full.jpg',
        bounds: [[60.14898192089998, 30.47590255737305], [60.146247604300065, 30.531435012817386], [60.112990382545355, 30.467834472656254]],
        types: ['ORIENT'],
    },
    {
        name: 'Токсово - запад Хепоярви',
        year: 1989,
        url: './maps/forest/toksovo/toksovo_hepojarvi_west_1987.webp',
        bounds: [[60.19636906842321, 30.543708801269535], [60.192700074357255, 30.589456558227543], [60.15790959006861, 30.53400993347168]],
        types: ['ORIENT'],
    },
    {
        name: 'Токсово - оз Кривое',
        year: 1987,
        url: './maps/forest/toksovo/toksovo_krivoe_1987.webp',
        link: './original_maps/forest/toksovo/toksovo_krivoe_1987_full.jpg',
        bounds: [[60.15968202058385, 30.522980690002445], [60.157973655487055, 30.557441711425785], [60.13960312206087, 30.51886081695557]],
        types: ['ORIENT'],
    },
    {
        name: 'Осельки',
        year: 1985,
        url: './maps/forest/toksovo/oselki_1985.webp',
        link: './original_maps/forest/toksovo/oselki_1985_full.jpg',
        bounds: [[60.228135633815285, 30.485515594482425], [60.22583412498815, 30.56078910827637], [60.19880061755633, 30.482854843139652]],
        types: ['ORIENT'],
    },
    {
        name: 'Осельки - Хиттолово',
        year: 1990,
        url: './maps/forest/toksovo/oselki_hittolovo_1990.webp',
        link: './original_maps/forest/toksovo/oselki_hittolovo_1990_full.jpg',
        bounds: [[60.23030913266004, 30.48036575317383], [60.22562101414459, 30.542764663696293], [60.20464413035624, 30.472555160522464]],
        types: ['ORIENT'],
    },
    {
        name: 'Кавголово - Осельки',
        year: 1990,
        url: './maps/forest/toksovo/kavgolovo_oselki_1990.webp',
        link: './original_maps/forest/toksovo/kavgolovo_oselki_1990_full.jpg',
        bounds: [[60.21666910752298, 30.501480102539066], [60.21300238312461, 30.55932998657227], [60.17878830249272, 30.495214462280277]],
        info: 'Автор: Баймаков В.М.',
        types: ['ORIENT'],
    },
    {
        name: 'Осельки, Курголовское оз',
        url: './maps/forest/toksovo/oselki_kurgolovskoe.webp',
        link: './original_maps/forest/toksovo/oselki_kurgolovskoe_full.jpg',
        bounds: [[60.201658523913956, 30.50808906555176], [60.20118933248576, 30.556712150573734], [60.183845870817485, 30.507531166076664]],
        types: ['ORIENT'],
    },
    {
        name: 'Осельки',
        year: 2015,
        url: './maps/forest/toksovo/oselki_2015.webp',
        bounds: [[60.231694130261396, 30.48465728759766], [60.22903062138403, 30.516800880432132], [60.210849057387684, 30.47912120819092]],
        owner: ['WN','SHEIN'],
        types: ['ORIENT'],
    },
    {
        name: 'Осельки',
        year: 2007,
        url: './maps/forest/toksovo/oselki_2007.webp',
        link: './original_maps/forest/toksovo/oselki_2007_full.jpg',
        bounds: [[60.23082052320575, 30.48165321350098], [60.22775206023302, 30.509462356567386], [60.21210695791025, 30.47590255737305]],
        types: ['ORIENT'],
    },
    {
        name: 'Кавголово',
        year: 2004,
        url: './maps/forest/toksovo/kavgolovo_2004.webp',
        link: './original_maps/forest/toksovo/kavgolovo_2004_full.jpg',
        bounds: [[60.17716630128953, 30.522723197937015], [60.17676078847216, 30.545425415039066], [60.16224440174397, 30.519418716430668]],
        types: ['ORIENT'],
    },
    {
        name: 'Орлиная гора',
        year: 2004,
        url: './maps/forest/toksovo/orlinaya_gora_2004.webp',
        link: './original_maps/forest/toksovo/orlinaya_gora_2004_full.jpg',
        bounds: [[60.19611310540228, 30.531392097473145], [60.19353203338676, 30.559887886047367], [60.177230329171444, 30.52598476409912]],
        types: ['ORIENT'],
    },
    {
        name: 'Кавголово, старый лыжедром',
        year: 2023,
        url: './maps/forest/toksovo/kavgolovo_old_ski_track_2023.webp',
        bounds: [[60.18903067012461, 30.54134845733643], [60.187665205699425, 30.557656288146976], [60.17684616000767, 30.537271499633793]],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Кавголово, старый лыжедром',
        year: 2023,
        url: './maps/forest/toksovo/kavgolovo_utts_2023.webp',
        bounds: [[60.181669291321185, 30.533666610717777], [60.18063429849855, 30.543966293334964], [60.173559195700115, 30.530512332916263]],
        owner: 'FSOSPB',
        types: ['ORIENT'],
    },
    {
        name: 'Куялово',
        year: 2012,
        url: './maps/forest/toksovo/kujalovo_2012.webp',
        bounds: [[60.143513060328885, 30.492467880249027], [60.14159019795266, 30.529031753540043], [60.1183146520964, 30.487833023071293]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Кузьмолово - Юбилейная',
        year: 2018,
        url: './maps/forest/toksovo/kuzmolovo_jubilejnaya_2018.webp',
        bounds: [[60.12762470857684, 30.488841533660892], [60.12639563271471, 30.50491333007813], [60.11273376949533, 30.48461437225342]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Кузьмолово - Зона-Z',
        year: 2018,
        url: './maps/forest/toksovo/kuzmolovo_zona_z_2018.webp',
        bounds: [[60.14462399624021, 30.515041351318363], [60.139923626291825, 30.588855743408207], [60.10926929759072, 30.506801605224613]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Токсово - оз Светлое',
        year: 2017,
        url: './maps/forest/toksovo/toksovo_oz_svetloe_2017.webp',
        bounds: [[60.16070699702129, 30.436120033264164], [60.15609435132153, 30.494484901428226], [60.14496581512473, 30.430884361267093]],
        owner: 'SHEIN',
        types: ['ORIENT'],
        info: 'Автор: Виктор Добрецов',
    },
    {
        name: 'Токсово - КомБыт',
        year: 2017,
        url: './maps/forest/toksovo/toksovo_kombyt_2017.jpg',
        bounds: [[60.148042025213854, 30.487318038940433], [60.146717581146646, 30.51066398620606], [60.12962319480245, 30.482296943664554]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Токсово - Малиновая гора',
        year: 2018,
        url: './maps/forest/toksovo/toksovo_malinovaya_gora_2018.webp',
        bounds: [[60.17644064323766, 30.453758239746097], [60.17328170963167, 30.50791740417481], [60.148042025213854, 30.447578430175785]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Токсово - Малиновая гора',
        year: 2013,
        url: './maps/forest/toksovo/toksovo_malinovaya_gora_2013.webp',
        link: './original_maps/forest/toksovo/toksovo_malinovaya_gora_2013_full.jpg',
        bounds: [[60.17641930011107, 30.462856292724613], [60.173644575557304, 30.497488975524906], [60.16412335429406, 30.459079742431644]],
        owner: 'RDNV_I',
        types: ['ORIENT'],
    },
    {
        name: 'Токсово - оз Кривое',
        year: 2014,
        url: './maps/forest/toksovo/toksovo_krivoe_2014.webp',
        bounds: [[60.15566722175373, 30.533494949340824], [60.153339268060094, 30.56044578552246], [60.140286860645055, 30.52787303924561]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Токсово - СКА',
        year: 2014,
        url: './maps/forest/toksovo/toksovo_ska_2014.webp',
        bounds: [[60.16226575408094, 30.552420616149902], [60.160023682948, 30.57825565338135], [60.14825564022888, 30.547356605529785]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Токсово - Светлое',
        year: 2014,
        url: './maps/forest/toksovo/toksovo_svetloe_2014.webp',
        bounds: [[60.173964748045265, 30.579929351806644], [60.171211162662146, 30.607438087463382], [60.151822805888436, 30.57181835174561]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Токсово - ВИФК',
        year: 2020,
        url: './maps/forest/toksovo/toksovo_vifk_2020.webp',
        bounds: [[60.22080433958028, 30.56405067443848], [60.21496370531253, 30.62095642089844], [60.17806268027771, 30.546970367431644]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Токсово - трамплин, СКА',
        url: './maps/forest/toksovo/toksovo_tramplin_ska.webp',
        bounds: [[60.16951407066697, 30.54278612136841], [60.169289919887184, 30.55935144424439], [60.159479156874674, 30.543644428253177]],
        owner: 'SHRNN',
        types: ['ORIENT'],
    },
    {
        name: 'Токсово - ВИФК',
        year: 2000,
        url: './maps/forest/toksovo/toksovo_vifk_2000.webp',
        link: './original_maps/forest/toksovo/toksovo_vifk_2000_full.jpg',
        bounds: [[60.205838296862595, 30.55709838867188], [60.20310870954749, 30.59306144714356], [60.179855364861766, 30.551176071166996]],
        types: ['ORIENT'],
    },
    {
        name: 'Токсово - восток оз Хепоярви',
        year: 2007,
        url: './maps/forest/toksovo/toksovo_hepojarvI_east_2007.webp',
        bounds: [[60.18109311377495, 30.59975624084473], [60.177422412068246, 30.65872192382813], [60.143171226344805, 30.589456558227543]],
        types: ['ORIENT'],
    },
    {
        name: 'Лесколово',
        year: 2015,
        url: './maps/forest/toksovo/leskolovo_2015.webp',
        bounds: [[60.27527032415444, 30.456075668334964], [60.273589250479354, 30.482511520385746], [60.26560829207024, 30.45341491699219]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Карабсельки - юг',
        year: 2013,
        url: './maps/forest/toksovo/karabselky_2013.webp',
        bounds: [[60.10702361186672, 30.393161773681644], [60.10807161759284, 30.451612472534183], [60.089202411877785, 30.393719673156742]],
        owner: 'SHRNN',
        types: ['ORIENT'],
    },
    {
        name: 'Мистолово',
        year: 2006,
        url: './maps/forest/toksovo/mistolovo_2006.webp',
        link: './original_maps/forest/toksovo/mistolovo_2006_full.jpg',
        bounds: [[60.11780150698152, 30.38848400115967], [60.115385341248704, 30.424661636352543], [60.10133385603849, 30.38350582122803]],
        types: ['ORIENT'],
    },
    {
        name: 'Охта-Парк',
        year: 2021,
        url: './maps/parks/okhta-park_2021.webp',
        bounds: [[60.13410064579107, 30.443136692047123], [60.13246575220701, 30.455882549285892], [60.125594036770806, 30.439510345458988]],
        owner: 'SHEIN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Лехтуси',
        year: 1990,
        url: './maps/forest/toksovo/lehtusi_1990.webp',
        link: './original_maps/forest/toksovo/lehtusi_1990_full.jpg',
        bounds: [[60.30514284398862, 30.501480102539066], [60.29948734537272, 30.56130409240723], [60.27736622539905, 30.491609573364258]],
        types: ['ORIENT'],
    },
    {
        name: 'Аньялово',
        year: 2023,
        url: './maps/forest/toksovo/anyalovo_2023.webp',
        bounds: [[60.31766225096646, 30.4951286315918], [60.31126498711547, 30.5390739440918], [60.29853049128726, 30.489764213562015]],
        owner: 'FSOSPB',
        types: ['ORIENT'],
    },
    {
        name: 'Лехтуси, оз Валкиярви',
        year: 2016,
        url: './maps/forest/toksovo/lehtusi_valkijarvi_2016.webp',
        //link: './original_maps/forest/lehtusi_valkijarvi_2016_full.jpg',
        bounds: [[60.27668533819831, 30.52705764770508], [60.27421700328666, 30.56207656860352], [60.25224913383907, 30.51864624023438]],
        owner: ['WN','SHEIN'],
        types: ['ORIENT'],
    },
];
