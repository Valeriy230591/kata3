const btn = document.querySelector('.show-more');
const block = document.querySelector('.card__box');
let text = btn.querySelector('span');
let img = btn.querySelector('.show-more__icon');

btn.addEventListener('click',function(){
   if(text.textContent === 'Показать все'){
    block.style.height = '100%'
    text.textContent = 'Скрыть'
    img.style.transform = 'rotate(180deg)'
   }else{
    block.style.height = '170px'
    text.textContent = 'Показать все'
    img.style.transform = 'rotate(0deg)'
   }
});

 