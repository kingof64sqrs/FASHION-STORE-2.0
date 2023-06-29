var ul = document.getElementById("ul_pr");
var li = document.querySelectorAll("li");

function add(id){
    var li_new = document.createElement("li");
    var li_inp = document.createTextNode(id);
    li_new.appendChild(li_inp);
    ul.appendChild(li_new);
   
    ul.appendChild(document.createElement("br"));
}

window.emptyList = function () {
    var ul = document.querySelector('#ul_pr');
    var listLength = ul.children.length;
  
    for (i = 0; i < listLength; i++) {
      ul.removeChild(ul.children[0]);
    }
  }