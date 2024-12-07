// types can be ORIENT, ROGAINE, SPRINT, CITY, RELIEF, WINTER, VELO
let southMaps = [
    // --- Юг ЛО (Сосновый Бор, Луга, Гатчина, Кириши) ---
    {
        name: 'Мга',
        year: 1992,
        url: './maps/forest/south/mga_1992.webp',
        link: './original_maps/forest/south/mga_1992_full.jpg',
        bounds: [[59.753390360325824, 31.02187156677246], [59.7482666342105, 31.071996688842777], [59.73721660178828, 31.016163825988773]],
        author: 'RYLOV_V',
        types: ['ORIENT'],
    },
    {
        name: 'Туутари',
        year: 1983,
        url: './maps/forest/south/tuutary_1983.webp',
        link: './original_maps/forest/south/tuutary_1983_full.jpg',
        bounds: [[59.70584142848521, 30.1585865020752], [59.70486724535825, 30.186910629272464], [59.688215155652344, 30.15480995178223]],
        author: 'VLKV_K',
        types: ['ORIENT'],
    },
    {
        name: 'Ломоносов, Красный пруд',
        year: 1997,
        url: './maps/forest/south/lomonosov_1997.webp',
        link: './original_maps/forest/south/lomonosov_1997_full.jpg',
        bounds: [[59.90426248948507, 29.730892181396488], [59.901766105385086, 29.76556777954102], [59.881917481564564, 29.72436904907227]],
        author: 'KRCHKN_V',
        types: ['ORIENT'],
    },
    {
        name: 'Ульяновка, Саблино',
        year: 1992,
        url: './maps/forest/south/sablino_1992.webp',
        link: './original_maps/forest/south/sablino_1992_full.jpg',
        bounds: [[59.67703693873597, 30.761761665344242], [59.675130203892365, 30.801887512207035], [59.65568831941736, 30.7553243637085]],
        author: 'DRBSHV',
        types: ['ORIENT'],
    },
    {
        name: 'Ульяновка, Саблино',
        year: 2019,
        url: './maps/forest/south/ulianovka_2019.webp',
        bounds: [[59.67181482707671, 30.782876014709476], [59.670146180047, 30.797853469848636], [59.66128145460106, 30.779399871826175]],
        author: 'DRBSHV',
        types: ['ORIENT'],
        zindex: 2
    },
    {
        name: 'Тихвин, Царицыно оз',
        url: './maps/forest/south/tikhvin_tsaritsyno.webp',
        bounds: [[59.71603617732234, 33.486156463623054], [59.71127468540223, 33.539457321167], [59.69618493920625, 33.4799337387085]],
        owner: 'EGRV_SRG',
        types: ['ORIENT'],
    },
    {
        name: 'Будогощь',
        year: 2015,
        url: './maps/forest/south/budogosch_2015.webp',
        bounds: [[59.33809215192027, 32.31679916381837], [59.32206812385745, 32.48983383178712], [59.25368420047816, 32.295856475830085]],
        author: ['YUDNTSV','VRBY'],
        owner: 'EGRV_SRG',
        types: ['ORIENT'],
    },
    {
        name: 'Будогощь, Линное оз',
        url: './maps/forest/south/budogosch_linnoe.webp',
        bounds: [[59.296396427716594, 32.37688064575196], [59.29328471812206, 32.42511749267579], [59.2658367640389, 32.368040084838874]],
        owner: 'EGRV_SRG',
        types: ['ORIENT'],
    },
    {
        name: 'Будогощь, р Ингорь',
        url: './maps/forest/south/budogosch_ingor.webp',
        bounds: [[59.30305715920366, 32.32589721679688], [59.29679084945624, 32.38821029663087], [59.276318706162115, 32.31679916381837]],
        owner: 'EGRV_SRG',
        types: ['ORIENT'],
    },
    {
        name: 'Будогощь, Светлое оз',
        year: 2010,
        url: './maps/forest/south/budogosch_svetloe_2010.webp',
        bounds: [[59.296045826776194, 32.347269058227546], [59.292079402035064, 32.38919734954835], [59.27807269098165, 32.340788841247566]],
        author: ['TKMKV_K','VRBY'],
        owner: 'EGRV_SRG',
        types: ['ORIENT'],
    },
    {
        name: 'Будогощь, Черёмуховое оз',
        year: 2010,
        url: './maps/forest/south/budogosch_cheremukhovoe_2010.webp',
        bounds: [[59.29238621381673, 32.38606452941895], [59.28890154588962, 32.422928810119636], [59.27923465616935, 32.38181591033936]],
        owner: 'EGRV_SRG',
        types: ['ORIENT'],
    },
    {
        name: 'Будогощь, 92 км',
        year: 2022,
        url: './maps/forest/south/budogosch_92km_2022.webp',
        bounds: [[59.33126316233755, 32.3899269104004], [59.32920544124976, 32.4203109741211], [59.31208212202485, 32.38340377807618]],
        author: 'YUDNTSV',
        owner: 'EGRV_SRG',
        types: ['ORIENT'],
    },
    {
        name: 'Будогощь, "Орлёнок"',
        year: 2006,
        url: './maps/forest/south/budogosch_orlenok_2006.webp',
        bounds: [[59.32149882541276, 32.411727905273445], [59.31400947360146, 32.48803138732911], [59.29578287370009, 32.4023723602295]],
        author: 'KRTSHV',
        owner: 'EGRV_SRG',
        types: ['ORIENT'],
    },
    {
        name: 'Елизаветино',
        year: 2019,
        url: './maps/forest/south/elizavetino_2019.webp',
        bounds: [[59.49776478166187, 29.74329471588135], [59.49525968670402, 29.769129753112797], [59.49083719575336, 29.74011898040772]],
        author: 'TKMKV_K',
        types: ['ORIENT'],
    },
    {
        name: 'Пелеши',
        year: 2018,
        url: './maps/forest/south/peleshi_2018.webp',
        bounds: [[59.04607342200753, 28.045520782470707], [59.04417505299444, 28.07358741760254], [59.01824961979959, 28.03719520568848]],
        author: 'RYLOV_V',
        types: ['ORIENT'],
    },
    {
        name: 'Лемовжа',
        year: 1992,
        url: './maps/forest/south/lemovzha_1992.webp',
        link: './original_maps/forest/south/lemovzha_1992_full.jpg',
        bounds: [[59.124917461875384, 29.296503067016605], [59.12300142617275, 29.333152770996097], [59.10718453374521, 29.293198585510257]],
        author: 'RYLOV_V',
        types: ['ORIENT'],
    },
    {
        name: 'Хотнежа',
        year: 2017,
        url: './maps/forest/south/khotnezha_2017.webp',
        bounds: [[59.12615071552468, 29.295215606689457], [59.12112933377082, 29.33632850646973], [59.10989463099106, 29.288692474365238]],
        author: 'RYLOV_V',
        types: ['ORIENT'],
    },
    {
        name: 'Рагин Бор',
        url: './maps/forest/south/ragin_bor_2017.webp',
        bounds: [[60.06852373745732, 32.26736068725587], [60.066489419991676, 32.309331893920906], [60.05473074902389, 32.265043258667]],
        author: 'RYLOV_V',
        types: ['ORIENT'],
    },
    {
        name: 'Юшково - Марьина Роща',
        url: './maps/forest/south/yushkovo.webp',
        bounds: [[60.08868881306909, 32.28620052337647], [60.085243214141705, 32.31443881988526], [60.0787790695464, 32.28122234344483]],
        author: 'RYLOV_V',
        types: ['ORIENT'],
    },
    {
        name: 'Гатчина - Приоратский парк',
        year: 1993,
        url: './maps/forest/south/gatchina_prioratsky_1993.webp',
        link: './original_maps/forest/south/gatchina_prioratsky_1993_full.jpg',
        bounds: [[59.56337553311358, 30.105199813842777], [59.563071167965695, 30.13584136962891], [59.54445618473496, 30.103740692138675]],
        author: ['MRSKY_S','HSMTLN','KOUKNN_Y','MRSKA_I','GLK'],
        types: ['ORIENT'],
    },
    {
        name: 'Сосновый Бор, Калищенское оз',
        year: 2021,
        url: './maps/forest/south/kalischenskoe_oz_2021.webp',
        bounds: [[59.91607472734414, 29.105272293090824], [59.912202325545465, 29.146471023559574], [59.90314344395666, 29.100208282470707]],
        author: 'DBRTSV_V',
        owner: 'YUVNT',
        types: ['ORIENT'],
    },
    {
        name: 'Сосновый Бор, Копанское оз',
        year: 2018,
        url: './maps/forest/south/kopanskoe_2018.webp',
        bounds: [[59.77029092200125, 28.72585773468018], [59.76748195838195, 28.754224777221683], [59.76229555851045, 28.722982406616214]],
        owner: 'YUVNT',
        types: ['ORIENT'],
    },
    {
        name: 'Сосновый Бор',
        year: 2021,
        url: './maps/forest/south/sosnovij_bor_2021.webp',
        bounds: [[59.904520725405696, 29.05892372131348], [59.89922648763698, 29.104671478271488], [59.862056997499586, 29.041585922241214]],
        author: ['LVCHV','STLV','DBRTSV_V'],
        owner: 'YUVNT',
        types: ['ORIENT'],
    },
    {
        name: 'Сосновый Бор, вдоль моря',
        year: 2020,
        url: './maps/forest/south/sosnovij_bor_bereg_2020.webp',
        bounds: [[59.95431193211919, 29.060254096984867], [59.95251769387143, 29.08093929290772], [59.92587203736449, 29.048967361450195]],
        author: 'LVCHV',
        owner: 'YUVNT',
        types: ['ORIENT'],
    },
    {
        name: 'Сосновый Бор, Липово',
        year: 2020,
        url: './maps/forest/south/sosnovij_bor_lipovo_2020.webp',
        bounds: [[59.94432957749965, 29.061756134033207], [59.943426826724476, 29.07488822937012], [59.93117277838889, 29.056606292724613]],
        author: ['LVCHV','STLV'],
        owner: 'YUVNT',
        types: ['ORIENT'],
    },
    {
        name: 'Форт "Красная Горка"',
        url: './maps/forest/south/fort_krasnaja_gorka.webp',
        bounds: [[59.9807629815427, 29.305815696716312], [59.976221733526316, 29.357614517211918], [59.962916479136254, 29.298820495605472]],
        author: ['DBRTSV_V','MKHLV_A'],
        owner: 'YUVNT',
        types: ['ORIENT'],
    },
    {
        name: 'Форт "Красная Горка"',
        year: 2020,
        url: './maps/forest/south/fort_krasnaja_gorka_2020.webp',
        bounds: [[59.97953916041285, 29.321157932281494], [59.975620481424144, 29.357635974884037], [59.97175502864446, 29.31828260421753]],
        author: 'STLV',
        owner: 'YUVNT',
        types: ['ORIENT'],
    },
    {
        name: 'Лебяжье - Борки',
        year: 2010,
        url: './maps/forest/south/lebyazhje_borki_2011.webp',
        bounds: [[59.95763155393701, 29.44644927978516], [59.955397023083194, 29.48790550231934], [59.94918681445341, 29.4404411315918]],
        author: ['SHRNN','MLNKV_F'],
        owner: 'YUVNT',
        types: ['ORIENT'],
    },
    {
        name: 'Шепелево',
        year: 2011,
        url: './maps/forest/south/shepelevo_2023.webp',
        bounds: [[59.98215851183213, 29.116559028625492], [59.97999004714518, 29.1423511505127], [59.96229350332903, 29.108920097351078]],
        author: ['SHRNN','LVCHV'],
        owner: 'YUVNT',
        types: ['ORIENT'],
    },
    {
        name: 'Шапки',
        year: 1991,
        url: './maps/forest/south/shapki_1991.webp',
        bounds: [[59.63005202750804, 31.123924255371097], [59.62501790078504, 31.19928359985352], [59.59562263666977, 31.11611366271973]],
        author: 'KRCHKN_V',
        types: ['ORIENT'],
    },
    {
        name: 'Шапки',
        year: 2010,
        url: './maps/forest/south/shapki_2010.webp',
        link: './original_maps/forest/south/shapki_2010_full.jpg',
        bounds: [[59.6156854113636, 31.140747070312504], [59.61160434543937, 31.20151519775391], [59.59284243327236, 31.134738922119144]],
        author: ['RYLOV_V','KRCHKN_V'],
        types: ['ORIENT'],
    },
    {
        name: 'Шапки',
        year: 2020,
        url: './maps/forest/south/shapki_otime_2020.webp',
        bounds: [[59.59822886857503, 31.170444488525394], [59.59875009071161, 31.21267318725586], [59.5807197983505, 31.17130279541016]],
        info: 'Ковидный полигон от O-Time',
        owner: 'NKLSK',
        types: ['ORIENT'],
    },
    {
        name: 'Луга, р Свинечная',
        year: 2008,
        url: './maps/forest/south/luga_svinechnaja_2008.webp',
        link: './original_maps/forest/south/luga_svinechnaja_2008_full.jpg',
        bounds: [[58.72039295137178, 29.784665107727054], [58.717562985688595, 29.817109107971195], [58.69533864737061, 29.772734642028812]],
        types: ['ORIENT'],
        author: 'BYMKV',
        zindex: 2
    },
    {
        name: 'Луга, оз Омчино',
        year: 2022,
        url: './maps/forest/south/luga_omchino_2022.webp',
        bounds: [[58.72103913174298, 29.753894805908207], [58.714665932133464, 29.814834594726566], [58.69656503364685, 29.74453926086426]],
        types: ['ORIENT'],
        author: ['KVZN','TKMKV_K','VRBY'],
    },
    {
        name: 'Луга, оз Омчино',
        year: 2021,
        url: './maps/forest/south/luga_omchino_2021.webp',
        bounds: [[58.72634181401793, 29.769344329833988], [58.720727184095935, 29.826335906982425], [58.70276319833188, 29.76101875305176]],
        types: ['ORIENT'],
        author: ['KVZN','TKMKV_K','VRBY'],
    },
    {
        name: 'Луга, Штоле',
        year: 2022,
        url: './maps/forest/south/luga_shtole_2022.webp',
        bounds: [[58.7346506950973, 29.80603694915772], [58.732601503940764, 29.824790954589847], [58.723178126011526, 29.798913002014164]],
        owner: 'SHEIN',
        types: ['ORIENT'],
        author: ['KVZN','TKMKV_K'],
    },
    {
        name: 'Луга, Алёнка',
        year: 2022,
        url: './maps/forest/south/luga_alenka_2022.webp',
        bounds: [[58.82262957770419, 29.91113662719727], [58.81956352271544, 29.952249526977543], [58.80125042024749, 29.90461349487305]],
        owner: 'SHEIN',
        types: ['ORIENT'],
        author: 'STLRV',
    },
    {
        name: 'Луга, Зелёный Бор',
        year: 2021,
        url: './maps/forest/south/luga_zeleny_bor_2021.webp',
        bounds: [[58.70978496598359, 29.80749607086182], [58.707422243479755, 29.835648536682132], [58.688313967069234, 29.80028629302979]],
        owner: 'SHEIN',
        types: ['ORIENT'],
        author: ['KVZN','TKMKV_K'],
    },
    {
        name: 'Луга, Шалово',
        year: 1986,
        url: './maps/forest/south/luga_shalovo_1986.webp',
        link: './original_maps/forest/south/luga_shalovo_1986_full.jpg',
        bounds: [[58.803139961832024, 29.95954513549805], [58.80125042024749, 30.019884109497074], [58.77158224959439, 29.956626892089847]],
        author: 'BYMKV',
        types: ['ORIENT'],
    },
    {
        name: 'Луга, Шалово',
        year: 2006,
        url: './maps/forest/south/luga_shalovo_2006.webp',
        bounds: [[58.801650567053684, 29.925470352172855], [58.798716049977116, 29.97980117797852], [58.770247253260614, 29.919204711914066]],
        author: 'BYMKV',
        types: ['ORIENT'],
    },
    {
        name: 'Луга, Шалово',
        year: 2020,
        url: './maps/forest/south/luga_shalovo_nm_2020.webp',
        bounds: [[58.78426215625883, 29.895257949829105], [58.780036035082176, 29.943408966064457], [58.766598001517856, 29.8894214630127]],
        author: 'ORLV',
        owner: 'LM',
        types: ['ORIENT'],
    },
    {
        name: 'Россонь',
        year: 2022,
        url: './maps/forest/south/rosson_2022.webp',
        bounds: [[59.48968245988147, 28.0931568145752], [59.487089607147894, 28.11877727508545], [59.471244913663796, 28.08616161346436]],
        owner: 'SHEIN',
        author: 'DBRTSV_V',
        types: ['ORIENT'],
    },
    {
        name: 'Сиверский, р Орлинка',
        url: './maps/forest/south/siversky_orlinka.webp',
        bounds: [[59.348245546606904, 30.15884399414063], [59.347939238592836, 30.194077491760257], [59.32933678887218, 30.15910148620606]],
        author: 'RYLOV_V',
        types: ['ORIENT'],
    },
    {
        name: 'Павловск, школа №464',
        year: 2016,
        url: './maps/forest/south/pavlovsk_school_464.webp',
        bounds: [[59.682886470899305, 30.420885086059574], [59.681857460558504, 30.43169975280762], [59.678965230682635, 30.419061183929447]],
        author: 'SHRNN',
        owner: 'SHRNN',
        types: ['ORIENT'],
    },
    {
        name: 'Дудергоф - Нагорный парк',
        year: 1997,
        url: './maps/forest/south/nagorny_park_1997.webp',
        link: './original_maps/forest/south/nagorny_park_1997_full.jpg',
        bounds: [[59.70547340708053, 30.1201343536377], [59.70348169163133, 30.140476226806644], [59.69226525549391, 30.115199089050297]],
        info: 'Тренировка от Стрекозаек.',
        author: 'DBRTSV_V',
        types: ['ORIENT'],
    },
    {
        name: 'Дудергоф - Нагорный парк',
        year: 2020,
        url: './maps/forest/south/nagorny_park_2020.webp',
        bounds: [[59.7056032974501, 30.118718147277836], [59.70358994008143, 30.14111995697022], [59.691702169319946, 30.11365413665772]],
        info: 'Ковидный полигон от O-Time.',
        author: 'DBRTSV_V',
        types: ['ORIENT'],
    },
];