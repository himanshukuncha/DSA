const anagram = (str1, str2) => {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) return false;

  let frequencyCounter = {};

  
  for (let i = 0; i < str1.length; i++) {
    frequencyCounter[str1[i]] = (frequencyCounter[str1[i]] || 0) + 1;
    frequencyCounter[str2[i]] = (frequencyCounter[str2[i]] || 0) - 1;
  }


  for (let key in frequencyCounter) {
    if (frequencyCounter[key] !== 0) return false;
  }

  return true;
};

console.log(anagram("cinema", "iceman")); 
