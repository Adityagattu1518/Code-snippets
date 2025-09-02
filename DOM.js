// DOM.js

// Wait until the document is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Change heading text
    const heading = document.getElementById("heading");
    heading.textContent = "Hello from DOM.js!";
    heading.style.color = "blue";

    // Add a new paragraph dynamically
    const para = document.createElement("p");
    para.textContent = "This paragraph was added using JavaScript.";
    para.style.fontSize = "18px";
    document.body.appendChild(para);

    // Add a button with an event
    const button = document.createElement("button");
    button.textContent = "Click Me";
    button.style.padding = "10px 15px";
    button.style.marginTop = "10px";

    button.addEventListener("click", () => {
        alert("Button clicked!");
    });

    document.body.appendChild(button);
});
