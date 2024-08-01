export const useLocalStorage = () => {
  const setItem = (key: string, value: string) => {
    localStorage.setItem(key, value)
  }

  const getItem = (key: string) => {
    return localStorage.getItem(key)
  }

  const removeItem = (key: string) => {
    localStorage.removeItem(key)
  }

  const clear = () => {
    localStorage.clear()
  }

  return { setItem, getItem, removeItem, clear }
}
