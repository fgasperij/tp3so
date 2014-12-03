function(key, value) {
  if (value.votes < 2000) {
    return -1;
  }

  return value.score;
}
