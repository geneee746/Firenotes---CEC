let database = firebase.database()

document.getElementById("my-form").addEventListener("sumbit", function(event){
  event.preventDefault()
  let noteString = document.getElementById("note_imput").value
  
  database.ref('users/').push(noteString)
  document.getElementById("note_imput).value".value=""
  alert("note added");
});

database.ref("notes").on('value',(snapshot))=> {
  let notes =snapshot.val();
  let table = document.getElementById('notes container'). innerHTML;
  for(let id in notes){
    let note - notes(id)
    table += '<tr><td>$(notes)</td></tr>'
  }
  document.getElementById('notes-container').innerHTML = table
}
