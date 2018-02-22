var count = 0

var lock = {
	acquired: false,
	acquire: function() {
		while (acquired) {
			waitBriefly()
		}

		acquired = true
	},
	release: function() {
		acquired = false
	}
}

makeThread('thread1.js')
makeThread('thread2.js')

when('finished', function() {
	console.log(count)
})
