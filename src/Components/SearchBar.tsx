import type { PostData } from '../utils/types/MarkDown.ts'
import { fullSearch } from "../utils/searchPosts.ts"
import { useEffect, useState, type FormEventHandler, type FormEvent } from "react"

type SearchBarProps = {
  data: PostData[];
}

export default function SearchBar(props: SearchBarProps) {

  const [search, setSearch] = useState("")

  useEffect(() => {
    console.log(`First log: ${search}`)
  }, [search])

  const eventInputHandler: FormEventHandler<HTMLInputElement> = (e: FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  };

  const eventSubmitHandler: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return(
    <form onSubmit={eventSubmitHandler}>
      <div id="search-bar" className="flex bg-white p-2 rounded-xl items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-6 h-6 invert opacity-50">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input onInput={eventInputHandler} value={search} type="text" id="search-input" placeholder="Search" className="text-black focus:outline-none ml-1 xl:text-2xl" />
      </div>
    </form>
)};