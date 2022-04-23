Array.prototype.pop = function () {
  const lastItem = this[this.length - 1];
  this.length -= 1;
  return lastItem;
};

Array.prototype.unshift = function (item) {
  for (let i = this.length; i > 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = item;
  return this.length;
};

Array.prototype.find = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) return this[i];
  }
};

Array.prototype.findIndex = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) return i;
  }
  return -1;
};

Array.prototype.some = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) return true;
  }
  return false;
};

Array.prototype.every = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

Array.prototype.join = function (str) {
  let res = "";
  if (str === undefined) {
    str = ",";
  }
  for (let i = 0; i < this.length; i++) {
    if (i !== this.length - 1) {
      res += this[i] + str;
    } else {
      res += this[i];
    }
  }
  return res;
};

Array.prototype.reduce = function (cb, initialValue) {
  let res = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (res === undefined) {
      res = this[i];
    } else {
      res = cb(res, this[i], i, this);
    }
  }
  return res;
};

Array.prototype.reduceRight = function (cb, initialValue) {
  let res = initialValue;
  for (let i = this.length - 1; i >= 0; i--) {
    if (res === undefined) {
      res = this[this.length - 1];
    } else {
      res = cb(res, this[i], i, this);
    }
  }
  return res;
};


Array.prototype.lastIndexOf = function (el) {
  let index = -1;
  for (let i = 0; i < this.length; i++) {
    if (this[i] === el) {
      index = i;
    }
  }
  return index;
};

