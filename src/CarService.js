const Observable = require("./Observer");

class CarService {
  getSec() {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next("Some secrie docu");
      }, 2000);
    });
  }
}
module.exports = CarService;
