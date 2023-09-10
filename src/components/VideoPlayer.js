import React from "react";
import { Link, useParams } from "react-router-dom";
import videoData from "../video-data.json";

const VideoPlayer = () => {
    const {id}  = useParams();
    const video = videoData.find((v) => v.id === parseInt(id));

    return (
        <div className="video-player">
            <div className="d-flex justify-content-center">
                <div className="card card-video-player">
                    <video className="video-player-body" controls autoPlay={true}>
                        <source src={`${video.url}`} type="video/mp4" />
                    </video>
                    <div className="card-body">
                        <p className="card-text-header">{video.title}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 back-page">
                    <button type="button" className="btn btn-danger">
                        <Link to="/" className="link-back">BACK</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;