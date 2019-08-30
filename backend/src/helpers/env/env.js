import dotenv from 'dotenv';

dotenv.config();

/**
 * Finds and returns the value of a key in the env file.
 *
 * @param {string} key - The key.
 *
 * @returns {string}
 */
const env = (key) => {
  if (key in process.env) {
    return (
      process.env[key]
    );
  }

  return '';
};

export {
  env
};
