import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Singlecontent from '../../components/singlecontent/Singlecontent'
import CustomPagination from '../../components/pagination/CustomPagination'
import Genres from '../../components/genres/Genres';
import useGenre from '../../Hooks/useGenre';

const Movies = () => {


    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres);

    //console.log("Content before fetch = " + content);

    const fetchMovies = async () => {
        const { data } = await axios.get(
            `http://localhost:8080/movies?page=${page}`
        );
        //console.log("Data = " + data.total_pages);
        setContent(data);
        setNumOfPages(data.length);
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchMovies();
        // eslint-disable-next-line
    }, [genreforURL, page]);


    return (
        <div>
            <span className="pageTitle">Movies</span>
            <Genres
                type="movie"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className="trending">
                {
                    content && content.map((c) => <Singlecontent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type="movie" vote_average={c.vote_average} />)
                }
            </div>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}
        </div>
    )
}

export default Movies