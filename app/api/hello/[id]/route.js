import {NextResponse} from 'next/server'

export async function GET(request, {params}){
    const id = params.id
    , sort = request.nextUrl.searchParams.get('sort')
    // , sort = new URL(request.url).searchParams.get('sort')
    return NextResponse.json({message:'Hello, Next.js!', id, sort}, {status: 201})
}