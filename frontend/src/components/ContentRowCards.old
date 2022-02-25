import React, { Component } from "react";
import SmallCard from "./SmallCard"
    



let moviesInDb = {

    // title: 'Movies in Data Base',
    title: 'productosssssss',
    color: 'primary',
    icon: 'fa-robot',
    quantity: 10000

}

let totalAwards = {

    //title: 'Total awards',
    title: 'categoriassssssss',
    color: 'success',
    icon: 'fa-list',
    quantity: 333333
}

let actorsQuantity = {

    //title: 'Actors quantity',
    title: 'usuariosssssssss',
    color: 'warning',
    icon: 'fa-user',
    quantity: 2222
}


let cartProps = [moviesInDb, totalAwards, actorsQuantity]




function ContentRowCards () {

    return (

        <div className="row">

        {cartProps.map( (data, i) => {

            return <SmallCard {...data} key={i}/>

        })}

        </div>
  

    

    )
}

export default ContentRowCards; 