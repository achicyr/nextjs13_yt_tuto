import { unlikeTweet } from '@/lib/prisma/tweets'
import {NextResponse} from "next/server"



export async function PATCH(request, {params}){
  try {
    // const { tweetId } = req.query
    console.log(params.tweetId);
    const tweetId = params.tweetId.split("___")[0]
    const userId = params.tweetId.split("___")[1]

    const { tweet, error } = await unlikeTweet({ tweetId,userId })
    if (error) throw new Error(error)

    return NextResponse.json({ tweet }, {status: 200})
  } catch (error) {
    console.log("dans unlike");
    console.log(error);
    return NextResponse.json({ error: error.message }, {status: 500})
  }

}



// const handler = async (req, res) => {
//   if (req.method === 'PATCH') {
//     try {
//       const { tweetId } = req.query

//       const { tweet, error } = await unLikeTweet({ tweetId })
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
