const urlParams = new URLSearchParams(window.location.search);
const THE_AUTHOR_PARAM = urlParams.get('author');
const THE_OWNER_PARAM = urlParams.get('owner');
const MAP_NAME_PARAM = urlParams.get('map');
const START_NAME_PARAM = urlParams.get('start');
const HAS_WO_AUTHOR_PARAM = urlParams.has('wo-author');
const HAS_ONLY_WO_AUTHOR_PARAM = urlParams.has('only-wo-author');

const ATTRIBUTION = '© <a href="https://github.com/efradkin/o-maps" target="_blank">O-maps</a> | <a href="https://www.openstreetmap.org/copyright" target="_blank">OSM</a>';

let osmLayer, openTopoLayer, yandexLayer, yandexSatelliteLayer, activeLayers = [];

let funGroup = L.layerGroup([]);
let specialGroup = L.layerGroup([]);
let forestGroup = L.layerGroup([]);
let parkGroup = L.layerGroup([]);
let cityGroup = L.layerGroup([]);

let rogaineGroup = L.layerGroup([]);

let groupRetro = L.layerGroup([]);
let group90th = L.layerGroup([]);
let group2000th = L.layerGroup([]);
let group2010th = L.layerGroup([]);
let group2020th = L.layerGroup([]);
let groupUnknownYear = L.layerGroup([]);

let allOrientGroups = [
    specialGroup,
    forestGroup,
    parkGroup,
    cityGroup,
];
let allAgeGroups = [
    groupRetro,
    group90th,
    group2000th,
    group2010th,
    group2020th,
    groupUnknownYear
];

const mapsStatObj = {
    funGroup: [],
    cityGroup: [],
    parkGroup: [],
    forestGroup: [],
    specialGroup: [],
    rogaineGroup: [],
};

let mapElement = document.getElementById('map');
if (mapElement) {
    osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: ATTRIBUTION
    });
    openTopoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: ATTRIBUTION
    });
    yandexLayer = L.yandex({
        maxZoom: 17,
        attribution: ATTRIBUTION
    });
    yandexSatelliteLayer = L.yandex({
        type: 'satellite',
        maxZoom: 17,
        attribution: ATTRIBUTION
    });

    if (THE_OWNER_PARAM && owners[THE_OWNER_PARAM].rogaine) {
        activeLayers.push(
            osmLayer, parkGroup, cityGroup, forestGroup, specialGroup,
            group2020th, group2010th, group2000th, groupUnknownYear, rogaineGroup // group90th, groupRetro,
        );
    } else {
        activeLayers.push(
            osmLayer, parkGroup, cityGroup, forestGroup, specialGroup,
            group2020th, group2010th, group2000th, groupUnknownYear // group90th, groupRetro,
        );
    }
}

function buildOverlayMapsContents() {
    return {
        [polyglot.t("overlays.city")]: cityGroup,
        [polyglot.t("overlays.park")]: parkGroup,
        [polyglot.t("overlays.forest")]: forestGroup,
        [polyglot.t("overlays.special")]: specialGroup,
        [polyglot.t("overlays.2020")]: group2020th,
        [polyglot.t("overlays.2010")]: group2010th,
        [polyglot.t("overlays.2000")]: group2000th,
        [polyglot.t("overlays.90")]: group90th,
        [polyglot.t("overlays.retro")]: groupRetro,
        [polyglot.t("overlays.unknown")]: groupUnknownYear,
        [polyglot.t("overlays.rogaine")]: rogaineGroup,
    };
}

// function buildOverlayMapsContents() {
//     return {
//         "Город": cityGroup,
//         "Парки": parkGroup,
//         "Лес": forestGroup,
//         "Специальные": specialGroup,
//         "<span class='layer-separator'>2020-е</span>": group2020th,
//         "2010-е": group2010th,
//         "2000-е": group2000th,
//         "90-е": group90th,
//         "Ретро": groupRetro,
//         "???": groupUnknownYear,
//         "<span class='layer-separator'>Необычные</span>": funGroup,
//         "<span class='layer-separator'>Рогейн</span>": rogaineGroup,
//     };
// }

function allocateMap(m, imgLayer) {
    let added = false;
    m.groups = [];
    if (m.types.includes('ROGAINE')) {
        added = true;
        mapsStatObj.rogaineGroup.push(imgLayer);
        imgLayer.addTo(rogaineGroup);
        let el = imgLayer.getElement();
        if (el) {
            el.style.zIndex = 0;
        }
    }
    if (m.types.includes('FUN')) {
        added = true;
        mapsStatObj.funGroup.push(imgLayer);
        imgLayer.addTo(funGroup);
    }
    if (m.types.includes('RELIEF') || m.types.includes('WINTER') || m.types.includes('VELO') || m.types.includes('INDOOR')) {
        added = true;
        mapsStatObj.specialGroup.push(imgLayer);
        pushGroupToMap(m, specialGroup);
    }
    if (m.types.includes('CITY')) {
        added = true;
        mapsStatObj.cityGroup.push(imgLayer);
        pushGroupToMap(m, cityGroup);
    }
    if (m.types.includes('PARK')) {
        added = true;
        mapsStatObj.parkGroup.push(imgLayer);
        pushGroupToMap(m, parkGroup);
    }
    if (!added) {
        mapsStatObj.forestGroup.push(imgLayer);
        pushGroupToMap(m, forestGroup);
    }

    if (isOrientMap(m)) {
        if (!m.year) {
            pushGroupToMap(m, groupUnknownYear);
        } else if (m.year >= 2020) {
            pushGroupToMap(m, group2020th);
        } else if (m.year >= 2010) {
            pushGroupToMap(m, group2010th);
        } else if (m.year >= 2000) {
            pushGroupToMap(m, group2000th);
        } else if (m.year >= 1990) {
            pushGroupToMap(m, group90th);
        } else {
            pushGroupToMap(m, groupRetro);
        }
    }
}

function isMapAcceptable(m) {
    return isOrientMap(m);
}

function buildContextmenuItems() {
    return [{
        text: polyglot.t("main.contextAbout"),
        icon: 'images/information.png',
        callback: openWelcome
    }, '-', {
        text: polyglot.t("main.contextCoords"),
        icon: 'images/coordinates.png',
        callback: showCoordinates
    }, {
        text: polyglot.t("main.contextCenter"),
        icon: 'images/point.png',
        callback: centerMap
    }, '-', {
        text: polyglot.t("main.contextShowOrients"),
        icon: 'images/maps.png',
        callback: showAllOrients
    }, {
        text: polyglot.t("main.contextHideOrients"),
        icon: 'images/eraser.png',
        callback: hideOrients
    }, {
        text: polyglot.t("main.contextShowYears"),
        icon: 'images/calendar.png',
        callback: showAllAges
    }, {
        text: polyglot.t("main.contextHideYears"),
        icon: 'images/white-calendar.png',
        callback: clearAges
    }, '-', {
        text: polyglot.t("main.contextZoomIn"),
        icon: 'images/zoom-in.png',
        callback: zoomIn
    }, {
        text: polyglot.t("main.contextZoomOut"),
        icon: 'images/zoom-out.png',
        callback: zoomOut
    }, '-', {
        text: polyglot.t("main.contextPopups"),
        icon: 'images/info.png',
        callback: popupsSwitch
    }, {
        text: polyglot.t("main.contextMapSwitch"),
        icon: 'images/hide.png',
        callback: hideMapsSwitch
    }, {
        text: polyglot.t("main.contextFullSizeSwitch"),
        icon: 'images/expand.png',
        callback: fullSizeSwitch
    }, {
        text: hiddenButtonsMode ? polyglot.t("main.contextButtonsShow") : polyglot.t("main.contextButtonsHide"),
        icon: 'images/menu.png',
        callback: hiddenButtonsModeSwitch
    }, '-', {
        text: polyglot.t("main.contextEdit"),
        icon: 'images/edit.png',
        callback: editModeSwitch
    }];
}