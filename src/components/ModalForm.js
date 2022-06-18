import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../app/store'


const ModalForm = ({ user, closeModal }) => {
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [website, setWebsite] = useState(user.website)

    const nameChanged = (e) => {
        setName(e.target.value)
    }

    const emailChanged = (e) => {
        setEmail(e.target.value)
    }

    const phoneChanged = (e) => {
        setPhone(e.target.value)
    }

    const websiteChanged = (e) => {
        setWebsite(e.target.value)
    }

    return (
        <div>
            <Header >
                <div>Basic Modal</div>
                <div className='close'>
                    <CloseIcon onClick={closeModal} />
                </div>
            </Header>
            <Form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="name" value={name} onChange={nameChanged} required />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="email" value={email} onChange={emailChanged} required />
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" className="phone" value={phone} onChange={phoneChanged} required />
                </div>

                <div>
                    <label htmlFor="website">Website</label>
                    <input type="text" id="website" className="website" value={website} onChange={websiteChanged} required />
                </div>

                <ButtonArea>
                    <div><input type="button" className='cancel' value="Cancel" onClick={closeModal} /></div>
                    <div><input type="button" className='submit' value="Ok" /></div>
                </ButtonArea>
            </Form>
        </div>
    )
}

export default ModalForm

const Form = styled.form`

input{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    &:focus{
      background-color: #e6f0f4;
    }
}
.website{
    margin-bottom: 64px;
}
`
const Header = styled.div`
font-weight: 600;
font-size: larger;
margin-bottom: 16px;
display: flex;
justify-content: space-between;
border-bottom: 1px solid gray ;
.close{
  color: gray;
    &:hover{
        cursor: pointer;
        color: black;
        transition: 0.6s ease-in-out;
    }
}
`

const ButtonArea = styled.div`
display: flex;
flex-direction: row;
margin: 12px;
justify-content: flex-end;
border-top: 1px solid gray ;
.cancel{
  background-color: white;
  &:hover{
      color: #189ad4;
      border-color: #189ad4;
      cursor: pointer;
      transition: 0.6s ease-in-out;
  }
}
.submit{
    background-color: #189ad4;
    color: white;
    &:hover{
     opacity: 0.6;
      cursor: pointer;
      transition: 0.6s ease-in-out;
  }
}

`