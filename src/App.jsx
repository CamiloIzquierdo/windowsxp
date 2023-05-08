import { Buscaminas } from "./components/buscaminas/Buscaminas";
import { Home } from "./pages/Home";

function App() {
    return (
        <div className="flex flex-col justify-center items-center pb-28 gap-10">
            <Home />
            <Buscaminas />
        </div>
    );
}

export default App;
