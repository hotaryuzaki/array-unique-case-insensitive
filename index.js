<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
arrayUniqueCaseInsensitive = (items) => {
  const lowercased = items.map(name => name.toLowerCase());
  return outputArray = items.filter((v, i, items) => lowercased.indexOf(v.toLowerCase()) === i);
}

const arr = ['test', 'tEST', 'joss', 'test', 'haha', 'HAHA', 'Yes', 'YES', 'Tofu', 'tofu'];
const hasil = arrayUniqueCaseInsensitive(arr);

document.getElementById("demo").innerHTML = hasil;
</script>

</body>
</html>
