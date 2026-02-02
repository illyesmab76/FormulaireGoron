import { Box, Button } from "@mui/material";
import { useRef, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";

function SignaturePad({ onSave }) {
  const sigRef = useRef(null);

  // 🔥 Corrige le décalage souris / doigt
  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = sigRef.current?.getCanvas();
      if (!canvas) return;

      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      const { width, height } = canvas.getBoundingClientRect();

      canvas.width = width * ratio;
      canvas.height = height * ratio;

      const ctx = canvas.getContext("2d");
      ctx.scale(ratio, ratio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // 🔥 Sauvegarde automatique dès qu'on signe
  const handleEnd = () => {
    if (!sigRef.current.isEmpty()) {
      const image = sigRef.current.toDataURL("image/png");
      onSave(image);
    }
  };

  const handleClear = () => {
    sigRef.current.clear();
    onSave(""); // vide la signature côté parent
  };

  return (
    <Box sx={{ width: "100%" }}>
      <SignatureCanvas
        ref={sigRef}
        penColor="black"
        onEnd={handleEnd}
        canvasProps={{
          style: {
            width: "100%",
            height: 150,
            border: "1px solid #ccc",
            borderRadius: 4,
            backgroundColor: "#fff",
            touchAction: "none",
          },
        }}
      />

      <Box sx={{ textAlign: "right", mt: 1 }}>
        <Button size="small" onClick={handleClear}>
          Effacer
        </Button>
      </Box>
    </Box>
  );
}

export default SignaturePad;
