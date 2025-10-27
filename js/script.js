/**
 * SPA handling + dynamic stylesheets
 */


document.querySelectorAll('nav > ul > li > a').forEach(link => {
    link.addEventListener('click', function(event){
        event.preventDefault();

        // Highlight the selected nav link
        document.querySelectorAll('nav > ul > li > a').forEach(linkOption => {
            linkOption.classList.remove('selected');
        });
        this.classList.add('selected');

        // update page title
        document.title = `${this.innerText} | Single Page Application`;

        // show the selected link in nav bar
        const dataTarget = this.getAttribute('data-target');
        document.querySelector(`#${dataTarget}`).classList.remove('hidden');
        document.querySelectorAll(`main section:not(#${dataTarget})`).forEach(section => {
            section.classList.add('hidden');
        })
        
        //show the stylesheet that matches the selected section in the nav
        document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
            if (link.hasAttribute('data-style')) {
                link.disabled = true;
            }
        });

        const styleId = this.getAttribute('data-style');
            if (styleId) {
                const targetStyle = document.getElementById(styleId);
                if (targetStyle) targetStyle.disabled = false;
            }

    });
})

// // --- Optional: initialize first page on load ---
// document.addEventListener('DOMContentLoaded', () => {
//     const firstNav = document.querySelector('nav > ul > li > a');
//     if (firstNav) firstNav.click(); // triggers SPA logic for first page
// });
