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
