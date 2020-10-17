class Mango{

    constructor(x,y,r){
    var options={
        
        isStatic:true,
        restitution:0,
        friction:1
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    this.image=loadImage("mango.png");
    }
    display(){
        var mangopos=this.body.position;     
        push()
        translate(mangopos.x, mangopos.y);
        imageMode (CENTER)
        image (this.image,0,0,this.r,this.r);
        pop()
    
    }
    
    
    
    }

