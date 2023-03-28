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
    const quantity = getValue('input[id="quantity"]');
    console.log(name)
    console.log(quantity)

    const list = document.querySelector('ul[id="grocery-list"]');
    //add to list
    const listElement = document.createElement('li')
    listElement.textContent = quantity + ' ' + name;

    list.append(listElement);
    //clear name and quantity
    setValue('input[id="name"]', '')
    setValue('input[id="quantity"]', '')
  })

})