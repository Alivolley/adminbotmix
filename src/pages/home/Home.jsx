import { Navigate } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Navigate to="/admin-panel" />
    </div>
  );
}

export default Home;
