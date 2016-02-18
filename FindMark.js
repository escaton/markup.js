function FindMark(options) {
  this.regexp = {
    default: /(.*)/gm,
  };
  this.regexp.value = this.regexp.default;
  
  return this;
}

FindMark.prototype.setRegexp = function(markRegexp) {
  this.regexp.value = markRegexp || this.regexp.default;
};

FindMark.prototype.getRegexp = function() {
  return this.regexp.value;
};

module.exports = FindMark;