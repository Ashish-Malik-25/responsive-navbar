const toggle = document.getElementById('toggler');
const nav = document.getElementById('navlinks');
const remove = ()=>{
    nav.classList.toggle('animation');

}
toggle.addEventListener('click',remove)