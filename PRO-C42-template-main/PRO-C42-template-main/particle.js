class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4,
            density:1.0
        }
        this.r=r;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, this.r,options);       
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.r,this.r);
        pop();
    }

};