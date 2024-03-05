import { Suspense } from "react";
import Borders from "./Components/Borders";
import ChildrenSpan from "./Components/ChildrenSpan";
function App() {
  return (
    <>
      <Suspense fallback={<span>...Loading</span>}>
        <div className="container">
          <Borders>
            <ChildrenSpan label="Name" value="Rohan" />
          </Borders>
          <Borders>
            <ChildrenSpan label="Address" value="Malad" />
          </Borders>
        </div>
      </Suspense>
    </>
  );
}

export default App;
