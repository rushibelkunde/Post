import Feed from "@components/Feed"


const Home = async () => {


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
            

        <Feed />
        </section>
    )
}

export default Home