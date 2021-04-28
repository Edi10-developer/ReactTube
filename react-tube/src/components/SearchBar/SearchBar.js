import React, { useState } from 'react';
import { SearchDiv } from './styles';

const SearchBar = props => {
    const [termsOfSearch, setTermsOfSearch] = useState('');
    return (
        <SearchDiv>
            <h3>Video search</h3>
            <input
                value={termsOfSearch}
                type="text"
                placeholder="Search"
                className="input-field"
                onInput={e => setTermsOfSearch(e.target.value)}
                onChange={props.onChange}
            />
        </SearchDiv>
    )
}
export default SearchBar;