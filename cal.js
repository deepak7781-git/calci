const display = document.getElementById('display');

function appendValue(val) {
    display.value += val;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value.replace(/%/g, '/100'));
    } catch {
        display.value = 'Error';
    }
}

function toggleSign() {
    if (display.value) {
        if (display.value.startsWith('-')) {
            display.value = display.value.slice(1);
        } else {
            display.value = '-' + display.value;
        }
    }
}