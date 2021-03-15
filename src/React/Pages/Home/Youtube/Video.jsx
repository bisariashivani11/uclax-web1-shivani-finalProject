import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

//https://www.youtube.com/watch?v=jcnRt85t9UQ
//
//https://youtu.be/jcnRt85t9UQ

class Video extends React.Component {
    render() {
    const opts = {
        height: '390',
        width: '900',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        },
    };

    return (
      <VideoStyled  className='Video'>
        <YouTube videoId="jcnRt85t9UQ" opts={opts} onReady={this._onReady} />
        <h3><b>Latest trends in Interior Design</b><br></br>Checkouut our latest coverage by Inside Outside Magazine.</h3>
      </VideoStyled>
      );
    }
    _onReady(event) {
      // access to player in all event handlers via event.target
    event.target.pauseVideo();
    }
}

export default Video;

const VideoStyled = styled.div`
  text-align: center;
  margin-top: 90px;

  h3 {
    margin-top: 30px;
  }
`;