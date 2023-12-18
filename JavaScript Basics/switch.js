// switch

function attackCommand(movement) {
	var whatHappens;
	switch (movement) {
		case "swing":
			whatHappens = "damage +" + 10;
			break;
		case "strike":
			whatHappens = "critical +" + 20;
			break;
		case "thrust":
			whatHappens = "bleed +" + 35;
			break;
		case "jump hit":
			whatHappens = "special effect +" + 20;
			break;
		default:
			whatHappens = "Please select your attacking movement";
	}
	return whatHappens;
}
