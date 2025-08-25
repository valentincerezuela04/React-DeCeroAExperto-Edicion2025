import React from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/previousSearches'
import { GifsList } from './gifs/GifsList'
export const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <CustomHeader title='My gifs' description='this is the description' />

            {/* search */}
            <SearchBar placeholder='Search gifs' />

            <PreviousSearches />

            <GifsList gifs={mockGifs} />


        </>
    )
}
