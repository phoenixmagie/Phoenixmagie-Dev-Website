// Diese Funktion wird von deinem Immortal-Code aufgerufen
window.render = function(text) {
    const output = document.getElementById('output');
    
    // Initialer Text entfernen
    if (output.innerText === "Warte auf Immortal-Code...") {
        output.innerText = "";
    }
    
    const p = document.createElement("p");
    p.innerText = text;
    output.appendChild(p);
};
