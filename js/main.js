window.onload = function ()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    //context.fillRect(0, 0, width, height);

    //Move context down
    context.translate(0, height/2);
    context.scale(1, -1);

    //Plot a sine wave and draw it
    for(var angle = 0; angle < Math.PI * 2; angle += 0.01)
    {
        var x = angle * 100;
        var y = Math.sin(angle) * 100;

        context.fillRect(x,y, 1, 1)    }
};
