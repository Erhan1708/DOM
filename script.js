const $containerBtn = document.querySelectorAll('#container button');
const $containerImg = document.querySelectorAll('img')
console.log($containerBtn);
console.log($containerImg);

for (let i = 0; i < $containerBtn.length; i++) {
	$containerBtn[i].onclick = () => {
		alert($containerImg[i].alt)
	};
}
