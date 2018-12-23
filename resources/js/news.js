(() => {
    window.addEventListener("load", () => {
        console.log("We're ready bois!");

        if (news != null && news.length > 0) {
            news.forEach(newz => {
                $("#news-container").append(`            
                <div class="news-box">
                    <img class="news-image" src="${newz.image}">
                    </img>
                    <h1>${newz.title}</h1>
                    <hr class="news-box-hr" />
                    <h3>
                        <p>${newz.body}</p>
                    </h3>
                </div>`);
            });
        }
    });
})();