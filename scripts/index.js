class Creature {
    constructor(name, healthPoints, damage) {
      this.id = Creature.number;
      Creature.number += 1;
      this.name = name;
      this.healthPoints = healthPoints;
      this.damage = damage;
    }
  
    getID() {
      return this.id;
    }
  
    defeat() {
      return `${this.name} уничтожен!`;
    }
  }
  
  Creature.number = 0;
  
  class Player extends Creature {
    constructor(name, healthPoints, damage, lvl = 1) {
      super(name, healthPoints, damage);
      this._lvl = lvl;
    }
  
    getLvl() {
      return this._lvl;
    }
  
    attack(other) {
      other.healthPoints -= this.damage;
      if (other.healthPoints <= 0) {
        return `${other.defeat()} Игрок победил!`;
      }
      return '';
    }
  }
  
  class Enemy extends Creature {
    attack(other) {
      other.healthPoints -= this.damage;
      if (other.healthPoints <= 0) {
        return `${other.defeat()} Противник победил!`;
      }
      return '';
    }
  }
  
  function startBattle() {
    const playerHealth = parseInt(document.getElementById("playerHealth").value);
    const playerDamage = parseInt(document.getElementById("playerDamage").value);
    const enemyHealth = parseInt(document.getElementById("enemyHealth").value);
    const enemyDamage = parseInt(document.getElementById("enemyDamage").value);
  
    const player1 = new Player("Игрок 1", playerHealth, playerDamage);
    const enemy1 = new Enemy("Противник 1", enemyHealth, enemyDamage);
  
    let result = '';
  
    // Сражение между игроком и врагом
    while (true) {
      result = player1.attack(enemy1);
      if (result) {
        alert(result);
        break;
      }
      result = enemy1.attack(player1);
      if (result) {
        alert(result);
        break;
      }
    }
  }
  