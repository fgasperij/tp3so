function (key, values){
  var reducedVal = {count: 0, score: 0};
  for (var i = 0; i < values.length; i++) {
    reducedVal.score += values[i].score;
    reducedVal.count += values[i].count;
  }

  return reducedVal;
}
  
