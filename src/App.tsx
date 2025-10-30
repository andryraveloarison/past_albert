import { BrowserRouter } from "react-router-dom";
import { Shell } from "./components/Shell";
import { AnimatedRoutes } from "./routes/AnimatedRoutes";

export default function App() {
  return (
    <BrowserRouter>
        <AnimatedRoutes />
    </BrowserRouter>
  );
}

