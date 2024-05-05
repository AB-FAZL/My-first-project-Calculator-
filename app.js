const frame = document.getElementById("frame");
frame.textContent;
function appendToFrame(input) {
  frame.value += input;
}

function c() {
  frame.value = "";
}
function cd() {
  frame.value = eval(frame.value);
}
function delete_() {
  frame.value = frame.value.slice(0, -1);
}
function reverce() {
  frame.value = 1 / Number(frame.value);
}
function power_2() {
  frame.value = Math.pow(Number(frame.value), 2);
}
function root() {
  frame.value = Math.sqrt(Number(frame.value));
}
function pm() {
  frame.value = -1 * Number(frame.value);
}
