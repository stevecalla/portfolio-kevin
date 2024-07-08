import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>This Isn’t the Page You’re Looking For...</h1>
      <p>These are not the droids you are looking for. But you can find what you need back on the homepage.</p>
      <button >Use the Force</button>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}