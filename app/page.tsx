import Image from 'next/image'
import ReactPlayer from 'react-player'
import React from 'react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center   py-10">
            <div className="flex gap-10">
                <Image src="/lion.png" alt="lion" width={100} height={100} />
                <h1 className=" relative  font-cursive  text-4xl py-10 inter.className">
                    Lion and Lamb
                </h1>
                <Image src="/sheep.png" alt="sheep" width={100} height={100} />
            </div>
            <div>
                <audio controls id="audio">
                    <source src="prey.mp3" />
                    Your browser does not support the <code>audio</code>{' '}
                    element.
                </audio>
            </div>
            <section className="relative flex flex-col items-center py-10">
                <Image
                    className="relative "
                    src="/chess.png"
                    alt="lion"
                    width={450}
                    height={450}
                />
                <br />

                <p className="relative  ">
                    It began with a game, all just in fun, <br />
                    Who knew that my heart would so soon succumb, indeed a new
                    love had begun! <br />
                    With each roll of the dice, every robber&apos;s move, <br />
                    You took hold of my heart, I had everything to prove,
                </p>
                <br />
                <p>
                    Lion and lamb, predator and prey, <br />
                    Such love seems impossible in every way, <br />
                    The lion roars, proud and courageous he may seem, <br />
                    Little did he know, his appearance seemed extreme. <br />
                </p>
                <br />
                <Image src="/roar.gif" alt="lion" width={450} height={450} />
                <br />
                <p>
                    The lamb, so gentle, seeks true love divine, <br />
                    At first, she saw flaws, she couldn&apos;t entwine <br />
                    His teeth were too sharp, his roar was too loud <br />
                    She didn&apos;t even care that he was well endowed, <br />
                </p>
                <br />
                <p>
                    But soon time went by, her perspective did shift, <br />
                    She realized his strength was a gift to uplift. <br />
                    His courage was freedom, they could do so much more, <br />
                    His love was a door, waiting to be opened with treasure in
                    store. <br />
                </p>
                <br />
                <Image src="/king.png" alt="king" width={450} height={450} />
                <br />
                <p>
                    Her heart opened wide, a warmth filled her soul, <br />
                    Her kindness the catalyst, her light he extolled. <br />
                    She couldn&apos;t resist, she had finally found, <br />
                    The one she truly missed, her heart beat such a resounding
                    sound. <br />
                </p>
                <br />

                <br />
                <Image
                    src="/sitting.png"
                    alt="sitting"
                    width={450}
                    height={450}
                />
                <br />

                <p>
                    The lion, once fierce, now purrs with her touch, <br />
                    Her love was his cure, grateful he was, for so much! <br />
                    Was he still a hunter, she still his prey? <br />
                    No! A bond formed by love, stronger than any force at play.
                </p>
                <br />
                <Image
                    src="/dance.png"
                    alt="sitting"
                    width={450}
                    height={450}
                />
                <br />
                <p>
                    Their steps in perfect rhythm, a dance of love, <br />
                    The lion leaps forward, four left paws from above, <br />
                    The lamb, carefree and graceful, prances with ease, <br />A
                    reminder that love knows no bounds and can conquer all
                    beasts.
                </p>
                <br />
                <p>
                    A lion and a lamb, forever in chase
                    <br />
                    No longer predator, no longer prey, <br />
                    Together they roamed, in an endless embrace.
                </p>
            </section>
            <video autoPlay muted width="450" height="auto" loop>
                <source src="running.mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
