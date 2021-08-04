export const getLocalStorage = (key = '_comics') => JSON.parse(localStorage.getItem(key) || '[]');

export const setLocalStorage = (value, key = '_comics') => {
  localStorage.setItem(key, JSON.stringify(value));
};
