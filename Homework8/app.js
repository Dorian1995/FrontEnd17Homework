var form = document.getElementById('myForm');
var fullNameInput = document.getElementById('full-name');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('comments');
var addButton = document.getElementById('button');
var addComment = document.getElementById('add-comment');

// form validation

addButton.addEventListener('click', (e) => {
	e.preventDefault();

	validateFullNameInput();

	validateEmailInput();

	validateMessageInput();

	displayComments();
});

function validateFullNameInput() {
	if (
		fullNameInput.value === '' ||
		fullNameInput.value <= 2 ||
		Number(fullNameInput.value)
	) {
		fullNameInput.style.border = '1px solid red';
	} else {
		fullNameInput.style.border = '1px solid green';
	}
}

function validateEmailInput() {
	if (emailInput.value === '') {
		emailInput.style.border = '1px solid red';

	} else {
		emailInput.style.border = '1px solid green';
	}
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
		emailInput.style.border = '1px solid green';
	} else {
		emailInput.style.border = '1px solid red';
	}
}

function validateMessageInput() {
	if (messageInput.value === '' || messageInput.value.length <= 10) {
		messageInput.style.border = '1px solid red';
	} else {
		messageInput.style.border = '1px solid green';
	}
}

// disply comments

function displayComments() {
	// add elements
	var addComment = document.createElement('ul');
	addComment.id = '#add-comment';
	var clearButton = document.createElement('button');
	clearButton.id = '#clear-button';
	clearButton.innerHTML = '<i class="fa fa-remove"></i>';
	var container = document.getElementById('container');
	container.appendChild(addComment);
	container.appendChild(clearButton);

	//style elements
	addComment.style.boxShadow = '5px 10px 8px';
	addComment.style.border = '1px solid rgb(228, 214, 208)';
	addComment.style.width = '500px';
	addComment.style.height = '100px';
	addComment.style.padding = '10px';
	addComment.style.borderRadius = '10px';
	addComment.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
	addComment.style.backgroundImage =
		'url( https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)';
	addComment.style.border = '1px solid rgb(185, 182, 182)';

	clearButton.style.backgroundColor = 'rgb(228, 214, 208)';
	clearButton.style.position = 'relative';
	clearButton.style.left = '475px';
	clearButton.style.bottom = '95px';
	clearButton.style.padding = '3px';
	clearButton.style.borderRadius = '5px';

	addComment.innerText =
		fullNameInput.value + '\n' + emailInput.value + '\n' + messageInput.value;

	//remove comments
	clearButton.addEventListener('click', (e) => {
		clearComments();
	});

	function clearComments() {
		clearButton.remove();
		addComment.remove();
	}

	console.log(displayComments);
}
