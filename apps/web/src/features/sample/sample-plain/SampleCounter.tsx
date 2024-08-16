interface PropsType {
  counter: number;
}

export const SampleCounter = ({ counter }: PropsType) => {
  console.log('SampleCounter render');

  return <h1>{counter}</h1>;
};
