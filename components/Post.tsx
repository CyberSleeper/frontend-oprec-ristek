import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { FaTrashAlt, FaRegEdit } from "react-icons/fa"
import { BsCheck2Square } from "react-icons/bs"
import usePosts from '../hooks/usePosts'
import { UpdateContext } from '../pages'

const Post = ({caption, CreatedAt, ID}: IPost) => {
  const { refresh } = useContext(UpdateContext)
  const [editingContent, setEditingContent] = useState(false)
  const [newCaption, setNewCaption] = useState(caption);

  useEffect(() => {
    setNewCaption(caption);
  }, [caption])

  const deleteData = (e: any) => {
    e.preventDefault()
    axios.delete("http://localhost:9010/" + ID)
    .then(res => {
      console.log(res.data)
      refresh();
    }).catch(err => {
      console.log(err)
    })
    setNewCaption(caption)
  }
  const editData = (e: any) => {
    e.preventDefault()
    axios.put("http://localhost:9010/" + ID, {
      caption: newCaption
    }).then(res => {
      console.log("Editing data", res)
      refresh();
    }).catch(err => {
      console.log(err)
    })
    console.log(newCaption)
    setNewCaption(newCaption)
    caption = newCaption
    setEditingContent(false)
  }

  let postContent;
  let buttonContent;
  if (editingContent) {
    // setNewCaption(caption)
    buttonContent = (
      <>
      <button onClick={editData}>
        <BsCheck2Square/>
      </button>
      </>
    );
    postContent = (
      <section className='p-4 text-xl whitespace-pre-line'>
        <form>
          <textarea rows={7} value={newCaption} onChange={(e) => setNewCaption(e.target.value)} placeholder="What's happening?" className="rounded-xl w-[100%] p-3 scrollbar-hide resize-none"/>
        </form>
      </section>
    )
  } else {
    buttonContent = (
      <>
      <button onClick={() => setEditingContent(true)}>
        <FaRegEdit/>
      </button>
      <button onClick={deleteData}>
        <FaTrashAlt/>
      </button>
      </>
    );
    postContent = (
      <section className='p-4 text-xl whitespace-pre-line break-words'>
        {caption}
      </section>
    )
  }
  
  return (
  <article className='bg-[#154c79] my-3 rounded-2xl min-h-min'>
    <header className='justify-between flex pt-5 px-6 pr-8 items-center'>
      <div className="flex gap-2 items-center">
        <img src="/anonymous.png" className="w-[35px] rounded-full"/>
        <h1>anonymous</h1>
        <p className='text-[#ffffff92]'>•</p>
        <p className='text-[#ffffff92] text-xs'>{CreatedAt.substring(8, 10) + "-" + CreatedAt.substring(5, 7) + "-" + CreatedAt.substring(0, 4)}</p>
      </div>
      <div className='flex gap-2'>
        {buttonContent}
      </div>
    </header>
    {postContent}
  </article>
  )
}

export default Post;