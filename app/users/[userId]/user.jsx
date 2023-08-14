import Image from 'next/image'
import Tweet from './tweet'

export default function User({user}) {

    // console.log(user);
    
    return (
        <section className='m-4 py-4'>
            <div>
                <div className="relative">
                    <Image src={user?.imageUrl} alt={user?.name} width="200" height="200" style={{objectFit:"contain"}} />
                </div>
                <h1 className="text-xl">{user?.name}</h1>
                <p className="text-sm">{user?.email}</p>
            </div>
            <div className="grow">
                <h2 className="text-2xl">Recent Tweets: </h2>
                <ul>
                    {user.tweets.map(tweet=><Tweet key={tweet.id} tweet={tweet} userId={user.id} />)}
                </ul>
            </div>
        </section>
    )
}
