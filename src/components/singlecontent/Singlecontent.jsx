import React from 'react'
import { img_300, unavailable } from '../../config/config.js'
import './Singlecontent.css'
import { Badge } from "@material-ui/core";
import ContentModal from '../contentModal/ContentModal.jsx';

const Singlecontent = ({
    id, poster, title, date, media_type, vote_average
}) => {
    const releaseDate = new Date(date).toLocaleDateString();
    return (
        <ContentModal media_type={media_type} id={id}>
            <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"} />
            <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={`${title} image`} />
            <b className="title">{title}</b>
            <span className='subtitle'>{media_type === "tv" ? "TV Series" : "Movie"}
                <span className="subtitle">{releaseDate}</span>
            </span>
        </ContentModal>
    )
}

export default Singlecontent