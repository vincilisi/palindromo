function palindromo(str) {
	const regex = /[\W_]/g;
	const parola = str.toLowerCase().replace(regex, '');
	const lunghezza = parola.length;

	for (let i = 0; i < lunghezza / 2; i++) {
		if (parola[i] !== parola[lunghezza - 1 - i]) {
			return false;
		}
	}

	return true;
}

console.log(palindromo("i topi non avevano nipoti"));