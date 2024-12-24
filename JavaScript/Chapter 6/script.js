// let heading = document.getElementById("my")
// console.log(heading);
// console.dir(heading);

// let heading = document.getElementsByClassName("myclass");
// console.log(heading);
// console.dir(heading);

// let heading = document.getElementsByTagName("p");
// console.log(heading);
// console.dir(heading);

// let heading = document.querySelector("#my");
// console.log(heading.tagName);

// let heading = document.querySelector("h2");
// console.log(heading.textContent);

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from ApnaCollege student";

// let divs = document.querySelectorAll(".box");
// console.log(divs.innerText);
// let idx = 1;
// for(let div of divs) {
//     div.innerText = `This is new ${idx}`;
//     idx++;
//     console.log(div);
// }
// divs[0].innerText = "hii";
// divs[1].innerText = "hey";
// divs[2].innerText = "hello";

// let div = document.querySelector("div");
// console.log(div);
// div.getAttribute("class");

// let div = document.querySelector("div");
// div.style.backgroundColor = "red";
// div.style.fontSize = "26px";
// div.innerText = "Helloooo";

// let div = document.createElement("div");
// div.innerText = "This is a div";

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me!";
// console.log(newBtn);

// let h4 = document.querySelector("h4");
// h4.after(newBtn);

// let para = document.querySelector("p");
// para.remove("p");

let button = document.createElement("button");
button.innerText = "Click me!";

button.style.backgroundColor = "red";
button.style.color = "white";

let body = document.querySelector("body");
body.prepend(button);

let p = document.querySelector("p")
p.classList.add("newClass");


