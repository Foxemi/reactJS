import React from 'react'
import ReactDom from 'react-dom/client'
import { restaurants } from '../materials/mock'

ReactDom.createRoot(document.getElementById("root")).render(
    <div>
        {/* {restaurants.map((item) => (
        <div key={item.id}>
            <h1>{item.name}</h1>
            <h3>MENU</h3>
            <ul>
            {item.menu.map((value) => (
                <li key={value.id}>
                    <span>{value.name} </span>
                    <span>{value.price}$</span>
                </li>
            ))}
            </ul>
            <h3>REVIEWS</h3>
            <ul>
            {item.reviews.map((value) => (
                <li key={value.id}>
                    <span>{value.user} </span>
                    <span>{value.text} </span>
                    <span>{value.rating}</span>
                </li>
            ))}
            </ul>
        </div>
        ))} */}
        {/* а можно и руками поработать */}
        <div key={restaurants[0].id}>
            <h1>{restaurants[0].name}</h1>
            <h3>MENU</h3>
            <ul>
                <li key={restaurants[0].menu[0].id}>
                    <span>{restaurants[0].menu[0].name} </span>
                    <span>{restaurants[0].menu[0].price}$</span>
                </li>
                <li key={restaurants[0].menu[1].id}>
                    <span>{restaurants[0].menu[1].name} </span>
                    <span>{restaurants[0].menu[1].price}$</span>
                </li>
                <li key={restaurants[0].menu[2].id}>
                    <span>{restaurants[0].menu[2].name} </span>
                    <span>{restaurants[0].menu[2].price}$</span>
                </li>
            </ul>
            <h3>REVIEWS</h3>
            <ul>
                <li key={restaurants[0].reviews[0].id}>
                    <span>{restaurants[0].reviews[0].user} </span>
                    <span>{restaurants[0].reviews[0].text} </span>
                    <span>{restaurants[0].reviews[0].rating}</span>
                </li>
                <li key={restaurants[0].reviews[1].id}>
                    <span>{restaurants[0].reviews[1].user} </span>
                    <span>{restaurants[0].reviews[1].text} </span>
                    <span>{restaurants[0].reviews[1].rating}</span>
                </li>
            </ul>
        </div>
        <div key={restaurants[1].id}>
            <h1>{restaurants[1].name}</h1>
            <h3>MENU</h3>
            <ul>
                <li key={restaurants[1].menu[0].id}>
                    <span>{restaurants[1].menu[0].name} </span>
                    <span>{restaurants[1].menu[0].price}$</span>
                </li>
                <li key={restaurants[1].menu[1].id}>
                    <span>{restaurants[1].menu[1].name} </span>
                    <span>{restaurants[1].menu[1].price}$</span>
                </li>
            </ul>
            <h3>REVIEWS</h3>
            <ul>
                <li key={restaurants[1].reviews[0].id}>
                    <span>{restaurants[1].reviews[0].user} </span>
                    <span>{restaurants[1].reviews[0].text} </span>
                    <span>{restaurants[1].reviews[0].rating}</span>
                </li>
                <li key={restaurants[1].reviews[1].id}>
                    <span>{restaurants[1].reviews[1].user} </span>
                    <span>{restaurants[1].reviews[1].text} </span>
                    <span>{restaurants[1].reviews[1].rating}</span>
                </li>
                <li key={restaurants[1].reviews[2].id}>
                    <span>{restaurants[1].reviews[2].user} </span>
                    <span>{restaurants[1].reviews[2].text} </span>
                    <span>{restaurants[1].reviews[2].rating}</span>
                </li>
            </ul>
        </div>
        <div key={restaurants[2].id}>
            <h1>{restaurants[2].name}</h1>
            <h3>MENU</h3>
            <ul>
                <li key={restaurants[2].menu[0].id}>
                    <span>{restaurants[2].menu[0].name} </span>
                    <span>{restaurants[2].menu[0].price}$</span>
                </li>
                <li key={restaurants[2].menu[1].id}>
                    <span>{restaurants[2].menu[1].name} </span>
                    <span>{restaurants[2].menu[1].price}$</span>
                </li>
                <li key={restaurants[2].menu[2].id}>
                    <span>{restaurants[2].menu[2].name} </span>
                    <span>{restaurants[2].menu[2].price}$</span>
                </li>
            </ul>
            <h3>REVIEWS</h3>
            <ul>
                <li key={restaurants[2].reviews[0].id}>
                    <span>{restaurants[2].reviews[0].user} </span>
                    <span>{restaurants[2].reviews[0].text} </span>
                    <span>{restaurants[2].reviews[0].rating}</span>
                </li>
             </ul>
        </div>
        <div key={restaurants[3].id}>
            <h1>{restaurants[3].name}</h1>
            <h3>MENU</h3>
            <ul>
                <li key={restaurants[3].menu[0].id}>
                    <span>{restaurants[3].menu[0].name} </span>
                    <span>{restaurants[3].menu[0].price}$</span>
                </li>
                <li key={restaurants[3].menu[1].id}>
                    <span>{restaurants[3].menu[1].name} </span>
                    <span>{restaurants[3].menu[1].price}$</span>
                </li>
            </ul>
            <h3>REVIEWS</h3>
            <ul>
                <li key={restaurants[3].reviews[0].id}>
                    <span>{restaurants[3].reviews[0].user} </span>
                    <span>{restaurants[3].reviews[0].text} </span>
                    <span>{restaurants[3].reviews[0].rating}</span>
                </li>
                <li key={restaurants[3].reviews[1].id}>
                    <span>{restaurants[3].reviews[1].user} </span>
                    <span>{restaurants[3].reviews[1].text} </span>
                    <span>{restaurants[3].reviews[1].rating}</span>
                </li>
             </ul>
        </div>
    </div>
);
