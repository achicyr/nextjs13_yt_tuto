import { likeTweet } from '@/lib/prisma/tweets'
import {NextResponse} from "next/server"

// const handler = async (req, res) => {
//   if (req.method === 'PATCH') {
//     try {
//       // const { tweetId } = req.query
//       const tweetId = req.query.tweetId.split("___")[0]
//       const userId = req.query.tweetId.split("___")[1]

//       const { tweet, error } = await likeTweet({ tweetId,userId })
//       if (error) throw new Error(error)

//       return res.status(200).json({ tweet })
//     } catch (error) {
//       return res.status(500).json({ error: error.message })
//     }
//   }

//   res.setHeader('Allow', ['PATCH'])
//   res.status(425).end(`Method ${req.method} is not allowed.`)
// }

// export default handler




export async function PATCH(request, {params}){
  try {
    // const { tweetId } = req.query
    console.log('ok');
    console.log(params.tweetId);
    const tweetId = params.tweetId.split("___")[0]
    const userId = params.tweetId.split("___")[1]

    const { tweet, error } = await likeTweet({ tweetId,userId })
    console.log('okok');
    console.log(tweet);
    console.log(error);
    if (error) throw new Error(error)

    return NextResponse.json({ tweet }, {status: 200})
  } catch (error) {
    return NextResponse.json({ error: error.message }, {status: 500})
  }

}