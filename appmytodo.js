const inpbox = document.getElementById("input-box");
const listc = document.getElementById("list-con");
function addtask(){
 

  
  if(inpbox.value.trim()==='')
    {
      alert("Enter something!!");
      return;
    }
   let li = document.createElement("li");
   li.innerHTML = inpbox.value;
  listc.appendChild(li);
  inpbox.value = '';
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
  save();
  
}
listc.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
      e.target.classList.toggle("cross");
    }
  else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
  }
  save();
},false);

function save(){
  localStorage.setItem("data",listc.innerHTML);
}
function load(){
 
 listc.innerHTML = localStorage.getItem("data");
}
load();