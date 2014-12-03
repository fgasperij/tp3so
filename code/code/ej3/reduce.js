function (key, values){
  var reducedValue = {comments: 0, qty: 0};
  for (var i = 0; i < values.length; i++) {
    reducedValue.comments += values[i].comments;
    reducedValue.qty += values[i].qty;
  }

  return reducedValue;
}
  
