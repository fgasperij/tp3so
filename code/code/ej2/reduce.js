function (key, values){
  var maximum = 0;
  for (var i = 0; i < values.length; i++) {
    if (values[i] > maximum) {
      maximum = values[i];
    }
  }

  return maximum;
}
  
