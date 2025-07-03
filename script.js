let btns = document.querySelectorAll(".btn");
let display = document.querySelector(".display");
let set = document.querySelector(".set");

let current = '';
let prev = '';
let operator = '';

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const val = btn.dataset.val;

        if (!isNaN(val) || val === '.') {
            current += val;
            display.value = current;
        } else if (val === 'clear') {
            current = '';
            prev = '';
            operator = '';
            set.innerText = '';
            display.value = '';
        } else if (val === '+/-') {
            if (current) {
                current = (parseFloat(current) * -1)
                display.value = current;
            }
        } else if (val === '%') {
            if (current) {
                current = (parseFloat(current) / 100)
                display.value = current;
            }
        } else if (val === '=') {
            if (current && prev && operator) {
                current = eval(`${prev} ${operator} ${current}`)
                display.value = current;
                set.innerText = '';
                operator = '';
                prev = '';
            }
        } else {
            if (current) {
                if (prev && operator) {
                    prev = eval(`${prev} ${operator} ${current}`)
                } else {
                    prev = current;
                }
                operator = val;
                set.innerText = btn.innerText;
                current = '';
            }
        }
    });
});


let timespan = document.querySelector(".time")

setInterval(()=>{
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const time = `${hours}:${minutes}`;
    timespan.innerText = time;
},1000)