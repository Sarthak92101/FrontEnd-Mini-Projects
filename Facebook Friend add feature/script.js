var istatus=document.querySelector("h5");
var addFriend=document.querySelector("#add");
var check=0;

addFriend.addEventListener("click",()=>{
  if(check==0){
    istatus.innerHTML="Friend";
    istatus.style.color="green";
    addFriend.innerHTML="Remove friend";
    check=1;
   
  }else{
    istatus.innerHTML="Stranger";
    istatus.style.color="Red";
    addFriend.innerHTML="Add friend  ";

    check=0;
  }
  
})
