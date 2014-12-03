function() {
  emit(this.username, {upvotes: this.number_of_upvotes, submissions: 1});
}
