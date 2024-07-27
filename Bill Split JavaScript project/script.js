const inputBill = document.querySelector('.js-bill-input');
const tipButtons = document.querySelectorAll('.tip-button');
const customTipInput = document.querySelector('.js-custom-tip-input');
const numberOfPeopleInput = document.querySelector('.js-number-of-people-input');
const generateBillButton = document.querySelector('.js-generate-bill-btn');
const total = document.querySelector('.js-total-amount');
const tipAmount = document.querySelector('.js-tip-amount');
const eachPersonAmount = document.querySelector('.js-split-amount');
const resetBtn = document.querySelector('.js-reset-btn');


customTipInput.addEventListener('input', ()=> {
  tipButtons.forEach((button) => {
      button.classList.remove('active');
  });
  numberOfPeopleInput.addEventListener('input', () => {
    if(customTipInput.value && numberOfPeopleInput.value) {
      generateBillButton.disabled = false;
      generateBillButton.classList.add('activate-generate-bill-button');
    }
  else {
    generateBillButton.disabled = true;
    generateBillButton.classList.remove('activate-generate-bill-button');
  }
  });


});


inputBill.addEventListener('input', calculateBill);
let array = [];
let tipPercentage;
function calculateBill() {
  if (inputBill.value)  {
    customTipInput.classList.add('activate-custom-tip-input');
    customTipInput.disabled = false;
    numberOfPeopleInput.classList.add('activate-number-of-people-input');
    numberOfPeopleInput.disabled = false;
    tipButtons.forEach((button) => {
      button.disabled = false;
      button.addEventListener('click',  getbillInputValue);
      button.classList.add('activate-tip-button');
      button.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        button.classList.add('active');
        customTipInput.value = '';
      });
    });

  
  if(customTipInput.value) {
    console.log(array);
    if(array.length >= 1){
      array.pop();
    }
    array.push((customTipInput.value * inputBill.value)/100);
    console.log(array);
  }
 
    
  numberOfPeopleInput.addEventListener('input', () => {
    if(numberOfPeopleInput.value && tipPercentage) {
      generateBillButton.disabled = false;
      generateBillButton.classList.add('activate-generate-bill-button');
    } else {
      generateBillButton.disabled = true;
      generateBillButton.classList.remove('activate-generate-bill-button');
    }
  });
  if (numberOfPeopleInput.value) {
    array.push(numberOfPeopleInput.value);
  }





  if (array.length === 3) {
    array.shift();
  }


  } else {
    tipButtons.forEach((button) => {
      button.classList.remove('activate-tip-button');
      button.classList.remove('active');
      button.disabled = true;
    });
    customTipInput.classList.remove('activate-custom-tip-input');
    customTipInput.disabled = true;
    customTipInput.value = '';
    numberOfPeopleInput.classList.remove('activate-number-of-people-input');
    numberOfPeopleInput.disabled = true;
    numberOfPeopleInput.value = '';
    generateBillButton.disabled = true;
    generateBillButton.classList.remove('activate-generate-bill-button');

  }


  
  function getbillInputValue() {
    generateBillButton.disabled = false;
    if(this.innerHTML === '5%'){
      tipPercentage = Number(inputBill.value) * 0.05;
    } else if (this.innerHTML === '10%'){
      tipPercentage = Number(inputBill.value) * 0.1;
    } else if (this.innerHTML === '15%'){
      tipPercentage = Number(inputBill.value) * 0.15;
    } else if (this.innerHTML === '25%'){
      tipPercentage = Number(inputBill.value) * 0.25;
    } else if (this.innerHTML === '50%'){
      tipPercentage = Number(inputBill.value) * 0.5;
    } else if (this.innerHTML === '75%'){
      tipPercentage = Number(inputBill.value) * 0.75;
    }

    console.log(array, tipPercentage);
    if(array.length >= 1){
      array.pop();
    }
    console.log(array, tipPercentage);
      array.push(tipPercentage);
      console.log(array, tipPercentage);
  }

return array;

}



 


generateBillButton.addEventListener('click', () => {
    const value = calculateBill();
    console.log(value);
    let tipValue;
    const result = [];
    if(!value){
      return;
    }
    for (let i= 0; i<value.length; i++){
      if (value[i]){
        result.push(value[i]);
      } 
    }
    tipValue = result[0];
  
    const numberOfPeopleInputValue = result[1];
    generateBill(tipValue, numberOfPeopleInputValue);
    
 
    function generateBill(tipValue, numberOfPeopleInputValue) {
      tipAmount.innerHTML = `&#8377 ${Number(tipValue).toFixed(2)}`;
      const tipAmnt = Number(tipValue).toFixed(2);
      total.innerHTML = `&#8377 ${(Number(tipAmnt) + Number(inputBill.value)).toFixed(2)}`;
      const totalVal = (Number(tipAmnt) + Number(inputBill.value)).toFixed(2);
      eachPersonAmount.innerHTML = `&#8377 ${(totalVal / numberOfPeopleInputValue).toFixed(2)}`;
      array = [];
    }
    resetBtn.disabled = false;
    resetBtn.classList.add('activate-reset-button');
});


resetBtn.addEventListener('click', () => {
  inputBill.value = '';
  customTipInput.classList.remove('activate-custom-tip-input');
  customTipInput.disabled = true;
  customTipInput.value = '';
  numberOfPeopleInput.classList.remove('activate-number-of-people-input');
  numberOfPeopleInput.disabled = true;
  numberOfPeopleInput.value = '';
  generateBillButton.disabled = true;
  generateBillButton.classList.remove('activate-generate-bill-button');
  resetBtn.disabled = true;
  resetBtn.classList.remove('activate-reset-button');
  tipButtons.forEach((button) => {
    button.classList.remove('activate-tip-button');
    button.classList.remove('active');
  });
  tipAmount.innerHTML = '';
  total.innerHTML = '';
  eachPersonAmount.innerHTML = '';
  console.clear();
  console.log(array);
});



// function outer() {
//   const a = 10;
//   let c;
//   function inner1() {
//     const b = 11;
//     function inner2(){
//       console.log(a-b);
//       function inner4(){
//         console.log(a/b);
//         function inner5(c){
//           console.log(a+b);
//            c = a+b;
//         }
//         return inner5(c);
//       }
//       return inner4;
//     }
//     return inner2;
    
//   }
//  return inner1;
// }

// const inner1 = outer();
// const inner2 = inner1();
// const inner4 = inner2();
// const inner5 = inner4();
// console.log(inner5);

// function doSomething() {
//   const userName = 'sajid ahmed mohammed';

//   function callBack() {
//     console.log(userName);
//   }
//   setTimeout(callBack, 2000);
// }

// doSomething();



// function outerFunction() {
//   const a = 1;
//   return function () {
//     const b = 3;
//     console.log(a+b);
//   }
// }

// const inner = outerFunction();
// inner();



/*
function calculateBill() {
  let array = [];
  if (inputBill.value)  {
    tipButtons.forEach((button) => {
      button.classList.add('activate-tip-button');
      button.addEventListener('click',  getbillInputValue);
    });
    customTipInput.classList.add('activate-number-of-people-input');
   
    numberOfPeopleInput.classList.add('activate-number-of-people-input');
    
  } else {
    tipButtons.forEach((button) => {
      button.classList.remove('activate-tip-button');
    });
    customTipInput.classList.remove('activate-number-of-people-input');
    numberOfPeopleInput.classList.remove('activate-number-of-people-input');
  }

  function getbillInputValue() {
    let tipPercentage;
    let tipPercentage2;
    if(this.innerHTML === '5%'){
      tipPercentage = Number(inputBill.value) * 0.05;
    } else if (this.innerHTML === '10%'){
      tipPercentage = Number(inputBill.value) * 0.1;
    } else if (this.innerHTML === '15%'){
      tipPercentage = Number(inputBill.value) * 0.15;
    } else if (this.innerHTML === '25%'){
      tipPercentage = Number(inputBill.value) * 0.25;
    } else if (this.innerHTML === '50%'){
      tipPercentage = Number(inputBill.value) * 0.5;
    } else if (this.innerHTML === '75%'){
      tipPercentage = Number(inputBill.value) * 0.75;
    }

    // if(array.length >= 1){
    //   console.log(array);
    //   array.pop();
    //   console.log(array);
    // }
    tipPercentage = 'sajid';
    console.log(tipPercentage);
    tipPercentage2 = tipPercentage;
    console.log(tipPercentage2);
    array.push(tipPercentage2);
    console.log(array);

    generateBillButton.classList.add('activate-generate-bill-button');
    return array;
  }

customTipInput.addEventListener('input', () => {
  (customTipInput.value * inputBill.value)/100;

});
// if (customTipInput.value){
//   array.push(Number(customTipInput.value));
//}




numberOfPeopleInput.addEventListener('input', () => {
  if (numberOfPeopleInput.value) {
    generateBillButton.classList.add('activate-generate-bill-button');
  }

});
// if (numberOfPeopleInput.value){
//   array.push(Number(numberOfPeopleInput.value));
// }


// array.push(Number(numberOfPeopleInput.value));

return getbillInputValue;

}


generateBillButton.addEventListener('click', () => {
    const value = calculateBill();
    console.log(value());
    const customTipInputValue = value[0];
    const numberOfPeopleInputValue = value[1];
    const tipPerCentageValue = value[2];
    console.log(tipPerCentageValue);
    generateBill(customTipInputValue, numberOfPeopleInputValue);
    
 
    function generateBill(customTipInputValue, numberOfPeopleInputValue) {
      tipAmount.innerHTML = ((customTipInputValue * inputBill.value)/100).toFixed(2);
      total.innerHTML = (Number(tipAmount.innerHTML) + Number(inputBill.value)).toFixed(2);
      eachPersonAmount.innerHTML = (total.innerHTML / numberOfPeopleInputValue).toFixed(2);
    }
    
});



const num = [1, 2, 4, 6];

document.querySelector('.test').addEventListener('click', ()=> {
  console.log(num.reduce((accu, current, i, num) => {
    // console.log(accu, current, i);
    
    return accu + current;
  }, 0));
  
});
// const initial = 0;
// num.reduce(addition);
// function addition(accu, current, i, num) {
//   accu = current + initial;
//   return accu;
// }

// console.log(addition());

*/


