(() => {
    window.addEventListener("load", () => {
        var header = document.querySelector("#header");
        var canvas = document.querySelector("#canvas");
        if (canvas == null) return;
        canvas.width = header.clientWidth;
        canvas.height = header.clientHeight / 2;

        var ctx = canvas.getContext("2d");
        var text = "Follow our social media!";
        var xPos = 5;
        var direction = "right";
        var fontSize = 40;
        var step = 0;
        var maxSteps = 50;

        setInterval(animateText, 15);

        function animateText() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1;
            ctx.textBaseline = "bottom";

            var measure = ctx.measureText(text);
            var textWidth = measure.width;
            if (direction == "right") {
                xPos += 5;

                if (xPos > canvas.width - textWidth) {
                    direction = "left";
                }
            } else {
                xPos -= 5;

                if (xPos < 10) {
                    direction = "right";
                }
            }

            if (xPos > ((canvas.width / 2) - textWidth / 2)) {
                ctx.fillStyle = "#CE7849";
            } else {
                ctx.fillStyle = "#1A3C62";
            }

            ctx.font = `${fontSize}px Consolas`;
            ctx.fillText(text, xPos, canvas.height - (canvas.height - 50));
        }
    });
})();