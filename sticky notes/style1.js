const notesContainer = document.querySelector(".app");
const addNoteButton = document.querySelector(".add-note");

getNotes().forEach(note => {
    const noteElement = createNoteElement(note.id, note.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
});

addNoteButton.addEventListener("click", () => {
    addNote();
});

function getNotes() {
    return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
}

function saveNotes(notes) {
    localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}

function createNoteElement(id, content) {
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.value = content;
    element.placeholder = "Empty Note";

    element.addEventListener("change", () => {
        updateNote(id, element.value);
    });
    element.addEventListener("dblclick", () => {
        const doDelete = confirm("Are you sure you want to delete this note?");
        if (doDelete) {
            deleteNote(id, element);
        }
    });

    return element;
}

function addNote() {
    const existingNotes = getNotes();
    const newNote = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    };
    const noteElement = createNoteElement(newNote.id, newNote.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
    existingNotes.push(newNote);
    saveNotes(existingNotes);
}

function updateNote(id, newContent) {
    const notes = getNotes();
    const targetNote = notes.find(note => note.id == id);
    if (targetNote) {
        targetNote.content = newContent;
        saveNotes(notes);
    }
}

function deleteNote(id, element) {
    const notes = getNotes().filter(note => note.id != id);
    saveNotes(notes);
    notesContainer.removeChild(element);
}