let daysAlive = function calculateDays()
{
	let days;
	let age = parseInt(prompt("How old are you?"));

	days = age * 365.25;

	return days;
}

alert("You have lived for " + daysAlive() + " days.");