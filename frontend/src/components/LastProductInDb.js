import React, { Component } from "react";


class LastProductInDb  extends Component {
    constructor(){
        super()
        this.state = {
            lastProd : []
        }
    }

    componentDidMount(){

        fetch("http://localhost:3000/api/products")
        .then(res=>res.json())
        .then(products =>{

            this.setState({lastProd: products.data.pop()})
            console.log(products.data.pop().URL)
        })
        .catch(error => console.log(error))

    }

    render () {
        return (
            <>
    
                {/*<!-- Last Movie in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Producto destacado</h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 30 + 'rem' }} src={this.state.lastProd.URL} alt="producto destacado" />
                            </div>
                            <p>{this.state.lastProd.description}</p>
                            {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a> */}
                        </div>
                    </div>
                </div>
    
            </>
        )
}
}

export default LastProductInDb ;