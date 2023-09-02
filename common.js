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

// Google Analytics Tracking
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    (i[r] =
        i[r] ||
        function() {
            (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})(window, document, 'script', 'https://www.googletagmanager.com/gtag/js?id=G-77STZSMHK8', 'ga');

ga('create', 'G-77STZSMHK8', 'auto');
ga('send', 'pageview');
