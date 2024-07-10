import { FC } from "react";
import { Button } from "../button";
import './totalListStyles.scss'
import { AddIcon, MinusIcon, TrashIcon } from "../../assets/icons";
import { TotalListProps } from "./TotalListProps";

export const TotalList: FC<TotalListProps> = props => {
    const {sum, title} = props;

    return (    
   <div className='total-list'> 
      <div className='total-list__line'>
       <div>{title}</div> 
       <div>{sum}</div> 
      </div>
      <div className='total-list__button'>
        <Button type='secondary'  text='Перейти к оформлению'/>
      </div>
      
      </div>
    );
  }
  