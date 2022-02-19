let firstNum = '',
   secondNum = '',
   action = '',
   done = false;

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
   actions = ['÷', '×', '–', '+'];

const cBtn = document.querySelector('.c_btn'),
   buttons = document.querySelectorAll('.buttons'),
   remove = document.querySelector('.remove');

let mainScreen = document.querySelector('.screen');
//сброс
function reset() {
   firstNum = '';
   secondNum = '';
   action = '';
   done = 'false';
   mainScreen.textContent = '0';
   mainScreen.style.fontSize = '96px';
}

cBtn.addEventListener('click', reset);

remove.addEventListener('click', () => {

   if (firstNum !== '' && action !== '' && !done) {
      secondNum = secondNum.slice(0, -1);
      mainScreen.textContent = secondNum;
   } else {
      firstNum = firstNum.slice(0, -1);
      mainScreen.textContent = firstNum;
   }

});


buttons.forEach(item => {
   item.addEventListener('click', (e) => {
      if (numbers.find(item => item === e.target.textContent)) {
         

         if (secondNum === '' && action === '') {
            firstNum += e.target.textContent;
            mainScreen.textContent = firstNum;
         } 
         else if (firstNum !== '' && secondNum !== '' && done) {
            secondNum = e.target.textContent;
            done = false;
            mainScreen.textContent = secondNum;
         } else  {
            secondNum += e.target.textContent;
            mainScreen.textContent = secondNum;
         }
      }
      if (firstNum.length > 6 || secondNum.length > 6) {
         mainScreen.style.fontSize = '42px';
      }
      if (actions.find(item => item === e.target.textContent)) {
         action = e.target.textContent;
         mainScreen.textContent = action;
      }
      if (e.target.textContent === '=') {
         switch (action) {
            case '÷':
               firstNum = firstNum / secondNum;
               break;
            case '×':
               firstNum = firstNum * secondNum;
               break;
            case '–':
               firstNum = firstNum - secondNum;
               break;
            case '+':
               firstNum = (+firstNum) + (+secondNum);
               break;
         }
            mainScreen.textContent = firstNum;
            done = true;
      }
console.log(`первое число:${firstNum}, знак:${action}, Второе число:${secondNum}, знак равно: ${done}`);
   });
});