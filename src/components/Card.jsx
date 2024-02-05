function Card({title, imgURL, isVisited, children}) {
    /*const title = "Tokyo";
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis consequuntur sequi amet aliquid. Molestias."
    const imgURL = "https://images.unsplash.com/photo-1544885935-98dd03b09034?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"*/
    //const visitedLabel = (isVisited ? "✅" : "❌ non") + " visitata";

    return (
        <div className="rounded-md bg-zinc-950">
            <img 
                src= {imgURL}
                alt=""
            ></img>
            <div className="flex flex-col p-4">
                <h2 className=" text-2xl text-white font-bold">{title}</h2>
                <p className="text-gray-500">{children}</p>
                {/*<span>{visitedLabel}</span>*/}
                {isVisited && <span>✅ visitata</span>}
                {!isVisited && <span>❌ non visitata</span>}
            </div>
        </div>
    );
}

export default Card;