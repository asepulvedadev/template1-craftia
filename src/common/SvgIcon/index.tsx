import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height, ariaLabel }: SvgIconProps) => (
  <img src={`/img/svg/${src}`} alt={ariaLabel || src} width={width} height={height} />
);