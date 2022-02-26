import './Content.scss'

const Content = ({items}) => {

    return (
        <main className="content">
                {items.map((item) => (
                    <div className="item">
                        <input
                            type="checkbox"
                            checked={item.checked}
                        />
                        <label>{item.item}</label>
                        <button>Delete</button>
                    </div>
                ))}

        </main>
    )
}

export default Content
