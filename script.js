const buttonNext = document.getElementById('Nextbtn'),
	buttonPrev = document.getElementById('Prevbtn'),
	sliders = document.querySelectorAll('.slider-item')
buttonNext.addEventListener('click', next)
buttonPrev.addEventListener('click', prev)
let index = 0
forCheck(index)
function prev() {
	if (index === 0) {
		index = sliders.length - 1
		forCheck(index)
	} else {
		index--
		forCheck(index)
	}
}
function forCheck(i) {
	sliders.forEach(item => {
		item.classList.remove('active')
	})
	sliders[i].classList.add('active')
}
function next() {
	if (sliders.length - 1 <= index) {
		index = 0
		forCheck(index)
	} else {
		index++
		forCheck(index)
	}
}