let btn = document.querySelector("button");
let div = document.querySelector("div");
let heading = document.querySelector("h4");
btn.addEventListener('click',function(){
    let randomColor = ranColor();
    heading.innerText = randomColor;
    div.style.backgroundColor = randomColor;
    console.log("color updated");
})

//random color generator
let ranColor = function(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let color = `rgb(${r},${g},${b})`;
    return color;
}