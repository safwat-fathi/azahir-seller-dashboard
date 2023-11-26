type TObj<T extends string | number, P = any> = Record<T, P>;
type TVariant = "contained" | "outlined";
type TColor = "primary" | "secondary" | "success" | "error";
