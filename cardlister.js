// Initialize modules
// these commands needed to be run before use:
// npm install credit-card-validator
// npm install prompt-sync

var creditCardValidator = require('credit-card-validator');
const prompt = require('prompt-sync')({
	sigint: true
});

// Initialize global variables
var num = 'abcd';
var validlength = false;
var matches = 20;
console.clear();
console.log('  ____              _ _ _      ____              _ ');
console.log(' / ___|_ __ ___  __| (_) |_   / ___|__ _ _ __ __| |');
console.log('| |   | \'__/ _ \\\/ _` | | __| | |   / _` | \'__/ _` |');
console.log('| |___| | |  __/ (_| | | |_  | |__| (_| | | | (_| |');
console.log(' \\____|_|  \\___|\\__,_|_|\\__|  \\____\\__,_|_|  \\__,_|');
console.log('                                              ');     
console.log('__     __    _ _     _       _             ');
console.log('\\ \\   \/ \/_ _| (_) __| | __ _| |_ ___  _ __ ');
console.log(' \\ \\ \/ \/ _` | | |/ _` |\/ _` | __\/ _ \\| \'__|');
console.log('  \\ V \/ (_| | | | (_| | (_| | || (_) | |   ');
console.log('   \\_\/ \\__,_|_|_|\\__,_|\\__,_|\\__\\___/|_|   ');
console.log('');
 

// Prompt for Credit card number
while (validlength == false) {
  console.log("default length      ----------------");
	num = prompt('Credit card number: ');
        if (num.length != 15 && num.length != 16) { // Check for correct length of card number
                console.log('Length of ', num.length, 'is not valid for', num);
                validlength = false;
		            continue;
        }
	matches = prompt('Number of valid creations (default=20): '); // set default to 20
	try{
		if (Number(matches) < 1) matches = 20; // if entry doesnt compute, pick 20
	}
	catch {
		console.log('Entry not understood. Setting quantity to 20.')
		matches=20;
	}
	validlength = true;
}

var found = 0; // reset number of found combinations to zero
while (found < matches) {
	var numberValidation = creditCardValidator.validateCard(String(num));
	if (numberValidation) { //found!
		console.log('Validated Card No (', found + 1, ') ', num, ': ', creditCardValidator.getCardName(String(num)));
		found++;
	}
	num++; // increase number and try again
}
