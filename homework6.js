let hider = document.getElementById('hide');
let txt = document.getElementById('text')
hider.onclick = function() {
        if (txt.hidden == false) txt.hidden = true;
        else txt.hidden = false;
}

let button = document.getElementById('but');
function handler() {
    alert(1);
}
  
button.addEventListener("click", handler);
button.removeEventListener("click", handler);
button.onclick = () => alert(2);