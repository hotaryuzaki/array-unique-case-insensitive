# array-unique-case-insensitive
JS remove array duplicate with case insensitive

you can call arrayUniqueCaseInsensitive(array) and it will return unique array

```
arrayUniqueCaseInsensitive = (items) => {
  const lowercased = items.map(name => name.toLowerCase());
  return outputArray = items.filter((v, i) => lowercased.indexOf(v.toLowerCase()) === i);
}

const arr = ['test', 'tEST', 'joss', 'test', 'haha', 'HAHA', 'Yes', 'YES', 'Tofu', 'tofu'];
const hasil = arrayUniqueCaseInsensitive(arr);
console.log(hasil);

// RETURN
// ['test', 'joss', 'haha', 'Yes', 'Tofu']
```
