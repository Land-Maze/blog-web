import type { PostDataType } from './types/MarkDown'

export type SearchResultType = {
  PostDataType: PostDataType;
  highlightIndex: HighlightIndex;
}

type HighlightIndex = {
  start: number;
  end: number;
}

export const searchFull = (key: string, data: PostDataType[]) => {
  return key
}

export const searchFirstFive = (key: string, data: PostDataType[]) => {
  let result: SearchResultType[] = [];

  // = data.filter((post) => {
  //   return post.title.toLowerCase().includes(key.toLowerCase())
  // })

  for (let i = 0; i < data.length; i++) {
    if(data[i].title.toLowerCase().includes(key.toLowerCase())) {
      result.push({PostDataType: data[i], highlightIndex: {start: data[i].title.toLowerCase().indexOf(key.toLowerCase()), end: data[i].title.toLowerCase().indexOf(key.toLowerCase()) + key.length - 1}})
    }
  }

  // Now we have to sort the results by the index of the search term in the title
  result.sort((a, b) => {
    return a.highlightIndex.start - b.highlightIndex.start
  })

  console.log(result)
  return result;
}

export default { searchFull, searchFirstFive }