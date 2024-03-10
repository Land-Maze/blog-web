import type { PostDataType } from '../utils/types/MarkDown.ts'
import { searchFirstFive, type SearchResultType } from "../utils/searchPosts.ts"
import { useEffect, useState, type FormEventHandler, type FormEvent } from "react"

type SearchBarProps = {
  data: PostDataType[];
}

export default function SearchBar(props: SearchBarProps) {

  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([])

  useEffect(() => {
    if (search.length > 0){
      setSearchResults(searchFirstFive(search, props.data))
    }
  }, [search])

  const eventInputHandler: FormEventHandler<HTMLInputElement> = (e: FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  };

  const eventSubmitHandler: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const eventFocusHandler: FormEventHandler<HTMLInputElement> = (e: FormEvent<HTMLInputElement>) => {
    const searchInput = document.getElementById("search-results")! as HTMLInputElement;

    if (search.length > 0){
    }
    searchInput.classList.remove("hidden")
    searchInput.classList.add("flex")
  };

  const eventBlurHandler: FormEventHandler<HTMLInputElement> = (e: FormEvent<HTMLInputElement>) => {
    const searchInput = document.getElementById("search-results")! as HTMLInputElement;

    searchInput.classList.remove("flex")
    searchInput.classList.add("hidden")
  };

  return(
    <form onSubmit={eventSubmitHandler} className='relative'>
      <div id="search-bar" className="flex bg-white p-2 rounded-xl items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-6 h-6 invert opacity-50">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input onFocus={eventFocusHandler} onBlur={eventBlurHandler} onInput={eventInputHandler} value={search} type="text" autoComplete='off' id="search-input" placeholder="Search" className="text-black focus:outline-none ml-1 xl:text-2xl" />
      </div>
      <div id="search-results" autoFocus className="flex-col bg-white p-2 rounded-b-xl items-center absolute w-full ">

      </div>
    </form>
)};