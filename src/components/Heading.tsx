export const Heading: React.FC<{ text: string }> = props => {
  return <h1 className="text-4xl font-bold">{props.text}</h1>;
};
