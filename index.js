let PI=3.14;
let area;
let radius;

document.getElementById("mySubmit").onclick=function(){
  radius=document.getElementById("myRadius").value;
  area=PI*radius*radius;

  document.getElementById("myResult").textContent=`Result : ${area} cm`;
  console.log(area);
}