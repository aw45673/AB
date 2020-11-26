class Slingshot{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            stiffness:0.05,
            length:10
        }
        this.pointB=point2
        this.sling = Constraint.create(options)
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null
    }
    display(){
        if (this.sling.bodyA){
            var point1=this.sling.bodyA.position
            var point2=this.pointB
            strokeWeight(3)
            line(point1.x,point1.y,point2.x,point2.y)
        }
       
    }
}
