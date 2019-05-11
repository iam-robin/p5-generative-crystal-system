const CRYSTAL_SIZE = 500;
const SIDES = 6;
let PALETTE = [];

function setup() {
  createCanvas(530, 530, SVG);

  PALETTE = [
      color(243, 48, 110), //pink
      color(118, 178, 186) //teal
  ]

  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
    const circles = new Circles();
    circles.render();

    const simpleLines = new SimpleLines();
    simpleLines.render();

    const outlineShape = new OutlineShape();
    outlineShape.render();

    /*testLines();
    outlineShape();
    simpleLines();
    simpleCircles();*/
}

function testLines() {
    let shapeNumbers = randomSelectTwo() ? SIDES : SIDES * 2;
    let strokeColor = getRandomFromPalette();

    noFill();
    stroke(PALETTE[0]);
    push();
      translate(width / 2, height / 2);
      ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
      stroke(strokeColor);
      const angle = 360 / shapeNumbers;
      for (let i = 0; i < shapeNumbers; i++) {
        line(0, 0, 0, CRYSTAL_SIZE / 2);
        rotate(angle);
      }
    pop();
}
