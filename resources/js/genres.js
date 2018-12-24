(() => {
    window.addEventListener("load", () => {
        console.log("We're ready bois!");

        if (genres != null && genres.length > 0) {
            genres.forEach(genre => {
                $("#medium-container").append(`
                <div class="medium-box">
                    <h1>${genre.name}</h1>
                    <hr class="medium-box-hr" />
                    <h3>
                        <p><i>${genre.description}</i></p>
                    </h3>
                </div>`);
            });
        }
    });
})();