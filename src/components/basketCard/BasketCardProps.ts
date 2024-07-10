export interface BasketCardItem {
    id: number;
    picture?: string;
    amount: number;
    title?: string;
    price?: string;
    clickAction?:() => void;
}

export interface BasketCardLayoutProps  {
    basketCardItems: Array<BasketCardItem>;
}
