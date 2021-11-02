import React from 'react'
import { useParams } from 'react-router'

const Item = () => {
    let { itemId } = useParams();
    return (
        <div>
            <h3>{ itemId }</h3>
        </div>
    )
}

export default Item
