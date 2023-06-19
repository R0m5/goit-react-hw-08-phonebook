import AuthNav from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/Usermenu';
import { useAuth } from 'hooks';

export default function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px',
        borderBottom: '2px solid black',
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
