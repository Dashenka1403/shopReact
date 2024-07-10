import { PropsWithChildren } from 'react';

export interface CardItem {
    id: number;
    picture?: string;
    title?: string;
    price?: string;
    rating?: number;
    clickAction?:() => void;
}

export interface CardLayoutProps  {
    cardItems: Array<CardItem>;
    onItemClick?:(id:number) => void;
}
