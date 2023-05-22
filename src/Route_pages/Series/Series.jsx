import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Singlecontent from '../../components/singlecontent/Singlecontent'
import CustomPagination from '../../components/pagination/CustomPagination'
import Genres from '../../components/genres/Genres';
import useGenre from '../../Hooks/useGenre';

const Series = () => {

    const api_key = 'ad7222180e17532d634c8f4c01feb56e';

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres);

    const fetchMovies = async () => {
        const { data } = await axios.get(
            `http://localhost:8080/series?page=${page}`
        );

        setContent(data.results);
        setNumOfPages(data.total_pages);
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchMovies();
        // eslint-disable-next-line
    }, [genreforURL, page]);

    return (
        <div>
            <span className="pageTitle">TV Series</span>
            <Genres
                type="tv"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className="trending">
                {
                    content && content.map((c) => <Singlecontent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type="tv" vote_average={c.vote_average} />)
                }
            </div>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}
        </div>
    )
}

export default Series