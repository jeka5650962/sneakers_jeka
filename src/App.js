import './App.scss';
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Drawer from "./components/Drawer/Drawer";
import Card from "./components/Card/Card";
import SearchInput from "./components/SearchInput/SearchInput";

const arr = [
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: 'img/sneakers/1.jpg'},
    {title: 'Мужские Кроссовки Nike Air Max 270', price: 12599, imageUrl: 'img/sneakers/2.jpg'},
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: 'img/sneakers/3.jpg'},
    {title: 'Кроссовки Puma X Aka Future Rider', price: 8999, imageUrl: 'img/sneakers/4.jpg'},
    {title: 'Мужские Кроссовки Under Armour Curry 8', price: 15199, imageUrl: 'img/sneakers/5.jpg'},
    {title: 'Мужские Кроссовки Nike 7', price: 11299, imageUrl: 'img/sneakers/6.jpg'},
    {title: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799, imageUrl: 'img/sneakers/7.jpg'},
    {title: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499, imageUrl: 'img/sneakers/8.jpg'},
    {title: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 13999, imageUrl: 'img/sneakers/9.jpg'},
    {title: 'Мужские Кроссовки Nike Flytrap IV', price: 11299, imageUrl: 'img/sneakers/10.jpg'},
];

function App() {
    return (
        <div className="wrapper">
            <Drawer/>
            <div className="container">
                <Header/>
                <Slider/>
                <main className="content">
                    <div className="block">
                        <h1>Все кроссовки</h1>
                        <SearchInput/>
                    </div>
                    <div className="sneakers">
                        {arr.map(obj => (
                            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl}/>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;