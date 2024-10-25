let btn = document.querySelector('button');

let textArea = document.getElementById("text_area");
let color = document.getElementById("color");
let notes_container= document.getElementById("notes_container");
let refresh = document.querySelector('#refresh');


function addNotes(){
    console.log('in addNotes')
    if(textArea.value === ''){
        alert("Please enter some text");
        return;
    }
    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement('button');

    div.appendChild(p);
    div.appendChild(cross_btn);

    cross_btn.innerText = 'X';
    p.innerText = textArea.value;

    div.style.backgroundColor = color.value;

    notes_container.appendChild(div);
    textArea.value = '';

    cross_btn.addEventListener('click',() =>{
        div.style.display = 'none'
    })
}


btn.addEventListener('click', addNotes)
refresh.addEventListener('click', ()=>{
    notes_container.innerHTML = '';
})