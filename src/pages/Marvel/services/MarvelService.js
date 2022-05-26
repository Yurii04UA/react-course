import useHttp from "../components/hooks/http.hook";

const useMarvelService =() => {
  const {loading,error,request,clearError} = useHttp()
  
 const _apiBase = `https://gateway.marvel.com:443/v1/public/`;
 const _apiKey = `apikey=def8ee68493ef8fbd835548a5db3f260`;
 const _baseOffset = 210
 const _baseOffsetComics = 210

 

 const  getAllCharacters = async (offset = _baseOffset) => {
    const result = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
    );
    return result.data.results.map(_transformCharacter);
  };
  const getCharacter = async (id) => {
    const result = await request(
      `${_apiBase}characters/${id}?${_apiKey}`
    );
    
    return _transformCharacter(result.data.results[0]);
  };

  const getAllComics = async(offset = _baseOffsetComics) =>{
    const result = await request(`${_apiBase}comics?orderBy=-title&limit=9&offset=${_baseOffsetComics}&${_apiKey}`)
    console.log(result.data.results.map(_transformComics));
    return result.data.results
  }

  

 const  _transformCharacter = (res) => {
    return {
      name: res.name,
      description: res.description? `${res.description.slice(0,150)} ...`: 'Sorry,description not found',
      thumbnail:
        res.thumbnail.path +
        "." +
        res.thumbnail.extension,
      homepage: res.urls[0].url,
      wiki: res.urls[1].url,
      id: res.id,
      comics:res.comics.items
    };
  };

  const _transformComics = (result) => {
    return {
      title: result.title,
      id: result.id,
      description: result.description?  result.description: 'Sorry,description not found',
      pageCount: result.pageCount <1? 'Sorry. Information not found' : result.pageCount,
      prices: result.prices[0].price <0.2? 'Sorry. Information not found' : result.prices[0].price,
      language: result.textObjects[0].language

    }
  }





  return {loading,error,getCharacter,getAllCharacters,clearError,getAllComics}
}

export default useMarvelService;
