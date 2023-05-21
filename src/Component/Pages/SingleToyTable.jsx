import React from 'react';
import { Link } from 'react-router-dom';

const SingleToyTable = ({toy}) => {
    const { 
        _id,
        picture_url,
        name,
        sellername,
        selleremail,
        category,
        subcategory,
        price,
        rating,
        quantity,
        detail_description,
      } = toy;
    return (
        <div>
        <table className="table w-full">

<tbody>
    <tr className='border grid grid-cols-5  justify-items-center items-center'>
        <td>
            <img className='w-14' src={picture_url} alt="" />
        </td>

        <td>
            {name}
        </td>

        <td>
            {sellername}
        </td>

        <td>
            {price}
        </td>

        <td>
            <Link to={`/toy/${_id}`} ><button className="btn btn-active btn-ghost">details</button></Link>
        </td>
    </tr>
</tbody>

</table>    
        </div>
    );
};

export default SingleToyTable;