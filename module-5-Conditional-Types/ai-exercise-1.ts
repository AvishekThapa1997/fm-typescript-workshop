type Variant = "link" | "button";

type BaseProps<TVariant extends Variant> = {
  variant: TVariant;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
};

type PropsForVariant<TVariant extends Variant> = TVariant extends "link"
  ? { href: string }
  : { href?: never };

export type Props<TVariant extends Variant> =
  BaseProps<TVariant> & PropsForVariant<TVariant>;

export {};
