import Card from "../components/Card/Card";

function Favorites({items, onAddToFavorites}) {
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
                            {...item}
                            liked={true}
                            onClickFavoritesButton={onAddToFavorites}
                        />
                    ))}
            </div>
        </main>
    )
}

export default Favorites
