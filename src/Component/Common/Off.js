const answerArray = ["yessss sure", " no no no neverrrrrrrrrrrr", "its So GoOoOod", "ARE you stupid?", "OMG!!!", "so nice", "shutUP PLSSS "];


const message = document.querySelector(".message");
const button = document.querySelector(".btn");
const input = document.querySelector("input");

button.addEventListener("click", todo);

function todo() {
    let res = Math.floor(Math.random() * answerArray.length);

    message.innerText = input.value + " " +
        answerArray[res];
    input.value = "";

}