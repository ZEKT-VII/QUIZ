import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:topicId" element={<QuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
