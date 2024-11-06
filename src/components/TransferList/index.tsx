import { useState } from "react"
import { data } from './data';
import { ContainerDirection, ItemTransfer } from "./utils"
import { ContainerList, ActionButtons} from "./common"

export const TransferList = () => {

    const [leftItems, setLeftItems] = useState<ItemTransfer[]>(data)
    const [rightItems, setRightItems] = useState<ItemTransfer[]>([])

    const onItemClicked = (itemClicked: ItemTransfer, direction: ContainerDirection) => {
        const filteredItems = (direction === ContainerDirection.Left ? leftItems : rightItems).map((item: ItemTransfer) => {
            return {
                ...item,
                checked: itemClicked.id === item.id ? !item.checked : item.checked,
            }
        })
        if (direction === ContainerDirection.Left) {
            setLeftItems(filteredItems)
        } else {
            setRightItems(filteredItems)
        }
    }

    const getUncheckedItems = (items: ItemTransfer[]) => {
        return items.map((item: ItemTransfer) => {
            return {...item, checked: false }
        })
    }

    const onButtonClicked = (direction: ContainerDirection) => {
        if (direction === ContainerDirection.Right) {
            const newLeftItems = leftItems.filter((leftItem: ItemTransfer) => {
                return !leftItem.checked
            });
            const newRightList = getUncheckedItems(
                [
                    ...rightItems,
                    ...leftItems.filter((leftItem: ItemTransfer) => {
                        return leftItem.checked
                    })
                ]
            )
            setRightItems(newRightList)
            setLeftItems(getUncheckedItems(newLeftItems))
        } else {
            const newRightITems = rightItems.filter((rightItem: ItemTransfer) => {
                return !rightItem.checked
            });
            const newLeftList = getUncheckedItems([
                ...leftItems,
                ...rightItems.filter((rightItem: ItemTransfer) => {
                    return rightItem.checked
                })
            ])
            setLeftItems(newLeftList)
            setRightItems(getUncheckedItems(newRightITems))            
        }
    }

    return (
        <div className="flex justify-between items-center space-x-4 min-h-[400px] min-h-[500px] w-1/2 bg-gray-100 p-4 rounded-lg">
            <ContainerList items={leftItems} onItemClick={(item) => onItemClicked(item, ContainerDirection.Left) }/>
            <ActionButtons onButtonClick={onButtonClicked}/>    
            <ContainerList items={rightItems} onItemClick={(item) => onItemClicked(item, ContainerDirection.Right) }/>
        </div>
    );
}
