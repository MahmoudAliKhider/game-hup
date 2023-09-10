import React, { useState } from 'react'
import useGenres from '../hooks/useGenres'

const GenreList = () => {
    const { genres } = useGenres();
    return (
        <ul>
            {genres.map(gener => <li key={gener.id}>{gener.name}</li>)}
        </ul>
    )
}

export default GenreList