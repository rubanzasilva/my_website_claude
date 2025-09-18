interface KaggleIconProps {
  size?: number;
  className?: string;
}

const KaggleIcon = ({ size = 24, className }: KaggleIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-label="Kaggle"
    >
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.493c0-.236.118-.353.354-.353h2.431c.234 0 .351.117.351.353v14.343l6.203-6.272c.165-.165.33-.248.495-.248h3.239c.144 0 .236.06.283.18.047.123.023.19-.068.282l-5.794 5.934 6.042 7.771c.094.112.118.185.138.277z"/>
    </svg>
  );
};

export default KaggleIcon;