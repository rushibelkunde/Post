"use client"

import {useState, useEffect} from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"
import Profile from "@components/Profile"
import { useSearchParams } from "next/navigation"

const OtherProfile = () => {

    const {id} = useParams()
    const searchParams = useSearchParams()
   
    const name = searchParams.get("name")

    const {data: session} = useSession();

    const [posts, setPosts]= useState([]);

    const fetchPosts = async()=>{
      const response = await fetch(`/api/users/${id}/posts`)
      const data = await response.json();
      setPosts(data)
    }

    

    useEffect(()=>{
        if(session?.user.id){
            fetchPosts()
        }
      },[])

    

   
    
  return (
    <Profile
        name= {name}
        desc= {`Welcome to ${name} profile page`}
        data={posts} 
    />
  )
}

export default OtherProfile