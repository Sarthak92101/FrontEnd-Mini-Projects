let signupbtn=document.querySelector('.signup')
let signinbtn=document.querySelector('.signin')
let namefield=document.querySelector('.namefield')
let heading=document.querySelector('.title')
let underline=document.querySelector('.underline')
let text=document.querySelector('.text')



signinbtn.addEventListener("click",()=>{
  namefield.style.maxHeight=0;
  heading.innerHTML = 'Sign IN';
  text.innerHTML = 'Lost Password';
  signupbtn.classList.add('disable');
  signinbtn.classList.remove('disable');
underline.style.transform='translateX(35px)';
text.sty
});


signupbtn.addEventListener("click",()=>{
  namefield.style.maxHeight='60px';
  heading.innerHTML = 'Sign UP';
  text.innerHTML = 'Password Suggestion';
  signupbtn.classList.remove('disable');
  signinbtn.classList.add('disable');
underline.style.transform='translateX(0)';

});



