const DEFAULT_LANGUAGE = "sr";

let polyglot = new Polyglot();

function loadTranslations() {
    const savedLang = localStorage.getItem("language") || DEFAULT_LANGUAGE;
    updateLanguage(savedLang);
    document.getElementById("language").value = savedLang;
}

function updateLanguage(lang) {
    if (!locales[lang]) return;
    polyglot.replace(locales[lang]);
    localStorage.setItem("language", lang);

    document.querySelectorAll("[data-i18n]").forEach(element => {
        let key = element.getAttribute("data-i18n");
        element.innerText = polyglot.t(key);
    });

    document.querySelectorAll("[data-i18n-content]").forEach(element => {
        let key = element.getAttribute("data-i18n-content");
        element.setAttribute("content", polyglot.t(key));
    });
}

document.getElementById("language").addEventListener("change", function() {
    localStorage.setItem("language", this.value);
    location.reload();
});

loadTranslations();
