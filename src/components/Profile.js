import { useState } from 'react';
import { Avatar, Menu, MenuItem, Typography } from '@mui/material';

function Profile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Avatar
        sx={{
          bgcolor: '#FF5E78',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          '&:hover': { transform: 'scale(1.1)' },
        }}
        onClick={handleClick}
      >
        U
      </Avatar>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ '& .MuiPaper-root': { bgcolor: '#0A071F', color: '#B8A7FF' } }}
      >
        <MenuItem onClick={handleClose}>
          <Typography>Profile</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography>Settings</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Profile;