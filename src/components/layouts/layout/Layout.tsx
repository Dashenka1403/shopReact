import {FC} from 'react';
import { LayoutProps } from './LayoutProps';
import './layoutStyles.scss'
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '../../../constants/commonConstants';
import { BasketIcon, HeartIcon, NetIcon, TelegramIcon, VkIcon, WhatsAppIcon } from '../../../assets/icons';
import { MenuItem } from '../../userMenu/UserMenuProps';
import { UserMenu } from '../../userMenu';




export const Layout: FC<LayoutProps> = props => {
    const { title, headerChild, children, footer} = props;
    const navigate = useNavigate();
    
    const goToBasketHandler = () => {
        navigate(`/${RoutesPath.Basket}`)
    };

    const favouritesMenuItem: MenuItem = {
        id: 'favourites',
        action: () =>{},
        label: 'Избранное'
    };;

    const basketMenuItem: MenuItem =  {
        id: 'basket',
        action: () =>{},
        label: 'Корзина'
    };
    const contactsnMenuItem: MenuItem =  {
        id: 'contacts',
        action: () =>{},
        label: 'Контакты'
    };

    const languageRuMenuItem: MenuItem =  {
        id: 'language',
        action: () =>{},
        label: 'Рус'
    };
    const languageEnMenuItem: MenuItem =  {
        id: 'language',
        action: () =>{},
        label: 'Eng'
    };

    const conditionMenuItem: MenuItem =  {
        id: 'condition',
        action: () =>{},
        label: 'Условия сервиса'
    };


    return (
    <div className='layout'>
         <div className = 'layout__header' > 
            
            <div className='layout__header_title' > 
                <div  >{title ?? 'Header'} </div>
                <div  >{headerChild} </div>
                
            </div>
            <div className='layout__header_menu-item'>
                <HeartIcon/>
                <BasketIcon onClick={goToBasketHandler}/>
            </div>
        </div>
        <div  className='layout__body'>       
        {children}
        </div>
        <div className='layout__footer'>
            <div className='layout__footer__label'>QPICK</div>
            <div className='layout__footer__links'>
            <div className='layout__footer__links__list'>
                <UserMenu items= {[favouritesMenuItem, basketMenuItem, contactsnMenuItem]} />
            </div>
            <div className='layout__footer__links__conditions'>
               <div>Условия сервиса</div> 
               <div className='layout__footer__links__conditions_languages'>
               <NetIcon height={17} width={17}/>
                <div>Рус</div>
                <div>Eng</div>
               </div>
                 </div>
            </div>
            <div className='layout__footer__socials'>
                <VkIcon />
                <WhatsAppIcon/>
                <TelegramIcon/>
            </div>
             </div>
     </div>
    );
}