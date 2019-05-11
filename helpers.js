// create Hexagon shape
function hexagon(posX, posY, radius) {
  const rotAngle = 360 / 6
  beginShape()
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
    vertex(thisVertex.x, thisVertex.y)
  }
  endShape(CLOSE)
}

function pointOnCircle (posX, posY, radius, angle) {
  const x = posX + radius * cos(angle)
  const y = posY + radius * sin(angle)
  return createVector(x, y)
}


// get random true or false
function randomSelectTwo() {
    const randomNumber = random(1);
    return randomNumber > 0.5 ? true : false;
}

// get random color of Color-Palette
function getRandomFromPalette() {
    const randomColorNumber = floor(random(0, PALETTE.length));
    return PALETTE[randomColorNumber];
}
