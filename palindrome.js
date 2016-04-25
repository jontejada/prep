function isPal(str) {
	if (str.length < 2) return true;
	if (str[0] !== str[str.length - 1]) return false;
	return isPal(str.substring(1, str.length - 2));
}
console.log(isPal('a'));
console.log(isPal('ab'));
console.log(isPal('aba'));