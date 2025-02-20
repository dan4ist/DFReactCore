import { useState } from 'react';
import { NavLink } from 'react-router';
import { AppBar, Toolbar, IconButton, Typography, Box, Menu, MenuItem } from '@mui/material';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import MenuIcon from '@mui/icons-material/Menu';

export function NavMenu() {
    const [anchorNav, setAnchorNav] = useState(null);
    const openMenu = (event) => {
        setAnchorNav(event.currentTarget);
    };
    const closeMenu = () => {
        setAnchorNav(null);
    };

    const pages = ['About', 'Resume', 'Sandbox', 'Canvas']

	return (
        <AppBar position='static' style={{ backgroundColor: '#142' }}>
            <Toolbar>

                {/* FULL SCREEEN MENU*/}
                <NavLink to='/' style={{color: 'inherit'}}>
                    <IconButton size='large' edge='start' color='inherit' sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <FilterDramaIcon />
                    </IconButton>
                </NavLink>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>Daniel T. Forrest</Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <NavLink to={'/' + page} key={page} style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>
                            <MenuItem>
                                {page}
                            </MenuItem>
                        </NavLink>
                    ))}
                </Box>

                {/* SMALL SCREEEN MENU*/}
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton size='large' edge='start' color='inherit' onClick={openMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                        transformOrigin={{ vertical: -100, horizontal: -50 }}
                        open={Boolean(anchorNav)}
                        onClose={closeMenu}
                        sx={{ display: { xs: 'flex', md: 'none' } }}>
                            {pages.map((page) => (
                                <NavLink to={'/' + page} key={page} style={{ textDecoration: 'none', color: 'inherit', display: 'block', width: '100%' }}>
                                    <MenuItem>
                                        {page}
                                    </MenuItem>
                                </NavLink>
                            ))}
                    </Menu>
                </Box>
                <IconButton size='large' edge='start' color='inherit' sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <FilterDramaIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>Daniel T. Forrest</Typography>
            </Toolbar>
        </AppBar>
	);
}

export default NavMenu;