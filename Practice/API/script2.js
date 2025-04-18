let url="https://catfact.ninja/fact"; 
async function getFact() {
  try{
    let res=await fetch(url);
    let data=await res.json();
    console.log(data.fact);
  
  
}catch(e){
  console.log("Error ",e)
}
}  