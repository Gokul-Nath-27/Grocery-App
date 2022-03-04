import { FaPlus } from 'react-icons/fa';
import './AddItem.scss';
const AddItem = ({handleAddButton, newItem, setNewItem}) => {
    return (
        <form className="add-item">
            <input 
                placeholder="Add Items" 
                type="text"
                required 
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button  
                type="submit"
                onClick={handleAddButton}
            >
                <FaPlus/>
            </button>
        </form>
    )
}

export default AddItem
