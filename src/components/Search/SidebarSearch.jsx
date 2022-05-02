import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from "@mui/icons-material/Search";
import TextField from '@mui/material/TextField';

import { FormatAlignJustify } from '@mui/icons-material';
import Typography from '@mui/material/Typography';



export default function SidebarSearch() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className='container-search'
    > <br></br> <br></br>

      <br></br> <br></br>
      <Typography
            variant="h8"
            noWrap
            component="div"
            // sx={{ mr: 1, display: { xs: 'flex', md: 'flex' } }}
            style={{ padding:'20px', whiteSpace: 'normal', wordWrap: 'break-word' }}
            className='text-search'
          > <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sem turpis, ullamcorper et felis et, molestie sagittis odio. Maecenas hendrerit commodo magna quis congue. In urna arcu, iaculis ac mi vitae, finibus commodo nibh. Praesent euismod risus elit, sed lobortis nibh pharetra a. Lorem ipsum dolor sit amet.</p>  </ Typography>
       <TextField id="outlined-basic" label="Buscar" variant="outlined"
          sx={{ width: 380, marginTop: 3, marginLeft: 4 }}
          placeholder="Busca aquí tu producto"
         />
    </Box>

  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}> <SearchIcon/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>

      ))}

    </div>
  );
}
