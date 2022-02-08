let open=0
var buttonfb = document.getElementById('buttonfb');
let navbar=document.querySelector('.navbar');
let el1=document.querySelector('.el1');
let el2=document.querySelector('.el2');
let el3=document.querySelector('.el3');
let el4=document.querySelector('.el4');
let logo=document.querySelector('.logo');
let intro=document.querySelector('.intro');
let myskills=document.querySelector('.myskills');
let myprojects=document.querySelector('.myprojects');
let contactme=document.querySelector('.contactme');

let dy=parseInt(window.getComputedStyle(navbar, null).getPropertyValue('width'));
console.log(dy);
let jsid=document.getElementById('jsid');
let logol=document.querySelector('.logo');

buttonfb.addEventListener('click', ()=>{
    if(open==0&&dy==61){
        navbar.style.width="14vw";
        navbar.style.transition="1s";
        navbar.style.backgroundColor="#265077";
        buttonfb.style.left="10vw";
        buttonfb.style.backgroundImage="url('cancelw.png')";
        logo.style.display="flex";
        logo.style.justifyContent="space-around";
        logo.style.paddingTop="20vh";
        intro.style.marginLeft="2vw";
        myskills.style.marginLeft="2vw";
        myprojects.style.marginLeft="2vw";
        contactme.style.marginLeft="2vw";
        el1.innerHTML="About Me";
        el2.innerHTML="My Skills";
        el3.innerHTML="My Projects";
        el4.innerHTML="Contact Me";
        open=1;
    }
    else if(open==0&&dy==360){
        navbar.style.height="55vh";
            navbar.style.transition="1s";
            navbar.style.backgroundColor="#265077";
            buttonfb.style.backgroundImage="url('cancelw.png')";
            navbar.style.flexDirection="column";
            jsid.style.flexDirection="column";
            jsid.style.marginTop="10vh";
            jsid.style.marginLeft="20vw";
            logol.style.marginTop="-3vh";
            el1.innerHTML="About Me";
            el2.innerHTML="My Skills";
            el3.innerHTML="My Projects";
            el4.innerHTML="Contact Me";
            open=1;
    }
    else if(open==1&&dy==360){
        navbar.style.height="2vh";
        navbar.style.backgroundColor="black";
        buttonfb.style.backgroundImage="url('ham.png')";
        navbar.style.flexDirection="row";
         jsid.style.flexDirection="row";
         jsid.style.marginTop="-9vh";
         jsid.style.marginLeft="10vw";
         logol.style.marginTop="-11vh";
         el1.innerHTML="";
        el2.innerHTML="";
         el3.innerHTML="";
         el4.innerHTML="";
        open=0;
    }
    else{
       navbar.style.width="4vw";
       buttonfb.style.left="2.5vw";
       logo.style.display="block";
       navbar.style.backgroundColor="black";
       buttonfb.style.backgroundImage="url('ham.png')";
       logo.style.paddingTop="8vh";
       intro.style.marginLeft="7vw";
        myskills.style.marginLeft="7vw";
        myprojects.style.marginLeft="7vw";
        contactme.style.marginLeft="7vw";
        el1.innerHTML="";
       el2.innerHTML="";
        el3.innerHTML="";
        el4.innerHTML="";
       open=0;
    }
})


// let jsid=document.getElementById('jsid');
// let logol=document.querySelector('.logo');
//     buttonfb.addEventListener('click', ()=>{
//         if(open==0){
//             navbar.style.height="50vh";
//             navbar.style.transition="1s";
//             navbar.style.backgroundColor="#265077";
//             buttonfb.style.backgroundImage="url('cancelw.png')";
//             navbar.style.flexDirection="column";
//             jsid.style.flexDirection="column";
//             jsid.style.marginTop="10vh";
//             jsid.style.marginLeft="20vw";
//             logol.style.marginTop="-3vh";
//             el1.innerHTML="About Me";
//             el2.innerHTML="My Skills";
//             el3.innerHTML="My Projects";
//             el4.innerHTML="Contact Me";
//             open=1;
//         }
//         else{
//            navbar.style.height="2vh";
//            navbar.style.backgroundColor="grey";
//            buttonfb.style.backgroundImage="url('ham.png')";
//            navbar.style.flexDirection="row";
//             jsid.style.flexDirection="row";
//             jsid.style.marginTop="-9vh";
//             jsid.style.marginLeft="10vw";
//             logol.style.marginTop="-11vh";
//             el1.innerHTML="";
//            el2.innerHTML="";
//             el3.innerHTML="";
//             el4.innerHTML="";
//            open=0;
//         }
//     })


