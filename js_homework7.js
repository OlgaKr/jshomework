// ДЗ 10.2. Без А

function checkString(str) {
  let re = /^[^Aa]{6,}$/;
  if (re.test(str)) {
    console.log('В строці "' + str + '" є послідовність');
  } else {
    console.log('В строці "' + str + '" немає послідовності');
  }
}

checkString('Wonderful');
checkString('Happiness');

// ДЗ 10.1. Параноя

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
        {
        userName:"Oleg",
        lastName:"Baranov",
        email:"andrii g@yahoo.com" // Цей не підходить, бо в нього пробіл в першій частині
    }
];

function checkEmails(arr) {
var re = /^[A-Za-z0-9]+(\.[A-Za-z0-9]+)?@(gmail\.com|yahoo\.com)$/;

var trustedEmails = [];

for (var i = 0; i < arr.length; i++) {
  var email = arr[i].email;

  if (re.test(email)) {
    trustedEmails.push(email);
  }
}
console.log('Ці адреси підходять: ' + trustedEmails.join(", "));
}

checkEmails(arr);