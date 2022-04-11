let goods = [
  {
      id: 1,
      name: "tires",
      description: "text",
      sizes: [16, 17, 18],
      price: 20000,
      available: true,
  },
  {
      id: 3,
      name: "jeans",
      description: "text",
      sizes: [35, 36, 37, 38, 40],
      price: 2000,
      available: false,
  },
  {
      id: 5,
      name: "boots",
      description: "text",
      sizes: [38, 39, 42],
      price: 700,
      available: true,
  },
  {
      id: 12,
      name: "socks",
      description: "text",
      sizes: [37, 39, 40],
      price: 5000,
      available: true,
  },
  {
      id: 87,
      name: "helmet",
      description: "text",
      sizes: [55, 56, 57, 58],
      price: 7500,
      available: true,
  },

];

let basket = [];


basket.addGood = function(goodIndex, amount) {
  this.push({
      good: goodIndex,
      amount,
  })
};

basket.removeGood = function(goodIndex, amount) {
  for(let i = 0; i < this.length; ++i) {
      if (this[i].good == goodIndex) {
          if (amount >= this[i].amount) {
              this.splice(i, 1);
              return;
          }
          this[i].amount -= amount;
      }    
  }
};

basket.clear = function() {
  this.splice(0, this.length);
};

basket.getTotalGoods = function(goods) {
  result = {
      totalAmount: 0,
      totalSumm: 0,
  };

  for(let el of this) {
      result.totalAmount += el.amount;
      result.totalSumm += goods[el.good].price * el.amount;
  };

  return result;
}


function main(basket, goods) {
  basket.addGood(0, 20);
  basket.removeGood(0, 5);
  basket.addGood(1, 16);
  basket.addGood(2, 7);
  basket.addGood(5, 1);
  basket.removeGood(3, 4);

  console.log(basket)
  console.log(basket.getTotalGoods(goods));
  basket.clear();
  console.log(basket.getTotalGoods(goods));
}


main(basket, goods);