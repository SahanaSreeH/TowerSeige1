class BlueBlock {
    constructor(x,y,width,height){
        objects = {
            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,objects);
        this.width = width;
        this.height = height;
        World.add(world.this.body);

    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        fill("blue")
    }
}

