import Posts from "./Posts"
const Feed = () => {



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-4xl mx-auto">
            <section className="col-span-2 ">
                <Posts />
                {/* <Stories/> */}
            </section>
            <section className="">


            </section>
        </div>


    )
}


export default Feed
