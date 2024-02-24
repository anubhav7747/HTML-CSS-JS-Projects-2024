const appElement = document.getElementById('noteApp');
const btnElement = document.getElementById('btn');

getNotes().forEach((note) => {
    const noteElement = createNoteElement(note.id, note.content);
    appElement.insertBefore(noteElement, btnElement);
});

function createNoteElement(id, content) {
    // console.log(id, content);

    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty note";
    element.value = content;

    element.addEventListener("dblclick", () => {
        const warning = confirm("Are you sure you want to delete this note?");

        if (warning) {
            deleteNote(id, element);
        }
    });

    element.addEventListener("input", () => {
        updateNote(id, element.value);
    });

    return element;
}

function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != id);
    saveNote(notes);
    appElement.removeChild(element);
}

function updateNote(id, content) {
    const notes = getNotes();
    const target = notes.filter((note) => note.id === id)[0];
    target.content = content;
    saveNote(notes);
}


function addNote () {
    // alert('hi');
    
    const notes = getNotes();

    const noteObj = {
        id: Math.floor(Math.random() * 1000),
        content: "",
    };
    // console.log(noteObj);

    const noteElement = createNoteElement(noteObj.id, noteObj.content);
    appElement.insertBefore(noteElement, btnElement);

    notes.push(noteObj);

    saveNote(notes);
}


function saveNote(notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function getNotes() {
    return JSON.parse(localStorage.getItem('notes') || "[]");
}


btnElement.addEventListener('click', addNote);