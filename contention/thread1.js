function incrementCount() {
	count++
}

for (var i = 0; i < 100000; i++) {
	incrementCount()
}

done()
