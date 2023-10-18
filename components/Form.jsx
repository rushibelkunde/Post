import Link from "next/link"



const Form = ({type,post,setPost,submitting,handleSubmit}) => {
  return (
    <section className=" w-full max-w-full flex-start
    flex-col px-10">
      <h1 className=" head_text text-left">
         <span className="blue_gradient">{type} Post
         </span>
        </h1>
        

        <form 
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col
        gap-7 glassmorhism"

        >
          <label>
            <span className="font-satoshi font-semibold
            text-base text-gray-700">
              Post
            </span>
            <input 
            value= {post.prompt}
            onChange={(e)=> setPost({...post,
            prompt: e.target.value})}
            placeholder="Write your Post here..."
            required
            className="form_input"
            />
          </label>
          <label>
            <span className="font-satoshi font-semibold
            text-base text-gray-700">
             Tag {" "}
            </span>
            <input 
            value= {post.tag}
            onChange={(e)=> setPost({...post,
            tag: e.target.value})}
            placeholder="Write your #tag here..."
            required
            className="form_input"
            />
          </label>

          <div className=" flex-end mx-3 mb-5 gap-4">
            <Link href={"/"} className="text-gray-500 text-sm">
              Cancel
            </Link>

            <button
            type="submit"
            disabled= {submitting}
            className="px-5 py-1.5 text-sm font-semibold
           bg-black rounded-full text-white"
           
            >
              {submitting? `${type}...` :
              type
              }

            </button>
          </div>
        </form>

    </section>
  )
}

export default Form