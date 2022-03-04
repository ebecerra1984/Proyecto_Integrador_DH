import React, { Component } from "react";
import SmallCard from "./SmallCard"


let productos = {
    title: 'Variedad de productos',
    color: 'primary',
    icon: 'fa-robot',
    quantity: '?'
}

let fijos = {
    title: 'robots fijos en stock',
    color: 'primary',
    icon: 'fa-robot',
    quantity: '?'
}

let moviles = {
    title: 'robots moviles en stock',
    color: 'primary',
    icon: 'fa-robot',
    quantity: '?'
}
let repuestos = {
    title: 'repuestos',
    color: 'primary',
    icon: 'fa-robot',
    quantity: '?'
 }

let categorias = {
    title: 'categorias',
    color: 'info',
    icon: 'fa-list',
    quantity: '?'
}

let usuarios = {
    title: 'usuarios registrados',
    color: 'secondary',
    icon: 'fa-user',
    quantity: '?'
}


fetch("http://localhost:3000/api/products")
    .then(res => res.json())
    .then(prods => {
       productos.quantity = prods.data.length
       console.log(productos)
    })
.catch(error => console.log(error))

fetch("http://localhost:3000/api/categories")
    .then(res => res.json())
    .then(cat => {
       categorias.quantity = cat.data.length
       fijos.quantity=cat.data[0].cantProd
       moviles.quantity=cat.data[1].cantProd
       repuestos.quantity=cat.data[2].cantProd
       console.log(categorias)
    })
.catch(error => console.log(error))

fetch("http://localhost:3000/api/users")
    .then(res => res.json())
    .then(user => {
       usuarios.quantity = user.data.length
       console.log(usuarios)
    })
.catch(error => console.log(error))



class ContentRowCards extends Component {
    constructor() {
        super()
        this.state = {
            cardsProps: []
        }
    }
    
    componentDidMount() {
        
        this.setState({ cardsProps: [productos,categorias,usuarios,fijos,moviles,repuestos] })
            
    }

    
    render() {
    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800"> Indicadores </h5>
                    </div>
                    
                    
                       <div className="row">
                       {this.state.cardsProps.map((data, i) => {
                           return <SmallCard {...data} key={i} />
                       })}
                   </div>
    
            </div>
        </div>

       
    )
    }
}

export default ContentRowCards; 




// function ContentRowCards(){
    
//     const [cardsProps, setcardsProps] = useState([productos,categorias,usuarios,fijos,moviles,repuestos]);
 
//     // const [productos, setproductos] = useState([productos])
//     // const [usuarios, setusuarios] = useState([usuarios])

    
//     //setcardsProps([cardsProps[0].quantity=pr])

    
//     return (
//         <div className="row">
//             {cardsProps.map((data, i) => {
//                 return <SmallCard {...data} key={i} />
//             })}
//         </div>
//     )
// }











// //let cardsinfo =[ categoriesList, productsList, usersList];

// class ContentRowCards extends Component {
//     constructor() {
//         super()
//         this.state = {
//             categoriesList: [categorias],
//             productsList:[productos],
//             usersList:[usuarios]
//         }
//     }
    
//     componentDidMount() {
        
//         fetch("http://localhost:3000/api/categories")
//         .then(res => res.json())
//         .then(categories => {
//             //console.log(categories)
//             this.setState({ ...this.state.categoriesList, 
//                 ...this.state.categoriesList.quantity= categories.data.cantProd })
                
//             })
//             console.log(this.state.categoriesList)
//             .catch(error => console.log(error))
            
//         }
//         componentDidMount() {
            
//             fetch("http://localhost:3000/api/products")
//             .then(res => res.json())
//             .then(products => {
//                 //console.log(products)
//                 console.log(this.state.productsList)
//                 this.setState({ ...this.state.productsList, 
//                     ...this.state.productsList.quantity= products.data.length })
                    
//             })
//             .catch(error => console.log(error))

//     }
    


//     componentDidMount() {

//         fetch("http://localhost:3000/api/users")
//             .then(res => res.json())
//             .then(users => {
//                 //console.log(users)
//                 this.setState({ ...this.state.usersList, 
//                     ...this.state.usersList.quantity= users.data.length })
//             })
//             .catch(error => console.log(error))

//     }



//     render() {
//         return (

//             <div className="row">
 
 
//                 <SmallCard {...this.state.categoriesList.quantity} />

//  {/*               {this.state.map((data, i) => {

//                     return <SmallCard {...data} key={i} />

//                 })} */}

//             </div>

//         )
//     }
// }







 







// export default ContentRowCards; 