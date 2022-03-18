

//for navigation
let nav = document.querySelector(".header .navbar .container .nav");
let navLink = document.querySelectorAll(".header .navbar .container .nav li a");

Array.from(navLink).forEach((item, index) =>{
  item.onclick = (e) =>{
    let activeLink = document.querySelector(".header .navbar .container .nav li a.active");
    activeLink.classList.remove("active");
    e.target.classList.add("active");
  }
})


//menu and menu image toggle
let menuImg = document.querySelector(".menuImg");
let menu = document.querySelector(".header .container .nav");

menuImg.onclick = () =>{
  menuImg.classList.toggle("closeImg");
  menu.classList.toggle("active");
}

let scroll_top = document.querySelector(".scroll_top");
window.onscroll = () =>{
  menu.classList.remove("active");
  menuImg.classList.remove("closeImg");


  //scroll top
  if (document.body. height > 200 || document.documentElement.scrollTop > 200){
    scroll_top.style.display = "flex";
  } else {
    scroll_top.style.display = "none";
  }

}


//review filter
let selectorsContainer = document.querySelector(".selectors");
let selectors = selectorsContainer.querySelectorAll(".selectors .slt");
let review = document.querySelectorAll(".reviews .container .container_box .content_box .content .box");

Array.from(selectors).forEach((item, index) =>{
  item.onclick = (e) =>{
    let currSelector = selectorsContainer.querySelector(".selectors .slt.active");
    currSelector.classList.remove("active");
    e.target.classList.add("active");

    e.preventDefault();

  let filter = e.target.dataset.filter;
  review.forEach((item) =>{
   
      if (item.classList.contains(filter)){
      item.style.display = "flex";
      }else{
      item.style.display = "none";
    }
  })
  }
})
