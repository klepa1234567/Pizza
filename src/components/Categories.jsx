import React from "react";

const Categories = React.memo( function Categories({ items, onClickItems }) {
    const [activeItem, setAtiveItem] = React.useState(null);

    const onSelectItem = React.useCallback((index) => {
        setAtiveItem(index);
        onClickItems(index);
    }, [onClickItems]);

    return <div className="categories">
        <ul>
            <li className={activeItem === null ? 'active': ''}
                onClick={() => onSelectItem(null)}>
                Все
            </li>
            {
                items &&
                items.map((name, index) =>
                    <li className={activeItem === index ? 'active': ''}
                        onClick={() => onSelectItem(index)}
                        key={`${name}_${index}`}>{name}</li> )
            }
            {/*<li>Мясные</li>*/}
            {/*<li>Вегетарианская</li>*/}
            {/*<li>Гриль</li>*/}
            {/*<li>Острые</li>*/}
            {/*<li>Закрытые</li>*/}
        </ul>

    </div>

})


export default Categories