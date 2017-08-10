'use strict';

class Robot {
  // implement your solution here!
 //
 constructor (bearing = 'north', coordinates = null){
   this.bearing = bearing
   this.coordinates = coordinates
 }
  orient(direction) {
    let points = ["north", "south", "east", "west"]
    if (points.includes(direction))
      {this.bearing = direction}
      else{throw new Error("Invalid Robot Bearing")}
  }
  turnRight(){
    switch (this.bearing){
      case "north":
        this.orient("east")
        break;

      case "east":
          this.orient("south")
          break;

      case "south":
        this.orient("west")
        break;

      case "west":
      this.orient("north")
      break;
  }
}
  turnLeft(){
    switch (this.bearing){
      case "north":
        this.orient("west")
        break;

      case "east":
          this.orient("north")
          break;

      case "south":
        this.orient("east")
        break;

      case "west":
      this.orient("south")
      break;
  }
    }
    at(x, y){
       this.coordinates = [x, y];
    }
    advance(){
      switch (this.bearing){
        case "north":
          this.coordinates[1]+=1
          break;

        case "east":
            this.coordinates[0]+=1
            break;

        case "south":
        this.coordinates[1]-=1
          break;

        case "west":
        this.coordinates[0]-=1
        break;
    }
    }
    instructions(string){
      // if (instructions === "R") {return ["turnRight"]}
      // else if (instructions === "L") {return ["turnLeft"]}
      // else if (instructions === "A") {return ["advance"]}
      let instructionsObject = {R:'turnRight', L:'turnLeft', A:'advance'}
      let result = []
      let instructions = string.split("")
      instructions.forEach((instruction)=>result.push(instructionsObject[instruction]))
      return result
    }
    place(xyDirectionObject){
      // robot1.place({x: 0, y: 0, direction: "north"});
      this.orient(xyDirectionObject["direction"])
      this.at(xyDirectionObject["x"],xyDirectionObject["y"])
    }
    evaluate(string){
    let commands = this.instructions(string)
    // let commandCenter = {turnRight: this.turnRight, turnLeft: this.turnLeft, advance:this.advance}
    // commands.forEach(command => commandCenter[command].call(this))

    commands.forEach(command => this[command]())
    }
}
