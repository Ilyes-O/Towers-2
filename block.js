class Block{
    constructor(x, y, width, height) {
      
        this.image = loadImage("block.png");
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility = 255;
      }
      display(){
        if(this.body.speed < 3){
          super.display();
         } 
          else {
            World.remove(world,this.body);
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        tint(255,this.visibility);
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image,0,0,this.width, this.height);
        this.visibility = this.visibility - 5;
        pop();
      }
    }
}
