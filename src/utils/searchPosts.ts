import type { PostDataType } from './types/MarkDown'

export type SearchResultType = {
  /**
   * @type {PostDataType} JSON object that represents a post
   */
  PostDataType: PostDataType;
  /** 
   * @type {number[]} Array of indexes that represent the index of the search term in the array of words that make up the title
   */
  highlightIndex: {start: number, end: number}[];
}

export const searchFull = (key: string, data: PostDataType[]) => {
  return key
}

export const searchFirstFive = (key: string, data: PostDataType[]) => {
  let result: SearchResultType[] = [];


  // Check if the search keyword is not empty or empty string
  const keyWordsSearch = key.toLowerCase().split(" ").filter((word) => {
    if(word.length > 0 && word !== "" && word !== " ") return true;
    return false;
  });

  // = data.filter((post) => {
  //   return post.title.toLowerCase().includes(key.toLowerCase())
  // })

  // for (let i = 0; i < data.length; i++) {
  //   if(data[i].title.toLowerCase().includes(key.toLowerCase())) {
  //     result.push({PostDataType: data[i], highlightIndex: {start: data[i].title.toLowerCase().indexOf(key.toLowerCase()), end: data[i].title.toLowerCase().indexOf(key.toLowerCase()) + key.length - 1}})
  //   }
  // }

  for(let i = 0; i < data.length; i++) {
    let resultTemp: SearchResultType = {PostDataType: data[i], highlightIndex: []};
    
    keyWordsSearch.forEach((word) => {
      let index = data[i].title.toLowerCase().indexOf(word);
      if(index > -1) {
        resultTemp.highlightIndex.push({start: index, end: index + word.length - 1});
      } else {
        data.splice(i, 1);
        return;
      }
    });

    if(resultTemp.highlightIndex.length > 0) result.push(resultTemp);
  }
  // let keyWordsData = data[i].title.split(" ");
  // console.log(keyWordsData)
  // // data[i].tags.join(" ").toLowerCase().split(" ").forEach((tag) => {keyWordsData.push(tag)});
  // let tempResult: SearchResultType = {PostDataType: data[i], highlightIndex: []};
  // for(let j = 0; j < keyWordsSearch.length; j++) {
  //   keyWordsData.forEach((word, index) => {
  //     if(word.toLowerCase().includes(keyWordsSearch[j])) {
  //       tempResult.highlightIndex.push(index);
  //     }
  //   });
  // }
  // if(tempResult.highlightIndex.length > 0) result.push(tempResult);

  // Now we have to sort the results by the index of the search term in the title
  // result.sort((a, b) => {
  //   return a.highlightIndex.start - b.highlightIndex.start
  // })

  // console.log(result)
  return result;
}

export default { searchFull, searchFirstFive }