export enum ContainerDirection {
    Left = "left",
    Right = "right",
} 

export type Item = {
    id: number;
    name: string;
};

export type ItemTransfer = Item & {
    checked?: boolean;
};

export interface ContainerListProps {
    items: ItemTransfer[];
    onItemClick: (item: ItemTransfer) => void;
};

export interface ActionButtonsProps {
    onButtonClick: (direction: ContainerDirection) => void;
};