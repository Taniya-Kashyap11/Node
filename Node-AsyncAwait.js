 function ChangeColor(element, color) {
  return new Promise((resolve) => {
    setTimeout(() => {
      element.style.backgroundColor = color;
        resolve();
    }, 1000);
  });
}

async function Change() {
  let box = document.getElementById("box");
    await ChangeColor(box, "red");
   await ChangeColor(box, "green");
   await ChangeColor(box, "blue");
   await ChangeColor(box, "yellow");
   await console.log("All colors Applied");
        
}
Change();
