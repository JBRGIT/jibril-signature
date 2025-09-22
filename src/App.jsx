import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
function App() {
  const sigCanvas = useRef(null);
  const clear = () => {
    sigCanvas.current.clear();
  };
  return (
    <div>
      <SignatureCanvas ref={sigCanvas} />
      <button onClick={() => clear()} type="reset">
        reset
      </button>
    </div>
  );
}

export default App;
