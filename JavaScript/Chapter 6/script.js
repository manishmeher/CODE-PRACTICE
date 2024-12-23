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

let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from ApnaCollege student";

let divs = document.querySelectorAll(".box");
console.log(divs.innerText);
let idx = 1;
for(let div of divs) {
    div.innerText = `This is new ${idx}`;
    idx++;
    console.log(div);
}
// divs[0].innerText = "hii";
// divs[1].innerText = "hey";
// divs[2].innerText = "hello";

