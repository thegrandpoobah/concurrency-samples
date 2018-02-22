var semaphore = {
	capacity: 5,
	used: 0,

	acquire: function() {
		while (used == capacity) {
			waitBriefly()
		}

		used++
	},
	release: function() {
		used--
	}
}
