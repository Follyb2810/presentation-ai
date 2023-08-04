import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy';
import * as IMG from '../../component/images/img'

const videoPath = 'https://www.youtube.com/watch?v=re2JFITR7TI';

const View = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Container>
      <div className='bg-light rounded-3' style={{ height: '500px', position: 'relative' }}>
        <ReactPlayer
          url={videoPath}
          controls={false}
          playing={isPlaying}
          width='100%'
          height='100%'
        />
        <button
          className="play-pause-button"
          onClick={handlePlayPauseClick}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}
        >
          <img
            src={isPlaying ? IMG.Pause : IMG.Play1}
            alt={isPlaying ? 'Pause' : 'Play'}
            style={{ width: '100px', height: '100px' }}
          />
        </button>
      </div>
    </Container>
  );
};

export default View;
