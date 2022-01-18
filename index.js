arrayUniqueCaseInsensitive = (items) => {
  const lowercased = items.map(name => name.toLowerCase());
  return outputArray = items.filter((v, i) => lowercased.indexOf(v.toLowerCase()) === i);
}

const arr = ['test', 'tEST', 'joss', 'test', 'haha', 'HAHA', 'Yes', 'YES', 'Tofu', 'tofu'];
const hasil = arrayUniqueCaseInsensitive(arr);
console.log(hasil);
