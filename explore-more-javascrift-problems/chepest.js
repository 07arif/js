const phones = [
  {
    name: "samsung",
    camera: 12,
    storage: "32gb",
    price: 30500,
    color: "silver",
  },
  {
    name: "Walton",
    camera: 12,
    storage: "32gb",
    price: 1500,
    color: "silver",
  },

  {
    name: "i-phone",
    camera: 12,
    storage: "32gb",
    price: 50500,
    color: "silver",
  },
  {
    name: "oppo",
    camera: 12,
    storage: "32gb",
    price: 10500,
    color: "silver",
  },
  {
    name: "htc",
    camera: 12,
    storage: "32gb",
    price: 3500,
    color: "silver",
  },
  {
    name: "nokia",
    camera: 12,
    storage: "32gb",
    price: 1000,
    color: "silver",
  },
  {
    name: "pixcle",
    camera: 12,
    storage: "32gb",
    price: 500,
    color: "silver",
  },
  {
    name: "xaomi",
    camera: 12,
    storage: "32gb",
    price: 9000,
    color: "silver",
  },
];

function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    // console.log(i);
    // console.log(phone);
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
