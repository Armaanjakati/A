
const endDate = "25 july 2024,13:01";

const inputs = document.querySelectorAll("input");




function clock() {
  const end = new Date(endDate);
  const now = new Date();
  console.log(end);
  console.log(now);
  const diff = (end - now) / 1000;
  console.log(diff)
  console.log(Math.floor(diff / 3600 / 24));
  if (diff < 0) return {
  }
  
  

  inputs[0].value = Math.floor(diff / 3600 / 24)
  inputs[1].value = Math.floor((diff / 3600) % 24)
  inputs[2].value = Math.floor((diff / 60) % 60)
  inputs[3].value = Math.floor(diff) % 60
  
 //if (input[0]<=0 && input[1]<=0 && imput[2]<=0 && input[3]<=0) {
    
   // console.log("happybirthday");
    
 }
  

clock()
setInterval(
  () => {
    clock()
  },
  1000
)
   
   
   function noti() {
     let y  = new Date().getFullYear();
     let mo = new Date().getMonth();
     let da = new Date().getDay();
     let d  = new Date().getDate();
     let h  = new Date().getHours();
     let m  = new Date().getMinutes();
     let s  = new Date().getSeconds();
     
      if (y==2024  && mo==6
      &&d == 25 && h==13 && m==01&& s==00) {
        alert("happybirthday");
      }
      
      
      
   }
   
   setInterval(noti,1000)
   
    function mg() {
      let Y = new Date().getFullYear();
      let H = new Date().getHours();
      let M = new Date().getMinutes();
      
      if (Y==2024 && H==13 && M== 01) {
        alert("passwod for memories is Memo and greeting is Greet"); 
          // Tab to edit
        
      }
    }
    setInterval(mg,5000)
   
   
   
  
       
//   }
   
// setInterval(alert2,11000)
