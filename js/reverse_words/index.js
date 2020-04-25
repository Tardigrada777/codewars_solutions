// first solution
function reverseWords(str) {
  return str
    .split(' ')
    .map(word => word.split('').reduce((rev, char) => char + rev, ''))
    .join(' ');
}

// second solution
function reverseWords(str) {
  return str
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join('');
}