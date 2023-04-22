var button = document.querySelector('#btn-copy');
var input = document.querySelector('.text-input-salida');
button.addEventListener('click', function () {
  input.focus();
  document.execCommand('selectAll');
	document.execCommand('copy');
});
