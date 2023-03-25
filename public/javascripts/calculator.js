document.addEventListener("DOMContentLoaded", function() {
  const calculate = {
    '+':(a, b)=>{ return a+b},
    '-':(a, b)=>{ return a-b},
    '*':(a, b)=>{ return a*b},
    '/':(a, b)=>{ return a/b},
  }

  const getValue = (selector)=>{
    return document.querySelector(selector).value
    
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const firstNum = parseInt(getValue('input[id="first-number"]'));
    const secondNum = parseInt(getValue('input[id="second-number"]'));
    const operation = calculate[getValue('select[id="operator"]')];
    console.log(firstNum);
    console.log(secondNum);
    console.log(operation(firstNum,secondNum));

    document.querySelector('#result').textContent = operation(firstNum,secondNum);
  })
  
});

