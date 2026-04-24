/**
 * Footer Loader for Growexa Website
 * Centralizes the footer from footer.html across all pages.
 */

$(document).ready(function() {
    const footerPlaceholder = $("#footer-placeholder");
    if (!footerPlaceholder.length) return;

    // Load footer.html
    $.get("footer.html", function(data) {
        footerPlaceholder.replaceWith(data);

        // Highlight active link if any footer navigation exists
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        $('.footer-links li a').each(function() {
            if ($(this).attr('href') === currentPath) {
                $(this).addClass('active');
            }
        });
    });
});
