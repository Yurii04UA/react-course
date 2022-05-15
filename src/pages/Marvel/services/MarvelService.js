class MarvelService {
  
  _apiBase = `https://gateway.marvel.com:443/v1/public/`;
  _apiKey = `apikey=def8ee68493ef8fbd835548a5db3f26`;

  getResurse = async (url) => {
    let result = await fetch(url);

    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, status ${result.status}`);
    }

    return await result.json();
  };

  getAllCharacters = async () => {
    const result = await this.getResurse(
      `${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`
    );
    return result.data.results.map(this._transformCharacter);
  };
  getCharacter = async (id) => {
    const result = await this.getResurse(
      `${this._apiBase}characters/${id}?${this._apiKey}`
    );
    return this._transformCharacter(result.data.results[0]);
  };

  _transformCharacter = (res) => {
    return {
      name: res.name,
      description: res.description? `${res.description.slice(0,150)} ...`: 'Sorry,description not found',
      thumbnail:
        res.thumbnail.path +
        "." +
        res.thumbnail.extension,
      homepage: res.urls[0].url,
      wiki: res.urls[1].url,
    };
  };
}

export default MarvelService;
