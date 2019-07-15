const CarService = require("./CarService");
console.log("String feting data");
carService = new CarService();
const obserable = carService.getSec();

obserable.subscribe({
  next: data => {
    console.log(data);
  },
  error: error => {
    console.log(error);
  },
  complete: () => {
    console.log("completed");
  }
});
console.log("after feting data");
