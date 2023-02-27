import axios from 'axios';
import React, { useEffect, useState } from 'react'

const usePosts = () => {
    const [dataStatus, setDataStatus] = useState<IPost[]>([])
    const [refetch, setRefetch] = useState(true);
    useEffect(() => {
      if (refetch) {
        axios.get("http://localhost:9010/")
        .then(res => {
          console.log(res.data)
          setDataStatus(res.data)
          setRefetch(false);
        }).catch(err => {
          console.log(err)
        })
      }
    }, [refetch])

    const refresh = () => setRefetch(true)

    return { dataStatus, refresh }
}

export default usePosts