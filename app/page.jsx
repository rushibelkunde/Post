import Feed from "@components/Feed"
import { Suspense } from "react"
import { fetchPosts } from "@actions/actions"

const Home = async () => {

    const serverPosts = await fetchPosts()


    return (
        <section className="w-full flex-center flex-col">

            <h1 className="head_text text-center">
                POST 
                
                <span className="blue_gradient text-center">
                    Anything
                </span>
            </h1>
            <p className="desc text-center">
                Post is an open-source Web-App, Where You can Create Posts about Anything

            </p>
            
        
        <Feed serverPosts={serverPosts}/>
        
        </section>
    )
}

export default Home