const calculateDiscountedPrice = (price, discount, callback) => {
  return callback(price, discount);
};

const showDiscountedPrice = (price, discount) => {
  const discountPrice = (price / 100) * discount;
  return price - discountPrice;
};
console.log(calculateDiscountedPrice(100, 10, showDiscountedPrice));
