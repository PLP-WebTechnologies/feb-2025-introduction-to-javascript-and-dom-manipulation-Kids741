// Function to change text content and modify CSS
function changeContent() {
  const heading = document.getElementById('heading');
  const description = document.getElementById('description');

  heading.textContent = "Text Changed by JavaScript!";
  heading.style.color = "darkblue";
  heading.style.fontSize = "2.5rem";

  description.textContent = "Now with dynamic styling!";
  description.style.fontStyle = "italic";
  description.style.color = "green";
}

// Function to toggle (add/remove) a box
function toggleBox() {
  const container = document.getElementById('container');
  const box = document.getElementById('box');

  if (box) {
    container.removeChild(box);
  } else {
    const newBox = document.createElement('div');
    newBox.id = "box";
    newBox.textContent = "I'm a new box!";
    newBox.style.width = "200px";
    newBox.style.height = "100px";
    newBox.style.backgroundColor = "lightcoral";
    newBox.style.marginTop = "10px";
    newBox.style.textAlign = "center";
    newBox.style.lineHeight = "100px";
    newBox.style.borderRadius = "8px";
    container.appendChild(newBox);
  }
}
