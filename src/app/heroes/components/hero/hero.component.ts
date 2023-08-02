import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  name = 'Ironman';
  age = 45;

  get capitalizedName() {
    return this.name.toUpperCase();
  }

  getHeroDescription() {
    return `${this.name} - ${this.age}`;
  }

  changeHero() {
    this.name = 'Spiderman';
  }

  changeAge() {
    this.age = 18;
  }

  resetForm() {
    this.name = 'Ironman';
    this.age = 45;
  }
}
