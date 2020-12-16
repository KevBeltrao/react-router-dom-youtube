import { useHistory } from 'react-router-dom';

const Component1 = (props) => {
  const history = useHistory();

  return (
    <button onClick={() => {
      history.push('/johasdohjiasd');
    }}>Go back</button>
  );
};
 
export default Component1;
