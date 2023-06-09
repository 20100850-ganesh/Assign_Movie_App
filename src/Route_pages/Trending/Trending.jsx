import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Singlecontent from '../../components/singlecontent/Singlecontent'
import './Trending.css'
import CustomPagination from '../../components/pagination/CustomPagination'

const Trending = () => {
    const api_key = 'ad7222180e17532d634c8f4c01feb56e';
    const [page, setPage] = useState(1);
    const [content, setcontent] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&page=${page}`);

        //console.log(data);

        setcontent(data.results);
    }

    useEffect(() => {
        window.scroll(0, 0);
        fetchTrending();
        // eslint-disable-next-line
    }, [page]);

    return (
        <div>
            <span className="pageTitle">Trending</span>
            <div className="trending">
                {
                    content && content.map((c) => <Singlecontent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type={c.media_type} vote_average={c.vote_average} />)
                }
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    )
}

export default Trending