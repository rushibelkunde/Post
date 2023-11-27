"use server"
import Prompt from "@models/prompt";
import User from "@models/user";
import { connectToDB } from "@utils/database";

import { unstable_noStore as noStore } from "next/cache";

import { getServerSession } from "next-auth";
import { authOptions } from "@app/api/auth/[...nextauth]/route";


export const fetchPosts = async () => {
        await connectToDB()
        const posts = await Prompt.find({}).populate(
            'creator'
        )
        return JSON.stringify(posts)
}

export const toggleLike = async ( postId , y)=> {

    const session = await getServerSession(authOptions)
    await connectToDB()
    const Post = await Prompt.findById(postId)
    const userID = session?.user?.id
    let isLike = Post.likes.includes(userID)
    if(y){
        console.log(userID)
        if(isLike){
            Post.likes.pull(userID)
        }
        else{
            Post.likes.push(userID)
        }
    }
    isLike = Post.likes.includes(userID)
    Post.save()

    noStore()
    
    return { isLike, count: Post.likes.length}
}


