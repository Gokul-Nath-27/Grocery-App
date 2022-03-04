import './Search.scss'

const Search = ({searchItem, setSearchItem}) => {
    return (
        <div className="search">
            <input 
                type="search" 
                placeholder="Search Items"
                onChange={e => setSearchItem(e.target.value)}          
            />
        </div>
    )
}

export default Search
