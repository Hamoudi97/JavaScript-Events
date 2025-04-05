// Variables
let hoverBtn = document.getElementById("hover-btn");
let inputField = document.getElementById("input-field");
let focusInput = document.getElementById("focus-input");
let delegationContainer = document.getElementById("delegation-container");
let delegationButtonOutput = document.getElementById("delegation-btn-output");
let eventForm = document.getElementById("event-form");

document.addEventListener("DOMContentLoaded", function () {
  startEvents();
});

function startEvents() {
  setupHoverEvents();
  setupKeyboardEvents();
  setupFocusEvents();
  setupDelegationEvents();
  setupFormSubmission();
}

// Setup Hover Events for the hover button
function setupHoverEvents() {
  if (hoverBtn) {
    hoverBtn.addEventListener("mouseover", function () {
      hoverBtn.textContent = "Stop hovering over me 🤕";
    });
    hoverBtn.addEventListener("mouseout", function () {
      hoverBtn.textContent = "Hover over me 🖐️";
    });
    hoverBtn.addEventListener("click", function () {
      hoverBtn.textContent = "How dare you click me 🤬";
    });
  }
}

// Setup Keyboard Events for the input field
function setupKeyboardEvents() {
  if (inputField) {
    inputField.addEventListener("keydown", function (event) {
      console.log(`Key pressed: ${event.key}`);
    });
  }
}

// Setup Focus and Blur Events for the focus input
function setupFocusEvents() {
  if (focusInput) {
    focusInput.addEventListener("focus", function () {
      focusInput.style.backgroundColor = "#aeffae";
    });
    focusInput.addEventListener("blur", function () {
      focusInput.style.backgroundColor = "";
    });
  }
}

// Setup Event Delegation for delegation buttons 1, 2, and 3
function setupDelegationEvents() {
  if (delegationContainer) {
    delegationContainer.addEventListener("click", function (event) {
      if (event.target && event.target.matches("button.delegation-btn")) {
        delegationButtonOutput.textContent = `You clicked: ${event.target.textContent}`;
      }
    });
  }
}

// Setup Form Submission event
function setupFormSubmission() {
  if (eventForm) {
    eventForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Form submitted successfully!");
    });
  }
}
