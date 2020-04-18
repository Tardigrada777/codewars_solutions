function persistence(num, i = 0) {
    if (num < 10) {
      return i;
    } else {
      const parts = (num).toString().split('').map(n => +n);
      num = parts.reduce((mult, n) => mult *= n);
      return persistence(num, i + 1);
    }
  }