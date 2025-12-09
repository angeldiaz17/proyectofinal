function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '2px';
    }
  }


let toggle = () => {

  let element = document.getElementById("button");
  let hidden = element.getAttribute("hidden");

  if (hidden) {
     element.removeAttribute("hidden");
  } else {
     element.setAttribute("hidden", "hidden");
  }
}