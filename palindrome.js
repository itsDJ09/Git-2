let str ="mom";
let b="";
  for(let i=str.length-1; i>=0; i--){
      b=b+str[i];
  }
  if(b==str){
      console.log("Yes");
  }else{
      console.log("No");
  }