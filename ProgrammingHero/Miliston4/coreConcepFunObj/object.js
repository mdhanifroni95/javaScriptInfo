let computer = {
 price: 29000,
 storage: "1TB",
 color: "black",
 processor: "intel i5",
};
computer.price = 5000;
console.log( computer.price );
// let priceProperty = "price";
// computer[ priceProperty ] = 60000;
computer[ 'price' ] = 7000;
console.log( computer );
