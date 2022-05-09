const body = document.querySelector('body');
const keyboardEn = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['ShiftLeft', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'Meta', 'AltLeft', ' ', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
];
let language = 'en';

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
    textArea.rows = '10';
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

    createBtns();
}

createKeyboardRows();

function createBtns() {
    const rows = document.querySelectorAll('.row');

    for (let i = 0; i < keyboardEn.length; i++) {
        for (let j = 0; j < keyboardEn[i].length; j++) {
            const key = createElem('div', 'key');

            key.textContent = keyboardEn[i][j];

            if (keyboardEn[i][j] === ' ') {
                key.classList.add('space');
            }

            if (keyboardEn[i][j] === 'Backspace'
                || keyboardEn[i][j] === 'Tab'
                || keyboardEn[i][j] === 'Delete'
                || keyboardEn[i][j] === 'CapsLock'
                || keyboardEn[i][j] === 'Enter'
                || keyboardEn[i][j] === 'ShiftLeft'
                || keyboardEn[i][j] === 'ShiftRight'
                || keyboardEn[i][j] === 'ArrowUp'
                || keyboardEn[i][j] === 'ControlLeft'
                || keyboardEn[i][j] === 'ControlRight'
                || keyboardEn[i][j] === 'Meta'
                || keyboardEn[i][j] === 'AltLeft'
                || keyboardEn[i][j] === 'AltRight'
                || keyboardEn[i][j] === 'ArrowLeft'
                || keyboardEn[i][j] === 'ArrowDown'
                || keyboardEn[i][j] === 'ArrowRight') {

                if (keyboardEn[i][j] === 'Backspace') {
                    key.classList.add('backspace');
                }
                if (keyboardEn[i][j] === 'Tab') {
                    key.classList.add('tab');
                }
                if (keyboardEn[i][j] === 'Delete') {
                    key.classList.add('del');
                    key.textContent = 'DEL';
                }
                if (keyboardEn[i][j] === 'CapsLock') {
                    key.classList.add('caps-lock');
                    key.textContent = 'Caps Lock';
                }
                if (keyboardEn[i][j] === 'Enter') {
                    key.classList.add('enter');
                    key.textContent = 'ENTER';
                }
                if (keyboardEn[i][j] === 'ShiftLeft') {
                    key.classList.add('left-shift');
                    key.textContent = 'Shift';
                }
                if (keyboardEn[i][j] === 'ShiftRight') {
                    key.classList.add('right-shift');
                    key.textContent = 'Shift';
                }
                if (keyboardEn[i][j] === 'ControlLeft') {
                    key.classList.add('left-ctrl');
                    key.textContent = 'Ctrl';
                }
                if (keyboardEn[i][j] === 'AltLeft') {
                    key.classList.add('left-alt');
                    key.textContent = 'Alt';
                }
                if (keyboardEn[i][j] === 'AltRight') {
                    key.classList.add('right-alt');
                    key.textContent = 'Alt';
                }
                if (keyboardEn[i][j] === 'ControlRight') {
                    key.classList.add('right-ctrl');
                    key.textContent = 'Ctrl';
                }
                if (keyboardEn[i][j] === 'ArrowUp') {
                    key.innerHTML = '&#9650;'
                }
                if (keyboardEn[i][j] === 'ArrowLeft') {
                    key.innerHTML = '&#9668;'
                }
                if (keyboardEn[i][j] === 'ArrowDown') {
                    key.innerHTML = '&#9660;'
                }
                if (keyboardEn[i][j] === 'ArrowRight') {
                    key.innerHTML = '&#9658;'
                }

                key.classList.add('functional');
            }

            rows[i].append(key);
        }
    }
}

const keys = document.querySelectorAll('.key');

document.addEventListener('keydown', (event) => {
    keys.forEach(key => {
        if (key.textContent === event.key) {
            key.classList.add('press');
        };

    })
})

document.addEventListener('keyup', () => {
    keys.forEach(key => {
        key.classList.remove('press');
    })
})