import React from "react";
import './App.css';

function List({people}) {
    return (
        <div>
            {people.map((person) => {
                const {id,name,image,birthday} = person;
                return (
                    <article className='article' key={id}>
                        <img className='image' src={image}></img>
                        <div className="sub_text">
                            <p className="name">{name}</p>
                            <p className="data">{birthday}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}
export default List;