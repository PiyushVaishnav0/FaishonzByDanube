let navMobileEnquiry = document.querySelector('.navMobileEnquiry');

let navEnquiry = document.querySelector('.navEnquiry');

let MobileEnquiryX = document.querySelector('#MobileEnquiryX');

navEnquiry.addEventListener('click',
    () => {

        navMobileEnquiry.style.top = '100px';
    }
)

MobileEnquiryX.addEventListener('click',
    () => {

        navMobileEnquiry.style.top = '-800px';
    }
)

let MobileNav = document.querySelector('.MobileNav');

let MobileShow = document.querySelector('#MobileShow');

let MobileHide = document.querySelector('#MobileHide');

MobileShow.addEventListener('click',
    () => {

        MobileNav.style.transform = `translateX(802px)`;
        MobileShow.style.visibility = 'hidden';
        MobileShow.style.transition = '0s';

        MobileHide.style.visibility = 'visible';  
    }
    
)
MobileHide.addEventListener('click',
    () => {

        MobileNav.style.transform = `translateX(-802px)`;
        MobileHide.style.visibility = 'hidden';
        MobileHide.style.transition = '0s';

        MobileShow.style.visibility = 'visible';
    }
)

let Gallery1 = document.querySelector('.Gallery1');
let Gallery2 = document.querySelector('.Gallery2');
let Gallery3 = document.querySelector('.Gallery3');
let Gallery4 = document.querySelector('.Gallery4');
let Gallery5 = document.querySelector('.Gallery5');
let Gallery6 = document.querySelector('.Gallery6');
let Gallery7 = document.querySelector('.Gallery7');
let Gallery8 = document.querySelector('.Gallery8');
let Gallery9 = document.querySelector('.Gallery9');
let Gallery10 = document.querySelector('.Gallery10');
let Gallery11 = document.querySelector('.Gallery11');
let Gallery12 = document.querySelector('.Gallery12');

let GalleryRadio01 = document.querySelector('#GalleryRadio01');

let GalleryRadio02 = document.querySelector('#GalleryRadio02');

let GalleryRadio03 = document.querySelector('#GalleryRadio03');

GalleryRadio01.addEventListener('click',
    () => {

        Gallery1.style.transform = `translateX(-0px)`
        Gallery2.style.transform = `translateX(-0px)`
        Gallery3.style.transform = `translateX(-0px)`
        Gallery4.style.transform = `translateX(-0px)`

        Gallery5.style.transform = `translateX(-0px)`
        Gallery6.style.transform = `translateX(-0px)`
        Gallery7.style.transform = `translateX(-0px)`
        Gallery8.style.transform = `translateX(-0px)`

        Gallery9.style.transform = `translateX(-0px)`
        Gallery10.style.transform = `translateX(-0px)`
        Gallery11.style.transform = `translateX(-0px)`
        Gallery12.style.transform = `translateX(-0px)`

    }
)

GalleryRadio02.addEventListener('click',
    () => {

        Gallery1.style.transform = `translateX(-1275px)`
        Gallery2.style.transform = `translateX(-1275px)`
        Gallery3.style.transform = `translateX(-1275px)`
        Gallery4.style.transform = `translateX(-1275px)`

        Gallery5.style.transform = `translateX(-1275px)`
        Gallery6.style.transform = `translateX(-1275px)`
        Gallery7.style.transform = `translateX(-1275px)`
        Gallery8.style.transform = `translateX(-1275px)`

        Gallery9.style.transform = `translateX(-0px)`
        Gallery10.style.transform = `translateX(-0px)`
        Gallery11.style.transform = `translateX(-0px)`
        Gallery12.style.transform = `translateX(-0px)`
    }
)

GalleryRadio03.addEventListener('click',
    () => {

        Gallery1.style.transform = `translateX(-3500px)`
        Gallery2.style.transform = `translateX(-3500px)`
        Gallery3.style.transform = `translateX(-3500px)`
        Gallery4.style.transform = `translateX(-3500px)`

        Gallery5.style.transform = `translateX(-3500px)`
        Gallery6.style.transform = `translateX(-3500px)`
        Gallery7.style.transform = `translateX(-3500px)`
        Gallery8.style.transform = `translateX(-3500px)`

        Gallery9.style.transform = `translateX(-3410px)`
        Gallery10.style.transform = `translateX(-3410px)`
        Gallery11.style.transform = `translateX(-3410px)`
        Gallery12.style.transform = `translateX(-3410px)`
    }
)

let Click01 = document.querySelector('.Click01');
let Click02 = document.querySelector('.Click02');
let Click03 = document.querySelector('.Click03');

let Change001 = document.querySelector('.Change001');
let Change002 = document.querySelector('.Change002');
let Change003 = document.querySelector('.Change003');

Click01.addEventListener('click',
    () => {

        Click01.style.backgroundColor = '#cd2721'
        Click01.style.color =  'white';

        Click02.style.backgroundColor = 'white';
        Click02.style.color =  'black';

        Click03.style.backgroundColor = 'white';
        Click03.style.color =  'black';

        Change001.style.visibility = 'visible';
        Change002.style.visibility = 'hidden';
        Change003.style.visibility = 'hidden';
    }
)

Click02.addEventListener('click',
    () => {

        Click02.style.backgroundColor = '#cd2721'
        Click02.style.color =  'white';

        Click01.style.backgroundColor = 'white';
        Click01.style.color =  'black';

        Click03.style.backgroundColor = 'white'
        Click03.style.color =  'black';
        
        Change001.style.visibility = 'hidden';
        Change002.style.visibility = 'visible';
        Change003.style.visibility = 'hidden';
    }
)

Click03.addEventListener('click',
    () => {

        Click03.style.backgroundColor = '#cd2721'
        Click03.style.color =  'white';

        Click02.style.backgroundColor = 'white';
        Click02.style.color =  'black';

        Click01.style.backgroundColor = 'white';
        Click01.style.color =  'black';

        Change001.style.visibility = 'hidden';
        Change002.style.visibility = 'hidden';
        Change003.style.visibility = 'visible';
    }
)

