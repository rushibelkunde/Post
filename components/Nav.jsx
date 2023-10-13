"use client";
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import {signIn, signOut, useSession, getProviders}
 from 'next-auth/react'

const Nav = () => {
    const {data: session} = useSession()
    const [providers, setProviders] = useState(null)

    const [toggleDropdown, setToggleDropdown] = useState(false)

    useEffect(()=>{
        const setupProviders = async ()=>{
            const response = await getProviders()
            setProviders(response)
        }
        setupProviders()
    },[])
  return (
    <nav className="flex justify-center items-center flex-between w-screen p-3 px-6  mb-16 pt-3 bg-black text-white">
        <Link href="/" className=" flex gap-2">
            <p className=" font-semibold text-xl text-white">Post</p>
        </Link>

        <div className=" sm:flex">
            {session?.user? 
            <div className=" flex gap-3 md:gap-5">
                <Link href={"/create-prompt"} className="black_btn">
                    Create Post
                    </Link>
                <button type="button" onClick={signOut}
                className="black_btn">
                    Sign Out

                </button>

                <Link href={"/profile"}>
                    <Image src={session?.user.image}
                    width={37}
                    height={37}
                    className=" rounded-full"
                    
                    />
                </Link>
            </div>
             : <>
             {providers &&
             Object.values(providers).map((provider)=>(
                <button type="button" key={provider.name}
                onClick={()=> signIn(provider.id)}
                className="black_btn">
                    Sign In

                </button>
             ))}

             
             </>}

        </div>

        {/* <div className=" sm:hidden flex relative">
            {session?.user? (
            <div className="flex">
                <Image src={session?.user.image}
                    width={37}
                    height={37}
                    className=" rounded-full"
                    onClick={()=>{ setToggleDropdown(
                        (prev)=> !prev
                    )}}
                    
                    />

                    {toggleDropdown && 
                    <div className="dropdown">
                        <Link href={"/profile"}
                        className="dropdown_link"
                        onClick={()=> setToggleDropdown(false)}
                        >
                            My Profile
                        </Link>
                        <Link href={"/create-prompt"}
                        className="dropdown_link"
                        onClick={()=> setToggleDropdown(false)}
                        >
                           Create Post
                        </Link>
                        <button type="button" onClick={()=>{
                            setToggleDropdown(false)
                            signOut()
                        }}
                        className="mt-5 w-full black_btn"
                        >
                            Sign Out


                        </button>

                        </div>}
            </div>
            ) : (

                <>
             {providers &&
             Object.values(providers).map((provider)=>(
                <button type="button" key={provider.name}
                onClick={()=> signIn(provider.id)}
                className="black_btn">
                    Sign In

                </button>
             ))}

             
             </>

            )}

        </div> */}

    </nav>
  )
}

export default Nav