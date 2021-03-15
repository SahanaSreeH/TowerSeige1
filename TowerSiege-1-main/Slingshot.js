class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyB,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }

        this.pointB  = pointB;
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }

    release(){
        this.body.bodyA = null;
    }

    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.body.bodyB.position;
            strokeWeight(2);
            stroke("black");
            line(pointA.x,pointA.y,pointB.x,pointB.y);  
        }
    }
}