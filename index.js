let btn1= document.getElementById("mybutton")
let btn2= document.getElementById("mybutton2")
let copyDiv = document.querySelector(".copycode")
let rgb1 = '#000'
let rgb2 = '#fff'

const hexValues = () => {
    let myhexavalue = "0123456789abcdef"
    let colors = "#"
    
    for(let i=0; i<6; i++){
    colors = colors + myhexavalue[Math.floor(Math.random()*16)];   
}
    return colors;
}

const handlebtn1 = () => {
    rgb1 = hexValues(); 
    console.log(rgb1);
    btn1.innerText = rgb1;
    document.body.style.backgroundImage =
    `linear-gradient(to right, ${rgb1}, ${rgb2})`
    copyDiv.innerHTML = `background-image: linear-gradient (to right, ${rgb1}, ${rgb2})`
}

const handlebtn2 = () => {
    rgb2 = hexValues(); 
    console.log(rgb2);
    btn2.innerText=rgb2;
    document.body.style.backgroundImage =
    `linear-gradient(to right, ${rgb1}, ${rgb2})`
    copyDiv.innerHTML = `background-image: linear-gradient (to right, ${rgb1}, ${rgb2}))`
}


btn1.addEventListener('click', handlebtn1)
btn2.addEventListener('click', handlebtn2)



copyDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.innerText);
    alert("Colour code copied successfully!")
})

