export type HeadingProps = { text: string };

export const Heading: React.FC<HeadingProps> = props => {
  return <h1 className="text-4xl font-bold">{props.text}</h1>;
};
