// types can be ORIENT, ROGAINE, SPRINT, CITY, RELIEF
var cityMaps = [
    // --- городские кварталы ---
    {
        name: 'Лицей №470',
        year: 2020,
        url: './maps/city/school_470_2020.webp',
        bounds: [[60.01080754755248, 30.389385223388675], [60.00952048282834, 30.403633117675785], [60.000702742446485, 30.385394096374515]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №71',
        year: 2020,
        url: './maps/city/school_71_2021.webp',
        bounds: [[60.02096287578616, 30.387411117553714], [60.01921513764612, 30.404083728790287], [60.01404643875856, 30.384900569915775]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №98',
        year: 2022,
        url: './maps/city/school_98_2022.webp',
        bounds: [[60.026141213662754, 30.387153625488285], [60.02388986211038, 30.407431125640873], [60.018914903388506, 30.384857654571537]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'ЖК "Академ Парк"',
        year: 2022,
        url: './maps/city/akadem_park_2022.webp',
        bounds: [[60.00842643842314, 30.398890972137455], [60.00738599006695, 30.40973782539368], [60.000461347882606, 30.396466255187992]],
        owner: 'KUZM',
        types: ['ORIENT', 'SPRINT', 'CITY'],
    },
    {
        name: 'Сад Олимпия',
        year: 2023,
        url: './maps/city/olimpia_2023.webp',
        bounds: [[59.91900024244188, 30.31836032867432], [59.91897873224253, 30.330290794372562], [59.909943215870214, 30.318703651428226]],
        owner: 'WN',
        types: ['ORIENT', 'SPRINT', 'CITY'],
    },
    {
        name: 'Петропавловская крепость',
        year: 2020,
        url: './maps/city/petropavlovka_2020.jpg',
        bounds: [[59.953237549626834, 30.31014204025269], [59.9523135528265, 30.323424339294437], [59.94785436895968, 30.308296680450443]],
        owner: 'FSOSPB',
        types: ['ORIENT', 'SPRINT', 'CITY'],
    },
    {
        name: 'Колтуши',
        year: 2017,
        url: './maps/city/koltushi_2017.webp',
        bounds: [[59.946156497905406, 30.643272399902347], [59.94478094366959, 30.664515495300297], [59.93089324727928, 30.63893795013428]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY', 'PARK'],
        info: 'Автор: Виктор Добрецов',
    },
    {
        name: 'Лицей №126',
        year: 2012,
        url: './maps/city/school_126_2012.webp',
        bounds: [[59.97747788572093, 30.3892993927002], [59.97778923231374, 30.402109622955326], [59.97103557512989, 30.390093326568607]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Гимназия №101',
        year: 2011,
        url: './maps/city/school_101_2011.jpg',
        bounds: [[60.035423738342054, 30.328638553619385], [60.03550947699026, 30.344023704528812], [60.02914277715146, 30.328788757324222]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Гимназия №144',
        year: 2013,
        url: './maps/city/school_144_2013.webp',
        bounds: [[60.047939225571504, 30.403182506561283], [60.0469857295227, 30.418052673339847], [60.04245356846846, 30.40225982666016]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №92',
        year: 2012,
        url: './maps/city/school_92_2012.webp',
        bounds: [[60.02176701873349, 30.32037734985352], [60.02221733023808, 30.340676307678226], [60.01241630800898, 30.320291519165043]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №332',
        year: 2013,
        url: './maps/city/school_332_2013.webp',
        bounds: [[59.92493652455641, 30.480773448944095], [59.92362461159104, 30.49736022949219], [59.915504652103806, 30.477318763732914]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №156',
        year: 2013,
        url: './maps/city/school_156_2013.jpg',
        bounds: [[59.99765567740504, 30.426700115203857], [59.99798829322108, 30.43697834014893], [59.991603631550845, 30.427644252777103]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №175',
        year: 2014,
        url: './maps/city/school_175_2014.webp',
        bounds: [[60.040503369230905, 30.421657562255863], [60.03946393028264, 30.434081554412845], [60.03411619638205, 30.419554710388187]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №136',
        year: 2014,
        url: './maps/city/school_136_2014.webp',
        bounds: [[60.04160706756014, 30.38706779479981], [60.04166064421021, 30.398805141448978], [60.03331235391477, 30.38702487945557]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Канонерский о-в',
        year: 2014,
        url: './maps/city/kanonerka_2014.webp',
        bounds: [[59.90541377581667, 30.20770311355591], [59.90543529480735, 30.223066806793216], [59.896665151030554, 30.207660198211673]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Бумажная ул',
        year: 2015,
        url: './maps/city/bumazhnaya_2015.webp',
        bounds: [[59.909061045596246, 30.261797904968265], [59.90903952895528, 30.276045799255375], [59.901088175579964, 30.26244163513184]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'М "Выборгская"',
        year: 2015,
        url: './maps/city/vyborgskaya_2015.webp',
        bounds: [[59.97443941872372, 30.339260101318363], [59.97404214271112, 30.351254940032963], [59.97046644411359, 30.338702201843265]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'М "Удельная"',
        year: 2015,
        url: './maps/city/udelnaya_2015.webp',
        bounds: [[60.01803563023218, 30.314669609069828], [60.0163199079499, 30.33213615417481], [60.00377098206522, 30.310378074646]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'М "Ломоносовская"',
        year: 2015,
        url: './maps/city/lomonosovskaya_2015.webp',
        bounds: [[59.88062540310008, 30.434575080871586], [59.87946248953721, 30.452041625976566], [59.87041621736219, 30.43019771575928]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'М "Политехническая"',
        year: 2015,
        url: './maps/city/politekhnicheskaya_2015.webp',
        bounds: [[60.02562663254445, 30.36728382110596], [60.0253478977596, 30.384922027587894], [60.010142570366924, 30.367884635925297]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'М "Нарвская"',
        year: 2015,
        url: './maps/city/narvskaya_2016.webp',
        bounds: [[59.89892516416984, 30.259094238281254], [59.89888211773708, 30.27570247650147], [59.893479347569645, 30.259008407592777]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
        info: 'Автор: Пётр Заслонкин',
    },
    {
        name: 'М "Новочеркасская"',
        year: 2022,
        url: './maps/city/novocherkasskaya_2020.webp',
        bounds: [[59.92931277708212, 30.401487350463867], [59.92768922249184, 30.42137861251831], [59.922258876596885, 30.39897680282593]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Оккервиль"',
        year: 2024,
        url: './maps/city/okkervil_2024.webp',
        bounds: [[59.93202210846225, 30.417537689208988], [59.931914599528554, 30.434296131134037], [59.92530213040293, 30.417301654815677]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Посадский округ',
        year: 2013,
        url: './maps/city/posadsky_okrug_2013.webp',
        bounds: [[59.96178866951323, 30.318253040313724], [59.96041376394808, 30.3343677520752], [59.95477390588266, 30.31557083129883]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Василеостровская',
        year: 2012,
        url: './maps/city/vasileostrovskaya_2012.webp',
        bounds: [[59.94299693676351, 30.267612934112552], [59.94182545833027, 30.281517505645756], [59.935257964278314, 30.264759063720707]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Бугры',
        year: 2011,
        url: './maps/city/bugry_2011.webp',
        bounds: [[60.07942125981127, 30.389170646667484], [60.077087908682955, 30.40899753570557], [60.06524735396957, 30.383634567260746]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Озерки',
        year: 2013,
        url: './maps/city/ozerki_2013.webp',
        bounds: [[60.04519651093916, 30.315742492675785], [60.044307222520395, 30.32911062240601], [60.0348664317041, 30.31188011169434]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Наб. р. Смоленки',
        year: 2014,
        url: './maps/city/smolenka_2014.webp',
        bounds: [[59.94990674255339, 30.21566390991211], [59.94840239738082, 30.23317337036133], [59.94029925002984, 30.212059020996097]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Покровский о-в',
        year: 2014,
        url: './maps/city/pokrovsky_island_2014.webp',
        bounds: [[59.9224309407933, 30.28314828872681], [59.921022138933154, 30.301859378814697], [59.915816581278484, 30.28093814849854]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Коломенский о-в',
        year: 2016,
        url: './maps/city/kolomensky_island_2016.webp',
        bounds: [[59.92428057455758, 30.27720451354981], [59.92340953894306, 30.28814792633057], [59.91696746701024, 30.27417898178101]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Любашинский сад',
        year: 2016,
        url: './maps/city/ljubashinsky_sad_2016.webp',
        bounds: [[59.971733552646455, 30.395371913909916], [59.97026241363188, 30.41146516799927], [59.96472089467718, 30.392646789550785]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Серебряный пруд',
        year: 2016,
        url: './maps/city/serebrjany_prud_2016.webp',
        bounds: [[60.010839723528704, 30.3408694267273], [60.00955266005702, 30.35509586334229], [60.00153956329607, 30.337908267974857]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Серебряный пруд',
        year: 2024,
        url: './maps/city/serebrjany_prud_2024.webp',
        bounds: [[60.0105930402441, 30.342135429382328], [60.00915580538176, 30.356404781341556], [60.00063837073503, 30.33831596374512]],
        owner: 'FSOSPB',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Серебряный пруд',
        year: 2018,
        url: './maps/city/serebrjany_prud_2018.webp',
        bounds: [[60.00894128735802, 30.330033302307132], [60.007267999011475, 30.350718498229984], [60.001904324733495, 30.32835960388184]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'ДДЮТ Выборгского р-она',
        year: 2017,
        url: './maps/city/vyborgsky_ddjut_2017.webp',
        bounds: [[60.03973183004802, 30.34361600875855], [60.03986042116352, 30.356683731079105], [60.030986459538205, 30.34320831298828]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Лицей №384',
        year: 2019,
        url: './maps/city/narvskaya_384_school_2019.jpg',
        link: './original_maps/city/narvskaya_384_school_2019_full.jpg',
        bounds: [[59.898150319844724, 30.273513793945316], [59.89818260538584, 30.275981426239017], [59.89642837885074, 30.273309946060184]],
        owner: 'BVZ',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'ЦФКиЗ Московского р-она',
        year: 2016,
        url: './maps/city/tsfkiz_moskovsky_2016.webp',
        bounds: [[59.851357147520275, 30.347199440002445], [59.85077518391201, 30.354130268096927], [59.8480807753212, 30.346212387084964]],
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Яблоневый сад',
        year: 2014,
        url: './maps/city/apple_garden_2014.webp',
        bounds: [[59.86798191914129, 30.36058902740479], [59.866969370948034, 30.383205413818363], [59.85526897207686, 30.356640815734867]],
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №536',
        year: 2013,
        url: './maps/city/kosmonavtov_2013.webp',
        bounds: [[59.865385856119765, 30.348358154296875], [59.86585984125349, 30.359086990356445], [59.85591551036147, 30.349946022033695]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'ул Рубинштейна',
        year: 2015,
        url: './maps/city/5_uglov_2015.webp',
        bounds: [[59.93348419536735, 30.337951183319095], [59.932710157386865, 30.348916053771976], [59.92674300833662, 30.335676670074466]],
        types: ['ORIENT', 'CITY'],
        info: 'Автор: Алексей Яганов'
    },
    {
        name: 'Литейный пр.',
        year: 2012,
        url: './maps/city/litejny_2012.webp',
        bounds: [[59.9468979839351, 30.33756494522095], [59.946854999690565, 30.349023342132572], [59.94200816870012, 30.337500572204593]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Кавалергардская ул',
        year: 2012,
        url: './maps/city/kavalergardskaya_2012.webp',
        bounds: [[59.9488751989346, 30.37754058837891], [59.948885944346074, 30.391466617584232], [59.94222312078742, 30.37754058837891]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'АВРОРА',
        year: 2013,
        url: './maps/city/avrora_2013.webp',
        bounds: [[59.95791085969932, 30.323960781097416], [59.95791085969932, 30.338487625122074], [59.95133580723119, 30.32413244247437]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Кузьмолово',
        year: 2013,
        url: './maps/city/kuzmolovo_2013.jpg',
        bounds: [[60.11301176687593, 30.482983589172367], [60.112883460684216, 30.501286983489994], [60.107216105214334, 30.482833385467533]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Верх. Суздальское оз.',
        year: 2015,
        url: './maps/city/high_suzd_lake_2015.webp',
        bounds: [[60.03930318938035, 30.314025878906254], [60.03894955664152, 30.32110691070557], [60.03381609748235, 30.31235218048096]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
        info: 'Автор: Полина Токмакова'
    },
    {
        name: 'М "Петроградская"',
        year: 2016,
        url: './maps/city/petrogradskaya_2016.webp',
        bounds: [[59.969403324131434, 30.294585227966312], [59.96777099268824, 30.31286716461182], [59.958512433344985, 30.290594100952152]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Берёзовый сад',
        year: 2016,
        url: './maps/city/berezovy_sad_2016.webp',
        bounds: [[60.0304290780388, 30.312309265136722], [60.02928212883294, 30.32535552978516], [60.01837876400275, 30.30812501907349]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
        info: 'Автор: Виктор Добрецов'
    },
    {
        name: 'Большая Охта',
        year: 2017,
        url: './maps/city/big_okhta_2017.webp',
        bounds: [[59.95965109641549, 30.41125059127808], [59.958372783293484, 30.42448997497559], [59.944146879921945, 30.40571451187134]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Сквер Андрея Петрова',
        year: 2017,
        url: './maps/city/skver_petrova_2017.webp',
        bounds: [[59.964785336271625, 30.30874729156494], [59.96391536416931, 30.318489074707035], [59.9595329350863, 30.306944847106937]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Кронштадт - Морской собор',
        year: 2014,
        url: './maps/city/kronshtadt_sobor_2014.webp',
        bounds: [[59.9962822605596, 29.766125679016117], [59.995767214543264, 29.792947769165043], [59.985357274664224, 29.76728439331055]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №217',
        year: 2012,
        url: './maps/city/veteranov_2012.jpg',
        bounds: [[59.833440936715064, 30.164873600006107], [59.833354674113856, 30.1760745048523], [59.82424192853449, 30.164916515350345]],
        types: ['ORIENT', 'CITY'],
        info: 'Автор: Темкин В.Я.'
    },
    {
        name: 'Школа №339',
        year: 2008,
        url: './maps/city/school_339_2008.webp',
        bounds: [[59.90844781586406, 30.45594692230225], [59.907038420393384, 30.470108985900882], [59.90223957196219, 30.453028678894047]],
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Яковлевский пер.',
        url: './maps/city/yakovlevsky.jpg',
        bounds: [[59.87587658325937, 30.320248603820804], [59.87590889044805, 30.328660011291507], [59.87168715181947, 30.32037734985352]],
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Гатчина - Аэродром',
        year: 2022,
        url: './maps/city/gatchina_aerodrom_2022.webp',
        bounds: [[59.56558209814125, 30.08565187454224], [59.56314725951065, 30.108740329742435], [59.557298579394455, 30.081961154937748]],
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Петергоф - СПбГУ',
        year: 2024,
        url: './maps/city/peterhof_spbgu_2024.webp',
        bounds: [[59.88427539528826, 29.82543468475342], [59.88230509530967, 29.843544960021976], [59.878461059145124, 29.822881221771244]],
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'М "Академическая"',
        year: 2023,
        url: './maps/city/akademicheskaya_2023.webp',
        bounds: [[60.02123092560915, 30.402066707611088], [60.01991209951657, 30.41601419448853], [60.01132235941491, 30.398139953613285]],
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Универсам "САМПО"',
        year: 2024,
        url: './maps/city/sampo_2024.webp',
        bounds: [[60.030043193030735, 30.364322662353516], [60.02852104710428, 30.38406372070313], [60.02303216403132, 30.36230564117432]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Лицей №179',
        year: 2019,
        url: './maps/city/litsey_179_2019.webp',
        bounds: [[60.04643933173566, 30.41303157806397], [60.04556079084643, 30.427365303039554], [60.03634541714789, 30.409684181213382]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Дибуновская ул',
        year: 2022,
        url: './maps/city/dibunovskaya_2022.webp',
        bounds: [[59.98930699819738, 30.271260738372806], [59.987927868402906, 30.2863883972168], [59.98401554936793, 30.269372463226322]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'ул Жака Дюкло',
        year: 2023,
        url: './maps/city/zhaka_djuklo_2023.webp',
        bounds: [[60.01458264841114, 30.345954895019535], [60.012298334901786, 30.36578178405762], [60.00745034864706, 30.343229770660404]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'ул Карпинского',
        year: 2023,
        url: './maps/city/karpinskogo_2019.webp',
        bounds: [[60.016384249142575, 30.41695833206177], [60.0163199079499, 30.43092727661133], [60.00633478219535, 30.416679382324222]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Лицей №95',
        year: 2022,
        url: './maps/city/litsey_95_2022.webp',
        bounds: [[60.011933688090885, 30.403869152069095], [60.009788625443875, 30.424318313598636], [60.00476863502597, 30.40097236633301]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Манеж Алексеева',
        year: 2015,
        url: './maps/city/manezh_alekseeva_2015.webp',
        bounds: [[60.019761985893915, 30.356168746948246], [60.0193652537523, 30.369558334350586], [60.00983152806055, 30.35458087921143]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'ул Матроса Железняка',
        year: 2021,
        url: './maps/city/matrosa_zheleznjaka_2021.webp',
        bounds: [[60.00045598353898, 30.308468341827396], [59.99779516186407, 30.31932592391968], [59.9923441008481, 30.301001071929935]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Гимназия №74',
        year: 2018,
        url: './maps/city/gimnazia_74_2018.webp',
        bounds: [[60.00156101996256, 30.34659862518311], [59.99989808704963, 30.36653280258179], [59.9945546787237, 30.34432411193848]],
        owner: 'SHRNN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'ул Есенина"',
        year: 2021,
        url: './maps/city/esenina_2021.webp',
        bounds: [[60.044703655255994, 30.32363891601563], [60.0436429191586, 30.33730745315552], [60.034652080493586, 30.32011985778809]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Омская ул"',
        year: 2022,
        url: './maps/city/omskaya_2022.webp',
        bounds: [[60.00236563490866, 30.31413316726685], [59.99944747147775, 30.32662153244019], [59.993277712432054, 30.30559301376343]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №518',
        year: 2024,
        url: './maps/city/school_518_2024.webp',
        bounds: [[60.05346681736092, 30.32861709594727], [60.05204215839983, 30.342135429382328], [60.043557201622335, 30.324368476867676]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №532',
        year: 2023,
        url: './maps/city/school_532_2023.webp',
        bounds: [[59.960918618714096, 30.420928001403812], [59.95892063781316, 30.439810752868656], [59.954333419413786, 30.41800975799561]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №535',
        year: 2019,
        url: './maps/city/school_535_2019.webp',
        bounds: [[60.018914903388506, 30.41270971298218], [60.01864683478263, 30.433416366577152], [60.01177281321938, 30.4127311706543]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Сад Жореса Алфёрова',
        year: 2023,
        url: './maps/city/sad_zhoresa_alferova_2023.webp',
        bounds: [[60.006302601835436, 30.42150735855103], [60.004940271210984, 30.44169902801514], [59.999404555388885, 30.41974782943726]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Учительская ул',
        year: 2019,
        url: './maps/city/uchitelskaya_2019.webp',
        bounds: [[60.03482356157328, 30.392689704895023], [60.03293722073611, 30.407860279083252], [60.028027942541264, 30.389213562011722]],
        info: 'Автор - Елизаров В.',
        owner: 'ELZRV',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'М "Чкаловская"',
        year: 2021,
        url: './maps/city/chkalovskaya_2021.webp',
        bounds: [[59.96962883728231, 30.28810501098633], [59.96869455851803, 30.29864072799683], [59.96200349335379, 30.28542280197144]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Сестрорецкая ул',
        year: 2023,
        url: './maps/city/sestroretskaya_2023.webp',
        bounds: [[59.98958067081682, 30.284564495086673], [59.98846986790074, 30.296956300735477], [59.98436977012997, 30.28264403343201]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Аллея Поликарпова',
        year: 2024,
        url: './maps/city/alleya_polikarpova_2024.webp',
        bounds: [[60.01103277872855, 30.283813476562504], [60.00958483725437, 30.297996997833256], [60.00526208665714, 30.281581878662113]],
        owner: 'KUZM',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Мартыновский сквер',
        year: 2022,
        url: './maps/city/martynovsky_skver_2022.webp',
        bounds: [[60.02540150078545, 30.24973869323731], [60.02556230934125, 30.263879299163822], [60.01974054103504, 30.2499532699585]],
        owner: 'MSKV',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Школа №515',
        year: 2023,
        url: './maps/city/school_515_2023.webp',
        bounds: [[59.94797257193447, 30.414297580718998], [59.9469087299875, 30.422902107238773], [59.94273900011142, 30.41150808334351]],
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Колпино - ул Танкистов',
        year: 2018,
        url: './maps/city/kolpino_tankistov_2018.jpg',
        bounds: [[59.74959628419852, 30.560982227325443], [59.748472030753305, 30.577397346496586], [59.74200683935883, 30.55907249450684]],
        types: ['ORIENT', 'CITY'],
        owner: 'BBCH_A',
    },
    {
        name: 'Новое Сертолово',
        year: 2022,
        url: './maps/city/new_sertolovo_2022.webp',
        bounds: [[60.169812935994486, 30.18354177474976], [60.16785958842209, 30.203347206115726], [60.16315186383203, 30.180580615997318]],
        types: ['ORIENT', 'CITY'],
        owner: 'SVCHK',
    },
    {
        name: 'Полюстрово',
        year: 2023,
        url: './maps/city/poljustrovo_2023.webp',
        bounds: [[59.97511585069737, 30.427665710449222], [59.974020668196296, 30.437858104705814], [59.967695817591995, 30.42444705963135]],
        types: ['ORIENT', 'CITY'],
        owner: 'RDNV_I',
    },
    {
        name: 'Сясьстрой',
        year: 2014,
        url: './maps/city/sjasstroy_2014.webp',
        bounds: [[60.14225252990766, 32.551020383834846], [60.141622246580134, 32.55666375160218], [60.140083877236236, 32.550022602081306]],
        types: ['ORIENT', 'CITY'],
        owner: 'KP31',
    },
    {
        name: 'Школа-интернат №31',
        year: 2019,
        url: './maps/city/school_31_2019.webp',
        bounds: [[59.89791355825114, 30.423406362533573], [59.89867764641967, 30.425080060958866], [59.89710102267565, 30.42498350143433]],
        types: ['ORIENT', 'CITY'],
        owner: 'KP31',
    },
    {
        name: 'Пушкин, школа №552',
        year: 2022,
        url: './maps/city/pushkin_school_552_2022.webp',
        bounds: [[59.73977941020801, 30.39522171020508], [59.73753020492948, 30.41466236114502], [59.73291237178019, 30.39204597473145]],
        owner: 'FSOSPB',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Агалатово',
        year: 2012,
        url: './maps/city/agalatovo_2012.webp',
        bounds: [[60.21722334414536, 30.300486087799076], [60.21662647354862, 30.309069156646732], [60.21354602222042, 30.299198627471927]],
        owner: 'SHEIN',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Кузнечное',
        url: './maps/city/kuznechnoe.webp',
        bounds: [[61.12902370855488, 29.872019290924076], [61.12792546611398, 29.88862752914429], [61.11938688322839, 29.868800640106205]],
        owner: 'VST_PRZRSK',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Севастьяново',
        url: './maps/city/sevastjanovo.webp',
        bounds: [[61.06172221813291, 29.779922962188724], [61.0613692056359, 29.802067279815677], [61.05464045078286, 29.77970838546753]],
        owner: 'VST_PRZRSK',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Приозерск, ул Героя Богданова',
        year: 2020,
        url: './maps/city/priozersk_geroja_bogdanova_2020.webp',
        info: 'Автор: Михаил Пашков',
        bounds: [[61.03422738636866, 30.12434005737305], [61.03352074474647, 30.133781433105472], [61.031764464289076, 30.123524665832523]],
        owner: 'VST_PRZRSK',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Приозерск, дет.сад №9',
        year: 2021,
        url: './maps/city/priozersk_det_sad_9_2021.webp',
        info: 'Автор: Михаил Пашков',
        bounds: [[61.04319413212856, 30.12609958648682], [61.045251034855056, 30.139060020446777], [61.041043591125266, 30.127515792846683]],
        owner: 'VST_PRZRSK',
        types: ['ORIENT', 'CITY'],
    },
    {
        name: 'Новая Ладога',
        year: 2018,
        url: './maps/city/novaja_ladoga_2018.webp',
        bounds: [[60.11106573592594, 32.30748653411866], [60.11108712150635, 32.32293605804444], [60.10064930790749, 32.307572364807136]],
        types: ['ORIENT', 'CITY'],
    },
];
