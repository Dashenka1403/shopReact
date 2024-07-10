 export interface ButtonProps{
    text?: string;
    onClick?: () => void;
    onSelectClick?: (id:number) => void;
    className?: string;
    type?: 'primary' | 'secondary';

 }