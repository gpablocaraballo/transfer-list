import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { ActionButtonsProps, ContainerDirection, ContainerListProps } from "./utils"
  
export const ActionButtons = ({ onButtonClick } : ActionButtonsProps) => {
    return <div className="flex justify-center space-x-4">
      <button onClick={() => onButtonClick(ContainerDirection.Left)} 
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
        <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
      </button>
      <button onClick={() => onButtonClick(ContainerDirection.Right)} 
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
        <ChevronRightIcon className="w-6 h-6 text-gray-800" />
      </button>
    </div>
};

export const ContainerList = ({ items, onItemClick }: ContainerListProps) => {
    const sortedItems = items.sort((a, b) => a.id - b.id);

    return (
      <div className="flex flex-col items-center justify-start gap-6 
        border border-gray-200 min-w-[200px] 
        min-h-[400px]
        bg-white 
        rounded-lg p-5
        shadow-lg
        "
        >
        {sortedItems.map((item) => (
          <div
            key={item.id}
            className={`flex 
                items-center 
                justify-center 
                w-40 h-10
                rounded-lg p-2 
                cursor-pointer 
                border border-solid border-gray-200  
                hover:bg-gray-300
                ${item.checked ? 'bg-black text-white' : 'bg-white text-black'}
            `}
            onClick={() => onItemClick(item)}
          >
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    );
};
