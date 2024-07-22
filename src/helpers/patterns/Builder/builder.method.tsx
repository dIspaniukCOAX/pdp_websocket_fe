class Meal {
  mainCourse: string;

  side: string;

  drink: string;

  constructor() {
    this.mainCourse = "";
    this.side = "";
    this.drink = "";
  }

  setMainCourse(mainCourse: string): void {
    this.mainCourse = mainCourse;
  }

  setSide(side: string): void {
    this.side = side;
  }

  setDrink(drink: string): void {
    this.drink = drink;
  }
}

interface MealBuilder {
  setMainCourse(mainCourse: string): this;
  setSide(side: string): this;
  setDrink(drink: string): this;
  build(): Meal;
}

export class BurgerMealBuilder implements MealBuilder {
  private meal: Meal;

  constructor() {
    this.meal = new Meal();
  }

  setMainCourse(mainCourse: string): this {
    this.meal.setMainCourse(mainCourse);

    return this;
  }

  setSide(side: string): this {
    this.meal.setSide(side);

    return this;
  }

  setDrink(drink: string): this {
    this.meal.setDrink(drink);

    return this;
  }

  build(): Meal {
    return this.meal;
  }
}

export class PizzaMealBuilder implements MealBuilder {
  private meal: Meal;

  constructor() {
    this.meal = new Meal();
  }

  setMainCourse(mainCourse: string): this {
    this.meal.setMainCourse(mainCourse);

    return this;
  }

  setSide(side: string): this {
    this.meal.setSide(side);

    return this;
  }

  setDrink(drink: string): this {
    this.meal.setDrink(drink);

    return this;
  }

  build(): Meal {
    return this.meal;
  }
}
