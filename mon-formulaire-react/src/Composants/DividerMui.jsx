import Divider from "@mui/material/Divider";

const variants = {
  soft: {
    borderColor: "grey.300",
    borderBottomWidth: 1,
  },
  medium: {
    borderColor: "grey.400",
    borderBottomWidth: 1.5,
  },
  strong: {
    borderColor: "grey.600",
    borderBottomWidth: 2,
  },
};

function DividerMui({ variant = "medium", sx, ...props }) {
  return (
    <Divider
      sx={{
        mb: 4,
        ...variants[variant],
        ...sx, // 🔥 override possible
      }}
      {...props}
    />
  );
}

export default DividerMui;
