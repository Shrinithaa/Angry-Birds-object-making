class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 40, 40, options);
      this.width = 40;
      this.height = 40;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.y = mouseY;
      pos.x = mouseX;
      push();
      translate(pos.x,pos.y);
      rotate( this.body.angle)
      rectMode(CENTER);
      fill("red");

      
      rect(0, 0, this.width, this.height);
      pop();
    }
  };