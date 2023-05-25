const { views } = require('govuk-prototype-kit')
const _ = require('lodash')
const { normalize, deprecationWarning } = require('./utils.js')

/**
 * Convert an array into a string formatted as a sentence.
 *
 * @example
 * formatList(['England', 'Scotland', 'Wales'])
 * // England, Scotland and Wales
 *
 * @example
 * formatList(['England', 'Scotland', 'Wales'], 'disjunction')
 * // England, Scotland or Wales
 *
 * @param {Array<string>} array - Array to convert
 * @param {Intl.ListFormatType} [type=conjunction] - Format of output
 * @returns {string} Formatted list
 */
function formatList (array, type = 'conjunction') {
  array = normalize(array, '')

  const listFormat = new Intl.ListFormat('en-GB', {
    style: 'long',
    type
  })
  return listFormat.format(array)
}

/**
 * Check a value is classified as an `Array` object.
 *
 * @example
 * isArray(['england', 'scotland', 'wales']) // true
 *
 * @example
 * isArray('great britain') // false
 *
 * @param {*} value - Value to check
 * @returns {boolean} Returns `true` if `value` is an array, else `false`
 */
function isArray (value) {
  value = normalize(value, '')

  return _.isArray(value)
}

/**
 * Reject items in an array that have a key with a given value.
 *
 * @example
 * rejectFromArray([{
 *   name: 'Sally Smith'
 *   role: 'admin'
 * }, {
 *   name: 'David Jones'
 *   role: 'user'
 * }], 'role', 'admin')
 *
 * // [{
 * //  name: 'David Jones'
 * //  role: 'user'
 * // }]
 *
 * @param {Array<object>} array - Array to filter
 * @param {string} key - Key to filter on
 * @param {string} value - Value to filter by
 * @returns {Array<object>} Filtered array
 */
function rejectFromArray (array, key, value) {
  return array.filter(item => ![value].includes(_.get(item, key)))
}

/**
 * Select items in an array that have a key with a given value.
 *
 * @example
 * xgovuk.selectFromArray([{
 *   name: 'Sally Smith'
 *   role: 'admin'
 * }, {
 *   name: 'David Jones'
 *   role: 'user'
 * }], 'role', 'admin')
 *
 * // [{
 * //  name: 'Sally Smith'
 * //  role: 'admin'
 * // }]
 *
 * @param {Array<object>} array - Array to filter
 * @param {string} key - Key to filter on
 * @param {string} value - Value to filter by
 * @returns {Array<object>} Filtered array
 */
function selectFromArray (array, key, value) {
  return array.filter(item => [value].includes(_.get(item, key)))
}

/**
 * Return unique items from an array.
 *
 * @example
 * uniqueFromArray(['Orange', 'Banana', 'Apple', 'Orange'])
 * // ['Orange', 'Banana', 'Apple']
 *
 *
 * @param {Array<string>} array - Array to filter
 * @returns {Array<string>} Filtered array
 */
function uniqueFromArray (array) {
  return [...new Set(array)]
}

module.exports = {
  formatList,
  isArray,
  rejectFromArray,
  selectFromArray,
  uniqueFromArray
}

// Add array filters to GOV.UK Prototype Kit
views.addFilter('xgovuk.formatList', formatList)
views.addFilter('xgovuk.isArray', isArray)
views.addFilter('xgovuk.rejectFromArray', rejectFromArray)
views.addFilter('xgovuk.selectFromArray', selectFromArray)
views.addFilter('xgovuk.uniqueFromArray', uniqueFromArray)

// Add backwards compatibility for non-namespaced filters
views.addFilter('formatList', deprecationWarning('formatList', formatList))
views.addFilter('isArray', deprecationWarning('isArray', isArray))
views.addFilter('rejectFromArray', deprecationWarning('rejectFromArray', rejectFromArray))
views.addFilter('selectFromArray', deprecationWarning('selectFromArray', selectFromArray))
views.addFilter('uniqueFromArray', deprecationWarning('uniqueFromArray', uniqueFromArray))
