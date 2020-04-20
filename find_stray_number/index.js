function stray(numbers) {
  if (numbers.length < 3) return numbers[0];
  const elements = numbers.splice(0, 3);
  elements.sort((a, b) => a - b);
  const [first, second, third] = elements;
  if (first < second) return first;
  if (third > second) return third;
  return stray(numbers);
}
