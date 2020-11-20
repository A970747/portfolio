function animation() {
	let title = new TimelineMax();
	title.staggerFromTo(".title span", 0.5,
		{ ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80 },
		{ ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0 }, 0.05);
}

function unhide() {
	document.querySelectorAll('.title').forEach(e => e.classList.toggle('hide'));
}

document.querySelector('.nav-toggler').addEventListener('click', function () {
	document.querySelector('.nav-wrapper').classList.toggle('active')
})

function handleForm() {
	window.addEventListener("DOMContentLoaded", function () {

		// get the form elements defined in your form HTML above
		let form = document.getElementById("contactForm");
		let button = document.getElementById("formSend");
		let status = document.getElementById("formStatus");

		// Success and Error functions for after the form is submitted
		function success() {
			form.reset();
			button.style = "display: none ";
			status.innerHTML = "Thanks!";
		}

		function error() {
			status.innerHTML = "Oops! There was a problem.";
		}

		// handle the form submission event
		form.addEventListener("submit", function (ev) {
			ev.preventDefault();
			let data = new FormData(form);
			ajax(form.method, form.action, data, success, error);
		});
	});

	// helper function for sending an AJAX request
	function ajax(method, url, data, success, error) {
		let xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				success(xhr.response, xhr.responseType);
			} else {
				error(xhr.status, xhr.response, xhr.responseType);
			}
		};
		xhr.send(data);
	}
}

document.addEventListener("DOMContentLoaded", (event) => {
	$(".title").lettering();
	unhide();
	animation();
	handleForm();
});
