class Monster {
    constructor(x,y,r){
        var options={
            
            density:1,
            frictionAir:0

        }
        
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        this.image=loadImage("Monster-01.png");
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        
        imageMode(RADIUS);
        
        image(this.image,0,0,this.r,this.r);
        pop()
    }
    
}
    

    
  

    

  