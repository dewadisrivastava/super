class Monster{
    constructor(x,y,width,height){
        var options={
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.image=loadImage("monster1.png")
        this.Visibility=255
        this.width=width
        this.height=height
        World.add(world,this.body)
       
        
    }
    display(){
    console.log(this.body.speed)
       if( this.body.speed<7){
    
        var pos=this.body.position
        var angle=this.body.angle
    
       push()
        translate(this.body.position.x,this.body.position.y)
        rotate (angle)
        image(this.image,0,0,this.width,this.height)
      pop ()
       }

       else{
           World.remove(world,this.body)
           
           push()
           this.Visibility=this.Visibility-5
           tint(255,this.Visibility)
           image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
           pop()
       }
        
    
    
    }
    }
    