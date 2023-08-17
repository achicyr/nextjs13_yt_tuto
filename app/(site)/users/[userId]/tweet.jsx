'use client'

import { useEffect, useState } from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HartIconFilled } from '@heroicons/react/24/solid'

const Tweet = ({ tweet,userId }) => {
    // console.log(tweet);
    // console.log(tweet.liked);
  const [isFirst, setIsFirst] = useState(true)
  const [likes, setLikes] = useState(tweet?.likes)
  const [liked, setLiked] = useState(tweet?.liked.indexOf(userId)!=-1)
  useEffect(() => {
  }, [])
  console.log(tweet);
  useEffect(() => {
    if (isFirst){
      setIsFirst(false)
      return
    } 



    // console.log(likes);
    // console.log(liked);
    // console.log(tweet);
    // console.log(userId);



    // const endpoint = liked
    //   ? `/api/tweets/${tweet.id}/like`
    //   : `/api/tweets/${tweet.id}/unlike`
    const endpoint = liked 
      ? `/api_/tweets/${tweet.id}___${userId}/like` 
      : `/api_/tweets/${tweet.id}___${userId}/unlike`

    fetch(endpoint, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(({tweet}) => {
        console.log(tweet);
        console.log(tweet.likes);
        setLikes(tweet?.likes)
      })
  }, [liked])

  const handleClick = () => {
    console.log(liked);
    setLiked(liked => !liked)
    console.log(liked);
  }

  return (
    <li className='my-3 rounded bg-stone-200 p-4 text-stone-500'>
      <div className='flex justify-between'>
        <p>{tweet.body}</p>
        <div className='flex items-center gap-2'>
          <button onClick={handleClick}>
            {liked ? (
              <HartIconFilled className='w-7 h-7 text-red-500' />
            ) : (
              <HeartIcon className='w-7 h-7 text-red-500' />
            )}
          </button>
          <span className='text-sm'>{likes}</span>
        </div>
      </div>
    </li>
  )
}

export default Tweet
