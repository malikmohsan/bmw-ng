const Rental = require("./models/rental");
class FakeDb {
  constructor() {
    this.rentals = [
      {
        title: "Nice View on Ocean",
        city: "karachi",
        street: "Quaiz",
        category: "Apartment",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Empress_Market_Saddar_Karachi.jpg/255px-Empress_Market_Saddar_Karachi.jpg",
        bedroom: 4,
        shared: false,
        description: "nici cicici",

        dailyRate: 454
      },
      {
        title: "Nice View on Ocean",
        city: "Lahore",
        street: "Quaiz",
        category: "Apartment",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Empress_Market_Saddar_Karachi.jpg/255px-Empress_Market_Saddar_Karachi.jpg",
        bedroom: 4,
        shared: false,
        description: "nici cicici",

        dailyRate: 454
      },
      {
        title: "Nice View on Ocean",
        city: "Islamabad",
        street: "Quaiz",
        category: "Apartment",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Empress_Market_Saddar_Karachi.jpg/255px-Empress_Market_Saddar_Karachi.jpg",
        bedroom: 4,
        shared: false,
        description: "nici cicici",

        dailyRate: 454
      }
    ];
  }
  pushRentalToDb() {
    this.rentals.forEach(rental => {
      const r = new Rental(rental);
      r.save();
    });
  }
  seedDb() {
    this.pushRentalToDb();
  }
}
module.exports = FakeDb;
