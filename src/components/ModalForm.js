import React from 'react'
import styled from "styled-components"
import CloseIcon from '@mui/icons-material/Close';

const ModalForm = () => {
    return (
        <Container>
            <div className='header'>
                <div>Basic Modal</div>
            </div>
            <hr/>
        </Container>
    )
}

export default ModalForm

const Container = styled.div`
.header{
  display: flex;
  flex-direction: row;
  justify-content: space-between
}
`