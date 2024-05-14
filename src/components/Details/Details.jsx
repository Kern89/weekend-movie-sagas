import { Button } from "@mui/material";
import { useHistory, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import './Details.css'

function DetailsView() {
    const params = useParams();
    const movieId = params.id
    const history = useHistory();
    const dispatch = useDispatch();
    const selectedDetails = useSelector(store => store.genres);

    useEffect(() => {
        dispatch({ type: 'GET_GENRES', payload: movieId});
    },[]);

    const goToMovieList = () => {
        history.push('/')
    }
    if (selectedDetails[0]) {
        return(
            <div key={selectedDetails[0].id}>
            <h3>{selectedDetails[0].title}</h3>
            <img src={selectedDetails[0].poster} alt={selectedDetails[0].title}/>
            <br />
            {selectedDetails.map(movie => (
                <h6 key={movie.id}>
                    {movie.name}
                </h6>
            ))}
            <p>{selectedDetails[0].description}</p> 
            <Button onClick={goToMovieList} data-testid="toList" >Back to movie list</Button>
            </div>
        )
    } else {
        return(
            <p>Loading</p>
        )
    }
};

export default DetailsView;