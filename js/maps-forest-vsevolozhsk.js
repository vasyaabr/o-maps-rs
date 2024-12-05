// types can be ORIENT, ROGAINE, SPRINT, CITY, RELIEF, WINTER, VELO
let vsevolozhskMaps = [
    // --- ВСЕВОЛОЖСК ---
    {
        name: 'Всеволожск',
        year: 1987,
        url: './maps/forest/vsevolozhsk/vsevolozhsk_1987.webp',
        link: './original_maps/forest/vsevolozhsk/vsevolozhsk_1987_full.jpg',
        bounds: [[60.06612537100185, 30.623531341552738], [60.06355549916492, 30.683269500732425], [60.03518795591195, 30.62052726745606]],
        author: ['VSLVSKY','MDVDKN'],
        types: ['ORIENT'],
    },
    {
        name: 'Невская Дубровка',
        url: './maps/forest/vsevolozhsk/nevskaya_dubrovka.webp',
        link: './original_maps/forest/vsevolozhsk/nevskaya_dubrovka_full.jpg',
        bounds: [[59.862466389665045, 30.91333866119385], [59.86143212605905, 30.930547714233402], [59.84972977927792, 30.909948348999027]],
        types: ['ORIENT'],
    },
    {
        name: 'Невская Дубровка-2',
        url: './maps/forest/vsevolozhsk/nevskaya_dubrovka_east.webp',
        bounds: [[59.85246716099846, 30.934989452362064], [59.851766671366114, 30.948250293731693], [59.84371537045213, 30.93331575393677]],
        types: ['ORIENT'],
    },
    {
        name: 'Бернгардовка',
        year: 2021,
        url: './maps/forest/vsevolozhsk/berngardovka_2021.webp',
        bounds: [[60.005165542352074, 30.604562759399418], [60.00211888840598, 30.635848045349125], [59.99190411384305, 30.599327087402347]],
        author: ['KUZNTSV_S','ILVS','DBRTSV_V'],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Колтуши - Воейково',
        year: 1990,
        url: './maps/forest/vsevolozhsk/koltushi_1990.webp',
        link: './original_maps/forest/vsevolozhsk/koltushi_1990_full.jpg',
        bounds: [[59.9788091403029, 30.66172599792481], [59.97408509169904, 30.740690231323242], [59.92629139661258, 30.648250579833988]],
        author: 'VSLVSKY',
        types: ['ORIENT'],
    },
    {
        name: 'Голубая Дача',
        year: 2005,
        url: './maps/forest/vsevolozhsk/golubaya_dacha_2005.webp',
        link: './original_maps/forest/vsevolozhsk/golubaya_dacha_2005_full.jpg',
        bounds: [[59.96796429929518, 30.610613822937015], [59.965902303990916, 30.660524368286136], [59.947446028167285, 30.608124732971195]],
        author: ['RYLOV_V','DRBSHV'],
        types: ['ORIENT'],
    },
    {
        name: 'Красная Горка (Орово)',
        year: 2016,
        url: './maps/forest/vsevolozhsk/krasnaja_gorka_2016.webp',
        bounds: [[59.97560974468024, 30.66666126251221], [59.97350527566231, 30.694985389709476], [59.95778194964003, 30.66271305084229]],
        author: ['MKHLV_A','USNKO'],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Орово',
        year: 2019,
        url: './maps/forest/vsevolozhsk/orovo_2019.webp',
        bounds: [[59.967427333712536, 30.62271595001221], [59.965000140681106, 30.655760765075687], [59.954451599285, 30.618810653686523]],
        author: ['MKHLV_A','SLBDNK'],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Орово',
        year: 2007,
        url: './maps/forest/vsevolozhsk/orovo_2007.webp',
        bounds: [[59.96566602549886, 30.621128082275394], [59.964742375222585, 30.64292907714844], [59.95511769613181, 30.61971187591553]],
        author: 'RYLOV_V',
        types: ['ORIENT'],
    },
    {
        name: 'Воейково',
        year: 2009,
        url: './maps/forest/vsevolozhsk/voejkovo_2009.webp',
        bounds: [[59.97047718252518, 30.662584304809574], [59.96532234468369, 30.71640014648438], [59.95133580723119, 30.65614700317383]],
        author: 'GRV_S',
        types: ['ORIENT'],
    },
    {
        name: 'Воейково',
        year: 2022,
        url: './maps/forest/vsevolozhsk/voejkovo_2022.webp',
        bounds: [[59.970691950025774, 30.683226585388187], [59.968458299943094, 30.709447860717777], [59.95417226436477, 30.678334236145023]],
        author: 'MKHLV_A',
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Всеволожск, Ждановские оз',
        year: 2023,
        url: './maps/forest/vsevolozhsk/vsevolozhsk_zhdanovskie_oz_2023.webp',
        bounds: [[59.99598181802446, 30.684041976928714], [59.99411472111232, 30.707473754882816], [59.97953916041285, 30.678591728210453]],
        author: ['MKHLV_A','SLBDNK'],
        types: ['ORIENT'],
    },
    {
        name: 'Щеглово',
        year: 1986,
        url: './maps/forest/vsevolozhsk/scheglovo_1986.webp',
        link: './original_maps/forest/vsevolozhsk/scheglovo_1986_full.jpg',
        bounds: [[60.03548804234906, 30.756418704986576], [60.03489858426572, 30.77051639556885], [60.02720251191258, 30.755131244659427]],
        author: 'RYLOV_V',
        types: ['ORIENT'],
    },
    {
        name: 'Щеглово',
        year: 1987,
        url: './maps/forest/vsevolozhsk/scheglovo_1987.webp',
        link: './original_maps/forest/vsevolozhsk/scheglovo_1987_full.jpg',
        bounds: [[60.02028738059051, 30.726270675659183], [60.01906502085821, 30.755453109741214], [60.00548735560624, 30.723438262939457]],
        author: 'RYLOV_V',
        types: ['ORIENT'],
    },
    {
        name: 'им Морозова',
        year: 1992,
        url: './maps/forest/vsevolozhsk/morozova_1992.webp',
        link: './original_maps/forest/vsevolozhsk/morozova_1992_full.jpg',
        bounds: [[59.99332063646918, 31.04075431823731], [59.991303146530086, 31.077747344970707], [59.96656817067386, 31.034574508666996]],
        author: 'RYLOV_V',
        types: ['ORIENT'],
    },
    {
        name: 'им Морозова',
        year: 2013,
        url: './maps/forest/vsevolozhsk/morozova_2013.webp',
        bounds: [[59.98602275023326, 31.040325164794925], [59.98361838824824, 31.072340011596683], [59.96656817067386, 31.03620529174805]],
        author: 'RYLOV_V',
        types: ['ORIENT'],
    },
    {
        name: 'им Морозова',
        year: 2021,
        url: './maps/forest/vsevolozhsk/morozova_2021.webp',
        bounds: [[59.98432683448194, 31.039381027221683], [59.9807629815427, 31.07289791107178], [59.96895229322324, 31.03272914886475]],
        author: 'RYLOV_V',
        types: ['ORIENT'],
    },
    {
        name: 'пл Теплобетонная',
        url: './maps/forest/vsevolozhsk/teplobetonnaya.webp',
        link: './original_maps/forest/vsevolozhsk/teplobetonnaya_full.jpg',
        bounds: [[59.88131451786498, 30.955009460449222], [59.879936274048134, 30.971488952636722], [59.860290089303376, 30.946426391601566]],
        types: ['ORIENT'],
    },
    {
        name: 'Приютино',
        url: './maps/forest/vsevolozhsk/prijutino_2016.webp',
        link: './original_maps/forest/vsevolozhsk/prijutino_2016_full.jpg',
        bounds: [[60.011751363177375, 30.580916404724125], [60.012158911595996, 30.59722423553467], [60.00196869398139, 30.582718849182132]],
        types: ['ORIENT'],
    },
    {
        name: 'Проба',
        url: './maps/forest/vsevolozhsk/proba.webp',
        link: './original_maps/forest/vsevolozhsk/proba_full.jpg',
        bounds: [[60.11540672402396, 30.75081825256348], [60.11339668245151, 30.78854084014893], [60.098531397053165, 30.74687004089356]],
        types: ['ORIENT'],
    },
    {
        name: 'Рахья',
        url: './maps/forest/vsevolozhsk/rakhja.webp',
        bounds: [[60.0987881207714, 30.846390724182132], [60.09572869968227, 30.89110851287842], [60.08776859518927, 30.843129158020023]],
        types: ['ORIENT'],
    },
    {
        name: 'Рахья',
        year: 2007,
        url: './maps/forest/vsevolozhsk/rakhja_south_2007.webp',
        link: './original_maps/forest/vsevolozhsk/rakhja_south_2007_full.jpg',
        bounds: [[60.09157770227037, 30.848064422607425], [60.089181012087195, 30.879821777343754], [60.082332365483836, 30.84544658660889]],
        author: 'PKHMV',
        types: ['ORIENT'],
    },
    {
        name: 'Разметелево',
        url: './maps/forest/vsevolozhsk/razmetelevo.webp',
        bounds: [[59.911234154508655, 30.686488151550297], [59.910093827964644, 30.704727172851566], [59.897978129762215, 30.68292617797852]],
        types: ['ORIENT'],
    },
    {
        name: 'Разметелево',
        year: 2016,
        author: 'RYLOV_V',
        url: './maps/forest/vsevolozhsk/vsevolozhsk_juzhny_2016.webp',
        bounds: [[59.996689999636274, 30.659859180450443], [59.9952306997502, 30.676853656768802], [59.99142119454219, 30.658121109008793]],
        types: ['ORIENT'],
    },
];