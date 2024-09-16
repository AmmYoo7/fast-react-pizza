import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButtion from './LinkButtion';

function Error() {
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButtion to='-1'>&larr; Go back</LinkButtion>
    </div>
  );
}

export default Error;
