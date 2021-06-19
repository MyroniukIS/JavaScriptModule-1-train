//TO BOOLEAN

//----------------String to Boolean
let value = "Быть или не быть!?";

//1 way Boolean()
let toBoolean = Boolean(value);
console.log(`Значення змінної value`, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, typeof toBoolean);

//2 way twice no !!
toBoolean = !!value;
console.log(`Значення змінної value`, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, typeof toBoolean);

//----------------String with number to Boolean
value = "789";

//1 way Boolean()
toBoolean = Boolean(value);
console.log(`Значення змінної value`, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, typeof toBoolean);

//2 way twice no !!
toBoolean = !!value;
console.log(`Значення змінної value`, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, typeof toBoolean);

//----------------Empty string to Boolean
value = "";

//1 way Boolean()
toBoolean = Boolean(value);
console.log(`Значення змінної value -- пустий рядок`, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, typeof toBoolean);

//2 way twice no !!
toBoolean = !!value;
console.log(`Значення змінної value -- пустий рядок`, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, typeof toBoolean);

//----------------String with space to Boolean
value = " ";

//1 way Boolean()
toBoolean = Boolean(value);
console.log(`Значення змінної value -- рядок з пробілом`, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, typeof toBoolean);

//2 way twice no !!
toBoolean = !!value;
console.log(`Значення змінної value -- рядок з пробілом`, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, typeof toBoolean);

//----------------Number 0 to Boolean
value = 0;

//1 way Boolean()
toBoolean = Boolean(value);
console.log(`Значення змінної value `, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, typeof toBoolean);

//2 way twice no !!
toBoolean = !!value;
console.log(`Значення змінної value `, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, typeof toBoolean);

//----------------Number 1 to Boolean
value = 1;

//1 way Boolean()
toBoolean = Boolean(value);
console.log(`Значення змінної value `, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, typeof toBoolean);

//2 way twice no !!
toBoolean = !!value;
console.log(`Значення змінної value `, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, typeof toBoolean);

//----------------NaN to Boolean
value = NaN;

//1 way Boolean()
toBoolean = Boolean(value);
console.log(`Значення змінної value `, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, typeof toBoolean);

//2 way twice no !!
toBoolean = !!value;
console.log(`Значення змінної value `, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, typeof toBoolean);

//----------------Infinity to Boolean
value = Infinity;

//1 way Boolean()
toBoolean = Boolean(value);
console.log(`Значення змінної value `, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, typeof toBoolean);

//2 way twice no !!
toBoolean = !!value;
console.log(`Значення змінної value `, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, typeof toBoolean);

//----------------undefined to Boolean
value = undefined;

//1 way Boolean()
toBoolean = Boolean(value);
console.log(`Значення змінної value `, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, typeof toBoolean);

//2 way twice no !!
toBoolean = !!value;
console.log(`Значення змінної value `, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, typeof toBoolean);

//----------------null to Boolean
value = null;

//1 way Boolean()
toBoolean = Boolean(value);
console.log(`Значення змінної value `, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean з допомогою конструктора Boolean() -- `, typeof toBoolean);

//2 way twice no !!
toBoolean = !!value;
console.log(`Значення змінної value `, value);
console.log(`Значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, toBoolean);
console.log(`Тип даних значення ${value}, змінної value,
приведене в тип Boolean через !! -- `, typeof toBoolean);