import { useEffect, useState } from "react";

function useFetch<T>(url: string){
   const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      }).catch((error) =>{
        setError(error.message)
        setLoading(false)
      });
  }, []);

  return {data,loading,error}
}


export default useFetch;
