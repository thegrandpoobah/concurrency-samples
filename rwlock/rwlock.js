var rw_lock = {
	readers: 0,
	writer: false,

	acquireReader: function() {
		while (writer) {
			waitBriefly()
		}

		readers++
	},
	releaseReader: function() {
		readers--
	},

	acquireWriter: function() {
		while (writer && readers > 0) {
			waitBriefly()
		}

		writer = true
	},
	releaseWriter: function() {
		writer = false
	}
}
