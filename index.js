const input = document.querySelector('.input');
const result = document.querySelector('.result');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const calculator = document.querySelector('.calculator');

function handleClickButton(el){
    if(el != clear && el != equals){
        const exp = input.value + el.innerHTML;
        input.value = exp;
        result.value = eval(exp);
    }
    if(el == clear){
        input.value = '';
        result.value = '';
    }
    
}