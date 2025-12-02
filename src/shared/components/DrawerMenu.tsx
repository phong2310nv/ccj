import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@icons/menu.svg';
import { useDeviceSize } from '@shared/hooks/useDeviceSize';
import CloseIcon from '@mui/icons-material/Close';
import { LinkItems } from '@shared/constant';
function DrawerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = () => {
    setMenuOpen(false);
  };
  const { isMobile } = useDeviceSize();
  return (
    <Box display={{ xs: 'block', lg: 'none' }}>
      <IconButton onClick={() => setMenuOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        disableScrollLock
        hideBackdrop={false}
        variant='temporary'
        sx={{
          ['& .MuiDrawer-paper']: {
            background: '#20344D',
            borderBottomLeftRadius: isMobile ? '16px' : 0,
            borderBottomRightRadius: isMobile ? '16px' : 0,
          },
        }}
        ModalProps={{ keepMounted: true }}
        anchor={isMobile ? 'top' : 'right'}
        open={menuOpen}
        onClose={handleClose}
      >
        <Box width={isMobile ? 'auto' : 365} color='white' px={8} py={6}>
          <Stack direction='row' justifyContent='end'>
            <IconButton size='large' onClick={handleClose} sx={{ color: 'white' }}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <List>
            {LinkItems.map((item, index) => (
              <ListItem key={item.title} disablePadding component='a' href={item.href}>
                <ListItemButton
                  sx={{
                    borderBottom:
                      isMobile && index === LinkItems.length - 1 ? 'none' : '1px solid white',
                    py: 4,
                    fontWeight: 500,
                    ['&:hover']: { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                  }}
                  onClick={handleClose}
                >
                  <ListItemText
                    disableTypography
                    sx={theme => ({
                      textAlign: isMobile ? 'center' : 'right',
                      color: item.isSpecial ? theme.palette.primary.main : 'white',
                    })}
                  >
                    {item.title}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default DrawerMenu;
