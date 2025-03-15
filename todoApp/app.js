let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input")


btn.addEventListener("click", function(){
let li=document.createElement("li")
    li.innerText=inp.value;

let delBtn=document.createElement("button")
delBtn.innerText="Delete"
delBtn.classList.add("Delete")
li.appendChild(delBtn)
    ul.appendChild(li);
    console.log(inp.value);
    inp.value="";
})
 ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log("Delete")
    }
 })





// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
// delbtn.addEventListener("click", function(){
//     let par=this.parentElement;
//     par.remove();
// })}
