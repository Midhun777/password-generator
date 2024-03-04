const passwordBox = document.getElementById('passwordBox');
const length = 15;

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '@#$_&-+()/*!?%][}{';

const all = uppercase + lowercase + numbers + symbols;

function generatePassword() {

	let password = '';

	password += uppercase[Math.floor(Math.random() * uppercase.length)];
	password += lowercase[Math.floor(Math.random() * lowercase.length)];
	password += numbers[Math.floor(Math.random() * numbers.length)];
	password += symbols[Math.floor(Math.random() * symbols.length)];

	while (length > password.length) {
		password += all[Math.floor(Math.random() * all.length)];
	}

	passwordBox.value = password;

}

function copyPassword() {
	passwordBox.select();
	document.execCommand("copy");
}