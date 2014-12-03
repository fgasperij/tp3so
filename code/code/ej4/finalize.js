function(key, value) {
  if (value.submissions > 5) {
    return -1;
  }

  return value.upvotes;
}
