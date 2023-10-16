"use server"

import PromptCardList from "@components/PromptCardList";

const GetPosts = async () => {

  console.log("server")

  const response = await fetch('/api/prompt', {
    cache: "no-store"
  })
  const data = await response.json();

  return(
    <>
    <PromptCardList
      data={ data}
      />
    </>
  )
    
}

export default GetPosts