function sumStrings(a,b) {
	if (a.length > 15 || b.length > 15) {
		var out = '';
		var aRight = a.slice(-15);
		var aLeft = a.slice(0,-15) === '' ? '0' : a.slice(0,-15);
		var bRight = b.slice(-15);
		var bLeft = b.slice(0,-15) === '' ? '0' : b.slice(0,-15);
		var outRight = Number(aRight) + Number(bRight);
		var carry = 0;
		if (outRight.length > 15) {
			carry++;
			outRight = outRight.slice(1);
		}
		var outLeft = Number(aLeft) + Number(bLeft) + carry;
		return outLeft.toString() + outRight.toString();
	} else {
		var x = Number(a) + Number(b);
		return x.toString();
	}
}

// console.log(sumStrings('1234567890123456789012', '1234567890123456789012'));

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));
//Expected: 712577413488402631964821329
//instead got: 7.125774134884027e+26


// if either is longer that 20 chars break and add seprately but carry over