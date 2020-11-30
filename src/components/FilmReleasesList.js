import React from 'react';
import FilmReleasesItem from './FilmReleasesItem';

const FilmReleasesList = ({filmReleases}) => {

    const filmReleaseNodes = filmReleases.map(release => {
        return(
            <FilmReleasesItem name={release.name} key={release.id} url={release.url}></FilmReleasesItem>
        )
    }
    )

    return(
        <div className="film-release-list"> 
            <ul>
                {filmReleaseNodes}
            </ul>
        </div>
    )
}

export default FilmReleasesList;