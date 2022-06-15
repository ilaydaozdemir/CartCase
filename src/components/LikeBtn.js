import React, { useState } from 'react'
import styled from "styled-components"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const LikeBtn = () => {
    const [like, setLike] = useState(false);
    return (
        <Conatiner onClick={() => setLike((prevLike) => !prevLike)}>
            {like ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
        </Conatiner>
    )
}

export default LikeBtn

const Conatiner = styled.div`
 color:red
`