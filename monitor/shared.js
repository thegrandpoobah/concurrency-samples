monitor = {
  lock: new Lock(),
  cv: new ConditionVariable(),

  enter: function() {
    lock.acquire()
  },
  exit: function() {
    lock.release()
  },
  wait: function() {
    cv.wait()
  },
  set: function() {
    cv.set()
  },
  reset: function() {
    cv.reset()
  }
}

queue = []

makeThread('thread1.js')
makeThread('thread2.js')
