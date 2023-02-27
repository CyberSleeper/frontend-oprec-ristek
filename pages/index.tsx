import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Post from '../components/Post'
import { createContext, useEffect, useState } from 'react'
import usePosts from '../hooks/usePosts'

export const UpdateContext = createContext<{
  refresh: () => void
}>({
  refresh: () => {},
})

export default function Home() {
  const { dataStatus: data, refresh } = usePosts();
  const [posts, setPosts] = useState<IPost[]>([])
  const [caption, setCaption] = useState('');
  const postData = (e: any) => {
    e.preventDefault()
    axios.post("http://localhost:9010/", {
      caption: caption
    }).then(res => {
      console.log("Posting data", res)
      refresh();
    }).catch(err => {
      console.log(err)
    })
    console.log(caption)
    setCaption('')
  }
  useEffect(() => {
    setPosts(data);
  }, [data])
  return (
    <UpdateContext.Provider value={{
      refresh: refresh
    }}>
    <main className="sm:mt-0 sm:w-[50%] mx-5 sm:mx-auto">
        <form>
          <textarea rows={7} value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="What's happening?" className="rounded-xl w-[60%] p-3 scrollbar-hide resize-none"/>
          <button onClick={postData} value="Post" className="bg-white text-black ml-[5%] w-[35%] p-1 py-2 rounded-md hover:cursor-pointer">Post</button>
        </form>
      <ul className="flex flex-col py-3">
        {
          posts.map((val, index) => (
            <Post key={index} {...val} />
          ))
        }
      </ul>
    </main>
    </UpdateContext.Provider>
  )
}
