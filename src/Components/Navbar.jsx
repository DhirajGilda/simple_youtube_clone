import { Search } from '@mui/icons-material'
import { Box, Stack,Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

import { logo } from '../utils/constants'
import { width } from '@mui/system'


const Navbar = () => {
  return (
    <Stack 
        direction="row" 
        alignItems="center" 
        sx={{position:{md:'sticky'} , background:'#000',top :0 ,left:0,justifyContent:'space-between',zIndex:100,p:2}}
    >
        <Link to={"/"} style={{display:'flex' , alignItems:'center'}}>
            <img src={logo} alt="logo" height={'45'}/>
        </Link>

        <Stack direction={'row'} alignItems="center" sx={{justifyContent:{md:'space-between' ,xs:"flex-end"},width:{md:"95%",xs:"85%"}}} gap={8} >
          <Typography className="copyright"  sx={{ mt: 1.5,mb:1, color: "#fff",typography:{md:'h5',sx:'caption'} } } >
              Copyright © 2022 Dhiraj Gilda
          </Typography>

          <SearchBar/>
          
        </Stack>
        

    </Stack>
  )
}

export default Navbar