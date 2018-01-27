window.onload = function ()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var centerY = height * 0.5,
        centerX = width * 0.5,
        baseRadius = 30,
        offset = height * 0.4,
        speed = 0.01,
        angle = 0;

    Render();

    function Render()
    {
        var y = centerY + Math.sin(angle) * offset;
        var x = centerX + Math.cos(angle) * offset;

        var radius = (baseRadius) + Math.sin(angle) * offset;

        context.clearRect(0,0,width,height);
        context.beginPath();

        context.arc(x, y, Math.abs(radius), 0, Math.PI * 2, false);
        context.fill();

        angle += speed;

        console.log("angle = " + angle);
        console.log("radius = " + radius);

        requestAnimationFrame(Render);
    }
};
