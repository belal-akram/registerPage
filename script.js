// function openLink(url) {
//     window.location.href = url;
// }
document.addEventListener("DOMContentLoaded", function() {
    const socialLogos = document.querySelectorAll('.social-logos i');

    socialLogos.forEach(function(logo) {
      logo.addEventListener('click', function() {
        const link = logo.getAttribute('data-link');
        if (link) {
          window.open(link, '_blank');
        }
      });
    });
  });

