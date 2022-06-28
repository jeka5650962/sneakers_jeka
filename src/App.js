import './App.scss';
import Header from "./components/Header";
import Slider from "./components/Slider";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

const arr = [
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999},
    {name: 'Мужские Кроссовки Nike Air Max 270', price: 12999},
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499},
    {name: 'Кроссовки Puma X Aka Future Rider', price: 8999},
    {name: 'Мужские Кроссовки Under Armour Curry 8', price: 15199},
    {name: 'Мужские Кроссовки Nike 7', price: 11299},
    {name: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799},
    {name: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499},
    {name: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 13999},
    {name: 'Мужские Кроссовки Nike Flytrap IV', price: 11299},
]

function App() {
    return (
        <div className="wrapper">
            <Drawer/>
            <div className="container">
                <Header/>
                <Slider/>
                <main className="content">
                    <div className="block">
                        <h1 className="block__title">Все кроссовки</h1>
                        <div className="block__input">
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                                    stroke="#ececec" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            <input placeholder={'Поиск...'} type="text"/>
                        </div>
                    </div>
                    <div className="sneakers">
                        <Card/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;