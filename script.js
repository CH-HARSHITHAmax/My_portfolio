document.addEventListener("DOMContentLoaded", () => {
    // Create a new button element
    const button = document.createElement("button");

    // Set the button's text content
    button.textContent = "Click Me!";

    // Add an event listener to show an alert when clicked
    button.addEventListener("click", () => {
        alert("Thanks for visiting my portfolio!");
    });

    // Append the button to the body of the document
    document.body.appendChild(button);
});





