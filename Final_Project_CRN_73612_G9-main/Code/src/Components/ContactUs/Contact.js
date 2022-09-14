import Footer from '../Footer/Footer'
import { Container, FormWrap, Icon, Form, FormButton, FormContent, FormH1, FormInput, FormLabel } from '../SignUp/SignUpPageElements'

const Services = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/" style={{ color: "#FFA500" }}>Orange Tech</Icon>

          <FormContent>
            <Form action="#">
              <FormH1>Contact Us</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput type='name' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Questions or Concerns</FormLabel>
              <FormInput type='email' required />
              <FormButton type='submit'> Submit </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      <Footer />

    </>
  )
}

export default Services