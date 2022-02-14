/*================ MENU SHOW Y HIDDEN ================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')



/*================ MENU SHOW ================*/
/*Validate if constant exist*/

if(navToggle){
    navToggle.addEventListener('click' , ()=>{
        navMenu.classList.add('show-menu')

    })
}

/*================ MENU HIDDEN ================*/
/*Validate if constant exist*/

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*================ REMOVE MENU MOBILE ================*/


/*================ ACCORDION SKILLS ================*/

/*================ QUILIFICATION SKILLS ================*/


/*================ SERVICES MODAL ================*/