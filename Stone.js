class Stone{

    constructor(x,y,r){
    var options={
        
        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
    
    
    
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.image=loadImage("stone.png")
    World.add(world,this.body);
    }
    display(){
        var stonepos=this.body.position;     
        push()
        translate(stonepos.x, stonepos.y);
        imageMode (CENTER)
        image (this.image,0,0,this.r,this.r);
        pop()
    
    }
    
    
    
    }

