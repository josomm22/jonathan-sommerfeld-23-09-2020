
export const getLocalStorage = (key, initialValue) => {
  const item = window.localStorage.getItem(key);
  if (item) {
    return JSON.parse(item)
  } else {
    window.localStorage.setItem(key, JSON.stringify(initialValue))
    return initialValue

  };
};

export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));

}

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}; 

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
  }
};