let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("hello how are you");
}

let btn2 = document.querySelector("#btn2");
btn2.ondblclick = () => {
    console.log("double click");
}

let div = document.querySelector("div");
div.onmouseover = (e) => {
    console.log("you are inside div");
    console.log(e);
    console.log(e.target);
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
}

let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", () => {
    console.log("handler1");
})

btn3.addEventListener("click", () => {
    console.log("handler2");
})

const HANDLER3 = () => {
    console.log("handler3");
}

btn3.addEventListener("click", HANDLER3);

btn3.addEventListener("click", () => {
    console.log("handler4");
})

btn3.removeEventListener("click", HANDLER3);

let btn4 = document.querySelector("#btn4");
let mode = "light";

btn4.addEventListener("click", () => {
    if(mode === "light") {
        mode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        mode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
})


