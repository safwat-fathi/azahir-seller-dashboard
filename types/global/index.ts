// * util types
// -------------
type TObj<T extends string | number, P = any> = Record<T, P>;

// * ui types
// -------------
type TColor = "primary" | "secondary" | "success" | "error";
type TSize = "sm" | "md" | "lg";
type TVariant = "contained" | "outlined";
