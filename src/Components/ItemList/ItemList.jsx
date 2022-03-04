import EachItem from '../EachItem/EachItem'
import './ItemList.scss'
import AddItem from '../AddItem/AddItem'
import Search from '../Search/Search'
const ItemList = ({items, handleCheck, handleDelete, searchItem, setSearchItem, handleAddButton, newItem, setNewItem}) => {

    return (
        <main className="item-list">
            <AddItem
                handleAddButton={handleAddButton}
                newItem={newItem}
                setNewItem={setNewItem}
            />
            <Search 
                searchItem={searchItem}
                setSearchItem={setSearchItem} 
            />
            {(items.length>0 || !items)?
                    items.map((item) =>  (
                        <EachItem 
                            handleCheck={handleCheck} 
                            handleDelete={handleDelete} 
                            key={item.id} 
                            item={item}
                        />)
                    ) : <div className="additem">Add Items</div>}
        </main>
    )
}

export default ItemList
