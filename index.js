
// let boxes = document.querySelectorAll('div')








// box.onclick = () => {



// console.log("cliking")

// }



// box.ondblclick = () => {


//     console.log("double click");
// }


// box.onmouseenter = () => {
//     console.log("entered");
// }

// box.onmouseleave = () => {
//     console.log("leaved");
// }


// box.onmousemove = () => {
//     console.log("miving...");
// }       










// let button1 = document.querySelector('.one')
// let button2 = document.querySelector('.two')









// button1.onclick = () => {

//       button2.classList.add('active')
// }

// button2.onclick = () => {

//     button1.classList.add('active')


// }
// console.log(button1,button2);





// let inp = document.querySelector('input')
// let btn = document.querySelector('button')


// btn.onclick = () => {
// if(inp.getAttribute('type') === "text"){
//     inp.getAttribute('type, password')
//     btn.innerHTML = "passed"
// } else{
//     inp.getAttribute('type, text')
//     btn.innerHTML = "passert"
// }











// }




// let btns = document.querySelectorAll('button')

// btns.forEach((btn) =>{
//     btn.onmouseenter = () => {
//         console.log('clicked' , btn.innerText);
//         document.body.style.background = btn.innerText
//     }
// })



// const img = document.querySelector('.iphone.img')
// const btns = document.querySelectorAll('button')


// const images = {
//     titan : "titan.jpeg",
//     blue : "blue.jpeg",
//     white : "white.jpeg",
//     black : "b.jlackpeg"

// }

// btns.forEach(btn => {
//     btn.onclick = () => {
//         let color = btn.innerText
//         img.setAttribute('src' , images[color])
//     }
// })





// let boxes = document.querySelectorAll('.box')

// boxes.forEach (box => {
//     box.onmouseenter = () => {
//         box.classList.add('active')
//     }
// })







document.addEventListener('DOMContentLoaded', function() {
  let answer = document.getElementById("answer");
  let button = document.querySelector("#button");

  function showAnswer() {
    answer.style.display = "block";
  }

  button.addEventListener('click', function() {
    showAnswer();
  });
});





