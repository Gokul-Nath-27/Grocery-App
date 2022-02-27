import './EachItem.scss'

const EachItem = ({item, handleCheck, handleDelete}) => {


    return (
        <div className="item">
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => {handleCheck(item.id)}}
            />
            <label>{item.item}</label>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
    )
}

export default EachItem
