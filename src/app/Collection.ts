export class Collection<T> {//export Экспорт (разрешает подключать класс в другие файлы).class Класс (шаблон для создания объектов).Collection имя класса.<T> Generic (обобщённый тип, позволяющий работать с разными типами данных)
  private items: T[] = [];//private Модификатор доступа(ограничивает доступ к свойству извне класса)items имя переменной.T[] Массив элементов универсального типа T.[] Создание пустого массива
  
  constructor(items: T[] = []) {//constructor — выполняется при создании объекта.items: T[] — принимает массив элементов универсального типа.= [] — если массив не передали, создаётся пустой.
  this.items = [...items];//this.items = items — записывает полученные данные во внутреннее свойство класса.
  }

  getAll(): T[] {//getAll() — название метода: получить всё.T[] — метод возвращает массив универсального типа.
  return this.items;//return — возвращает результат.this.items — обращается к массиву, который хранится внутри нашего класса.
  }
  
  // Получить определённый элемент
  get(index: number): T | undefined {//get	Название метода (получить элемент)index	Параметр, указывающий позицию элемента.number	Индекс должен быть числом.T	Возвращаемый элемент универсального типа.\|	Оператор объединения типов (или).undefined	Значение может отсутствовать
    return this.items[index];
  }

  // Очистить коллекцию
  clear(): void {
    this.items = [];
  }

  // Удалить определённый элемент
  remove(index: number): T | undefined {
    if (index < 0 || index >= this.items.length) {
      return undefined;
    }

    return this.items.splice(index, 1)[0];
  }

  // Заменить определённый элемент
  replace(index: number, item: T): boolean {
    if (index < 0 || index >= this.items.length) {
      return false;
    }

    this.items[index] = item;
    return true;
  }
}