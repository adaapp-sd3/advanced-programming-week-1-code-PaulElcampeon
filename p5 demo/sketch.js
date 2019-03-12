var dogButton = new Button("Dog", 10, 10);

function setup() {
    createCanvas(640, 480);
  }

  function draw() {
      background(200);

      dogButton.draw();
  }

  function mousePressed() {

    if(dogButton.containsMouse()) {
        alert("wooohoo");
    };
      console.log(mouseX);
      console.log(mouseY);
  }