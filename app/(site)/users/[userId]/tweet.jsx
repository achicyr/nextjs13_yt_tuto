'use client'
import {useEffect,useState} from 'react'
// import {HeartIcon} from '@heroicons/react/24/outline'
// import {HeartIcon as HeartIconFilled} from '@heroicons/react/24/outline'

export default function Tweet({tweet,userId}) {
    const [likes, setLikes] = useState(tweet?.likes)
    const [liked, setLiked] = useState(tweet.liked.indexOf(userId)!=-1)

    useEffect(()=>{
        if(liked===null)return

        const endpoint = liked ? `/api/tweets/${tweet.id}___${userId}/like` : `/api/tweets/${tweet}___${userId}/unlike`

        fetch(endpoint, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(({tweet}) => {
                setLikes(tweet?.likes)
            })
    }, [liked, tweet.id])

    const handleClick = () => setLiked(liked =>!liked)
    
    return (
        <li>
            <p>{tweet.body}</p>
            <div>
                <button onClick={handleClick}>
                    {liked ? (
                        <span className='heartFilled'>❤</span>
                    ) : (
                        <span>❤</span>
                    )}
                </button>
            </div>
        </li>
    )
}
