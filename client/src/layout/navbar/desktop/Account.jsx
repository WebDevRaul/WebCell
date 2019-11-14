import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

const Account = props => {
  return (
    <div className='account'>
      <IconButton
        edge="end"
        aria-label="account of current user"
        // aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => console.log('handleProfileMenuOpen')}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </div>
  )
}

Account.propTypes = {

}

export default Account;