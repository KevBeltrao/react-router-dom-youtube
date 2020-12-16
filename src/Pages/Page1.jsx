import { Redirect } from 'react-router-dom';

import Component1 from '../components/Component1';

const Page1 = (props) => {
  console.log(props);

  if (props.history) {
    return <Redirect to="users" />
  }

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        background: 'blue',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
      }}    
    >
      Page 1

      <Component1 />
    </div>
  );
}
 
export default Page1;
