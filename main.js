// Set variables
const dayNightBtn = document.querySelector('.day-night');
const menuToggleBtn = document.querySelector('.menu-toggle');
const body = document.querySelector('body');
const navigation = document.querySelector('.navigation');
const menuList = document.querySelectorAll('.navigation li');

// toggle mode button
dayNightBtn.addEventListener('click', ()=> {
  body.classList.toggle('dark');
  dayNightBtn.classList.toggle('active');
});

// toggle menu button
menuToggleBtn.addEventListener('click', ()=> {
  menuToggleBtn.classList.toggle('active');
  navigation.classList.toggle('active');
});

menuList.forEach(e=>{
  e.addEventListener('click', ()=> {
    menuToggleBtn.classList.toggle('active');
    navigation.classList.toggle('active');
  });
});