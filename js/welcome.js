const WELCOME_OPENED_TIME_KEY = 'welcomeOpenedTime';

let welcomeDialog;

const welcomeDialogContent = `
<h2>O-maps / Карты на карте ◪</h2>
<p>
Добро пожаловать на сайт-каталог спортивных карт (ориентирование, рогейн, охота на лис, туризм итп) Санкт-Петербурга и области.
Тут представлены более тысячи карт разных авторов, мест, типов и годов издания. Со временем их будет ещё больше. Всё это позволяет решать три основные задачи:<br/>
<ol>
<li><b>Карты для соревнований и тренировок</b> - достаточно свежие, актуальные, с доступными полноразмерами для печати или с указанием правообладателя, у которого карту можно взять в аренду.</li>
<li><b>Карты различных годов и авторов</b> в одних и тех же местах - от 50-летней давности до самых свежих. Позволяет наблюдать развитие картографии.</li>
<li><b>Архив (музей)</b> - старые карты или уже не актуальные из-за сильного изменения местности</li>
</ol>
</p>
<p>
Большинство карт выложены в виде изображений низкого качества, достаточного для просмотра, но не для печати.
В тех случаях, когда владельцы не возражают, карты сопровождаются ссылкой на скачивание полноразмерного файла (jpeg, pdf, ocad).
</p>
<h4>Обращение к правообладателям:</h4> 
<p>
Если Ваших карт тут ещё нет, и Вы хотели бы это исправить, напишите <a href="https://t.me/efradkin" target="_blank">мне</a>.<br/>
Если Вы по каким-то причинам категорически не хотите, чтобы Ваши карты тут появились (что, конечно, очень печально), напишите <a href="https://t.me/efradkin" target="_blank">мне</a>.<br/>
Если показ Ваших карт надо сопроводить Вашей контактной информацией, напишите <a href="https://t.me/efradkin" target="_blank">мне</a>.<br/>
Всё это для Вас бесплатно.
</p>
<p>
<b>PS:</b>
Исходный код сайта <a href="https://github.com/efradkin/o-maps" target="_blank">доступен свободно</a>, но при его использовании прошу указывать ссылку на <a href="https://github.com/efradkin/o-maps" target="_blank">мой проект на GitHub</a>. 
Для коммерческого использования кода проекта или любой его части прошу связываться со мной.<br/>
Буду рад предложениям, конструктивной критике и любой помощи. Если Вы видите какие-то недочёты, ошибки, или у Вас есть дополнительная информация о картах - сообщите мне, и я добавлю/исправлю.
Если Вам нравится то, что я делаю, Вы можете меня поддержать в любой форме морально или материально - например, переводом на карту <b>5536 9139 5660 9602 (Т-Банк)</b> или по номеру телефона <b>+7-921-748-0424</b>.
</p>
<p><em>Евгений Фрадкин</em> 
<h4>Благодарности:</h4>
<ul>
<li>Первое спасибо - всем, кто присылал карты, сообщал об ошибках, советовал улучшения.</li>
<li>И отдельное - Владимиру Борисову, передавшему мне огромный архив бумажных карт для сканирования.</li>
<li>Базой для Московского раздела каталога стала страничка <a href="http://o-mephi.net/index.php?pid=145" target="_blank">о-МИФИ</a> Алексея Ермаченкова.</li>
<li>Бездонный источник карт практически любых регионов - <a href="https://disk.yandex.ru/d/Sb3qwOSMuEIpDg" target="_blank">онлайн архив</a> Виктора Быркина.</li>
<li>Этот проект во многом является продолжением <a href="http://www.northernwind.spb.ru/mapbase/online/" target="_blank">Базы данных спортивных карт</a> Дениса Ельцова.</li>
<li>Технической основой является JavaScript-библиотека <a href="https://leafletjs.com/" target="_blank">Leaflet</a> с дополнениями к ней.</li>
<li>The icons created by <a href="https://www.flaticon.com/">Good Ware - Flaticon</a>.</li>
</ul> 
<hr />
Найти меня можно по электронной почте eugene.fradkin⚽gmail.com или в <a href="https://t.me/o_maps" target="_blank">чате проекта в Telegram</a>.
</p>
`;


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
