document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    var currentYear = new Date().getFullYear();
    // Update the span element with id "currentYear"
    document.getElementById("currentYear").textContent = currentYear;

    // Get the last modified date of the document
    var lastModifiedDate = document.lastModified;
    // Update the paragraph element with id "lastModified"
    document.getElementById("lastModified").textContent = "Last modified: " + lastModifiedDate;
});