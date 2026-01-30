import Typo from "./Typo";

const variants = {
  default: {
    mt: 3,
  },
  offset: {
    mt: 5, // 🔥 plus bas
  },
  multiline: {
    mt: 3,
    lineHeight: 1.4,
  },
  small: {
    fontSize: "0.9rem",
    color: "#000000",
    mt: 3,
  },
};

function TypoLabel({
  children,
  variant = "default",
  sx,
  ...props
}) {
  return (
    <Typo
      variant="h6"
      sx={{
        textAlign: "center",
        color: "#000000",
        fontWeight: 400,
        width: "100%",
        minWidth: 140,
        lineHeight: 1.3,
        ...variants[variant], 
        ...sx,                
      }}
      {...props}
    >
      {children}
    </Typo>
  );
}

export default TypoLabel;
