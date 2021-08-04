class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
            friction: 1.0,
            density:1.0
        }
        this.animation = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png",
        "Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png");
        this.batman = loadImage("Walking Frame/batman.png");
        this.umbrella = Bodies.circle(x,y,5,options);
        this.radius = 50;
        World.add(world, this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if(frameCount<200){
            animation(this.animation,pos.x,pos.y+70,200,200);
        }
        else{
            image(this.batman, pos.x, pos.y+70);
        }
    }
}
