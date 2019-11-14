import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import Search from './Search';
import Desktop from './desktop/Desktop';
import Mobile from './Mobile';

import StyledNavbar from './Styled_Navbar';

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const onOpenMenu = () => setOpen(!open);

  return (
    <StyledNavbar>
      <div className='navbar'>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className='menu-button'
              color="inherit"
              aria-label="open drawer"
              onClick={onOpenMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography className='title' variant="h6" noWrap>
              WebCell
            </Typography>
            <Search />
            <div className='desktop-mobile' />
              <Desktop />
              <Mobile open={open} setOpen={setOpen} />
            <div />
          </Toolbar>
        </AppBar>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;