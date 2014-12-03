function(key, reducedValue) {
  var avg = reducedValue.score/reducedValue.count;

  return avg;
}
