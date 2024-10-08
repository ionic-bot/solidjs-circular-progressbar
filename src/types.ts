import { JSX } from "solid-js/jsx-runtime";

export type CircularProgressbarStyles = {
  root?: JSX.CSSProperties;
  trail?: JSX.CSSProperties;
  path?: JSX.CSSProperties;
  text?: JSX.CSSProperties;
  background?: JSX.CSSProperties;
};

export type CircularProgressbarDefaultProps = {
  background: boolean;
  backgroundPadding: number;
  circleRatio: number;
  classes: {
    root: string;
    trail: string;
    path: string;
    text: string;
    background: string;
  };
  className: string;
  counterClockwise: boolean;
  maxValue: number;
  minValue: number;
  strokeWidth: number;
  styles: CircularProgressbarStyles;
  text: string;
};

// These are used for any CircularProgressbar wrapper components that can safely
// ignore default props.
export type CircularProgressbarWrapperProps = {
  background?: boolean;
  backgroundPadding?: number;
  circleRatio?: number;
  classes?: {
    root: string;
    trail: string;
    path: string;
    text: string;
    background: string;
  };
  className?: string;
  counterClockwise?: boolean;
  maxValue?: number;
  minValue?: number;
  strokeWidth?: number;
  styles?: CircularProgressbarStyles;
  text?: string;
  value: number;
};

export type CircularProgressbarProps = CircularProgressbarDefaultProps & {
  value: number;
};
