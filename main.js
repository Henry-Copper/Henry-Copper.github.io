const catImage = document.querySelector("img");

catImage.onclick = () => {
    const srcRef = catImage.getAttribute("src");
    let src = srcRef === "images/cat.jpeg" ? "images/cat2.webp" : "images/cat.jpeg";
    catImage.setAttribute("src", src)
    console.log(src);
}

let userchangeButton = document.querySelector("button");
let heading = document.querySelector("h1");

function setUsername(){
    const name = prompt("Please enter your name");
    if (!name){
        setUsername();
    } else {
        localStorage.setItem("name", name);
    }
}

function changeName(changeName) {
if (changeName) {
    setUsername();
}
heading.textContent = `Mozilla is cool, ${localStorage.getItem("name")}`;
}

changeName(!localStorage.getItem("name"));
userchangeButton.onclick = () => {
    changeName(true);
}