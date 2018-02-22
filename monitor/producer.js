function produce() {
  monitor.enter()

  queue.push(work)

  monitor.set()

  monitor.exit()
}

for (;;) {
  produce()
}
