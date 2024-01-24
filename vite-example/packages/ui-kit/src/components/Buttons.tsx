type ButtonProps = React.PropsWithChildren<{ onClick: () => void }>;

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button style={{ backgroundColor: "pink" }} onClick={onClick}>
    {children}
  </button>
);

export default Button;
