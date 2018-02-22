function consume() {
  monitor.enter()
  monitor.wait()

  queue.shift()

  if (queue.length == 0) {
    monitor.reset()
  }

  monitor.exit()
}

for (;;) {
  consume()
}
