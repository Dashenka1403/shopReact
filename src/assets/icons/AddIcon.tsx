import {FC} from 'react'
import { IconProps } from '../../types/commonTypes';

export const AddIcon: FC<IconProps> = props => {
    const {width = 30, height = 30, color = '#FFCE7F', className, onClick} = props;
    return(
        <svg width={width} height={height} onClick={onClick} className={className} viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15.2056" cy="15" r="15" fill={color}/>
        <path d="M14.2056 14V8H16.2056V14H22.2056V16H16.2056V22H14.2056V16H8.20557V14H14.2056Z" fill="white"/>
        </svg>

 )

}