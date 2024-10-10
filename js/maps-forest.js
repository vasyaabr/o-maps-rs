// types can be ORIENT, ROGAINE, SPRINT, CITY, RELIEF
var forestMaps = [
    // --- лесные карты ---
    {
        name: 'Юкки',
        year: 2021,
        url: './maps/forest/jukki_2021.jpg',
        bounds: [[60.122697440699724, 30.301966667175297], [60.12011059701429, 30.33162117004395], [60.11170729729768, 30.297245979309086]],
        types: ['ORIENT'],
    },
    {
        name: 'Красная Горка (Орово)',
        year: 2016,
        // url: './maps/forest/krasnaja_gorka_2016.jpg',
        url: './maps/black.png',
        bounds: [[59.9757385853773, 30.66794872283936], [59.97322610135715, 30.69468498229981], [59.95786788973526, 30.662326812744144]],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Гряда Вярямянселькя',
        url: './maps/black.png',
        bounds: [[60.63952973830604, 29.737243652343754], [60.63599457189152, 30.14030456542969], [60.57178919613921, 29.735183715820316]],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Первомайское',
        url: './maps/black.png',
        bounds: [[60.4600954860945, 29.65621948242188], [60.414530380617315, 29.761962890625004], [60.43232361819982, 29.599571228027347]],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Симагино',
        url: './maps/black.png',
        bounds: [[60.33170633085948, 29.90135192871094], [60.28919437827956, 30.007095336914066], [60.29531950952105, 29.84573364257813]],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'оз. Воробьёво',
        url: './maps/black.png',
        bounds: [[60.93235046755455, 30.264244079589847], [60.93159985602353, 30.35831451416016], [60.89329520374736, 30.263729095458988]],
        owner: 'WN',
        types: ['ORIENT'],
    },
    {
        name: 'Туутари',
        year: 1983,
        url: './maps/forest/tuutary_1983.jpg',
        bounds: [[59.70631768547324, 30.15652656555176], [59.705127030297604, 30.187897682189945], [59.688215155652344, 30.153179168701175]],
        types: ['ORIENT'],
    },
    {
        name: 'Токсово - оз Светлое',
        year: 2017,
        url: './maps/forest/toksovo_svetloe_2017.jpg',
        bounds: [[60.16070699702129, 30.436120033264164], [60.15609435132153, 30.494484901428226], [60.14496581512473, 30.430884361267093]],
        owner: 'SHEIN',
        types: ['ORIENT'],
        info: 'Автор: Виктор Добрецов',
    },
    {
        name: 'Кузнечное - оз Волковское-Суури',
        year: 2019,
        url: './maps/forest/kuznechnoe_suuri_2019.jpg',
        bounds: [[61.14435367217603, 29.88916397094727], [61.13689678153038, 29.96950149536133], [61.12479630189204, 29.879465103149418]],
        owner: 'SHEIN',
        types: ['ORIENT'],
        info: 'Автор: Виталий Чегаровский',
    },
    {
        name: 'Кузнечное',
        year: 2008,
        url: './maps/forest/kuznechnoe_2008.jpg',
        link: './maps/forest/kuznechnoe_2008_full.pdf',
        bounds: [[61.15640525439849, 29.747714996337894], [61.143318098224135, 29.93705749511719], [61.08469071939212, 29.726257324218754]],
        types: ['ORIENT'],
        info: 'Спасибо Косте Токмакову!',
    },
    {
        name: 'Выборг - гора Величка',
        year: 1999,
        url: './maps/black.png',
        bounds: [[60.77320188037102, 28.53432655334473], [60.77081301434992, 28.55956077575684], [60.76754375132123, 28.532009124755863]],
        owner: 'KOSO',
        types: ['ORIENT'],
    },
    {
        name: 'Возрождение',
        year: 2017,
        url: './maps/black.png',
        bounds: [[60.85369043136002, 28.86314392089844], [60.85218548420622, 28.903999328613285], [60.824163807202645, 28.85988235473633]],
        owner: 'KOSO',
        types: ['ORIENT'],
    },
    {
        name: 'Луга - оз Омчино',
        year: 2021,
        url: './maps/forest/luga_omchino_2021.jpg',
        bounds: [[58.7249159620653, 29.768228530883793], [58.720459798173344, 29.826335906982425], [58.704814146669335, 29.762735366821293]],
        types: ['ORIENT'],
        info: 'Авторы: А.Ковязин, К.Токмаков, С.Воробей',
    },
    {
        name: 'Луга - Штоле',
        year: 2022,
        url: './maps/forest/luga_shtole_2022.jpg',
        bounds: [[58.7346506950973, 29.80603694915772], [58.732601503940764, 29.824790954589847], [58.723178126011526, 29.798913002014164]],
        owner: 'SHEIN',
        types: ['ORIENT'],
        info: 'Авторы: А.Ковязин, К.Токмаков',
    },
    {
        name: 'Луга - Алёнка',
        year: 2022,
        url: './maps/forest/luga_alenka_2022.jpg',
        bounds: [[58.82262957770419, 29.91113662719727], [58.81956352271544, 29.952249526977543], [58.80125042024749, 29.90461349487305]],
        owner: 'SHEIN',
        types: ['ORIENT'],
        info: 'Автор: А. Столяров',
    },
    {
        name: 'Луга - Зелёный Бор',
        year: 2021,
        url: './maps/forest/luga_zeleny_bor_2021.jpg',
        bounds: [[58.70978496598359, 29.80749607086182], [58.707422243479755, 29.835648536682132], [58.688313967069234, 29.80028629302979]],
        owner: 'SHEIN',
        types: ['ORIENT'],
        info: 'Авторы: А.Ковязин, К.Токмаков',
    },
    {
        name: 'Кузьмолово - Юбилейная',
        year: 2018,
        url: './maps/forest/kuzmolovo_jubilejnaya_2018.jpg',
        bounds: [[60.12762470857684, 30.488841533660892], [60.12639563271471, 30.50491333007813], [60.11273376949533, 30.48461437225342]],
        owner: 'SHEIN',
        types: ['ORIENT'],
    },
    {
        name: 'Каменка',
        year: 2015,
        url: './maps/forest/kamenka_2015.jpg',
        link: './maps/forest/kamenka_2015_full.jpg',
        bounds: [[60.43067179904046, 28.998327255249027], [60.425758199767614, 29.044847488403324], [60.40122145583028, 28.985109329223636]],
        from: 'KURD',
        types: ['ORIENT'],
        info: 'Авторы: Виктор Дьячков, Сергей Стулов',
    },
    {
        name: 'Коробицыно',
        year: 2018,
        url: './maps/forest/korobitsyno_2018.jpg',
        link: './maps/forest/korobitsyno_2018_full.jpg',
        bounds: [[60.547151702290904, 29.80127334594727], [60.54267781546521, 29.87362861633301], [60.513328984704394, 29.795694351196293]],
        from: 'KURD',
        types: ['ORIENT'],
        info: 'Авторы: Виктор Дьячков, Сергей Стулов, Дмитрий Попов',
    },
];
