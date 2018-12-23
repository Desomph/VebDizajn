(() => {
    window.addEventListener("load", () => {
        console.log("We're ready bois!");

        if (games != null && games.length > 0) {
            games.forEach(game => {
                $("#game-container").append(`            
                <div class="game-box">
                    <img class="game-box-image" src="${game.image}">
                    </img>
                    <h1>${game.name}</h1>
                    <hr class="game-box-hr" />
                    <h3>
                        <p>${game.description}</p>
                    </h3>
                </div>`);
            });
        }
    });
})();