function (key, values){
  var reducedValue = {upvotes: 0, submissions: 0};
  for (var i = 0; i < values.length; i++) {
    reducedValue.upvotes += values[i].upvotes; 
    reducedValue.submissions += values[i].submissions; 
  }

  return reducedValue;
}
  
