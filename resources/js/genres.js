(() => {
    window.addEventListener("load", () => {
        console.log("We're ready bois!");

        if (genres != null && genres.length > 0) {
            genres.forEach(genre => {
                $("#accordion-container").append(`
                    <button class="accordion">${genre.name}</button>
                    <div class="accordion-panel">
                        <p>${genre.description}</p>
                    </div>
                `);
            });

            var accordionButtons = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < accordionButtons.length; i++) {
                accordionButtons[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            };
        };
    });
})();