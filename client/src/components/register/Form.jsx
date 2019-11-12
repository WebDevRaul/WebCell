import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import StyledForm from './Styled_Form';

const Form = props => {
  return (
    <StyledForm>
      <form className='form' noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstName"
              label="First Name"
              required
              fullWidth
              id="firstName"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="lastName"
              label="Last Name"
              required
              fullWidth
              id="lastName"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email Address"
              required
              fullWidth
              id="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              required
              fullWidth
              type="password"
              id="password"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className='submit'
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              Already have an account? Sign in
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