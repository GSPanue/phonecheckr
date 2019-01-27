import {
  FETCH_SUGGESTIONS,
  CLEAR_SUGGESTIONS
} from '../../constants';

// Test data
const products = [
  {
    label: 'iPhone 6'
  },
  {
    label: 'iPhone 7'
  },
  {
    label: 'iPhone 8'
  },
  {
    label: 'iPhone 9'
  },
  {
    label: 'Galaxy S5'
  },
  {
    label: 'Galaxy S6'
  },
  {
    label: 'Galaxy S7'
  },
  {
    label: 'Galaxy S8'
  },
  {
    label: 'Google Pixel 2'
  },
  {
    label: 'Google Pixel 3'
  }
];

/**
   * Fetches suggestions relative to the input field's current value.
   *
   * @param {string} value - The value of the input field.
   *
   * @returns {array}
   *
   * @todo Remove test logic in current body.
   * @todo Debounce function
   * @todo Make GET request to API for suggestions.
   * @todo Return a maximum of 5 suggestions.
   */
const fetchSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  const suggestions = (inputLength === 0) ? [] : products.filter((product) => (
    product.label.trim().toLowerCase().indexOf(inputValue) === 0
  ));

  return ({
    type: FETCH_SUGGESTIONS,
    payload: suggestions
  });
};

const clearSuggestions = () => ({
  type: CLEAR_SUGGESTIONS
});

export {
  fetchSuggestions,
  clearSuggestions
};
