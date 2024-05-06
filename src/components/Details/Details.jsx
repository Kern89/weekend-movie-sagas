import { Button } from "@mui/material";
import { useHistory } from "react-router-dom"
function DetailsView() {
    const history = useHistory();
    const goToMovieList = () => {
        history.push('/')
    }
    return(
        <>
        <Button onClick={goToMovieList} data-testid="toList" >Back to movie list</Button>
        </>
    )
};

export default DetailsView;