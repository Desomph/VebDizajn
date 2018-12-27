(() => {
    var canvas = document.querySelector("#canvas");
    if (canvas == null) return;
    var ctx = canvas.getContext("2d");

    var cWidth = canvas.clientWidth;
    var cHeight = canvas.clientHeight;

    console.log("Canvas height : " + cHeight + ", Canvas width: " + cWidth);

    // ctx.lineWidth = 3;
    // ctx.clearRect(0, 0, cWidth, cHeight);
    // ctx.moveTo(0, 0);

    // ctx.lineTo(cWidth / 2, cHeight);
    // ctx.stroke();
    // ctx.lineTo(cWidth, 0);
    // ctx.stroke();
    // ctx.lineTo(cWidth / 2, 0);
    // console.log(cWidth / 2);
    // ctx.stroke();
    // ctx.lineTo(0, cHeight / 2);
    // console.log(cHeight / 2);
    // ctx.stroke();

})();