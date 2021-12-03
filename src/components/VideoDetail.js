import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const VideoDetail= ({ video })=>{
    if(!video) return <div>Loading...</div>

    const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`; // url of a single video which will serve as the src of the iframe object
    
    return(
        <React.Fragment>
            <Paper elevation={6} style={{ height: '70%'}}>
                <iframe frameBorder= "0" title="video player" width="100%" height="100%" src= {videoSrc} />
            </Paper>
            <Paper elevation={6} style={{ }}>
                <Typography variant="h4">{video.snippet.title - video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    )
    
}

export default VideoDetail;