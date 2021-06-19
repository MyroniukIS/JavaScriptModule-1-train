console.log(`Hello, guys!!! This is PRIMITIVES-file!`);
//1-STRING-рядок
let stringData = 'Рядок';
console.log(`Значення змінної stringData -- `, stringData);
console.log(`Тип даних зміннної stringData -- `, typeof stringData);

stringData = '';
console.log(`Перезаписане значення змінної stringData -- `, stringData);
console.log(`Тип даних перезаписаної зміннної stringData -- `, typeof stringData);

stringData = ' ';
console.log(`Перезаписане значення змінної stringData -- `, stringData);
console.log(`Тип даних перезаписаної зміннної stringData -- `, typeof stringData);

//2-NUMBER-число
let number = 350;
console.log(`Значення змінної number -- `, number);
console.log(`Тип даних зміннної number -- `, typeof number);

number = 2e53;
console.log(`Перезаписане значення змінної number -- `, number);
console.log(`Тип даних перезаписаної зміннної number -- `, typeof number);

number = Infinity;
console.log(`Перезаписане значення змінної number -- `, number);
console.log(`Тип даних перезаписаної зміннної number -- `, typeof number);

number = NaN;
console.log(`Перезаписане значення змінної number -- `, number);
console.log(`Тип даних перезаписаної зміннної number -- `, typeof number);

//3-BOOLEAN-буль
let isOnline = true;
console.log(`Значення змінної isOnline -- `, isOnline);
console.log(`Тип даних зміннної isOnline -- `, typeof isOnline);

isOnline = false;
console.log(`Перезаписане значення змінної isOnline -- `, isOnline);
console.log(`Тип даних перезаписаної зміннної isOnline -- `, typeof isOnline);

//4-UNDEFINED-сутність є, значення немає
let message;
console.log(`Значення змінної message -- `, message);
console.log(`Тип даних зміннної message -- `, typeof message);

//4-NULL-пустий об"єкт, відсутність об"єкта
let user = null;
console.log(`Значення змінної user -- `, user);
console.log(`Тип даних зміннної user -- `, typeof user);