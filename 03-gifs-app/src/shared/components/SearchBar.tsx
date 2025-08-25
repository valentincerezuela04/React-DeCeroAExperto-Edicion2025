import React from 'react'
interface Props {
    placeholder?: string
}
export const SearchBar = ({ placeholder = 'search' }: Props) => {
    return (
        <div>
            <div className="search-container">
                <input type="text" placeholder={placeholder} />
                <button>Search</button>
            </div>
        </div>
    )
}

