import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ReadingPage from './pages/ReadingPage';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:topicId" element={<QuizPage />} />
        <Route path="/reading" element={<ReadingPage />} />
      </Routes>
    </div>
  );
}

export default App;
