function allowDrop(ev) {
  ev.preventDefault();
}

document.querySelectorAll('.machine').forEach(item => {
  item.addEventListener('dragstart', drag);
});

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.innerText);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.innerText = data;
}