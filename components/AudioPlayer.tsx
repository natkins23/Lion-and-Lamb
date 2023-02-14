'use client'

import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid'

// import FavoriteIcon from '@mui/icons-material/Favorite'

const AudioPlayer = ({ src }: { src: string }) => {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const audioRef = React.useRef<HTMLAudioElement>(null)

    const playButton = () => {
        if (audioRef.current) {
            if (isPlaying) {
                handlePause()
            } else {
                handlePlay()
            }
        }
    }
    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play()
            setIsPlaying(!isPlaying)
            console.log('playing')
        }
    }

    const handlePause = () => {
        if (audioRef.current) {
            audioRef.current.pause()
            setIsPlaying(false)
            console.log('paused')
        }
    }

    const handleEnded = () => {
        console.log('ended')
        setIsPlaying(false)
    }

    return (
        <>
            <div className="relative cursor-pointer pt-5" onClick={playButton}>
                <HeartIcon
                    className={`${
                        isPlaying && `animate-heartbeat`
                    } absolute heartIcon`}
                ></HeartIcon>
                <HeartIcon className={`heartIcon`}></HeartIcon>
                {/* <FavoriteIcon
                        className={`${
                            isPlaying && `animate-heartbeat`
                        } absolute  h-20 w-20  text-red-900  `}
                    ></FavoriteIcon>
                    <FavoriteIcon
                        className={` absolute w-20  bg-transparent text-red-900 h-20 `}
                    ></FavoriteIcon> */}
            </div>

            {/* <div
                    className={`${
                        isPlaying && `animate-heartbeat`
                    } absolute rounded-full w-52 h-10 bg-red-900`}
                ></div> */}
            {/* <div
                    className={`${
                        isPlaying && `animate-ping`
                    } absolute rounded-full w-52 h-10 bg-red-900`}
                ></div> */}
            <audio
                controls
                ref={audioRef}
                onEnded={handleEnded}
                src={src}
                className="absolute hidden"
            />
        </>
    )
}

export default AudioPlayer
