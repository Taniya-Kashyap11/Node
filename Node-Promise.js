function ChangeColor(element, color) {
  return new Promise((resolve) => {
    setTimeout(() => {
      element.style.backgroundColor = color;
        resolve();
    }, 1000);
  });
}

function Change() {
  let box = document.getElementById("box");
  ChangeColor(box, "red")
  .then(() =>
    ChangeColor(box, "green"))
  .then(() =>
      ChangeColor(box, "blue"))
  .then(() =>
        ChangeColor(box, "yellow"))
  .then(() =>
          console.log("All colors Applied"),
        )
        .catch((err)=>{
            console.log(err)
        })
}
Change();
