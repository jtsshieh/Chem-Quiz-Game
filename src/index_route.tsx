import "./App.css";
import { Button } from '@mui/joy';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <main>
        Welcome to the Chemistry Quiz.
        <br />
        Choose a problem type:
        <div className="homepage-buttons">
            <Button component={Link} to="/empirical-formula">Empirical Formula</Button>
            <Button component={Link} to="/pressure">Pressure Calcuation</Button>
            <Button component={Link} to="/buffers">Buffers</Button>
            <Button component={Link} to="/formula-naming">Chemical Formula Naming</Button>
        </div>

    </main>
  );
}
