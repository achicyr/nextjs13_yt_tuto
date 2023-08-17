import prisma from "."

export async function likeTweet({tweetId,userId}){
    try {
        console.log(1);
        const t = await getTweetById(tweetId)
        let tweet
        console.log(2);
        console.log(t);
        if(!t.tweet.liked.find(userLikedId=>userLikedId==userId)){
            console.log("liking");
            console.log(t.tweet.liked);
            t.tweet.liked.push(userId)
            console.log(t.tweet.liked);
            tweet = await prisma.tweet.update({
                where: {id: tweetId}
                , data: {
                    likes: {
                        increment: 1
                    }
                    , liked: t.tweet.liked
                }
            })
        }
        console.log(3);
        return tweet?{tweet}:{tweet:t}
    } catch (error) {
        return {error}
    }
}

export async function unlikeTweet({tweetId,userId}){
    try {
        console.log("1!");
        const t = await getTweetById(tweetId)
        let tweet
        console.log("2!");
        console.log(t);
        if(t.tweet.liked.find(userLikedId=>userLikedId==userId)){
            console.log("unliking");
            console.log(t.tweet.liked);
            const liked = t.tweet.liked.filter(userLikedId=>userLikedId!=userId)
            console.log(liked);
            tweet = await prisma.tweet.update({
                where: {id: tweetId}
                , data: {
                    likes: {
                        decrement: 1
                    }
                    , liked
                }
            })
        }
        console.log("3!");
        return tweet?{tweet}:{tweet:t}
    } catch (error) {
        return {error}
    }
}

export async function getTweetById(id){
    try {
        const tweet = await prisma.tweet.findUnique({where: {id}})
        return {tweet}
    } catch (error) {
        return {error}
    }
}