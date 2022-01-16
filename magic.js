function magicFunc(magicKey) {
	var magic;
	switch (magicKey) {
		case "c":
			magic = "C3";
			break;
		case "a":
			magic = "A1";
			break;
		case "g":
			magic = "G7";
			break;
		case "d":
			magic = "D4";
			break;
		case "j":
			magic = "J10";
			break;
		case "e":
			magic = "E5";
			break;
		case "i":
			magic = "I9";
			break;
		case "f":
			magic = "F6";
			break;
		case "b":
			magic = "B2";
			break;
		case "h":
			magic = "H8";
			break;
		default:
			magic = "other";
	}
	return magic;
}

var magicMap = {
    "c": "C3",
    "a": "A1",
    "g": "G7",
    "d": "D4",
    "j": "J10",
    "e": "E5",
    "i": "I9",
    "f": "F6",
    "b": "B2",
    "h": "H8"
};

var dataSet = "abcdefghijklmnop";

function test() {
	for (var i = 0; i < dataSet.length; ++i) {
		var magicKey = dataSet[i];
		if (magicFunc(magicKey) !== (magicMap[magicKey] || "other"))
			return "error";
	}
	return "ok";
}

function doMagic(magicDoc) {
	var magicLog = document.getElementById("magiclog");
	magicLog.value += "\n\nTest: " + test();

	var testArr = new Array(15 * 1000 * 1000);
	for (let i = 0; i < testArr.length; ++i)
		testArr[i] = dataSet[Math.floor(Math.random() * dataSet.length)];

	var sum1 = 0;
	var fix1 = performance.now();
	for (let i = 0; i < testArr.length; ++i) {
		let res = magicFunc(testArr[i]);
		sum1 += res.charCodeAt(0);
	}
	var fix2 = performance.now();
	magicLog.value += "\nFunc: " + sum1 + "\t" + (fix2 - fix1);

	var sum2 = 0;
	var fix3 = performance.now();
	for (let i = 0; i < testArr.length; ++i) {
		let res = (magicMap[testArr[i]] || "other");
		sum2 += res.charCodeAt(0);
	}
	var fix4 = performance.now();
	magicLog.value += "\n Map: " + sum2 + "\t" + (fix4 - fix3);

	var sum3 = 0;
	var fix5 = performance.now();
	for (let i = 0; i < testArr.length; ++i) {
		let res = magicFunc(testArr[i]);
		sum3 += res.charCodeAt(0);
	}
	var fix6 = performance.now();
	magicLog.value += "\nFunc: " + sum3 + "\t" + (fix6 - fix5);

	var sum4 = 0;
	var fix7 = performance.now();
	for (let i = 0; i < testArr.length; ++i) {
		let res = (magicMap[testArr[i]] || "other");
		sum4 += res.charCodeAt(0);
	}
	var fix8 = performance.now();
	magicLog.value += "\n Map: " + sum4 + "\t" + (fix8 - fix7);
}
