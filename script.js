document.addEventListener("DOMContentLoaded", function(){
   var btn = document.createElement("button");
   var text = document.createTextNode("Clicky Click");
   btn.className = "touche";
   btn.id = "Uno";
   btn.appendChild(text);
   document.body.appendChild(btn);
});