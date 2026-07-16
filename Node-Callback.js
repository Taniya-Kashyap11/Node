function ChangeColor(element, color, callback) {
    setTimeout(() => {
        element.style.backgroundColor = color;
        if(callback)  callback();
    }, 1000);  
}

function Change() {
    let box = document.getElementById("box");

    ChangeColor(box, "red", function () {
        ChangeColor(box, "green", function () {
            ChangeColor(box, "blue", function () {
                ChangeColor(box, "yellow", function () {
                    console.log("All colors are applied");
                });
            });
        });
    });
}
Change();
