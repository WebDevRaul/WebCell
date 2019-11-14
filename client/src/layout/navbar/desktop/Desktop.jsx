import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import Account from './Account';

const Desktop = props => {
  return (
    <div className='section-desktop'>
      <Account />
      <IconButton aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="secondary">
          <LocalMallOutlinedIcon />
        </Badge>
      </IconButton>
    </div>
  )
}

Desktop.propTypes = {

}

export default Desktop;