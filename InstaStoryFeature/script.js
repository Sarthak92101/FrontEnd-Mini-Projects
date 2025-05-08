var arr=[
  {
    dp:"https://m.media-amazon.com/images/M/MV5BM2RiOWRiZGEtMDBiNi00NmQ4LWEzZTQtNjk1MjUyMTMyYjA1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",story:"https://m.media-amazon.com/images/I/81EfEv0IEFL.jpg"
  },
  {
    dp:"https://www.navhindtimes.in/wp-content/uploads/2020/08/15dhoni.jpg",story:"https://static.toiimg.com/thumb/msid-56350726,width-400,resizemode-4/56350726.jpg"
  },
  {
    dp:"https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",story:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/virat-kohli-151358218-3x4.jpg?VersionId=ZekVAgYZ0hBudD_w083ZwUdl_vtaQvs8"
  },
  {
    dp:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg/250px-Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg",story:"https://c.ndtvimg.com/2024-06/14b10ib_rohit-sharma-twitter_625x300_06_June_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
  },
]
var story=document.querySelector("#story");
var clutter="";
arr.forEach(function(elem,idx){
  clutter+=`<div class="stories">   
        <img id="${idx}" src="${elem.dp}" alt="">
      </div>`
})

story.innerHTML=clutter;
story.addEventListener("click",function(dets){
// console.log(arr[dets.target.id].story)
  document.querySelector("#full-story").style.display="block";
  document.querySelector("#full-story").style.backgroundImage=`url(${arr[dets.target.id].story})`

  setTimeout(function(){
    document.querySelector("#full-story").style.display="none";
  },3000)
})
