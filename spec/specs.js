describe('scrabbleScore', function() {
  it('returns a score of 1 for inputted letter with a value of 1 point', function() {
    scrabbleScore("a").should.equal(1);
  });
});
