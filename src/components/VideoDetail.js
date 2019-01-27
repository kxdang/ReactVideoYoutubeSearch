import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div className="ui active inverted">Loading...</div>;
    }

    const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className="ui segment">
            <div>
                <iframe title="videoplayer" src={videoSrc} />


            </div>
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    );
};

export default VideoDetail;