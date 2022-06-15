var navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const allMenuItem = document.querySelectorAll(".menu-item")
const menu = document.querySelector("menu")

window.addEventListener('scroll', function() {
  if(window.scrollY > 20) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
  }
})

allMenuItem.forEach(item =>{
  item.addEventListener("click", (evt)=>{
    document.querySelector('.navbar .menu').classList.toggle('active')
    document.querySelector('.menu-btn i').classList.toggle('active');

  })
})


menuBtn.addEventListener('click', () => {
  document.querySelector('.navbar .menu').classList.toggle('active')
  document.querySelector('.menu-btn i').classList.toggle('active');
  
}) 