import { FC, useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { BasketCard } from "../../components";
import { BasketCardItem } from "../../components/basketCard/BasketCardProps";
import './basketPageStyles.scss'
import { TotalList } from "../../components/totalList";


 
export const BasketPage: FC =  () =>{

    const CardItem1: BasketCardItem=  {
        id: 1,
        amount: 1,
        picture: "https://media.s-bol.com/mZQG7MkXxMVG/1200x1200.jpg",
        title:'Apple BYZ S852I',
        price:'2927 ₽',
        clickAction: () => {}
      };
    return(
        <Layout title="QPICK">
        <div className='basket-page'>
            <div className='basket-page__goods'>
             <BasketCard basketCardItems={[CardItem1]}/>
             <BasketCard basketCardItems={[CardItem1]}/>
        </div>
        <TotalList title={"Итого"} sum={2927}/>
        </div>
       
        </Layout>
    )
}