// --- Q1: DOM Manipulation ---
console.log("--- Q1 Outputs ---");

// i. Get element of id "main-content"
let mainContent = document.getElementById("main-content");
console.log("Main Content Element:", mainContent);

// ii. Display all child elements
console.log("Children of Main Content:", mainContent.children);

// iii. Get all elements of class "render" and show innerHTML
let renders = document.getElementsByClassName("render");
for(let i = 0; i < renders.length; i++) {
    console.log("Render Class Content:", renders[i].innerHTML);
}

// iv. Fill input value for first-name
document.getElementById("first-name").value = "John";

// v. Repeat for last-name and email
document.getElementById("last-name").value = "Doe";
document.getElementById("email").value = "john@example.com";


// --- Q2: DOM Analysis ---
console.log("\n--- Q2 Outputs ---");

// i. Node type of "form-content"
console.log("Node Type of form-content:", document.getElementById("form-content").nodeType);

// ii. Node type of "lastName" and its child node
let lastNameEl = document.getElementById("lastName");
console.log("Node Type of lastName:", lastNameEl.nodeType);
console.log("Node Type of lastName child:", lastNameEl.firstChild.nodeType);

// iii. Update child node of "lastName"
lastNameEl.firstChild.nodeValue = "Last Name: Smith";

// iv. Get First and last child of "main-content"
console.log("First Child of main-content:", mainContent.firstChild);
console.log("Last Child of main-content:", mainContent.lastChild);

// v. Get next and previous siblings of "lastName"
console.log("Next Sibling of lastName:", lastNameEl.nextElementSibling);
console.log("Previous Sibling of lastName:", lastNameEl.previousElementSibling);

// vi. Get parent node and node type of "email"
let emailEl = document.getElementById("email");
console.log("Parent Node of email:", emailEl.parentNode);
console.log("Node Type of email:", emailEl.nodeType);