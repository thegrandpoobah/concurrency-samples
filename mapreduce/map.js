function multipleOf2(list) {
  // the closure is both idempotent and immutable
  // because of this property, this method is auto-concurrent
  // and can be parallelized
  list.map(function(item) {
    return item * 2
  })
}

function filterMultipleOf2(list) {
  let count = 0

  // the closule is not idempotent, but it is immutable
  // because of this, the method is not auto-concurrent
  // and cannot be parallelized
  list.map(function(item) {
    count++
    if (count % 2 === 0) {
      return item * 2
    } else {
      return 0
    }
  })
}
