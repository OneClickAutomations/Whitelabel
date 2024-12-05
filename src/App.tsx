import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from '@/pages/Landing';
import { SignIn } from '@/pages/SignIn';
import { SignUp } from '@/pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;