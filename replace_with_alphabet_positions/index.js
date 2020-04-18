function alphabetPosition(text) {
  return text
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .split('')
    .map(char => char.charCodeAt() - 64)
    .join(' ')
}