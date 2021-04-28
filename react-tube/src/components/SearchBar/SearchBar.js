import React from 'react';
import { SearchDiv } from './styles';

const SearchBar = props => {
    return(
    <SearchDiv>
        <h3>Video search</h3>
        <input type="text" placeholder="Search" className="input-field" onChange={props.onChane} value={props.value} />
        <button onClick={props.onClick} placeholder="Search" />
    </SearchDiv>
    )
}
export default SearchBar;