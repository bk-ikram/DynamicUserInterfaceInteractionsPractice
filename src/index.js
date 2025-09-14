import './styles.css';
import image1 from './assets/pic1.avif';
import image2 from './assets/pic2.webp';
import image3 from './assets/pic3.jpg';
import image4 from './assets/pic4.jpg';

const hamburgerBtn = document.querySelector("button");
const menu = document.querySelector("div.dropdown-menu");

hamburgerBtn.addEventListener("click",()=>{
    menu.classList.toggle("invisible");
})

const myImages = [image1,image2,image3,image4];
const imageContainer = document.querySelector("div.images-roll");
const navigationArrows = document.querySelector(".navigation-arrows");
const navigationDots = document.querySelector(".navigation-dots");

//add images to the container
for(let i = 0; i < myImages.length ; i++){
    const ele = document.createElement("img");
    ele.src = myImages[i];
    ele.alt = `img${i}`;
    ele.id = `img${i}`;
    imageContainer.appendChild(ele);
    //Add navigation circles
    const dotEle = document.createElement("button");
    dotEle.setAttribute("imageOption",i);
    if(i===0){
        dotEle.classList.add("selected");
    }
    navigationDots.appendChild(dotEle);
    
}

function displayImage(num){
    console.log('display image entered');
    const len = myImages.length;
    const last = len - 1;
    const mod = (num < 0) ? last : (num % len);
    imageContainer.style.right = `${200*mod}px`;
    imageContainer.setAttribute("imageDisplayed",mod);
    toggleNavDot(mod);
}

function toggleNavDot(num){
    const dots = Array.from(navigationDots.children);
    dots.forEach((dot,index)=>{
        if(index === num){
            dot.classList.add("selected");
        }
        else{
            dot.classList.remove("selected");
        }
    })
}

function displayNext(){
    let currentImage = parseInt(imageContainer.getAttribute("imageDisplayed"));
    displayImage(++currentImage);
}

function displayPrevious(){
    let currentImage = parseInt(imageContainer.getAttribute("imageDisplayed"));
    displayImage(--currentImage);
}

navigationArrows.addEventListener("click", (e) => {
    if(e.target.closest(".right-nav")){
        displayNext();
    }
    if(e.target.closest(".left-nav")){
        displayPrevious()
    }
    return;
})

navigationDots.addEventListener("click", (e) => {
    if(e.target.closest("button")){
        const num = parseInt(e.target.getAttribute("imageOption"));
        displayImage(num);
    }
})

setInterval(displayNext,5000);
