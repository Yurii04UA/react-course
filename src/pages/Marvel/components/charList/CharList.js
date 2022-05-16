import './charList.scss';
import { Component } from 'react';
import MarvelService from '../../services/MarvelService'
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMassage/ErrorMassage'





class CharList extends Component{
    state ={
        char: [],
        loading:true,
        error: false,
    }

    marverlServese = new MarvelService();
    
    updateAllChar = () => {
        this.marverlServese
            .getAllCharacters()
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    componentDidMount(){
        this.updateAllChar()
    }
    
    onCharLoaded = (char)=>{
        this.setState({
            char,
            loading:false
        })
    }

    onError = () => {
        this.setState({
            loading:false,
            error: true
        })
    }
    
    render() {
        const {loading,error} = this.state
        const content = this.state.char.map((item) => {
            return (
            <li className="char__item" key={item.id}>
                <img src={item.thumbnail} alt={item.nane}/>
                <div className="char__name">{item.name}</div>
            </li>)
        })
        const spinner = loading ? <Spinner />: null
        const errors = error ? <ErrorMessage /> : null
        
        return (
            <div className="char__list">
                {spinner}
                {errors}
                <ul className="char__grid"> 
                {content}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;