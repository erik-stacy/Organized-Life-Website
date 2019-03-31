

var newNoteButton = document.getElementById('newNoteButton');
var noteList = document.getElementById('noteList');

newNoteButton.addEventListener('click', function() {
    var noteListItem = document.createElement("LI");
    var noteTextAreaItem = document.createElement("TEXTAREA");

    noteTextAreaItem.rows = "1";
    noteTextAreaItem.innerHTML = "New note";
    noteTextAreaItem.className = "noteTextArea";
    noteListItem.appendChild(noteTextAreaItem);

    noteList.appendChild(noteListItem);
});


var noteTextArea = document.getElementsByClassName('noteTextArea');
for (var i = 0; i < noteTextArea.length; i++) {
    noteTextArea[i].addEventListener('keydown', function() {
        this.style.height = "5px";
        this.style.height = (this.scrollHeight)+"px";
    });
}