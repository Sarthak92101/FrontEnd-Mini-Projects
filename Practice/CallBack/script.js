// function savetoDB(data,success,failure){
//   let Speed=Math.floor(Math.random()*10)+1;
//   console.log(Speed);
//   if(Speed>4){
//    success();
//   }else{
//    failure();
//   }
// } 

// savetoDB("Sarthak", ()=>{
//   console.log("High Speed")
//   savetoDB("Sharma",()=>{
//     console.log("2nd data saved")
//   },()=>{
//     console.log("2nd data not saved")
//   })
// },()=>{
//   console.log("slow speed")
// })

//PROMISES

function savetoDB(data){
  return new Promise((resolve,reject)=>{
    let Speed=Math.floor(Math.random()*10)+1;
    if(Speed>4){
      resolve("Success");
     }else{
      reject("Failure");
     }  
   }
   
  );
}

let request=savetoDB("Sarthak");
request.then((result)=>{
  console.log("Promise fulfilled");
  console.log(result);
 return savetoDB("Sharma")
})
.then((result)=>{
  console.log("Data2 saved");  
  console.log(result);
  return savetoDB("Sushma")
})
.then((result)=>{
  console.log("Data3 Saved")
  console.log(result);
})

.catch((error)=>{
  console.log("Promise not fulfilled")
  console.log(error)
});   
