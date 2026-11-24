const students = ["Алексей", "Мария", "Иван", "Анна", "Дмитрий"];

console.log(students);
console.log("Первый студент:", students[0]);
console.log("Последний студент:", students[students.length - 1]);

students.push("Елена");
students.shift();

console.log("Количество студентов:", students.length);
console.log(students);
const products = ["Молоко", "Яйца", "Сыр", "Яблоки", "Рис"];

products.unshift("Хлеб");
products.pop();
products[2] = "Гречка";

console.log("Есть Хлеб:", products.includes("Хлеб"));
console.log("Обновлённый список:", products);
const grades = [5, 4, 3, 5, 4, 2, 5];

console.log("Количество оценок:", grades.length);
console.log("Первая оценка:", grades[0]);
console.log("Последняя оценка:", grades[grades.length - 1]);

grades.push(5);
grades.pop();

for (const grade of grades) {
    console.log(grade);
}
const numbers = [10, 25, 30, 45, 50, 65, 80];

const doubled = numbers.map((number) => number * 2);
console.log("Увеличенные в два раза:", doubled);

const greaterThan40 = numbers.filter((number) => number > 40);
console.log("Числа больше 40:", greaterThan40);

const firstGreaterThan50 = numbers.find((number) => number > 50);
console.log("Первое число больше 50:", firstGreaterThan50);

const sum = numbers.reduce((total, number) => total + number, 0);
console.log("Сумма чисел:", sum);
const productList = [
  "Ноутбук",
  "Мышка",
  "Клавиатура",
  "Монитор",
  "Наушники",
  "Принтер"
];

const firstThree = productList.slice(0, 3);
console.log("Первые три товара:", firstThree);

const monitorIndex = productList.indexOf("Монитор");
productList.splice(monitorIndex, 1);

productList.splice(2, 0, "Веб-камера");

console.log("Обновлённый массив:", productList);
const scores = [95, 45, 78, 60, 32, 88, 100, 55];

const highScores = scores.filter((score) => score >= 60);
console.log("Результаты от 60 и выше:", highScores);

const bonusScores = scores.map((score) => Math.min(score + 5, 100));
console.log("Результаты с бонусом:", bonusScores);

const lowScore = scores.find((score) => score < 50);
console.log("Первый результат ниже 50:", lowScore);

const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log("Средний балл:", average);
const student = {
  name: "Алексей",
  age: 20,
  group: "ПРОГ-101",
  profession: "Программист"
};

console.log("Имя:", student.name);
console.log("Группа:", student.group);

student.age = 21;
student.email = "alexey@example.com";
delete student.profession;

console.log("Обновлённый объект:", student);
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2024,
  price: 3_500_000,

  getInfo() {
    console.log(
      `Марка: ${this.brand}, модель: ${this.model}, год: ${this.year}, ` +
      `стоимость: ${this.price}, цвет: ${this.color}`
    );
  }
};

console.log("Марка:", car.brand);
console.log("Модель:", car.model);

car.price = 3_700_000;
car.color = "Чёрный";

car.getInfo();s