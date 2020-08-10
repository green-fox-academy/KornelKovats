export default function getBooksPrice(amount: number[]):number {
  const fivePercent = 0.95;
  const tenPercent = 0.90;
  const twentyPercent = 0.80;
  const twentyFivePercent = 0.75;

  const totalAmount = amount.reduce((a, b) => a + b);
  const basePrice = totalAmount * 8;

  let sumOfbook = 0;
  amount.forEach((value) => {
    if (value > 0) {
      sumOfbook += 1;
    }
  });
  if (totalAmount > 5 && totalAmount % 2 === 0) {
    const numberOfFourSets = totalAmount / 4;
    const newDiscount = numberOfFourSets * (0.2);
    return basePrice - (newDiscount * basePrice);
  }
  if (sumOfbook === 2) {
    return basePrice * fivePercent;
  }
  if (sumOfbook === 3) {
    return basePrice * tenPercent;
  }
  if (sumOfbook === 4) {
    return basePrice * twentyPercent;
  }
  if (sumOfbook === 5) {
    return basePrice * twentyFivePercent;
  }
  return basePrice;
}
