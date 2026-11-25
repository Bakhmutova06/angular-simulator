import { Component } from '@angular/core';
import { Color } from '../enums/color';
import { Collection } from './Collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
   companyName = 'РУМТИБЕТ'

numbers = [10, 20, 30, 40, 50];

cities = ['Астрахань', 'Москва', 'Казань'];
numberCollection = new Collection<number>(this.numbers);
cityCollection = new Collection<string>(this.cities);

allNumbers = this.numberCollection.getAll();
allCities = this.cityCollection.getAll();

firstNumber = this.numberCollection.get(0);
firstCity = this.cityCollection.get(0);



  menuItems = [
    { title: 'Главная', link: '#home' },
    { title: 'Про гида', link: '#about' },
    { title: 'Программа тура', link: '#programs' },
    { title: 'Стоимость', link: '#price' },
    { title: 'Блог', link: '#blog' },
    { title: 'Контакты', link: '#contacts' },
  ];
 isPrimaryColor(color: string): boolean {
  return color === Color.Red ||
    color === Color.Green ||
    color === Color.Blue;
  }
  saveLastVisit(): void {
  const lastVisit = new Date().toLocaleString();//получает текущую дату и время.toLocaleString() — переводит дату в привычный формат.
  localStorage.setItem('lastVisit', lastVisit);//localStorage.setItem() — сохраняет значение в браузере.'lastVisit' — ключ, по которому мы потом сможем получить сохранённую дату.
  }

  saveVisitCount(): void {
  const visits = Number(localStorage.getItem('visitCount')) || 0;
  localStorage.setItem('visitCount', String(visits + 1));
  }
constructor() {
  this.saveLastVisit();
  this.saveVisitCount();
  this.testReplace();
  }
  testReplace(): void {
  this.numberCollection.replace(0, 100);
  this.cityCollection.replace(0, 'Санкт-Петербург');
  this.numberCollection.remove(1);
  this.cityCollection.remove(1);
  this.numberCollection.clear();
  this.cityCollection.clear();
  }
}

/*| getItem('visitCount') | Получает сохранённое число посещений |
| Number(...) | Преобразует строку в число |
| || 0 | Если значения нет, начинает с нуля |
| visits + 1 | Увеличивает количество на единицу |
| setItem(...) | Сохраняет новое число |
| String(...) | Преобразует число в строку для хранения | */



