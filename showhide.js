function HideElementByDisplay() {
   let myvar=document.getElementById("myVideo").style.display;
  console.log(myvar);
  if (myvar === "none")
  {  
  document.getElementById("myVideo").style.display = 'block';
  btn.innerHTML = "Play";
  }
  else
  {
   document.getElementById("myVideo").style.display = "none";
  }
}

// function HideElementByVisibility() {
//  /* document.getElementById("myP2").style.visibility = "hidden";*/
//   let myvar=document.getElementById("myVideo").style.visibility
//   if (myvar === 'hidden')
//   {
//   document.getElementById("myVideo").style.visibility = 'visible';
//   console.log(myvar);
//   }
//   else 
//   {
//    document.getElementById("myVideo").style.visibility = "hidden";
//   }
// }


/*  ***********************************************************

  *************************************************************** */

