function sum(list) {
  // the closure is immutable and idempotent
  // auto-concurrent
  // can be parallelized
  list.reduce(function(acc, val) {
    return acc + val
  })
}

function sum(list) {
  let result = 0

  // this for loop is not idempotent
  // but it is immutable
  // cannot be parallelized
  for (let i = 0; i < list.length; i++) {
    result = result + list[i]
  }

  return result
}
