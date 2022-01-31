import { DotsHorizontalIcon, HeartIcon, PaperAirplaneIcon, BookmarkIcon, EmojiHappyIcon } from "@heroicons/react/outline"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-regular-svg-icons"
import Router, { useRouter } from 'next/router';
const Post = () => {
    const router = useRouter()

    return (
        <div className="bg-white my-7 border rounder-sm">
            <div className="flex items-center p-10 ">
                <div className="avatar mr-3">
                    <div className="rounded-full w-10 h-10">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"></img>
                    </div>
                </div>

                <p className="flex-1 text-sm font-semibold">
                    <button className="" type="button" onClick={() => router.push('/more_details')}>M.Lisa</button>
                </p>
                <DotsHorizontalIcon className="h-5" />
            </div>
            <img className="w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" />
            <div className="flex justify-between p-4">
                <div className="flex space-x-4 items-center">
                    <HeartIcon className="h-6 cursor-pointer" />
                    <FontAwesomeIcon className="cursor-pointer scale-x-[-1]" icon={faComment} size="lg" />
                    <PaperAirplaneIcon className="h-6 cursor-pointer rotate-[60deg] -translate-y-1" />
                </div>
                <BookmarkIcon className="h-6 cursor-pointer" />
            </div>
            <p className="px-4 truncate">
                <p className="font-semibold mb-1 text-sm">Bethoven and 23 others liked this</p>
                <span className="font-semibold mr-1 text-sm">M.Lisa</span>
                My man Leonardo coming through with that new brush. #feelingMyself
            </p>
            <div className="px-4 text-sm mb-1 text-gray-400 cursor-pointer">View all 14 comments</div>
            <div className="px-4 flex justify-between">
                <div>
                    <span className="font-semibold mr-1 text-sm">Nostradamus</span>Damn baby, looking fine!

                </div>
                <HeartIcon className="h-4 cursor-pointer" />
            </div>
            <div className="px-4 flex justify-between">
                <div>

                    <span className="font-semibold mr-1 text-sm">L.D.Vinci</span>Getting the 4k brush 2morrow, make sure you come ;)
                </div>

                <HeartIcon className="h-4 cursor-pointer" />
            </div>
            <div className="px-4 mt-2 text-gray-400 text-xs mb-4">2 days ago</div>
            <hr />
            <form action="" className="flex items-center p-4">
                <EmojiHappyIcon className="h-7 cursor-pointer mr-2" />
                <input type="text" className="border-none flex-1 focus:ring-0 outline-none" placeholder="Add a comment..." />
                <button className="font-semibold text-blue-400">Post</button>
            </form>
        </div>

    )
}

export default Post
