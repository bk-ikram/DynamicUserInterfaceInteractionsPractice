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

//add images to the container
for(let i = 0; i < myImages.length ; i++){
    const ele = document.createElement("img");
    ele.src = myImages[i];
    ele.alt = `img${i}`;
    ele.id = `img${i}`;
    imageContainer.appendChild(ele);
}

function displayImage(num){
    imageContainer.left = `${200*num}px;`
}

//displayImage(2);