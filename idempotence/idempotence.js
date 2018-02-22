const mapping = {
  1: 'super',
  2: 'amazing',
  3: 'fantastic!',
  4: 'spectacular'
}

// this method is not idempotent
function getMapping(idx) {
  return mapping[idx]
}

// this method is idempotent
function getMapping_idempotent(mappingTable, idx) {
  return mappingTable[idx]
}

// this method is not idempotent
function fillMappingTable(mappingTable) {
  mappingTable[5] = 'sad'
}

// this method is idempotent
function mutateMappingTable(mappingTable) {
  let clone = mappingTable.clone()
  clone[5] = 'sad'
  return clone
}
