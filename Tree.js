class Tree{

    constructor(x,y,width,height){
    var options={isStatic:true}
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    this.image=loadImage("tree.png")
    }
    display(){
        var treepos=this.body.position;     
        push()
        translate(treepos.x, treepos.y);
        imageMode (CENTER)
        image (this.image,0,0,this.r,this.r);
        pop()
    
    }
    
    
    
    }

