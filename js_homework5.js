let services = {
  "Стрижка": "200 грн",
  "Гоління": "300 грн",
  "Миття голови": "100 грн",

 minPrice() {
    let min = parseFloat(services.Стрижка);
    for (let key in services) {
    let number = parseFloat(services[key]);
    if (number < min) 
    {min = number;}
    }
    return min + " грн";
  },

   maxPrice() {
    let max = 0;
    for (let key in services) {
    let number = parseFloat(services[key]);
    if (number > max) 
    {max = number;}
    }
    return max + " грн";
  },

   price() {
    let sum = 0;
    for (let key in services) {
    let number = parseFloat(services[key]);
    if (isNaN(number) === false) {sum = sum + number;}
    }
    return sum + " грн";
  },

    set addService(data) {
    let parts = data.split(":");
    let name = parts[0];
    let price = parts[1];
    services[name] = price; 
  }
};

services.addService = "Нарощення вій: 50 грн";

console.log("Мінімальна ціна:", services.minPrice());
console.log("Максимальна ціна:", services.maxPrice());
console.log("Загальна сума:", services.price());