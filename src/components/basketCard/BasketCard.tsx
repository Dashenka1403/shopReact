import { FC, useState } from "react";
import { Button } from "../button";
import { BasketCardItem, BasketCardLayoutProps } from "./BasketCardProps";
import './basketCardStyles.scss'
import { AddIcon, MinusIcon, TrashIcon } from "../../assets/icons";

export const BasketCard: FC<BasketCardLayoutProps> = props => {
    const {basketCardItems} = props;
    const [selectedItem,setSelectedItem] = useState<Array<BasketCardItem>>([]);

      
    return (
      
   <div> 
    {basketCardItems.map((item)=>(
      <span className='basket-card' key={item.id}>
    
        <div className='basket-card__image'>
      <img  height={136} width={147} src= {item.picture}/>
      <div className='basket-card__image__amount'>
        <MinusIcon  />
        {item.amount}
        <AddIcon />
      </div>
      </div>
      <div className='basket-card__info'>
      <div className='basket-card__info__title'>
          <div>{item.title}</div> 
          <div className='basket-card__info__title_price'>{item.price}</div>
        </div>
          <div className='basket-card__info__price-final'>{item.price} </div>
      </div>
      <TrashIcon className='basket-card__icon'/>
      </span>
    ))}
    
      </div>
    );
  }
  