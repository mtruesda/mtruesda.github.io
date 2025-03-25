function menuButton() {
    return (
        <h1>Hello.</h1>
    );
}

export function typeLine(lineText) {
    const container = document.getElementById('typeContainer');
    if (!container) return;
  
    const newLine = document.createElement('div');
    container.appendChild(newLine);
  
    let index = 0;
    const speed = 50;
  
    newLine.innerHTML += "/users/MyronT/Website/ mtruesda~:$ ";

    function typeChar() {
      if (index < lineText.length) {
        newLine.innerHTML += lineText.charAt(index);
        index++;
        setTimeout(typeChar, speed);
      }
    }
  
    typeChar();
  }

export default menuButton;