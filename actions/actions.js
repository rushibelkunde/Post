"use server"
import Prompt from "@models/prompt";
import User from "@models/user";
import { connectToDB } from "@utils/database";
import { getServerSession } from "next-auth";
import { authOptions } from "@app/api/auth/[...nextauth]/route";

export const dynamic = "force-dynamic"


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
            isLike = Post.likes.includes(userID)
        }
        else{
            Post.likes.push(userID)
            isLike = Post.likes.includes(userID)
        }
    }
    Post.save()


    return{ isLike, count: Post.likes.length}
}


