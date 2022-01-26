showNotes();
// console.log("Welcome to Notes App");

// Function to add notes
let btnadd = document.getElementById('btnadd');
btnadd.addEventListener('click', function(e) {
    let addtext = document.getElementById("addtext");
    let addTitle = document.getElementById("addTitle")
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title:addTitle.value,
        text:addtext.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtext.value = "";
    addTitle.value = "";
    console.log(notesObj);
    showNotes();
});

// Function To show some elements from local storage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
            
            <div class="my-2 mx-2 noteCard card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>  `;
    });
    let notesE = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesE.innerHTML = html;
    } else
        notesE.innerHTML = "Nothing to Show! Please add Some Notes";
}
// Function to Delete Note.
function deleteNote(index) {
    confirm("Are You sure You Wants to Delete This NOte?");
    let addtext = document.getElementById("addtext");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];

    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let search = document.getElementById('search');
search.addEventListener('input', function() {
    let inputValue = search.value
        // console.log('Input Event', inputValue);
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element) {
        let cardtxt = element.getElementsByTagName('p')[0].innerText;
        if (cardtxt.includes(inputValue)) {
            element.style.display = "block";
        } else
            element.style.display = "none";
        console.log(cardtxt);
    })
})