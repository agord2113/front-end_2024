<script>
function operate(func, x, y) {
  return func(x, y);
}

function add(x, y) {
}

function multiply(x, y) {
}

var i = operate(add, operate(add, 2, 3), operate(multiply, 4, 5));

document.write(i); // Output: 25
</script>

