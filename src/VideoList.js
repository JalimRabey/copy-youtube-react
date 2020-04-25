import React, {Component} from 'react'
import dataList from './data'
import VideoBox from './VideoBox'
import './VideoList.css'

class VideoList extends Component{
  render(){
    console.log(dataList)
    const videoList = dataList.map((data, index) => (
      <VideoBox 
        key={index} 
        title={data.title} 
        avatar={data.avatar} 
        day={data.day} 
        user={data.user}
        duration={data.duration}
        videoImg={data.videoImg}
        views={data.views}
     />
    ))
    return (
      <div className="VideoList">
        <div className="VideoList-boxes">
          {videoList}
        </div>
      </div>
    )
  }
}

export default VideoList