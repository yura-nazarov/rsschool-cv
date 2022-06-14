const HAMBURGER = document.querySelector('#hamburger');
const HEADER_NAVIGATION = document.querySelector('#headerNavigation1');
const NAVIGATION = document.querySelector('#navigation1');
const LOGO = document.querySelector('#logo1');
const BODY = document.body;
const LOGO_MAIN = document.querySelector('#logo1Main');
// const MENU_ITEMS = document.querySelector('#navigation1');

const closeNavigation = () => {
   console.log('closeNavigation');
   HEADER_NAVIGATION.classList.remove('active');
   HAMBURGER.classList.remove('rotate');
   LOGO_MAIN.classList.remove('hidden');
   BODY.classList.remove('scroll-hidden');
}

const showHide = () => {
   console.log('showHide');
   HEADER_NAVIGATION.classList.toggle('active');
   HAMBURGER.classList.toggle('rotate');
   LOGO_MAIN.classList.toggle('hidden');
   BODY.classList.toggle('scroll-hidden');

   NAVIGATION.classList.add('active');
   LOGO.classList.add('active');

   if (HEADER_NAVIGATION.classList.contains('active')) {
      console.log('HEADER_NAVIGATION is active');
      // HEADER_NAVIGATION.addEventListener('click', closeNavigation);
      NAVIGATION.addEventListener('click', closeNavigation);
   }
}

// window.addEventListener('mouseup', function (e) {
//    console.log('mouseup');
//    if (event.target != HEADER_NAVIGATION) {
//       // showHide;
//       HEADER_NAVIGATION.classList.remove('active');

//       // return;
//    }
//    // else {
//    //    if (event.target != HEADER_NAVIGATION) {
//    //       console.log('event.target != HEADER_NAVIGATION');
//    //       HEADER_NAVIGATION.classList.remove('active');
//    //       HAMBURGER.classList.remove('rotate');
//    //       LOGO_MAIN.classList.remove('hidden');
//    //       BODY.classList.remove('scroll-hidden');
//    //    }
//    // }
// });

HAMBURGER.addEventListener('click', showHide);


