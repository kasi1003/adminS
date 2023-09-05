document.addEventListener("DOMContentLoaded", function () {
  function generateGraveInputs() {
    const sectionNumberInput = document.getElementById("sectionNumber");
    const gravePerSecContainer = document.getElementById(
      "gravePerSecContainer"
    );

    // Clear any previously generated inputs
    gravePerSecContainer.innerHTML = "";

    // Get the number of sections entered by the user
    const numSections = parseInt(sectionNumberInput.value);

    // Generate input fields based on the user's input
    for (let i = 0; i < numSections; i++) {
      const inputDiv = document.createElement("div");
      inputDiv.className = "mb-3";
      inputDiv.innerHTML = `
        <label for="numberOfGraves${
          i + 1
        }" class="form-label">Graves in Section ${i + 1}</label>
        <input type="number" class="form-control" id="GravesInSection${
          i + 1
        }" />
      `;
      gravePerSecContainer.appendChild(inputDiv);
    }
  }

  // Add an event listener for form submission
  document.querySelector("form").addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the number of sections entered by the user
    const numSections = parseInt(
      document.getElementById("sectionNumber").value
    );

    // Initialize a variable to store the total
    let totalGraves = 0;

    // Iterate through the input fields for each section
    for (let i = 1; i <= numSections; i++) {
      // Get the user's input for graves in this section
      const gravesInput = document.getElementById(`GravesInSection${i}`);
      const gravesInSection = parseInt(gravesInput.value);

      // Check if the input is a valid number
      if (!isNaN(gravesInSection)) {
        // Add the number of graves in this section to the total
        totalGraves += gravesInSection;
      }
    }

    // Set the calculated total as the value for the TotalGraves input field

    // Now, you can submit the form
    // Set the calculated total as the value for the TotalGraves input field
    const numberOfGravesInput = document.getElementById("numberOfGraves");
    if (numberOfGravesInput) {
      numberOfGravesInput.value = totalGraves;
    }
    this.submit();
  });
});
