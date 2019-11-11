import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import StyledForm from './Styled_Form';

const Form = () => {
  const onSubmit = e => {
    e.preventDefault();
  }
  return (
    <StyledForm>
      <form className='form' noValidate onSubmit={onSubmit}>
        <TextField
          name="email"
          label="Email Address"
          margin="normal"
          required
          fullWidth
          id="email"
        />
        <TextField
          name="password"
          label="Password"
          margin="normal"
          type="password"
          required
          fullWidth
          id="password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className='submit'
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </StyledForm>
  )
}

Form.propTypes = {

}

export default Form;