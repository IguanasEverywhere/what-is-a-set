class MySet {
  // throw an error if called with anything other than string, array or nothing
  // if an iterable is provided only its unique values should be in data
  // strings and arrays will need to be broken down by their elements/characters

  constructor(iterable) {
    this.data = {};
    if (!iterable) {
      this.data = {};
    } else if (typeof(iterable) !== "string" && !Array.isArray(iterable)) {
      throw new Error("not iterable")
    } else {
      for (const elem of iterable) {
        if (!this.data[elem]) {
          this.data[elem] = true;
        }
      }
    }


  }

  // return number of elements in MySet
  size() {
    return Object.keys(this.data).length;

  }

  // add an item to MySet as is
  // don't worry about arrays here!
  // return the MySet instance
  add(item) {
    if (!this.data[item]) {
      this.data[item] = true;
    }
    return this;

  }

  // delete an item from MySet
  // don't worry about arrays here!
  // return true if successful, otherwise false
  delete(item) {
    if (this.data[item]) {
      delete this.data[item];
      return true;
    }
    return false;

  }

  // return true if in MySet, otherwise false
  // don't worry about arrays here!
  has(item) {
    if (this.data[item]) {
      return true;
    }
    return false;

  }

  // return data as an array
  // don't worry about arrays here!
  entries() {
    return Object.keys(this.data);

  }
}

if (require.main === module) {
  // add your own tests in here

}

module.exports = MySet;

