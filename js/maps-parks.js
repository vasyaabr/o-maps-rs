// types can be ORIENT, ROGAINE, PARK, CITY, PARK, RELIEF
var parkMaps = [
    // --- городские парки ---
    {
        name: 'Парк Авиаторов',
        year: 2017,
        url: './maps/parks/aviatorov_2017.jpg',
        bounds: [[59.872257979453174, 30.29713869094849], [59.87136403749476, 30.307695865631107], [59.86442709281249, 30.29462814331055]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Победы',
        year: 2020,
        url: './maps/parks/pobedy_2020.jpg',
        bounds: [[59.873216517019806, 30.318918228149418], [59.87246261338842, 30.34007549285889], [59.86449172940988, 30.31690120697022]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Интернационалистов',
        year: 2020,
        url: './maps/parks/internatsionalistov_2021.jpg',
        bounds: [[59.86276804382595, 30.392925739288334], [59.86294041640396, 30.412087440490726], [59.855441383514496, 30.39324760437012]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Екатерингоф',
        year: 1986,
        url: './maps/parks/ekateringof_1986.jpg',
        bounds: [[59.906952348502685, 30.255017280578617], [59.90583339361939, 30.27119636535645], [59.90037794856062, 30.253279209136966]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Полежаевский парк',
        year: 2015,
        url: './maps/parks/polezhaevsky_2015.jpg',
        bounds: [[59.84651791838533, 30.179958343505863], [59.84528913795502, 30.21223068237305], [59.83302040442371, 30.177898406982425]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Полюстровский парк',
        year: 2014,
        url: './maps/parks/polyustrovsky_2014.jpg',
        bounds: [[59.96850125617298, 30.418868064880375], [59.968458299943094, 30.431871414184574], [59.95922141683493, 30.419168472290043]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Пулковский парк',
        year: 2024,
        url: './maps/parks/pulkovsky_2024.jpg',
        bounds: [[59.84401180495004, 30.3233814239502], [59.84255116579194, 30.339174270629886], [59.832470469568456, 30.31857490539551]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сосновка',
        year: 2019,
        url: './maps/parks/sosnovka_2019.jpg',
        bounds: [[60.03450203381863, 30.327758789062504], [60.03205832060785, 30.371103286743168], [60.01190151317921, 30.32200813293457]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Удельный парк',
        year: 2022,
        url: './maps/parks/udelny_2022.jpg',
        bounds: [[60.015376222736755, 30.294713973999027], [60.01172991312145, 30.33308029174805], [60.0032345970667, 30.288019180297855]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Пискарёвский парк',
        year: 2024,
        url: './maps/parks/piskarevsky_2024.jpg',
        bounds: [[60.0064313230872, 30.39530754089356], [60.004586270603426, 30.422816276550297], [59.994350796655525, 30.390887260437015]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парк Лесотехнической академии',
        year: 2012,
        url: './maps/parks/lesotekchnicheskaya_2012.jpg',
        bounds: [[59.99823507053651, 30.33007621765137], [59.99653978056108, 30.355482101440433], [59.99027289145817, 30.327501296997074]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Парки Пионерский и им.акд. Сахарова',
        year: 2015,
        url: './maps/parks/sakharova_2015.jpg',
        bounds: [[59.98593688316973, 30.405349731445316], [59.98414435735637, 30.42476892471314], [59.976307625792515, 30.401959419250492]],
        owner: 'SHEIN',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Таврический сад',
        year: 2023,
        url: './maps/parks/tavrichesky_2023.jpg',
        bounds: [[59.94823046787108, 30.367712974548343], [59.947607215923064, 30.37899971008301], [59.943663263827155, 30.366854667663574]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'ЦПКиО - Елагин остров',
        year: 2017,
        url: './maps/parks/elagin_2017.jpg',
        bounds: [[59.98518553686155, 30.23699283599854], [59.9827167074759, 30.275316238403324], [59.97616805074679, 30.23497581481934]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Александрино север',
        url: './maps/parks/aleksandrino_north.jpg',
        bounds: [[59.84785443506803, 30.217809677124027], [59.84677660322206, 30.238409042358402], [59.83603949282227, 30.214891433715824]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Александрино юг',
        year: 2007,
        url: './maps/parks/aleksandrino_south_2007.jpg',
        bounds: [[59.838713313973486, 30.226092338562015], [59.83765674901652, 30.244331359863285], [59.82784418747832, 30.22325992584229]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Александровский сад',
        year: 2020,
        url: './maps/parks/aleksandrovsky_sad_2020.jpg',
        bounds: [[59.93645117362841, 30.300335884094242], [59.94022401259256, 30.30979871749878], [59.93393570918105, 30.304069519042972]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Сад 9 Января',
        year: 2018,
        url: './maps/parks/sad_9_janvarya_2018.jpg',
        link: './maps/parks/sad_9_janvarya_2018_full.jpg',
        bounds: [[59.89634227945784, 30.274221897125248], [59.89559966293086, 30.282289981842045], [59.88932442864754, 30.27171134948731]],
        owner: 'BVZ',
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Луга - парк Зелёного Бора',
        year: 2019,
        url: './maps/parks/luga_zeleny_bor_park_2019.jpg',
        bounds: [[58.70221700150992, 29.821164608001713], [58.700723276668256, 29.83423233032227], [58.69201603857651, 29.817559719085697]],
        owner: 'SHEIN',
        types: ['ORIENT', 'PARK'],
        info: 'Авторы: А.Ковязин, К.Токмаков',
    },
    {
        name: 'Воронцовский сквер',
        year: 2024,
        url: './maps/parks/vorontsovsky_skver_2024.jpg',
        bounds: [[59.85116316078165, 30.22746562957764], [59.851120052463955, 30.243279933929447], [59.84347822095314, 30.22772312164307]],
        types: ['ORIENT', 'PARK'],
    },
    {
        name: 'Новознаменка',
        year: 2014,
        url: './maps/parks/novoznamenka_2014.jpg',
        bounds: [[59.85326462355383, 30.101037025451664], [59.85022554227052, 30.132408142089847], [59.84259428520911, 30.097217559814457]],
        types: ['ORIENT', 'PARK'],
    },
];
