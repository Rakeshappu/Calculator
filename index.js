const input = document.querySelector('.input');
const result = document.querySelector('.result');


function handleClickButton(el){
    console.log(el.innerHTML);
    const exp = input.value + el.innerHTML;
    input.value = exp;
    result.value = eval(exp);
}