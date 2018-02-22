function incrementCount() {
	lock.acquire()
	count++
	lock.release()
}

for (var i = 0; i < 100000; i++) {
	incrementCount()
}

done()
