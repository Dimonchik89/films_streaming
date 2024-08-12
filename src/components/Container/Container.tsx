import {PropsWithChildren} from 'react';

interface Props extends PropsWithChildren {}

const Container: React.FC<Props> = ({children}) => {
  return <div className="container">{children}</div>;
};

export default Container;
