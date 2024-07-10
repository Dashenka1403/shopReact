import { FC, useState } from "react";
import { CardLayoutProps} from "./CardProps";
import './cardStyles.scss'
import { StarIcon } from "../../../assets/icons";
import { Button } from "../../button";


export const Card: FC<CardLayoutProps> = props => {
  const {cardItems, onItemClick} = props;
  const [selectedItem, setSelectedItem,] = useState(0)
  
const itemClickHandler = (id: number) => {
  setSelectedItem(id);
  onItemClick && onItemClick(id);
}
 
  return (
    
 <div className='card'>
  <>
  {cardItems.map((item)=>(
    <span key={item.id}>
      <div className='card__image'>
    <img  height={237} width={220} src= {item.picture}/>
    </div>
    <div className='card__info'>
    <div className='card__info__title-rating'>
        <div>{item.title}</div> 
        <div className='card__info__title-rating_rating'>
        <StarIcon/>
          {item.rating}
          
          </div>
      </div>
      <div className='card__info__list'>
        <div className='card__info__list__price'>{item.price} </div>
        <Button onClick={() => itemClickHandler(item.id)} text="Купить"/>
      </div>
    </div>
    </span>
  ))}
  
    </>
    </div>
  );
}

