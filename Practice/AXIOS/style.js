let btn=document.querySelector('button');
btn.addEventListener('click',async ()=>{
 let res= await getFact();  
 //console.log(res);
 let p=document.querySelector("#output");
 p.innerText=res;
});


let url="https://catfact.ninja/fact";
async function getFact(){
  try{
    let res=await axios.get(url);
    return res.data.fact ;
  }catch(e){
    console.log(e);
    return "No fact found"
  }
}