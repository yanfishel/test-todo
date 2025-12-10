import { useState } from 'react'



const useErrorHandler = () => {
  const [error, setError] = useState<Error | unknown | null>(null)

  const errorHandler = async (e: Error | unknown) => {
    console.log(e);
    setError(e)
  }

  return {
    error,
    setError,
    errorHandler
  }
}

export default useErrorHandler
