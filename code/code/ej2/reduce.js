function (key, values){
  var reducedValue = {score: 0, votes: 0};
  for (var i = 0; i < values.length; i++) {
    reducedValue.score += values[i].score;
    reducedValue.votes += values[i].votes;
  }

  return reducedValue;
}
  
