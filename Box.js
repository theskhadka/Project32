class Box{
  constructor(x, y, width, height, angle) {
      var options = {
          restitution: 0.8
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.color = color(random(0, 255), random(0, 255), random(0, 255));
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3) {
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.color);
      rect(pos.x, pos.y, this.width, this.height);
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        rect(this.image, this.body.position.x, this.body.position.y, 30, 40);
        pop();
      }
    }
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
}
