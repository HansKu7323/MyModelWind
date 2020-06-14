'use strict';

{
  const open = document.getElementById('open');//open button
  const close = document.getElementById('close');//close button
  const model = document.getElementById('model');//表示内容
  const mask = document.getElementById('mask');//cover


  open.addEventListener('click', () => {
    model.classList.remove('hidden');
    mask.classList.remove('hidden');
  })

  close.addEventListener('click', () => {
    model.classList.add('hidden');
    mask.classList.add('hidden');
  })

  mask.addEventListener('click', () => {
    // model.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click()
  })


}