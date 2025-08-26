import React from 'react'


interface Props {
    searches: string[];
}
export const PreviousSearches = ({ searches }: Props) => {
    return (
        <div>
            <div className='previous-searches'>
                <h2>Previous searches</h2>
                <ul className="previous-searches-list">

                    {searches.map((gif) => (
                        <li key={gif}>{gif}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
