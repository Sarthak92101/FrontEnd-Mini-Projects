let image=document.getElementById("image")
let qrimage=document.getElementById("qrimage") 
let qrtext=document.getElementById("qrtext")



function generateqr(){
  if(qrtext.value.length>0){qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;

    image.classList.add('show-img');  
  }else{
    qrtext.classList.add('error')
    setTimeout(()=>{
      qrtext.classList.remove('error');
    },1000)
  }

}