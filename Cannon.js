class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_image = loadImage("assets/canon.png");
    this.cannon_base = loadImage("assets/cannonBase.png");
  }
  display() {
    console.log(this.angle)

    if (keyIsDown(UP_ARROW) && this.angle > -43) {
      this.angle -= 0.1
    }

    if (keyIsDown(DOWN_ARROW) && this.angle < 45.1) {
      this.angle += 0.1
    }


    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannon_image, 0, 0, this.width, this.height);
    pop();
    image(this.cannon_base, 70, 20, 200, 200);
    noFill();
  }
}
