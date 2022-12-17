import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw Error("Could not fetch data")
        }
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch((error) => {
        console.log(error.message)
        setError(error.message)
        setIsPending(false)
      })
  }, [url])

  return { data, isPending, error }
}

export default useFetch
