const nav = document.querySelector(".nav-link")
const heading = document.getElementById("heading")
const content = document.getElementById("content")
const box1 = document.querySelector(".box-1 img")


let n = 1

let width = window.innerWidth

let imgUrl1 = ``
let imgUrl2 = ``
let imgUrl3 = ``

if(width<=375){
    box1.src = 'images/mobile-image-hero-1.jpg'
    imgUrl1 = 'images/mobile-image-hero-1.jpg'
    imgUrl2 = 'images/mobile-image-hero-2.jpg'
    imgUrl3 = 'images/mobile-image-hero-3.jpg'
} else{
    box1.src = 'images/desktop-image-hero-1.jpg'
    imgUrl1 = 'images/desktop-image-hero-1.jpg'
    imgUrl2 = 'images/desktop-image-hero-2.jpg'
    imgUrl3 = 'images/desktop-image-hero-3.jpg'
}

function handleDown(){
    nav.classList.add("show")
}

function handleUp(){
    nav.classList.remove("show")
}



function handleIncrease(){
    n = n + 1
    if(n>3){
        n = 1
    }
    handleChange(n)
}

function handleDecrease(){
    n = n - 1
    if(n<1){
        n = 3
    }
    handleChange(n)
}

function handleChange(num){
    if(num===1){
        heading.innerHTML = `Discover innovative ways to decorate`
        content.innerHTML = `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`
        box1.src = imgUrl1
    } 
    else if(num===2){
        heading.innerHTML = `We are available all across the globe`
        content.innerHTML = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`
        box1.src = imgUrl2
    }
    else if(num===3){
        heading.innerHTML = `Manufactured with the best materials`
        content.innerHTML = ` Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`
        box1.src = imgUrl3
    }
}