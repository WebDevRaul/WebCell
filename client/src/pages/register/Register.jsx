import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Copyright from '../../components/register/Copyright';
import Form from '../../components/register/Form';

import StyledRegister from './Styled_Register';

const Register = () => {
  return(
    <StyledRegister>
      <div className='register'>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className='paper'>
            <Avatar className='avatar'>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
          </div>
          <Form />
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </StyledRegister>
  )
}

export default Register;