const app = "I don't do much."

var kittens = ['Milo', 'Ottis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appaendKitten(name) {
  return [...kittens, name];
}
function prependKitten(name) {
  return [name, ...kittens];
}