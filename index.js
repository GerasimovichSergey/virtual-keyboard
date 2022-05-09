const body = document.querySelector('body');
const keyboardEn = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['ShiftLeft', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'Meta', 'AltLeft', ' ', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
];
let keyboardRu = [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    ['ShiftLeft', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'Meta', 'AltLeft', ' ', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
];
let language = 'en';

function getLocalStorage() {
    if (localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang');

        lang === 'en' ? language = 'en' : language = 'ru';
    }
}

getLocalStorage();

function createElem(name, classList) {
    const elem = document.createElement(name);
    elem.classList.add(classList);

    return elem;
}

function createContainer() {
    const container = createElem('div', 'container');
    body.prepend(container);
}

createContainer();

const container = document.querySelector('.container');

function createTextArea() {
    const textArea = createElem('textarea', 'textarea');
    textArea.name = 'text';
    textArea.cols = '70';
    textArea.rows = '5';
    container.append(textArea);
}

createTextArea();

function createKeyboardWrapper() {
    const keyboardWrapper = createElem('div', 'keyboard-wrapper');
    container.append(keyboardWrapper);
}

createKeyboardWrapper();

function createKeyboardRows() {
    const keyboardWrapper = document.querySelector('.keyboard-wrapper');

    for (let i = 0; i < keyboardEn.length; i++) {
        const row = createElem('div', 'row');
        keyboardWrapper.append(row);
    }

    language === 'en' ? createBtns(keyboardEn) : createBtns(keyboardRu);
}

createKeyboardRows();

function createBtns(lang) {
    const rows = document.querySelectorAll('.row');

    rows.forEach(row => {
        row.innerHTML = '';
    })

    for (let i = 0; i < lang.length; i++) {
        for (let j = 0; j < lang[i].length; j++) {
            const key = createElem('div', 'key');

            key.textContent = lang[i][j];

            if (lang[i][j] === ' ') {
                key.classList.add('space');
            }

            if (lang[i][j] === 'Backspace'
                || lang[i][j] === 'Tab'
                || lang[i][j] === 'Delete'
                || lang[i][j] === 'CapsLock'
                || lang[i][j] === 'Enter'
                || lang[i][j] === 'ShiftLeft'
                || lang[i][j] === 'ShiftRight'
                || lang[i][j] === 'ArrowUp'
                || lang[i][j] === 'ControlLeft'
                || lang[i][j] === 'ControlRight'
                || lang[i][j] === 'Meta'
                || lang[i][j] === 'AltLeft'
                || lang[i][j] === 'AltRight'
                || lang[i][j] === 'ArrowLeft'
                || lang[i][j] === 'ArrowDown'
                || lang[i][j] === 'ArrowRight') {

                if (lang[i][j] === 'Backspace') {
                    key.classList.add('backspace');
                }
                if (lang[i][j] === 'Tab') {
                    key.classList.add('tab');
                }
                if (lang[i][j] === 'Delete') {
                    key.classList.add('del');
                    key.textContent = 'DEL';
                }
                if (lang[i][j] === 'CapsLock') {
                    key.classList.add('caps-lock');
                    key.textContent = 'Caps Lock';
                }
                if (lang[i][j] === 'Enter') {
                    key.classList.add('enter');
                    key.textContent = 'ENTER';
                }
                if (lang[i][j] === 'ShiftLeft') {
                    key.classList.add('left-shift');
                    key.textContent = 'Shift';
                }
                if (lang[i][j] === 'ShiftRight') {
                    key.classList.add('right-shift');
                    key.textContent = 'Shift';
                }
                if (lang[i][j] === 'ControlLeft') {
                    key.classList.add('left-ctrl');
                    key.textContent = 'Ctrl';
                }
                if (lang[i][j] === 'AltLeft') {
                    key.classList.add('left-alt');
                    key.textContent = 'Alt';
                }
                if (lang[i][j] === 'AltRight') {
                    key.classList.add('right-alt');
                    key.textContent = 'Alt';
                }
                if (lang[i][j] === 'ControlRight') {
                    key.classList.add('right-ctrl');
                    key.textContent = 'Ctrl';
                }
                if (lang[i][j] === 'ArrowUp') {
                    key.innerHTML = '&#9650;'
                }
                if (lang[i][j] === 'ArrowLeft') {
                    key.innerHTML = '&#9668;'
                }
                if (lang[i][j] === 'ArrowDown') {
                    key.innerHTML = '&#9660;'
                }
                if (lang[i][j] === 'ArrowRight') {
                    key.innerHTML = '&#9658;'
                }
                if (lang[i][j] === 'Meta') {
                    key.textContent = 'Win';
                }

                key.classList.add('functional');
            }

            rows[i].append(key);
        }
    }
}

function createDescription() {
    const descriptionBlock = createElem('div', 'description');
    descriptionBlock.innerText = 'Клавиатура создана в Windows. Для переключения языка использовать левыe ctrl + alt. Переключение языка с русского на английский будет подсвечивать кнопки только когда будет совпадать язык компьютера и виртуальной клавиатуры. Косякнул, юзал везде event.key, на рефактор не хватило времени.'
    container.append(descriptionBlock);
}

createDescription();

document.addEventListener('keydown', (event) => {
    const keys = document.querySelectorAll('.key');

    //add class for push buttons
    keys.forEach(key => {
        if (key.textContent === event.key) {
            key.classList.add('press');
        };
    })

    //remove class from buttons
    if (event.altKey && event.ctrlKey) {
        language === 'en' ? language = 'ru' : language = 'en';
        language === 'en' ? createBtns(keyboardEn) : createBtns(keyboardRu);

        localStorage.setItem('lang', language);
    }
})

document.addEventListener('keyup', () => {
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        key.classList.remove('press');
    })
})

//text input in textarea
const textArea = document.querySelector('.textarea');
const keyboard = document.querySelector('.keyboard-wrapper');

keyboard.addEventListener('click', (event) => {
    const target = event.target;

    if (target.textContent === 'Tab') {
        textArea.value +='    ';
    }

    if (target.classList.contains('key') && !target.classList.contains('functional')) {
        textArea.value += target.closest('div').textContent;
    }
})