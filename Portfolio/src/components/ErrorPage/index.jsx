import { Link, useRouteError } from "react-router-dom";
import { toProperCase } from '../../utils/helpers';

import backgroundImage from '../../assets/images/star-wars-5277570_1280.jpg';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <div className="error-block">
      <h1><i>{error.statusText || error.message} -</i> This Isn&#39;t the Page You&#39;re Looking For...</h1>
      
      <p>These are not the Pages you are looking for. But you can find what you need back on the home page.</p>
      <Link to="/">{toProperCase('Use the force')}</Link>
      </div>
      
      <img src={backgroundImage} alt="use the force"></img>
    </div>
  );
}