// Include the common header
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    });

// Include the common footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        // Set the footer content
        document.getElementById('footer-placeholder').innerHTML = data;

        // Get the current year
        const currentYear = new Date().getFullYear();

        // Update the current year in the footer
        document.getElementById('current-year').textContent = currentYear;
    });
