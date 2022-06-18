import React, { useState } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../app/store'
import { updateItem } from '../features/cartSlice'


const ModalForm = ({ user, closeModal }) => {
    const dispatch = useDispatch()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [website, setWebsite] = useState(user.website)

    const [formErrors, setFormErrors] = useState([])

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

    const submit = () => {
        let errors = []

        if (name.trim().length === 0) {
            errors.push('name_required')
        }

        if (email.trim().length === 0) {
            errors.push('email_required')
        }

        if (phone.trim().length === 0) {
            errors.push('phone_required')
        }

        if (website.trim().length === 0) {
            errors.push('website_required')
        }

        console.log(errors)

        if (errors.length === 0) {
            dispatch(updateItem({ id: user.id, name, email, phone, website }))
            closeModal()
        } else {
            setFormErrors(errors)
        }
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
                    <input type="text" id="name" className="name" value={name} onChange={nameChanged} />
                    {formErrors.includes('name_required') &&
                        <FormError>Name required</FormError>
                    }
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="email" value={email} onChange={emailChanged} />
                    {formErrors.includes('email_required') &&
                        <FormError>Email required</FormError>
                    }
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" className="phone" value={phone} onChange={phoneChanged} />
                    {formErrors.includes('phone_required') &&
                        <FormError>Phone required</FormError>
                    }
                </div>

                <div>
                    <label htmlFor="website">Website</label>
                    <input type="text" id="website" className="website" value={website} onChange={websiteChanged} />
                    {formErrors.includes('website_required') &&
                        <FormError>Website required</FormError>
                    }
                </div>

                <ButtonArea>
                    <div><input type="button" className='cancel' value="Cancel" onClick={closeModal} /></div>
                    <div><input type="button" className='submit' value="Ok" onClick={submit} /></div>
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

const FormError = styled.div`
color: red;
`