import React, { Component } from "react";
import ChartRow from './ChartRow';

class ProductsInDb  extends Component {
    constructor(){
        super()
        this.state = {
            productsList : []
        }
    }

    componentDidMount(){

        fetch("http://localhost:3000/api/products")
        .then(res=>res.json())
        .then(products =>{
            console.log(products)
            this.setState({productsList: products.data})
        })
        .catch(error => console.log(error))

    }

    render () {
        return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800"> Productos en stock </h5>
                    </div>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Descripción</th>
                                <th>Categoría</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                        this.state.productsList.map((product, index)=> {

                            return <ChartRow  {...product} key = {index} />

                        })
                    }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
}

export default ProductsInDb ;