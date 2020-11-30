import React from 'react';

const FilmReleasesItem = ({name, url}) => {
    return(
            <li><h3><a href={url} target="_blank" >{name}</a></h3></li>
    )
}

export default FilmReleasesItem;