/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */

/**
 * get length of a collection and check whether it is empty or not
 * @param {array} collection
 * @returns {boolean}
 */

const checkCollectionHasElements = function (collection) {
  const collectionLength = collection.length;
  const isNotEmpty = collectionLength > 0;

  return isNotEmpty;
};

export default checkCollectionHasElements;
