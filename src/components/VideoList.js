import React from "react";
import videoData from "../video-data.json";
import { Link } from "react-router-dom";


const VideoList = () => {
    // const onMouseOverVideo = (e) => {
    //     e.target.play();
    // }
    // const onMouseOutVideo = (e) => {
    //     e.target.pause();
    // }

    return (
        <div className="video-list">
            <header className="video-list-header">
                VIDEO CHANNEL
            </header>
            <div className="row">
                {videoData.map((item) => (
                    <div className="col-md-3" key={item.id}>
                        <div className="card h-100">
                            <Link to={`/video/${item.id}`}>
                                {/* <video className="card-video" 
                                    // muted loop 
                                    // onMouseOver={onMouseOverVideo} 
                                    // onMouseOut={onMouseOutVideo}
                                >
                                    <source src={`/videos/${item.url}`} type="video/mp4"/>
                                </video> */}
                                <img src={`/videos/${item.img}`} alt={`${item.img}`} className="card-img-top"></img>
                            </Link>
                            <div className="card-body">
                                <p className="card-text-header">{item.title}</p>
                                <p className="card-text-body">Click on the video to view</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VideoList;