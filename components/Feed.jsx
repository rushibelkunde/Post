'use client'


import { useState, useEffect } from "react"
import PromptCard from "./PromptCard"

const PromptCardList = ({data, handleTagClick})=>{

  return(
    <div className="mt-16 prompt_layout">
      {data.map((post)=>(
        <PromptCard 
        key={post._id}
        post={post}
        handleTagClick = {handleTagClick}
        />
      ))}
    </div>
  )

}

const Feed = () => {

  const [searchText, setSearchText] = useState("")
  const [posts, setPosts] = useState([])
  const [searchPosts, setSearchPosts] = useState([])

  

  useEffect(()=>{

    if(searchText){
      console.log(posts)
     
      const filteredPosts = posts.filter((p)=>(
        p.prompt.toLowerCase().includes(searchText.toLowerCase()) ||
        p.tag.toLowerCase().includes(searchText.toLowerCase()) ||
        p.creator.email.toLowerCase().includes(searchText.toLowerCase())
      ))
      setSearchPosts(filteredPosts)
    }

  },[searchText])

  const fetchPosts = async()=>{
    const response = await fetch('/api/prompt', {
      cache: "no-store"
    })
    const data = await response.json();
    setPosts(data)
  }

  useEffect(()=>{
    fetchPosts()
  },[])

  return (
    <section className="feed">
      
      <form className="relative w-full flex-center">
        <input type="text" 
        placeholder="Search"
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}
        required
        className="search_input peer"
        />
      </form>

      <PromptCardList
      data={ searchText? searchPosts: posts}
      handleTagClick ={()=> {}}
      />

    </section>
  )
}

export default Feed