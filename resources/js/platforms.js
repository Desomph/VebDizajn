(() => {
    window.addEventListener("load", () => {
        if (platforms != null && platforms.length > 0) {
            platforms.forEach(platform => {
                $("#platform-container").append(`
                <div class="platform-box">
                    <a target="_blank" href="${platform.url}">
                        <img class="platform-image" src="${platform.image}" />
                    </a>
                    <h1>${platform.name}</h1>
                    <hr class="platform-box-hr" />
                    <h3>
                        <p><i>${platform.description}</i></p>
                    </h3>
                </div>`);
            });
        }
    });
})();