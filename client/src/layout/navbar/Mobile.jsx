import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MailIcon from '@material-ui/icons/Mail';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

const Mobile = ({ open, setOpen }) => {
  
  const onToggle = e => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    };
    setOpen(!open);
  }

  return (
    <Drawer open={open} onClose={onToggle}>
      <div
        style={{ width: '90vw' }}
        role="presentation"
        onClick={onToggle}
        onKeyDown={onToggle}
      >
        <List>
          {['Home', 'iPhone', 'Samsung', 'Huawei', 'LG', 'Sony', 'Motorola'].map((text, index) => (
            <NavLink to={text} key={text}>
              <ListItem button style={{ margin: '10px 0', paddingLeft: '40px' }}>
                <ListItemText primary={text} />
                <ListItemIcon><ArrowForwardIosOutlinedIcon /></ListItemIcon>
              </ListItem>
              <Divider /> 
            </NavLink>
          ))}
        </List>
        <List>
          <ListItem button>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary='Sign In' />
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}

Mobile.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}

export default Mobile;