var count = 0

makeThread('thread1.js')
makeThread('thread2.js')

when('finished', function() {
	console.log(count)
})
