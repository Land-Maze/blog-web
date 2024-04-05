import type { PostDataType } from '../utils/types/MarkDown.ts'
import { colors } from '../utils/colors';
import { colorPickerLetter } from '../utils/colorPickerLetter.ts'
import { searchFirstFive } from "../utils/searchPosts.ts"
import { useEffect, useState, type FormEventHandler, type FormEvent, type MouseEventHandler, type MouseEvent } from "react"

type SearchBarProps = {
  data: PostDataType[];
  placeholder: string;
  noFoundText: string;
}

export default function SearchBar(props: SearchBarProps) {

  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState<PostDataType[]>([])
  
  useEffect(() => {
    if (search.length > 0){
      setSearchResults(searchFirstFive(search, props.data))
      document.getElementById("not_found")?.classList.add("flex")
    } else {
      setSearchResults([])
      document.getElementById("not_found")?.classList.remove("flex")
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
    console.log(e.currentTarget)
  };

  return(
    <form onSubmit={eventSubmitHandler} className='relative'>
      <div id="search-bar" className="flex bg-white p-2 rounded-xl items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-6 h-6 invert opacity-50">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input onFocus={eventFocusHandler} onBlur={eventBlurHandler} onInput={eventInputHandler} value={search} type="text" autoComplete='off' id="search-input" placeholder={props.placeholder} className="text-black focus:outline-none ml-1 xl:text-2xl" />
      </div>
      <div id="search-results" autoFocus className="flex-col text-white p-0 rounded-b-xl items-center absolute z-10 w-full">
        { searchResults.length > 0 ?
        searchResults.map((result, index) => {
          const tagColor = colorPickerLetter(result.tags[0][0])
          return(
            <div key={"search-" + index} onClick={eventClickHandler} className='flex flex-col
            border-2 border-t-0 first:border-t-0 bg-gray-900 border-background-shades-800 w-full text-sm cursor-pointer
            hover:scale-105 transition-all p-2 last:rounded-b-2xl'>
              <span className="text-white">
                {result.title}
              </span>
              <span className={`self-end text-2xs w-fit px-1 rounded-lg mt-1 ${colors[tagColor][0]} ${colors[tagColor][1]}`}>{result.tags[0]}</span>
            </div>
          )
        }) : <div hidden={(search.length == 0) ? true : false} id="not_found" className="flex-col
        border-2 border-t-0 first:border-t-0 bg-gray-800 border-background-shades-800 w-full text-lg rounded-b-2xl cursor-pointer 
        p-2">{props.noFoundText}</div>}
      </div>
    </form>
)};