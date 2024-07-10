import { FC, useEffect, useState } from "react";
import { Card, Layout } from "../../components/layouts";
import './mainPageStyles.scss'
import { RoutesPath } from "../../constants/commonConstants";
import { useNavigate } from "react-router-dom";
import { CardItem } from "../../components/layouts/card/CardProps";

const cardItemsData = [ {
  id: 1,
  picture: "https://media.s-bol.com/mZQG7MkXxMVG/1200x1200.jpg",
  title:'Apple BYZ S852I',
  price:'2927 ₽',
  rating: 4.7,
  clickAction: () => {}
},
{
  id: 2,
  picture: "https://www.freepnglogos.com/uploads/airpods-png/airpods-apply-airpod-skins-mightyskins-3.png",
  title:'Apple EarPods',
  price:'2327 ₽',
  rating: 4.5,
  clickAction: () => {}
},
{
  id: 3,
  picture: "https://electronis.ru/image/cache/catalog/naushniki-bixton-airons-pro-2-1-500x500.jpg",
  title:'Apple EarPods',
  price:'2327 ₽',
  rating: 4.5,
  clickAction: () => {}
},
{id: 4,
  picture: "https://electronis.ru/image/cache/catalog/naushniki-bixton-airons-pro-2-1-500x500.jpg",
  title:'Apple AirPods',
  price:'9527 ₽',
  rating: 4.7,
  clickAction: () => {}},
  {
    id: 5,
    picture: "https://electronis.ru/image/cache/catalog/naushniki-bixton-airons-pro-2-1-500x500.jpg",
    title:'GERLAX GH-04',
    price:'6527 ₽',
    rating: 4.7,
    clickAction: () => {}
  },

  {
    id: 6,
    picture: "https://electronis.ru/image/cache/catalog/naushniki-bixton-airons-pro-2-1-500x500.jpg",
    title:'BOROFONE BO4',
    price:'7527 ₽',
    rating: 4.7,
    clickAction: () => {}
  }
] as Array<CardItem>;

export const MainPage: FC = () => {
    const navigate = useNavigate();

    const [itemsData, setItemsData] = useState<Array<CardItem>>([]);
    const [selectedItemId, setSelectedItemId] = useState<number>();
    const [selectedItem, SetSelectedItem] = useState<CardItem>();

    useEffect(() => {
      setTimeout(()=> {
          setItemsData(cardItemsData);
          if(Array.isArray(cardItemsData) && cardItemsData.length) {
            setSelectedItemId(cardItemsData[0].id);
          }
      }, 2000);
  }, []);

  const onItemSelectedHandler = (id: number) => {
    const item = itemsData.find(i => i.id === id);
    SetSelectedItem(item);
    console.log(selectedItem)
    window.confirm('Товар добавлен в корзину')
}
  



    return(
      <Layout  title="QPICK">
        <div className='main-page'>
          <div className='main-page__headphones'>
            <div className='main-page__title'>Наушники</div>
            <div className='main-page__headphones__line'>
            <Card onItemClick={(id) => onItemSelectedHandler(id)} cardItems={[cardItemsData[0]]} />
            <Card onItemClick={(id) => onItemSelectedHandler(id)} cardItems={[cardItemsData[1]]}/>
            <Card onItemClick={(id) => onItemSelectedHandler(id)} cardItems ={[cardItemsData[2]]}/>
            </div>
            <div className='main-page__headphones__line'>
            <Card  onItemClick={(id) => onItemSelectedHandler(id)} cardItems={[cardItemsData[0]]} />
            <Card onItemClick={(id) => onItemSelectedHandler(id)} cardItems={[cardItemsData[1]]}/>
            <Card onItemClick={(id) => onItemSelectedHandler(id)} cardItems ={[cardItemsData[2]]}/>
            </div>
          </div>
          <div className='main-page__headphones'>
            <div className='main-page__title'>Беспроводные наушники</div>
            <div className='main-page__headphones__line'>
            <Card onItemClick={(id) => onItemSelectedHandler(id)} cardItems={[cardItemsData[3]]}  />
            <Card onItemClick={(id) => onItemSelectedHandler(id)} cardItems={[cardItemsData[4]]}/>
            <Card onItemClick={(id) => onItemSelectedHandler(id)} cardItems={[cardItemsData[5]]}/>
            </div>
          </div>
      
        </div>
        </Layout>
    )
};

/*value={login}*/