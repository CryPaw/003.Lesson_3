// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);

let a = prompt('input string');
let b = prompt('input string');
let c = prompt('input string');

alert(a + b + c);

// Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.

let number = prompt();
let s = '';
let i;
let n = number.length;

//for (char of number){
// s = s + char + ' ';
// }

for (i=0; i<n; i++)
{
s = s + number[i] + ' ';
}
alert (s);
