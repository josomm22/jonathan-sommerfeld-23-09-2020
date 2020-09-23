
  export function getLocalStorage(key, initialValue) {
        const item = window.localStorage.getItem(key);
        if (item) {
            return JSON.parse(item)
        } else {
            window.localStorage.setItem(key, JSON.stringify(initialValue))
            return initialValue

        };      
  };

  export function setLocalStorage(key,value) {
    window.localStorage.setItem(key, JSON.stringify(value));

  }
