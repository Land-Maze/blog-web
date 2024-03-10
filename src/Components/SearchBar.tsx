import type { PostDataType } from '../utils/types/MarkDown.ts'
import { colors } from '../utils/colors';
import { colorPickerLetter } from '../utils/colorPickerLetter.ts'
import { searchFirstFive, type SearchResultType } from "../utils/searchPosts.ts"
import { useEffect, useState, type FormEventHandler, type FormEvent, type MouseEventHandler, type MouseEvent } from "react"

type SearchBarProps = {
  data: PostDataType[];
}

export default function SearchBar(props: SearchBarProps) {

  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResultType[]>(searchFirstFive("ma", props.data))
  
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
    const searchBox = document.getElementById("search-results")! as HTMLInputElement;
    const searchInput = document.getElementById("search-bar")! as HTMLInputElement;
    
    if (search.length > 0){
    }
    searchInput.classList.remove("rounded-xl")
    searchInput.classList.add("rounded-t-xl")
    
    searchBox.classList.remove("hidden")
    searchBox.classList.add("flex")
  };
  
  const eventBlurHandler: FormEventHandler<HTMLInputElement> = (e: FormEvent<HTMLInputElement>) => {
    const searchBox = document.getElementById("search-results")! as HTMLInputElement;
    const searchInput = document.getElementById("search-bar")! as HTMLInputElement;


    searchInput.classList.remove("rounded-t-xl")
    searchInput.classList.add("rounded-xl")

    searchBox.classList.remove("flex")
    searchBox.classList.add("hidden")
  };

  const eventClickHandler: MouseEventHandler<HTMLDivElement> = (e: MouseEvent<HTMLDivElement>) => {

  };

  return(
    <form onSubmit={eventSubmitHandler} className='relative'>
      <div id="search-bar" className="flex bg-white p-2 rounded-xl items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-6 h-6 invert opacity-50">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input onFocus={eventFocusHandler} onBlur={eventBlurHandler} onInput={eventInputHandler} value={search} type="text" autoComplete='off' id="search-input" placeholder="Search" className="text-black focus:outline-none ml-1 xl:text-2xl" />
      </div>
      <div id="search-results" autoFocus className="flex-col text-white p-0 rounded-b-xl items-center absolute z-10 w-full">
        {searchResults.map((result, index) => {
          const tagColor = colorPickerLetter(result.PostDataType.tags[0][0])
          return(
            <div key={"search-" + index} onClick={eventClickHandler} className='flex flex-col
            border-2 border-t-0 first:border-t-0 bg-background-shades-600 border-background-shades-400 w-full text-sm cursor-pointer 
            hover:scale-105 transition-all p-2 '>
              <span>{result.PostDataType.title}</span>
              <span className={`self-end text-2xs w-fit px-1 rounded-lg mt-1 ${colors[tagColor][0]} ${colors[tagColor][1]}`}>{result.PostDataType.tags[0]}</span>
            </div>
          )
        })}
      </div>
    </form>
)};