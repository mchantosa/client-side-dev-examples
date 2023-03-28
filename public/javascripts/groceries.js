document.addEventListener('DOMContentLoaded', () => {
  const getValue = (selector) => {
    return document.querySelector(selector).value;
  }

  const setValue = (selector, newValue) => {
    document.querySelector(selector).value = newValue;
  }

  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = getValue('input[id="name"]')
    const quantity = getValue('input[id="quantity"]') || 1;

    const list = document.querySelector('ul[id="grocery-list"]');
    const listElement = document.createElement('li')
    listElement.textContent = quantity + ' ' + name;
    list.append(listElement);
    
    setValue('input[id="name"]', '')
    setValue('input[id="quantity"]', '')
  })

})