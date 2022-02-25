import React, { Component } from "react";
import Category from "./Category";


class categoriesInDb extends Component {
    constructor() {
        super()
        this.state = {
            categoriesList: []
        }
    }

    componentDidMount() {

        fetch("http://localhost:3000/api/categories")
            .then(res => res.json())
            .then(categories => {
                console.log(categories)
                this.setState({ categoriesList: categories.data })
            })
            .catch(error => console.log(error))

    }

    render() {
        return (
            <>
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800"> Categories in Date Base </h5>
                        </div>
                        <div className="row" style={{ paddingTop: 26 }}>
                            {
                                this.state.categoriesList.map((category, index) => {
                                    return <Category  {...category} key={index} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}



export default categoriesInDb