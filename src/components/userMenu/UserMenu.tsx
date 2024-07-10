import { FC, useState } from 'react';
import './userMenuStyles.scss'
import { action } from 'mobx';
import { UserMenuProps } from './UserMenuProps';


export const UserMenu: FC<UserMenuProps> = props => {
    const{items} = props;


    return (
        <div className="user-menu">
            <> 
              
                <div className="user-menu__menu">
                    {items.map((item) =>(
                        <span  key={item.id} 
                        className="user-menu__menu-item"
                        onClick = {item.action}>
                            {item.label}
                            
                        </span> )
            
                     )}
                </div>
            </>
        </div>
    )
} ;