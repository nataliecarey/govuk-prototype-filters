/**
 * Normalise a value. Checks that a given value exists before performing
 * a transformation.
 *
 * @param {*} value - Input value
 * @param {*} defaultValue - Value to fallback to if no value given
 * @returns {*} defaultValue
 */
function normalize (value, defaultValue) {
  if (value === null || value === undefined || value === false) {
    return defaultValue
  }

  return value
}

/**
 * Adds a deprecation warning for non-namespaced filters
 *
 * @param {string} name - The name of the filter (without the namespace)
 * @param {Function} filter - The filter function
 * @returns {Function} A function which shows the warning and calls the filter
 */
function deprecationWarning (name, filter) {
  return function () {
    console.warn('The filter', `[${name}]`, 'has been replaced, please start using', `[xgovuk.${name}]`, 'instead.')
    return filter.apply(null, arguments)
  }
}

module.exports = {
  normalize,
  deprecationWarning
}
