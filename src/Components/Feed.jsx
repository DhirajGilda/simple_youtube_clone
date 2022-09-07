import {useState,useEffect} from 'react'
import { Box,Stack,Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const Feed = () => {

  const [selectedCategory ,setselectedCategory]=useState('New')
  const [videos , setVideos] =useState([]);

  useEffect(() => {
    // setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
  }, [selectedCategory]);


  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box sx={{
          position: "relative",
          justifyContent: "space-between",
          alignItems: "center",
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}>
            <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setselectedCategory} />  
        </Box>

        <Box px={3} sx={{overflowY:'auto',height:'92vh',flex:'2'}}>
            <Typography variant='h4' fontWeight={"bold"} mb={2} sx={{color:'white'}}>
               {selectedCategory || 'Recommended'} <span style={{color:'#F31503'}}>Videos</span>
            </Typography>

            <Videos videos={videos}/>
        </Box>

    </Stack>
  )
}

export default Feed

