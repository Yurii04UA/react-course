import useHttp from "../components/hooks/http.hook";

const useMarvelService =() => {
  const {loading,error,request} = useHttp()
  
 const _apiBase = `https://gateway.marvel.com:443/v1/public/`;
 const _apiKey = `apikey=def8ee68493ef8fbd835548a5db3f260`;
 const _baseOffset = 210


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
  return {loading,error,getCharacter,getAllCharacters}
}

export default useMarvelService;
