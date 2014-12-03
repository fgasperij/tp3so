function(key, value) {
  if (value.score >= 280 && value.score <= 300) {
    return value.title_word_count;
  }

  return -1;
}
