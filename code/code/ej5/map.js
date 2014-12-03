function() {
  emit(this.subreddit, {score: this.score, title_word_count: this.title.split(" ").length});
}
