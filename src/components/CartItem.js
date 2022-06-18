import React, { useEffect, useState } from 'react'
import { removeItem } from '../features/cartSlice'
import { useDispatch } from 'react-redux'
import axios from "axios"
import styled from 'styled-components'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import Modal from "react-modal"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DeleteIcon from '@mui/icons-material/Delete'

import LikeBtn from './LikeBtn'
import ModalForm from './ModalForm'

const CartItem = ({ id, username, name,
    email, phone, website }) => {

    const [svg, setSvg] = useState(null)
    const userData = {
        id, username, name, email, phone, website
    }

    useEffect(() => {
        createAvatar(username)
    }, [])

    const createAvatar = (username) => {
        const url = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`
        axios.get(url).then(response => {
            setSvg(response.data)
        })
    }

    //console.log("data", data)
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen)
    }

    function closeModal() {
        setIsOpen(false)
    }

    const dispatch = useDispatch()
    return (
        <Container>
            <div className='containerIn'>
                <div dangerouslySetInnerHTML={{ __html: svg }} style={{ width: 200, height: 200 }} />
                <div className='text'>
                    <div className='name'>{name}</div>
                    <div><EmailOutlinedIcon className='icon' />{email}</div>
                    <div><LocalPhoneOutlinedIcon className='icon' />{phone}</div>
                    <div><LanguageOutlinedIcon className='icon' />{website}</div>
                </div>
                <div className='buttonArea'>
                    <LikeBtn />
                    <div> <BorderColorOutlinedIcon className='editButton' onClick={toggleModal} />

                        <Modal
                            isOpen={isOpen}
                            onRequestClose={toggleModal}
                            style={customStyles}
                        >
                            <ModalForm user={userData} closeModal={closeModal} />
                        </Modal>
                    </div>

                    <DeleteIcon className='deleteButton' onClick={() => dispatch(removeItem(id))} />

                </div>

            </div>


        </Container>
    )
}
export default CartItem

const Container = styled.div`
display: flex;
flex-direction: row;
min-width: 240px;
flex-grow: 1;
margin-bottom: 20px;

.containerIn {
 border: 0.4px ridge #0002;
img{
  
}
 .text{
     text-align: left;
     align-items: center;
     padding: 1rem;
     letter-spacing: 0.01rem;
     .name{
         font-size: medium;
         font-weight: 600;
     }
     .email {
         font-size: 8px;
     }
  div{
     display: flex;
     align-items: center;
     .icon{
         color: gray;
         padding-right: 0.4rem;
     }
  }
     }
   
 }
 .buttonArea{
     background-color: #f5f5f5;
     padding: 2rem;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     &:hover {
          cursor: pointer;
        }
        .deleteButton,.editButton{
            &:hover{
                color:#189ad4;
            }
        }
 }
`
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        header: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }
    },

};
