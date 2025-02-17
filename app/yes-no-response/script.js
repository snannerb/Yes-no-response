document.addEventListener("DOMContentLoaded", () => {
  const questionInput = document.getElementById("questionInput");
  const submitButton = document.getElementById("submitButton");
  const responseText = document.getElementById("responseText");

  submitButton.addEventListener("click", () => {
    const question = questionInput.value.trim();
    if (question) {
      submitButton.disabled = true;
      submitButton.textContent = "Thinking...";
      setTimeout(() => {
        const response = Math.random() > 0.5 ? "Yes" : "No";
        responseText.textContent = response;
        submitButton.disabled = false;
        submitButton.textContent = "Get Answer";
      }, 1000); // Simulate 1-second delay
    } else {
      responseText.textContent = "Please ask a question!";
    }
  });

  // Ensure the app is keyboard-navigable
  questionInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      submitButton.click();
    }
  });
});