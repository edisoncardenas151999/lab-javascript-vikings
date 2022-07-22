// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
        this.attack = function(){
        return strength
        }
        this.receiveDamage = function(damage){
           this.health = this.health - damage
        }
            
        }
    }



// Viking
class Viking extends Soldier {
 constructor(name,health,strength){
    super(health,strength)
    this.name = name;
    this.receiveDamage = function(damage){
     this.health = this.health - damage
            if (this.health > 0  ){
       return `${name} has received ${damage} points of damage`
            }
        else  {
       return `${name} has died in act of combat`
       }
 }
      this.battleCry = function(){
        return "Odin Owns You All!"

      }
}
}
    
   

  


// Saxon
class Saxon extends Soldier{
    constructor(health,strength) {
        super(health,strength);
       this.receiveDamage = function(damage){
        this.health = this.health - damage
        if (health > damage){
            return `A Saxon has received ${damage} points of damage`
        }
       else if (this.health < damage) {
        return `A Saxon has died in combat`

       }
       }
        
    }
}

// War
class War {
    constructor(){
        this.vikingArmy= [];
        this.saxonArmy= [];
    }
        addViking = function(Viking){
          this.vikingArmy.push(Viking);
        }
         addSaxon = function(Saxon){
            this.saxonArmy.push(Saxon);
        }
        vikingAttack = function(){
         
        }
        

          
        

    
}
