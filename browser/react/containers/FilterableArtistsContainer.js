import React, { Component } from 'react';
import axios from 'axios';
import Artists from '../components/Artists'
import FilterInput from '../components/FilterInput'

export default class FilterableArtistsContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputValue: '',
            //artists: []
        }

        this.filterFunc = this.filterFunc.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleInputChange(event){
        this.setState({
            inputValue: event.target.value
        });

    }
    // getFilteredArtists(){
    //     axios.get('/api/artists')
    //         .then(res => res.data)
    //         .then(artists => this.setState({artists: artists}))
    //
    //     return this.state.artists.filter(filterFunc);
    // }

    filterFunc(artistObj){//returns true is str1 contains str2
        let str1 = artistObj.name.toLowerCase();
        let str2 = this.state.inputValue.toLowerCase();
        if(str1.indexOf(str2) > -1)
            return true;
        return false;

    }

    render(){
        const filteredArtists = this.props.artists.filter(this.filterFunc);
        return(
            <div>
                <FilterInput handleInputChange={this.handleInputChange}/>
                <Artists artists={filteredArtists}/>
            </div>
        )

    }

}