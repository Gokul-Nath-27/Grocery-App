import EachItem from '../EachItem/EachItem'
import './ItemList.scss'

const ItemList = ({items, handleCheck, handleDelete}) => {

    return (
        <main className="item-list">
            {(items.length>0)?
                    items.map((item) =>  (
                        <EachItem 
                            handleCheck={handleCheck} 
                            handleDelete={handleDelete} 
                            key={item.id} 
                            item={item}
                        />)
                    ) :<div className="add-item">Add Items</div>}
        </main>
    )
}

export default ItemList
