import type { PostDataType } from './types/MarkDown'

export const searchFull = (key: string, data: PostDataType[]) => {
  return key
}

export const searchFirstFive = (key: string, data: PostDataType[]) => {
  let result: PostDataType[] = [];
  
  const keyWords = key.trim().split(" ");
  
  for(let i = 0; i < data.length; i++) {
    let keyWordMatches = 0;
    for(let j = 0; j < keyWords.length; j++) {
      if (data[i].title.toLowerCase().includes(keyWords[j].toLowerCase())) {
        keyWordMatches++;
      }
    }
    if(keyWordMatches === keyWords.length) result.push(data[i])
    if(result.length > 4) break;
  }

  return result;
}

export default { searchFull, searchFirstFive }