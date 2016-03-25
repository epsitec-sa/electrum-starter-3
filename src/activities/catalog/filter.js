'use strict';

import { removeDiacritics } from './remove-diacritics';

const Filter = {};

Filter.levenshteinDistance = (searchText, key) => {
  const current = [];
  let prev;
  let value;

  for (let i = 0; i <= key.length; i++) {
    for (let j = 0; j <= searchText.length; j++) {
      if (i && j) {
        if (searchText.charAt (j - 1) === key.charAt (i - 1)) {
          value = prev;
        } else {
          value = Math.min (current[j], current[j - 1], prev) + 1;
        }
      } else {
        value = i + j;
      }
      prev = current[j];
      current[j] = value;
    }
  }
  return current.pop ();
};

Filter.caseInsensitiveFilter = (searchText, key) => {
  const k = removeDiacritics (key.toLowerCase ());
  const s = removeDiacritics (searchText.toLowerCase ());
  return k.indexOf (s) !== -1;
};

Filter.levenshteinDistanceFilter = (distanceLessThan) => {
  if (distanceLessThan === undefined) {
    return Filter.levenshteinDistance;
  } else if (typeof distanceLessThan !== 'number') {
    throw 'Error: AutoComplete.levenshteinDistanceFilter is a filter generator, not a filter!';
  }

  return (s, k) => Filter.levenshteinDistance (s, k) < distanceLessThan;
};

Filter.fuzzyFilter = (searchText, key) => {
  if (searchText.length === 0) {
    return false;
  }

  const subMatchKey = key.substring (0, searchText.length);
  const s = removeDiacritics (searchText.toLowerCase ());
  const k = removeDiacritics (subMatchKey.toLowerCase ());
  const distance = Filter.levenshteinDistance (s, k);

  return searchText.length > 3 ? distance < 2 : distance === 0;
};

export default Filter;
