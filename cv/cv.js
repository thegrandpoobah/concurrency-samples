condition_variable = {
	flagged: false,

	set: function() {
		flagged = true
	},
	wait: function() {
		while (!flagged) {
			waitBriefly()
		}
	},
	reset: function() {
		flagged = false
	}
}
