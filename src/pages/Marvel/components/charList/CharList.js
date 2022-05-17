import "./charList.scss";
import { Component } from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMassage/ErrorMassage";

class CharList extends Component {
  state = {
    char: [],
    loading: true,
    newItemLoading: false,
    error: false,
    offset: 210,
    charEnded: false,

  };

  marverlServese = new MarvelService();

  updateAllChar = () => {
    this.onRequest();
  };

  componentDidMount() {
    this.updateAllChar();
  }

  onRequest = (offset) => {
    this.onCharListLoading();
    this.marverlServese
      .getAllCharacters(offset)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  onCharListLoading = () => {
    this.setState({
      newItemLoading: true,
    });
  };

  onCharLoaded = (newChar) => {
    let ended = false;
    if(newChar.length < 9){
        ended = true;
    }

    this.setState((state) => ({
      char: [... state.char,...newChar],
      loading: false,
      newItemLoading: false,
      offset: state.offset +9,
      charEnded: ended
    }));
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  render() {
    const { loading, error,offset,charEnded } = this.state;
    const content = this.state.char.map((item) => {
      return (
        <li
          className="char__item"
          key={item.id}
          onClick={() => this.props.onCharSelected(item.id)}
        >
          <img src={item.thumbnail} alt={item.nane} />
          <div className="char__name">{item.name}</div>
        </li>
      );
    });
    const spinner = loading ? <Spinner /> : null;
    const errors = error ? <ErrorMessage /> : null;

    return (
      <div className="char__list">
        {spinner}
        {errors}
        <ul className="char__grid">{content}</ul>
        <button className="button button__main button__long"
                disabled={this.state.newItemLoading}
                onClick={()=> this.onRequest(offset)}
                style={{'display': charEnded? 'none': 'block'}}
                >
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
