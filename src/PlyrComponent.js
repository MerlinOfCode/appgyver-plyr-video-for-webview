import React from 'react'
import PropTypes from 'prop-types'
import plyr from 'plyr'
import 'plyr/dist/plyr.css'

/*const params = new URLSearchParams(window.location.search);
const paramValue = params.get("url");
if(paramValue. indexOf(".mp4") !== -1){
  var thumb = paramValue.replace(".mp4", ".png");
  }
else {var thumb = paramValue.replace(".webm", ".png");
}; */

//const thumbnail = thumb;
const paramValue = "https://res.cloudinary.com/wikacy-com/video/upload/q_auto/v1651114173/promos/superior-rahil-boobaram-visualization_hxtxv0.mp4"

class PlyrComponent extends React.Component {
  componentDidMount() {
    this.player = new plyr('.js-plyr', this.props.options)
    this.player.source = this.props.sources
  }

  componentWillUnmount() {
    this.player.destroy()
  }

  render() {
    return (
      <video className='js-plyr plyr'>
      </video>
    )
  }
}

PlyrComponent.defaultProps = {
  options: {
    controls: [
      'rewind',
      'play',
      'fast-forward',
      'progress',
      'current-time',
      'duration',
      'mute',
      'volume',
      'settings',
      'fullscreen',
    ],
    i18n: {
      restart: 'Restart',
      rewind: 'Rewind {seektime}s',
      play: 'Play',
      pause: 'Pause',
      fastForward: 'Forward {seektime}s',
      seek: 'Seek',
      seekLabel: '{currentTime} of {duration}',
      played: 'Played',
      buffered: 'Buffered',
      currentTime: 'Current time',
      duration: 'Duration',
      volume: 'Volume',
      mute: 'Mute',
      unmute: 'Unmute',
      enableCaptions: 'Enable captions',
      disableCaptions: 'Disable captions',
      download: 'Download',
      enterFullscreen: 'Enter fullscreen',
      exitFullscreen: 'Exit fullscreen',
      frameTitle: 'Player for {title}',
      captions: 'Captions',
      settings: 'Settings',
      menuBack: 'Go back to previous menu',
      speed: 'Speed',
      normal: 'Normal',
      quality: 'Quality',
      loop: 'Loop',
    },
  },
  sources: {
    type: 'video',
    sources: [
      {
        src: paramValue,
        type: 'video/mp4',
        size: 1080,
      },
      {
        src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_1920_18MG.mp4',
        type: 'video/mp4',
        size: 1080,
      },
    ],
  }
}

PlyrComponent.propTypes = {
  options: PropTypes.object,
  sources: PropTypes.object,
  source: PropTypes.func,
  destroy: PropTypes.func
}

export default PlyrComponent