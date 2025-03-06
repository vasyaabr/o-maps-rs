const WELCOME_OPENED_TIME_KEY = 'welcomeOpenedTime';

let welcomeDialog;

const welcomeDialogContent = polyglot.t("welcome.text");

// --- welcome dialog (https://github.com/NBTSolutions/Leaflet.Dialog) ---
let dialogOptions = {
    size: [ 0, 0 ],
    minSize: [ 0, 0 ],
    maxSize: [ 999, 1999 ],
    anchor: [ 0, 0 ],
    position: "topleft",
    initOpen: false
};

function openWelcome() {
    const sw = window.innerWidth;
    const sh = window.innerHeight;

    let dw = sw - 400;
    if (dw < sw/2) dw = sw - 100;
    if (dw > 842) dw = 842;
    let dh = sh - 300;
    if (sh < 800) dh = sh - 100;

    let x = (sw - dw)/2;
    let y = 50;

    welcomeDialog.hideResize();
    welcomeDialog.setSize([dw, dh]);
    welcomeDialog.setLocation([y, x]);
    welcomeDialog.open();

    localStorage.setItem(WELCOME_OPENED_TIME_KEY, new Date().getTime());
}
