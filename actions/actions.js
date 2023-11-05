"use server"
import Prompt from "@models/prompt";
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const dynamic = 'force-dynamic'
export const fetchPosts = async () => {

        await connectToDB()
        const posts = await Prompt.find({}).populate(
            'creator'
        )

        console.log(posts)
        
        return JSON.stringify(posts)

        
        // await connectToDB()
       
        // return posts
}

export const toggleLike = async (userId, postId)=> {
    await connectToDB()
    const Post = await Prompt.findById(postId)
    const isLike = Post.likes.includes(userId)
    if(isLike){
        Post.likes.pull(userId)
    }
    else{
        Post.likes.push(userId)
    }
    Post.save()
    

    return { isLike, count: Post.likes.length }
}


