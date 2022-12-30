import { useEffect, useState } from "react"

const useFetch = async (lang) => {
  const [data, setData] = useState()

  useEffect(()=>{
    fetch('/api/' + lang + '.json')
      .then(res => { return res.json() })
      .then(data => setData(data))
  }, [lang])

  return data
}
 
export default useFetch