import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton';

const Mobile = props => {
  return (
    <div className='sectionMobile'>
      <IconButton
        aria-label="show more"
        // aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={() => console.log('handleMobileMenuOpen')}
        color="inherit"
      >
      </IconButton>
    </div>
  )
}

Mobile.propTypes = {

}

export default Mobile;