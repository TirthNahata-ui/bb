class Ground{
    constructor(){
        this.body= Bodies.rectangle(600,380,1200,10,{isStatic:true})
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,1200,10)
       
    }
}