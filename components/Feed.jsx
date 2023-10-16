'use client'


import { useState, useEffect } from "react"

import PromptCardList from "./PromptCardList"





const Feed = (GetPosts) => {

  

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

  // useEffect(()=>{
    
  //   const fetchData = async()=>{
  //     const Posts = await getPosts()
  //     setPosts(Posts)
  //   }

  //   fetchData()

  // },[])

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

      {/* <PromptCardList
      data={ searchText? searchPosts: posts}
      /> */}
      <GetPosts/>

    </section>
  )
}

export default Feed