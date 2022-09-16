import logo from "./logo.svg";
import "./App.css";
import SummaryForm from "./pages/summary/SummaryForm";
import { OrderDetailsProvider } from "./contexts/OrderDetails";

function App() {
  return (
    <div className="App">
      <OrderDetailsProvider>
        <SummaryForm />
      </OrderDetailsProvider>
    </div>
  );
}

export default App;
