import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";
import { Button } from "primereact/button";

function App() {
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-blue-600">
          Hello, Tailwind and PrimeReact!
        </h1>
        <Button label="Click Me" className="p-button-primary mt-4" />
      </div>
    </>
  );
}

export default App;
