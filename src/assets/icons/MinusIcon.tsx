import {FC} from 'react'
import { IconProps } from '../../types/commonTypes';


export const MinusIcon: FC<IconProps> = props => {
    const {width = 30, height = 30, color = '#FFCE7F', className, onClick} = props;
    return(
        <svg width={width} height={height} onClick={onClick} className={className} viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
       <circle cx="15" cy="15" r="15" fill={color}/>
<path d="M8 14H22V16H8V14Z" fill="white"/>
        </svg>

 )

}
