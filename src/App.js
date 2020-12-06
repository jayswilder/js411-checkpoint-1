import './App.css';
import OutlinedCard from './components/UserLoginPage';
import Profile from './components/Dashboard';
import { useAuth0 } from '@auth0/auth0-react';
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {


  const { isLoading } = useAuth0();

  if (isLoading) return <div id="loading"><p>Loading...</p><br></br><br></br><CircularProgress /></div>

  return (
    <div>
      <OutlinedCard />
      <Profile />
    </div>
  );
}

export default App;
