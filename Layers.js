class Layer {
    constructor() {
        this.sides = SIDES;
        this.numberOfShapes = this.sides;
        this.angle = 360 / this.numberOfShapes;
        this.stepsOut = 8;
        this.singleStep = (CRYSTAL_SIZE / 2) / this.stepsOut;
        this.thinStroke = 1;
        this.thickStroke = 3;
        this.strokeColor = getRandomFromPalette();
    }
}

class Circles extends Layer {
    constructor() {
        super();
        this.shapeSize = (CRYSTAL_SIZE / 2) * 0.93
        this.position = (CRYSTAL_SIZE / 2) - (this.shapeSize / 2);
    }

    render() {
        noFill();
        stroke(this.strokeColor);
        strokeWeight(1);
        push();
        translate(width / 2, height / 2);
        for (let i = 0; i <= this.numberOfShapes; i++) {
            ellipse(this.position, 0, this.shapeSize , this.shapeSize);
            rotate(this.angle);
        }
        pop();
    }
}

class SimpleLines extends Layer {
    constructor() {
        super();
        this.numberOfSteps = randomSelectTwo() ? this.stepsOut : int(this.stepsOut * 1.25);
        this.numberOfShapes = randomSelectTwo() ? this.sides : this.sides * 2;
        this.step = (CRYSTAL_SIZE / 2) / this.numberOfSteps;
        this.start = floor(random(0, this.numberOfSteps));
        this.stop = floor(random(this.start, this.numberOfSteps + 1));
        this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke;
        this.angle = 360 / this.numberOfShapes;
    }

    render() {
        noFill();
        stroke(this.strokeColor);
        strokeWeight(this.weight);
        push();
          translate(width / 2, height / 2);
          for (let i = 0; i < this.numberOfShapes; i++) {
            line(this.start * this.step, 0, this.stop * this.step, 0);
            rotate(this.angle);
          }
        pop();
    }
}

class OutlineShape extends Layer {
    constructor() {
        super();
        this.hexagonTrue = randomSelectTwo();
        this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke;
    }

    render() {
        stroke(this.strokeColor);
        strokeWeight(this.weight);
        push();
            translate(width / 2, height / 2);
            if(this.hexagonTrue) {
                hexagon(0, 0, CRYSTAL_SIZE / 2);
            } else {
                ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
            }
        pop();
    }
}
