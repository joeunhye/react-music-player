import React from "react";
import './SongDetail.scss'

export default function SongDetail() {
	return (
		<>
			<div className="header">
				<span>Now Playing</span>
			</div>
			<div className="img-area">
				<img src="" alt="" />
			</div>
			<div className="music-info">
				<p className="song">노래 제목</p>
				<p className="artist">아티스트 이름</p>
			</div>
		</>
	)
	
}
