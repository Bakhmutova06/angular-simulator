
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Color } from '../enums/color';
import { Collection } from './Collection';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit, OnDestroy {

  // Публичные свойства компонента
  public companyName = 'РУМТИБЕТ';

  public currentDate: string = this.getCurrentDate();

  public location: string = '';
  public tourDate: string = '';
  public participants: string = '';

  public numbers = [10, 20, 30, 40, 50];
  public cities = ['Астрахань', 'Москва', 'Казань'];

  public numberCollection = new Collection<number>(this.numbers);
  public cityCollection = new Collection<string>(this.cities);

  public allNumbers = this.numberCollection.getAll();
  public allCities = this.cityCollection.getAll();

  public firstNumber = this.numberCollection.get(0);
  public firstCity = this.cityCollection.get(0);

  public menuItems = [
    { title: 'Главная', link: '#home' },
    { title: 'Про гида', link: '#about' },
    { title: 'Программа тура', link: '#programs' },
    { title: 'Стоимость', link: '#price' },
    { title: 'Блог', link: '#blog' },
    { title: 'Контакты', link: '#contacts' },
  ];

  public programFeatures = [
    {
      title: 'Опытный гид',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: '/images/Group_16.png'
    },
    {
      title: 'Безопасный поход',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: '/images/Group_17.png'
    },
    {
      title: 'Лояльные цены',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: '/images/Group_18.png'
    }
  ];

  public clickCount: number = 0;

  public showDate: boolean = false;
  public showClicker: boolean = false;
  public liveInputValue: string = '';

  public isLoading: boolean = true;



  // Приватные свойства
  private timerId: ReturnType<typeof setInterval> | undefined;
  private loadingTimerId: ReturnType<typeof setTimeout> | undefined;


  // Конструктор
  constructor() {
    this.saveLastVisit();
    this.saveVisitCount();
    this.testReplace();
  }

  // Методы жизненного цикла Angular
  public ngOnInit(): void {
    this.timerId = setInterval(() => {
      this.currentDate = this.getCurrentDate();
    }, 1000);
    this.loadingTimerId = setTimeout(() => {
    this.isLoading = false;
    }, 2000);
  }

  public ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
     if (this.loadingTimerId) {
    clearTimeout(this.loadingTimerId);
    }
  }

  // Публичные методы
  public isPrimaryColor(color: string): boolean {
    return color === Color.Red ||
      color === Color.Green ||
      color === Color.Blue;
  }

  public increaseClickCount(): void {
  this.clickCount++;
  }

  public decreaseClickCount(): void {
  if (this.clickCount > 0) {
    this.clickCount--;
    }
  }

  // Приватные методы
  private getCurrentDate(): string {
    return new Date().toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  private saveLastVisit(): void {
    const lastVisit = new Date().toLocaleString();
    localStorage.setItem('lastVisit', lastVisit);
  }

  private saveVisitCount(): void {
    const visits = Number(localStorage.getItem('visitCount')) || 0;
    localStorage.setItem('visitCount', String(visits + 1));
  }

  private testReplace(): void {
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



