abstract class NPC {
  //eslint-disable-next-line no-useless-constructor
  constructor(public name: string, public health: number, public attackDamage: number) {}

  abstract clone(): NPC;
}

export class Goblin extends NPC {
  //eslint-disable-next-line no-useless-constructor
  constructor(name: string, health: number, attackDamage: number) {
    super(name, health, attackDamage);
  }

  clone(): Goblin {
    return new Goblin(this.name, this.health, this.attackDamage);
  }
}

export class Zombie extends NPC {
  //eslint-disable-next-line no-useless-constructor
  constructor(name: string, health: number, attackDamage: number) {
    super(name, health, attackDamage);
  }

  clone(): Zombie {
    return new Zombie(this.name, this.health, this.attackDamage);
  }
}

/*
    Prototype pattern is a creational design pattern that
    lets you copy existing objects without making your code
    dependent on their classes.
*/
