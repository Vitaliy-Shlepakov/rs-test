import React from 'react';
import './index.sass';
import empty from "./icons/empty.png";

const Empty = ({handleResetFilter}) => {
    return (
        <div className="Empty">
            <div className="Empty__Inner">
                <img
                    src={empty}
                    alt="просто картинка"
                    className="Empty__Logo"
                />
                <p className="Empty__Title">
                    По данным параметрам ничего не найдено
                </p>
                <p className="Empty__Notify">
                    Попробуйте изменить параметры фильтрации или вернуться в общий каталог
                </p>
                <a
                    href="/"
                    className="Empty__Btn-Reset"
                    onClick={handleResetFilter}
                >Очистить фильтр</a>
            </div>
        </div>
    );
};

export default Empty;