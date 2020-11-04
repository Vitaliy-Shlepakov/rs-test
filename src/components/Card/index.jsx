import React from 'react';
import LocationIcon from './icons/location.icon.svg';
import BookIcon from './icons/book.icon.svg';
import BookedIcon from './icons/booked.icon.svg';
import './index.sass';
import CardBtn from "../Button";
import Rating from "../Rating";

const Card = ({
      card: {
          title,
          type,
          reviews,
          location,
          description,
          price,
          period,
          rating,
          status,
      },
      handleBook
      }) => {
    return (
        <div className="Card">

            <div className="Card__LeftSide">
                <div className="Card__Title">
                    {title}
                </div>
                <div className="Card__Field">
                    <div className="Card__Col">
                        <Rating
                            rating={rating}
                        />
                    </div>

                    <div className="Card__Col">
                        <div className="Card__Option">
                            {type === 'apartments' && 'Апартаменты'}
                            {type === 'hotel' && 'Отель'}
                        </div>
                        <div className="Card__Option">
                            {reviews} {formatDescr(reviews)}
                        </div>
                    </div>

                    <div className="Card__Col">
                        <img className="Card__Location-Icon" src={LocationIcon} alt=""/>
                        {location.title}
                    </div>
                </div>
                <div className="Card__Description">
                    {description}
                </div>
            </div>

            <div className="Card__RightSide">
                <div className="Card__Cost">
                    <div className="Card__Price">
                        { price.toLocaleString('ru-RU') }&nbsp;₽
                    </div>
                    <div className="Card__Period">
                        {period}
                    </div>
                </div>
                <div className="Card__Button">
                    <CardBtn
                        them={status === 1 ? 'green': 'violetLight'}
                        onClick={() => handleBook(title)}
                    >
                        { status === 1 && (
                            <>
                                <img src={BookIcon} style={{marginRight: '7px'}} alt="Забронировано"/>
                                <span>Забронировано</span>
                            </>
                            )
                        }
                        { status === 2 && (
                            <>
                                <img src={BookedIcon} style={{marginRight: '7px'}} alt="Забронировать"/>
                                <span>Забронировать</span>
                            </>
                        )}
                    </CardBtn>
                </div>
            </div>


        </div>
    );
};

export default Card;

function formatDescr(count) {
    switch(count){
        case 1:
            return 'отзыв';
        case 2:
        case 3:
        case 4:
            return 'отзыва';
        default:
            return 'отзывов'
    }

}