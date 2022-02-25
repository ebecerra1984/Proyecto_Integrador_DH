import React from 'react';
import ContentRowMovies from './ContentRowCards';
import LastProductInDb from './LastProductInDb';
import GenresInDb from './CategoriesInDb';
import MoviesInDb from './ProductsInDb ';


function ContentRowTop(){
    return(
        <React.Fragment>

				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Droid Store Dashboard</h1>
					</div>
			
					<ContentRowMovies />
					<div className='row'>
						<LastProductInDb />
						<GenresInDb />
					</div>
					<MoviesInDb />

				</div>


        </React.Fragment>
    )

}
export default ContentRowTop;