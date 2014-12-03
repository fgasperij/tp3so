function (key, values){
  var reducedValue = {score: 0, title_word_count: 0};
  for (var i = 0; i < values.length; i++) {
    reducedValue.score += values[i].score; 
    reducedValue.title_word_count += values[i].title_word_count; 
  }

  return reducedValue;
}
  
