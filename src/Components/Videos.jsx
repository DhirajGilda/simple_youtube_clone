import { Stack,Box } from "@mui/material"
import ChannelCard from "./ChannelCard"
import VideoCard from "./VideoCard"

const Videos = ({videos}) => {
  console.log(videos);
  return (
    <div></div>
    // <Stack direction={"row"} flexWrap="wrap" justifyContent={"start"} gap={2}>
    //   {
    //     videos.map((item,idx)=>(
    //       <Box key={idx}>
    //         {item.id.videoID && <VideoCard video={item}/>}
    //         {item.id.channelID && <ChannelCard channelDetail={item}/>}
    //       </Box>
    //     ))
    //   }

    // </Stack>
  )
}

export default Videos