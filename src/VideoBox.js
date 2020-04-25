import React, {Component} from 'react'
import './VideoBox.css';

class VideoBox extends Component {
  render(){
    const {
      title,
      user,
      videoImg,
      avatar,
      views,
      day,
      duration
    } = this.props
    return (
      <div className="VideoBox" onClick={() => alert(`Video: ${title}`)}>
        {console.log(user)}
        <div className="VideoBox-imagem">
          <img src={videoImg}/>
          <div className="VideoBox-imagem-duration">{duration}</div>
        </div >
        <div className="VideoBox-content">
          <div className="VideoBox-content-avatar">
            <img src={avatar}/>
          </div>
          <div className="VideoBox-content-info">
            <div className="VideoBox-content-info-title" >
              <h1>{title}</h1>
            </div>
            <div className="VideoBox-content-info-description" >
              <h2>{user}</h2>
              <h2>{views} mil assistidos</h2>
              <h2>há {day} horas</h2>
            </div>
          </div>
          <div className="VideoBox-content-icon"></div>
        </div>
      </div>
    )
  }
}

export default VideoBox