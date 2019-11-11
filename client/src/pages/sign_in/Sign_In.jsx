import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';

import Copyright from '../../components/sign-in/Copyright';
import Form from '../../components/sign-in/Form';
import StyledSignIn from './Styled_Sign_in';

const Sign_In = () => {
  return (
    <StyledSignIn>
      <div className='sign-in'>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className='paper'>
            <Avatar className='avatar'>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Form />
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </StyledSignIn>
  )
}

export default Sign_In;