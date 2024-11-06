import { TransferList } from "./components/TransferList";

function App() {
  return (
    <div className="flex flex-col bg-white text-white p-4 w-full flex items-center justify-center">
      <div className="text-black m-10 text-xl font-extrabold">Transfer List</div>
      <TransferList />
    </div>
  );
}

export default App;
