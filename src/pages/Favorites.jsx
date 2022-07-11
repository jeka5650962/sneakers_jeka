import Card from "../components/Card/Card";

function Favorites({items}) {
    return (
        <main className="content">
            <div className="block">
                <h1>Избранное</h1>
            </div>
            <div className="sneakers">
                {items
                    .map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            favorited={true}
                        />
                    ))}
            </div>
        </main>
    )
}

export default Favorites
