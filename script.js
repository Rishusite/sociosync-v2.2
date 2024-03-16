/*-----------------------Functions of Overlay----------------------------*/ 
function showProfile(){
  const var1=document.querySelector('.overlay-for-dp');
  var1.classList.add('overlay-active');
}
function hideProfile(){
  const var1=document.querySelector('.overlay-for-dp');
  var1.classList.remove('overlay-active');
}

function showMessages(){
  const var1=document.querySelector('.overlay-for-messages');
  var1.classList.add('overlay-active');
}
function hideMessages(){
  const var1=document.querySelector('.overlay-for-messages');
  var1.classList.remove('overlay-active');
}

/*---------------------Functions To Change Profile----------------------------*/

let profilePic=document.getElementById("dp-img");
let inputPic=document.getElementById("change-dp");
let mainProfile=document.getElementById("profile-pic");
let sideProfile=document.getElementById("profile-pic-id");
let postProfile=document.getElementById("search-box-profile");
inputPic.onchange=function(){
  profilePic.src=URL.createObjectURL(inputPic.files[0]);
  mainProfile.src=URL.createObjectURL(inputPic.files[0]);
  sideProfile.src=URL.createObjectURL(inputPic.files[0]);
  postProfile.src=URL.createObjectURL(inputPic.files[0]);
};

/*--------------------------Message Section------------------------------ */

function highlightMessageBox(){
  let bodyelem=document.querySelector("body");
  if(bodyelem.offsetWidth>450)
  {
    let messageElem=document.querySelector(".messages");
    messageElem.classList.add("message-highlight");
    
    setTimeout(function (){
      let messageElem=document.querySelector(".messages");
      messageElem.classList.remove("message-highlight");
    },2000);
  }
  else{
    let elem=document.querySelector(".messages");
    elem.classList.remove("messages");
    elem.classList.add("messages-mobile");
    let sidebarElem2=document.querySelector(".side-bar-mobile");
    sidebarElem2.classList.add("side-bar"); 
    sidebarElem2.classList.remove("side-bar-mobile");
    
  }
}

/*---------------------------Mobile Menu Section------------------*/
function showMenu(){
  if(document.querySelector(".side-bar")===null)
  {
    let sidebarElem2=document.querySelector(".side-bar-mobile");
    sidebarElem2.classList.add("side-bar"); 
    sidebarElem2.classList.remove("side-bar-mobile"); 
  }
  else{
    let sidebarElem=document.querySelector(".side-bar"); 
    sidebarElem.classList.add("side-bar-mobile"); 
    sidebarElem.classList.remove("side-bar");
  }
  
}
function hideMenu(){
  let sidebarElem=document.querySelector(".side-bar-mobile");
  console.log("Working");
  sidebarElem.classList.add("side-bar"); 
  sidebarElem.classList.remove("side-bar-mobile");
}

/*---------------------------Messages--------------------------*/
function closeMessage(){
  let elem=document.querySelector(".messages-mobile");
  elem.classList.add("messages");
  elem.classList.remove("messages-mobile");
   
}


/*------------------------------Theme-----------------------------*/
function showTheme(){
  //const x=document.getElementById("purple");
  //x.classList.add("color-active");
  const elem=document.querySelector(".overlay-for-theme");
  elem.classList.add("overlay-for-theme-active");
  const elem2=document.querySelector(".theme-box");
  elem2.classList.add("animation");
  //console.log(elem);
}
function closeTheme(){
  const elem=document.querySelector(".overlay-for-theme");
  const elem2=document.querySelector(".theme-box");
  elem2.classList.remove("animation");
  elem.classList.remove("overlay-for-theme-active");
}

      //-----------------Active Colors------------------//
function activeColor(color){
  const elem2=document.querySelectorAll(".color");
  elem2.forEach((index)=>{
    if(index.id===color)
    {
      index.classList.add("color-active");
      const fun=()=>{
        const x=document.querySelector(":root");
        const y=getComputedStyle(x);
        const val=y.getPropertyValue(`--color-${color}`);
        x.style.setProperty("--original-theme",val);
      };
      fun();
    }
    else{
      const indi=index;
      const arr=Object.values(index.classList);
      for(let i=0;i<arr.length;i++)
      {
        if(arr[i]==="color-active")
        {
          indi.classList.remove("color-active");
        }
      }
    }
  },)

}
/*-----------------------------Dark Mode--------------------------*/


function changeTheme(x){
  let toggle=x;
  if(toggle)
  {
    //Changing color of body element
    let rootElement=document.querySelector(':root');
    rootElement.style.setProperty('--background-theme','');
    rootElement.style.setProperty('--whitecolor','');
    rootElement.style.setProperty('--font-color','');
    rootElement.style.setProperty('--original-theme','');
    rootElement.style.setProperty('--story-shadow','');
    rootElement.style.setProperty('--mobile-sidemenu-bgcolor','');
    rootElement.style.setProperty('--messages-p2','');
  }
  else
  {
    let rootElement=document.querySelector(':root');
    let x=getComputedStyle(rootElement);
    let darkElem=x.getPropertyValue('--dark-background-theme');
    let darkElem2=x.getPropertyValue('--dark-whitecolor');
    let darkElem3=x.getPropertyValue('--dark-font-color');
    let darkElem4=x.getPropertyValue('--dark-original-theme');
    let darkElem5=x.getPropertyValue('--dark-story-shadow');
    let darkElem6=x.getPropertyValue('--dark-mobile-sidemenu-bgcolor');
    let darkElem7=x.getPropertyValue('--dark-messages-p2');

    rootElement.style.setProperty('--background-theme',darkElem);
    rootElement.style.setProperty('--whitecolor',darkElem2);
    rootElement.style.setProperty('--font-color',darkElem3);
    rootElement.style.setProperty('--font-color',darkElem3);
    rootElement.style.setProperty('--original-theme',darkElem4);
    rootElement.style.setProperty('--story-shadow',darkElem5);
    rootElement.style.setProperty('--mobile-sidemenu-bgcolor',darkElem6);
    rootElement.style.setProperty('--messages-p2',darkElem7);
  }
  
}

/*------------------------------Story Video play-------------------------*/
function playVideo(videoId){
  const overlay=document.querySelector(".video-overlay");
  overlay.classList.add("video-overlay-active");
  overlay.innerHTML=`
   <video class="story-video-playing" src="videos/story${2}.mp4" autoplay loop controls></video>
  `;
  setTimeout(() => {
    const ani=document.querySelector(".story-video-playing");
    ani.classList.add("video-popup-animation");
  }, 1);
  const removeArea=document.querySelector(".video-overlay-active");
  removeArea.addEventListener("click",()=>{
    const anit=document.querySelector(".story-video-playing");
    if(anit)
    {
      anit.classList.remove("story-video-playing");
    }
    const elem=document.querySelector(".video-overlay");
    elem.classList.remove("video-overlay-active"); 
    overlay.innerHTML=``;
  })
}

