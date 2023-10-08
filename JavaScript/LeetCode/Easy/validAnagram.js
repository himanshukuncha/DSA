const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let frequencyCounter = {};

  s = s.toLowerCase();
  t = t.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    
    frequencyCounter[s[i]] = (frequencyCounter[s[i]] || 0) + 1;
    frequencyCounter[t[i]] = (frequencyCounter[t[i]] || 0) - 1;
  }

  for (let val in frequencyCounter) {
    if (frequencyCounter[val] !== 0) return false;
  }

  return true;
};
