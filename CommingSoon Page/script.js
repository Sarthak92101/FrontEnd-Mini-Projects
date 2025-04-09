const scriptURL = 'https://script.google.com/macros/s/AKfycbzYZP7qviJT2-OM9pMI5D3yP1HVlYpH57DM36JfQXWVN5LgG0nR6LK3LjdCZXBDI0HXMA/exec  '
  const form = document.forms[' submit-to-google-sheet']
  const msg=document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => { 
          msg.innerHTML="Thankyou for your response  "
      })
      .catch(error => console.error('Error!', error.message))
  })
