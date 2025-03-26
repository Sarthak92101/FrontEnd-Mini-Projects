const passwordBox=document.getElementById("password"); 
    const length=12;
    const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase="abcdefghijklmnopqrstuvwxyz";
    const number="0123456789"; 
    const symbol="@!#$%^&*()_+=-:;<,>.?/|~`";
    const allchar=uppercase+lowercase+number+symbol;

    function createPassword(){
      let Password="";
      Password+=uppercase[Math.floor(Math.random()*uppercase.length)];
      Password+=lowercase[Math.floor(Math.random()*lowercase.length)];
      Password+=number[Math.floor(Math.random()*number.length)];
      Password+=symbol[Math.floor(Math.random()*symbol.length)];

      while(length>Password.length){
        Password+=allchar[Math.floor(Math.random()*allchar.length)];
      }
      passwordBox.value =Password;
    }
     
    function copyPassword(){
      passwordBox.select();
      document.execCommand("copy");
    }

