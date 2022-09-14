import React from 'react'
import { Container, FormWrap, Icon, Form, FormButton, FormContent, FormH1, FormH3, FormInput, FormLabel } from './AdminPageElements'
import Footer from '../Footer/Footer'

const Admin = () => {
  return (
    <div>
      <Container>
        <FormWrap>
          <Icon to="/" style={{ color: "#FFA500" }}>Orange Tech</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Admin Page</FormH1>


              <FormButton> Edit product database </FormButton>
              <div>
                .
              </div>
              <FormButton> Edit website </FormButton>
              <div>
                .
              </div>
              <FormButton> Edit coupons </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <Footer />
    </div>
  )
}

export default Admin