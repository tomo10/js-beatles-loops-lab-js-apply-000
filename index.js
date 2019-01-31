function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i])
  }
  return arr;
}

function johnLennonFacts(facts) {
  n = 0;
  arr1 = [];
  while (n < facts.length) {
    arr1.push(facts[n] + "!!!")
    n++;
  }
}
