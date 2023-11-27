'use client'
import { useState, useEffect } from "react"
import PromptCard from "./PromptCard"
import { useSession } from "next-auth/react"


const PromptCardList = ({data, handleTagClick})=>{
  return(
    <div className="prompt_layout mt-16 ">
      {data.map((post)=>(
        <PromptCard 
        key={post._id}
        post={post}
        handleTagClick = {()=>handleTagClick(post.tag)}
        />
      ))}
    </div>
  )
}

const Feed = ({serverPosts}) => {
  const [searchText, setSearchText] = useState("")
  const [posts, setPosts] = useState([])
  const [searchPosts, setSearchPosts] = useState([])
  useEffect(()=>{
    if(searchText){
      const filteredPosts = posts.filter((p)=>(
        p.prompt.toLowerCase().includes(searchText.toLowerCase()) ||
        p.tag.toLowerCase().includes(searchText.toLowerCase()) ||
        p.creator.email.toLowerCase().includes(searchText.toLowerCase())
      ))
      setSearchPosts(filteredPosts)
    }
  },[searchText])

  const fetchData = async ()=>{
    setPosts(JSON.parse(serverPosts))
    setSearchPosts(JSON.parse(serverPosts))
  }

  const handleTagClick = (tag)=>{
    console.log(tag)
    setSearchText(tag)
  }

  const handleReset = (e)=>{
    e.preventDefault()
    setSearchText("")

  }

  

  useEffect(()=>{


    fetchData()
   
    
  },[])

  return (
    <section className="feed ">
      
      <form className="relative w-full flex-center">
        <input type="text" 
        placeholder="Search"
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}
        required
        className="search_input peer"
        />
        {searchText?<button className=" -mx-6" onClick={handleReset}>X</button>:""}
      </form>


<PromptCardList
      data={ searchText? searchPosts: posts}
      handleTagClick ={handleTagClick}
      setSearchText= {setSearchText}
      />

    </section>
  )
}

export default Feed