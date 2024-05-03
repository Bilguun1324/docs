type ButtonProps = {
  text?: string;
  height?: 'small' | 'medium' | 'large';
  width?: 'small' | 'medium' | 'large';
}

const Button = (props: ButtonProps) => {
  const { text = 'hello', height = 'medium', width = 'medium' } = props;

  return (
    <div className="h-12">
      <button className={`bg-white px-6 py-2`}>{text}</button>
    </div>
  );
};

export default Button;
