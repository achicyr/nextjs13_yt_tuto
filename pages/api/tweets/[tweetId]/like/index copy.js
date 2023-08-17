import {likeTweet} from '@/lib/prisma/tweets_'

const handler = async (req,res) => {

    console.log("oui");
    console.log(req.query);
    
    if(req.method === "PATCH"){
        try {
            const tweetId = req.query.tweetId.split("___")[0]
            const userId = req.query.tweetId.split("___")[1]
            console.log("ok");

            const {tweet, error} = await likeTweet({tweetId,userId})
            if(error)throw new Error(error)

            return res.status(200).json({tweet})
        } catch (error) {
            return res.status(500).json({error:error.message})
        }
    }

    res.setHeader("Allow", ["PATCH"])
    res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler