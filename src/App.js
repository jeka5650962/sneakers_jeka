import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Drawer from "./components/Drawer/Drawer";
import Card from "./components/Card/Card";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {

    const [items, setItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch('https://62beabeb0bc9b125615c7d16.mockapi.io/items').then((res) => {
            return res.json();
        }).then(json => {
            setItems(json);
        })
    }, [])

    return (
        <div className="wrapper">
            {cartOpened && <Drawer onClose={() => setCartOpened(false)}/>}
            <div className="container">
                <Header
                    onClickOpenCart={() => setCartOpened(true)}
                />
                <Slider/>
                <main className="content">
                    <div className="block">
                        <h1>Все кроссовки</h1>
                        <SearchInput/>
                    </div>
                    <div className="sneakers">
                        {items.map((obj) => (
                            <Card
                                title={obj.title}
                                price={obj.price}
                                imageUrl={obj.imageUrl}
                                onClickPlusButton={() => console.log('Нажали на кнопку Плюс')}
                                onClickFavoritesButton={() => console.log('Добавили в Избранное')}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;