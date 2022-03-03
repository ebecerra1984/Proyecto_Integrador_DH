import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProdRow from "./ProdRow";

function CategoriesDetail() {
  const [prodsByCategory, setProdsByCategory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/api/products/prod/" + id)
      .then((res) => res.json())
      .then((products) => {
        setProdsByCategory(products.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Producto</th>
                <th>Descripción</th>
                <th>Categoría</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {prodsByCategory.map((prod, index) => {
                return <ProdRow {...prod} key={index} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CategoriesDetail;
