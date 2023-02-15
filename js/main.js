let button1 = document.querySelector('#dodaj');
let button2 = document.querySelector('#usun');
let paragraf = document.querySelector('#tekst');

button1.onclick = function () {
	paragraf.textContent = 'tekst';
};
button2.onclick = function () {
	paragraf.textContent = '';
};
