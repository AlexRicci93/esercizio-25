class Text {
  constructor(text) {
    this.string = text;
  }

  toString() {
    return this.string;
  }
}

function uppercaseText(text) {
  let originalToString = text.toString();

  text.toString = function () {
    return originalToString.toUpperCase();
  };
  return text;
}

console.log(uppercaseText(new Text("Hello World!")).toString());
