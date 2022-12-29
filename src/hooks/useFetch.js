const useFetch = async (path) => {
  let text = await fetch(path)
  text = await text.json()
  return text
}
 
export default useFetch