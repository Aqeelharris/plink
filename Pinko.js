class Pinko{
    constructor(x,y,radius){
    var options={
      restitution:0.8,
      friction:0.3,
      density:1.2
    }
    this.body = Bodies.circle(x,y,10,options);
    this.radius = 10;
       
     World.add(world,this.body);
  } 
     display(){
        var pos =this.body.position;
        push()
        translate(pos.x,pos.y)
        ellipseMode(CENTER);
        
      
     }
}