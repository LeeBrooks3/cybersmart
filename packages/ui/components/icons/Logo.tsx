interface LogoProps {
  size?: number;
}

export const Logo = ({ size = 16, ...props }: LogoProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M300 300C300 230.964 355.964 175 425 175C494.036 175 550 230.964 550 300H300Z" fill="currentColor" />
      <path d="M300 300L50 300C50 369.036 105.964 425 175 425C244.036 425 300 369.036 300 300Z" fill="currentColor" />
    </svg>
  );
};
