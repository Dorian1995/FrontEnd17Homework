var submitButton = document.getElementById('submit-button');
var firstInput = document.getElementById('first-name');
var secondInput = document.getElementById('last-name');
var genderM = document.getElementById('male');
var genderF = document.getElementById('female');
var gender = document.querySelector('input[name="gender"]:checked');
var messageInput = document.getElementById('message');
var successMessage = document.getElementById('success-message');
var errorMessage = document.getElementById('error-message');
var banner = document.getElementById('banner');
var text;

submitButton.addEventListener('click', (e) => {
	e.preventDefault();

	validateForm();
});

function validateForm() {
	if (
		firstInput.value.trim() == '' ||
		firstInput.value == null ||
		firstInput.value.length <= 2 ||
		Number(firstInput.value)
	) {
		firstInput.classList.add('invalid1');
		successMessage.style.visibility = 'hidden';
	} else {
		firstInput.classList.add('valid');
		firstInput.classList.remove('invalid1');
		successMessage.style.visibility = 'visible';
	}

	if (
		secondInput.value.trim() == '' ||
		secondInput.value == null ||
		secondInput.value.length <= 2 ||
		Number(firstInput.value)
	) {
		secondInput.classList.add('invalid1');
		successMessage.style.visibility = 'hidden';
	} else {
		secondInput.classList.add('valid');
		secondInput.classList.remove('invalid1');
		successMessage.style.visibility = 'visible';
	}

	if (genderF.checked == false && genderM.checked == false) {
		text = 'Please select a gender!';
		errorMessage.classList.add('invalid2');
		errorMessage.innerHTML = text;
		successMessage.style.visibility = 'hidden';
	} else {
		errorMessage.innerText = 'Gender';
		errorMessage.classList.remove('invalid2');
		successMessage.style.visibility = 'visible';
	}
	if (
		messageInput.value.trim() == '' ||
		messageInput.value == null ||
		messageInput.value.length <= 10
	) {
		messageInput.classList.add('invalid1');
		successMessage.style.visibility = 'hidden';
	} else {
		messageInput.classList.add('valid');
		messageInput.classList.remove('invalid1');
		successMessage.style.visibility = 'visible';
		banner.innerHTML =
			'<p id="banner"><i class="far fa-check-circle"></i>Thank you for contacting us' +
			',' +
			' ' +
			firstInput.value +
			'!' +
			'<button id="close-banner"  onclick="closeBanner()" >X</button>' + '</p>';
	}
	console.log(firstInput.value);
	console.log(secondInput.value);
	console.log(messageInput.value);

	if (genderF.checked) console.log(genderF.value);
	else if (genderM.checked) console.log(genderM.value);
	showSelectedRadioButton(document.getElementById('gender-container'));
}

function showSelectedRadioButton(container) {
	var radioButtons = container.querySelectorAll('input[type="radio"]');
	console.log(radioButtons);
	for (var i = 0; i <= radioButtons.length - 1; i++) {
		if (radioButtons[i].checked) console.log(radioButtons[i].value);
	}
}

var closeBtn = document.getElementById('close-banner');

closeBtn.addEventListener('click', (e) => {
	e.preventDefault();

	closeBanner();
});

function closeBanner() {
	successMessage.remove();
}
