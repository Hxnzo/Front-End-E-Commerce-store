import React from 'react'
//import Link from 'react-scroll/modules/components/Link'
import Footer from '../Footer/Footer'
import { Link } from "react-router-dom";
import { Container, FormWrap, Icon, Form, FormButton, FormContent, FormH1, FormH3, FormInput, FormLabel } from './SignInPageElements'

const SignInPage = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/" style={{ color: "#FFA500" }}>Orange Tech</Icon>

                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign In To Your Account</FormH1>

                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormH3>To register, <Link to="/signup" style={{ color: '#FFA500' }}>SignUp</Link> here</FormH3>
                            <FormButton type='submit'>Continue</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

            <Footer />
        </>
    )
}

export default SignInPage