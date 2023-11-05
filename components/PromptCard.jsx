"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { toggleLike } from "@actions/actions"
import { useRouter } from "next/navigation"

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const router = useRouter()
  const [copied, setCopied] = useState("")
  const [likes, setLikes] = useState(post.likes.length)
  const [isLiked, setIsLike] = useState("")
  const { data: session } = useSession()
  const pathName = usePathname()



  const handleLike = async (userId, postId) => {
    const { isLike, count } = await toggleLike(userId, postId)
    setIsLike(isLike)
    setLikes(count)

  }
  const handleCopy = () => {

    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(() => setCopied(""), 3000)
  }

  useEffect(() => {

    const fetchLike = async () => {
      const { isLike, count } = await toggleLike(session?.user?.id, post._id)

      setIsLike(isLike)


    }
    fetchLike()
  }, [])
  return (

    <div className="prompt_card">
      <div className="flex justify-between items-start
      gap-5">
        <div className="flex-1 flex justify-start items-center
        gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className=" rounded-full object-contain"
            onClick={()=> router.push(`/profile/${post.creator._id}?name=${post.creator.username}`)}
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900 ">{post.creator.username}</h3>
            <p className="font-inter text-sm text-gray-500">{post.creator.email}</p>

          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={copied === post.prompt ?
              "/assets/icons/tick.svg" :
              "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={handleTagClick}
      >
        {post.tag}
      </p>

      {session?.user.id === post.creator._id &&
        pathName === '/profile' && (
          <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
            <p className="font-inter text-sm green_gradient cursor-pointer"
              onClick={handleEdit}>Edit</p>
            <p className="font-inter text-sm orange_gradient cursor-pointer"
              onClick={handleDelete}>Delete</p>
          </div>
        )}


      {session?.user ?
        <div className="flex gap-2">
          <button onClick={() => handleLike(session?.user?.id, post._id)}>
            {isLiked ? <ThumbUpOutlinedIcon /> : <ThumbUpIcon color="error" />}

          </button>
          <br />
          <span>{likes}</span>

        </div> :
        <span>Likes:{likes}</span>}


    </div>

  )
}

export default PromptCard