import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  deletedHero?: string;
  heroes: string[] = [
    'Hulk',
    'Thor',
    'Black Widow',
    'Hawk Eye',
    'Wasp',
    'Spiderman',
    'Groot',
  ];

  removeLastHero() {
    this.deletedHero = this.heroes.pop();
  }
}
