import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
function App() {
  const sigCanvas = useRef(null);

  const clear = () => {
    sigCanvas.current.clear();
  };

  const save = () => {
    const dataURL = sigCanvas.current.getCanvas().toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "signature.png";
    link.click();
  };

  return (
    <div>
      <SignatureCanvas ref={sigCanvas} />
      <button onClick={() => clear()} type="button">
        reset
      </button>
      <button onClick={() => save()} type="button">
        save
      </button>
    </div>
  );
}

export default App;
