import React from "react";
import { Link, useParams } from "react-router-dom";
import videoData from "../video-data.json";

const VideoPlayer = () => {
    const {id}  = useParams();
    const video = videoData.find((v) => v.id === parseInt(id));

    return (
        <div className="video-player">
            <div className="row">
                <div className="col-12">
                    <div className="card card-video-header">
                        <video className="card-img-top" controls autoPlay={true}>
                            <source src={`${video.url}`} type="video/mp4" />
                        </video>
                        <div className="card-body">
                            <p className="card-text-header">{video.title}</p>
                        </div>
                    </div>
                    <div className="col-12 back-page"> 
                        <Link to="/">
                            <button type="button" className="btn btn-danger">BACK</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;