import React from "react";
import axios from "axios";
import {Routes, Route} from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {

    const [items, setItems] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [favorites, setFavorites] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState('')

    React.useEffect(() => {
        async function fetchData() {
            const cartResponse = await axios.get('https://62beabeb0bc9b125615c7d16.mockapi.io/cart')
            const favoritesResponse = await axios.get('https://62beabeb0bc9b125615c7d16.mockapi.io/favorites')
            const itemsResponse = await axios.get('https://62beabeb0bc9b125615c7d16.mockapi.io/items')

            setCartItems(cartResponse.data)
            setFavorites(favoritesResponse.data)
            setItems(itemsResponse.data)
        }

        fetchData()
    }, [])

    // добавление товаров в корзину
    const onAddGoToCart = (obj) => {
        try {
            if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
                axios.delete(`https://62beabeb0bc9b125615c7d16.mockapi.io/cart/${obj.id}`)
                setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
            } else {
                axios.post('https://62beabeb0bc9b125615c7d16.mockapi.io/cart', obj)
                setCartItems((prev) => [...prev, obj])
            }
        } catch (error) {
            alert('Не удалось добавить товар в Корзину')
        }
    }

    // добавление товаров в избранное
    const onAddToFavorites = async (obj) => {
        try {
            if (favorites.find((favObj) => favObj.id === obj.id)) {
                axios.delete(`https://62beabeb0bc9b125615c7d16.mockapi.io/favorites/${obj.id}`)
            } else {
                const {data} = await axios.post('https://62beabeb0bc9b125615c7d16.mockapi.io/favorites', obj)
                setFavorites((prev) => [...prev, data])
            }
        } catch (error) {
            alert('Не удалось добавить в Избранное')
        }
    }

    // удаление товаров из корзины
    const onRemoveItem = (id) => {
        axios.delete(`https://62beabeb0bc9b125615c7d16.mockapi.io/cart/${id}`)
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    // метод в связке с вводом данных в input поиска
    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className="wrapper">
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
            <div className="container">
                <Header onClickOpenCart={() => setCartOpened(true)}/>
                <Routes>
                    <Route path="/" element={
                        <Home
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            items={items}
                            onAddGoToCart={onAddGoToCart}
                            onAddToFavorites={onAddToFavorites}
                            cartItems={cartItems}
                        />
                    }/>
                    <Route path="/favorites" element={
                        <Favorites
                            items={favorites}
                            onAddToFavorites={onAddToFavorites}
                        />
                    }/>
                </Routes>
            </div>
        </div>
    )
}

export default App
