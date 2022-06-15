import React from 'react'
import { removeItem } from '../features/cartSlice'
import { useDispatch } from 'react-redux'
import Destination1 from "../assets/Destination1.png"
import styled from 'styled-components'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

const CartItem = ({ id, name,
    email, phone, website }) => {

    const data =
    {
        image: Destination1
    }

    //console.log("data", data)

    const dispatch = useDispatch()
    return (
        <Container>
            <div className='containerIn'><img src={data.image} alt="" />
                <div className='text'>
                    <div className='name'>{name}</div>
                    <div><EmailOutlinedIcon className='icon' />{email}</div>
                    <div><LocalPhoneOutlinedIcon className='icon' />{phone}</div>
                    <div><LanguageOutlinedIcon className='icon' />{website}</div>
                </div>
                <div className='buttonArea'>

                    {/*liked button */}
                    <BorderColorOutlinedIcon />
                    <DeleteOutlineOutlinedIcon onClick={() => dispatch(removeItem(id))} />
                </div>

            </div>


        </Container>
    )
}
export default CartItem;

const Container = styled.div`
margin:1rem;
display: flex;
flex-direction: row;
flex-wrap: wrap;
.containerIn{
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
 }
`
