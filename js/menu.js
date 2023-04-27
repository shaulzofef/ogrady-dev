		let navWrapper = document.querySelector('.nav-wrapper'),
    navMid = document.querySelector('.nav-mid'),
	navToogler =  document.querySelector('.nav-toogler')

navToogler.addEventListener('click', function (event) {
	navWrapper.classList.toggle('active'),
  navMid.classList.toggle('active')
})
