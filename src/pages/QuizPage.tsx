import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router';
import { questions } from '../data/questions';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Home,
  Trophy,
  BookOpen,
} from 'lucide-react';

interface Answer {
  selectedIndex: number;
  isCorrect: boolean;
}

export default function QuizPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const tid = parseInt(topicId || '0', 10);

  // Filter questions by topic (0 = all topics)
  const topicQuestions = useMemo(() => {
    if (tid === 0) return [...questions];
    return questions.filter((q) => q.topicId === tid);
  }, [tid]);

  const topicName = tid === 0 ? 'Full Course Quiz' : topicQuestions[0]?.topic || 'Quiz';

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<number[]>([]);
  const questionCardRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to center question when navigating or submitting
  useEffect(() => {
    if (questionCardRef.current) {
      questionCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentIndex, showExplanation]);

  const currentQuestion = topicQuestions[currentIndex];
  const totalQuestions = topicQuestions.length;
  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.values(answers).filter((a) => a.isCorrect).length;

  // Initialize shuffled options when question changes
  useMemo(() => {
    if (currentQuestion) {
      const indices = currentQuestion.options.map((_, i) => i);
      // Fisher-Yates shuffle
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      setShuffledOptions(indices);
    }
  }, [currentIndex, currentQuestion]);

  const handleOptionSelect = useCallback((optionIndex: number) => {
    if (showExplanation) return;
    setSelectedOption(optionIndex);
  }, [showExplanation]);

  const handleSubmit = useCallback(() => {
    if (selectedOption === null) return;
    const isCorrect = selectedOption === currentQuestion.correctIndex;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: { selectedIndex: selectedOption, isCorrect },
    }));
    setShowExplanation(true);
  }, [selectedOption, currentQuestion]);

  const handleNext = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  }, [currentIndex, totalQuestions]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      const prevQuestion = topicQuestions[currentIndex - 1];
      const prevAnswer = answers[prevQuestion.id];
      if (prevAnswer) {
        setSelectedOption(prevAnswer.selectedIndex);
        setShowExplanation(true);
      } else {
        setSelectedOption(null);
        setShowExplanation(false);
      }
    }
  }, [currentIndex, answers, topicQuestions]);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers({});
    setShowExplanation(false);
    setQuizComplete(false);
  }, []);

  const goToQuestion = useCallback((index: number) => {
    setCurrentIndex(index);
    const q = topicQuestions[index];
    const ans = answers[q.id];
    if (ans) {
      setSelectedOption(ans.selectedIndex);
      setShowExplanation(true);
    } else {
      setSelectedOption(null);
      setShowExplanation(false);
    }
  }, [answers, topicQuestions]);

  if (quizComplete) {
    const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const getGrade = () => {
      if (percentage >= 90) return { label: 'Outstanding!', color: 'text-green-400', bg: 'bg-green-500/20 border-green-500/40' };
      if (percentage >= 70) return { label: 'Great Job!', color: 'text-blue-400', bg: 'bg-blue-500/20 border-blue-500/40' };
      if (percentage >= 50) return { label: 'Good Effort!', color: 'text-yellow-400', bg: 'bg-yellow-500/20 border-yellow-500/40' };
      return { label: 'Keep Practicing!', color: 'text-orange-400', bg: 'bg-orange-500/20 border-orange-500/40' };
    };
    const grade = getGrade();

    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <button onClick={() => navigate('/')} className="btn-secondary flex items-center gap-2">
              <Home className="w-4 h-4" /> Home
            </button>
          </div>

          {/* Results Card */}
          <div className="quiz-card text-center">
            <Trophy className={`w-16 h-16 mx-auto mb-4 ${grade.color}`} />
            <h1 className="text-3xl font-bold mb-2">Quiz Complete!</h1>
            <p className="text-muted-foreground mb-6">{topicName}</p>

            {/* Score Circle */}
            <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full border-4 mb-6 ${grade.bg}`}>
              <div>
                <div className={`text-4xl font-bold ${grade.color}`}>{percentage}%</div>
                <div className="text-sm text-muted-foreground">{correctCount}/{totalQuestions}</div>
              </div>
            </div>

            <div className={`text-xl font-semibold mb-6 ${grade.color}`}>{grade.label}</div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <div className="text-2xl font-bold text-green-400">{correctCount}</div>
                <div className="text-sm text-muted-foreground">Correct</div>
              </div>
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                <div className="text-2xl font-bold text-red-400">{totalQuestions - correctCount}</div>
                <div className="text-sm text-muted-foreground">Incorrect</div>
              </div>
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                <div className="text-2xl font-bold text-primary">{answeredCount}</div>
                <div className="text-sm text-muted-foreground">Answered</div>
              </div>
            </div>

            {/* Question Review Navigation */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Question Review</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {topicQuestions.map((q, idx) => {
                  const ans = answers[q.id];
                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setQuizComplete(false);
                        goToQuestion(idx);
                      }}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                        ans?.isCorrect
                          ? 'bg-green-500/20 border border-green-500 text-green-400 hover:bg-green-500/30'
                          : ans
                          ? 'bg-red-500/20 border border-red-500 text-red-400 hover:bg-red-500/30'
                          : 'bg-secondary border border-border text-muted-foreground hover:bg-primary/10'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 justify-center">
              <button onClick={handleRestart} className="btn-primary flex items-center gap-2">
                <RotateCcw className="w-4 h-4" /> Restart Quiz
              </button>
              <button onClick={() => navigate('/')} className="btn-secondary flex items-center gap-2">
                <Home className="w-4 h-4" /> All Topics
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">No questions found for this topic.</p>
          <button onClick={() => navigate('/')} className="btn-primary">Go Home</button>
        </div>
      </div>
    );
  }

  const currentAnswer = answers[currentQuestion.id];
  const optionLabels = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="w-4 h-4" />
            <span>{topicName}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="font-medium">{correctCount}/{answeredCount} correct</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-muted-foreground">Question {currentIndex + 1} of {totalQuestions}</span>
            <span className="text-muted-foreground">{Math.round(((currentIndex + 1) / totalQuestions) * 100)}% complete</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="quiz-card" ref={questionCardRef}>
          {/* Topic & Subtopic */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
              {currentQuestion.topic}
            </span>
            {currentQuestion.subtopic && (
              <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                {currentQuestion.subtopic}
              </span>
            )}
          </div>

          {/* Scenario */}
          <div className="mb-6">
            <p
              className="text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: currentQuestion.scenario }}
            />
          </div>

          {/* Options */}
          <div className="space-y-3">
            {shuffledOptions.map((originalIndex, displayIndex) => {
              const label = optionLabels[displayIndex];
              let optionClass = 'option-btn';

              if (showExplanation) {
                if (originalIndex === currentQuestion.correctIndex) {
                  optionClass += ' option-correct';
                } else if (selectedOption === originalIndex && selectedOption !== currentQuestion.correctIndex) {
                  optionClass += ' option-incorrect';
                }
              } else if (selectedOption === originalIndex) {
                optionClass += ' option-selected';
              }

              return (
                <button
                  key={originalIndex}
                  onClick={() => handleOptionSelect(originalIndex)}
                  className={optionClass}
                  disabled={showExplanation}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center text-sm font-medium">
                    {showExplanation && originalIndex === currentQuestion.correctIndex ? (
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    ) : showExplanation && selectedOption === originalIndex && selectedOption !== currentQuestion.correctIndex ? (
                      <XCircle className="w-5 h-5 text-red-400" />
                    ) : (
                      label
                    )}
                  </span>
                  <span
                    className="flex-1"
                    dangerouslySetInnerHTML={{ __html: currentQuestion.options[originalIndex] }}
                  />
                </button>
              );
            })}
          </div>

          {/* Explanation Section */}
          {showExplanation && (
            <div className="mt-6 space-y-3">
              <div
                className={`explanation-box ${
                  currentAnswer?.isCorrect ? 'explanation-correct' : 'explanation-incorrect'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  {currentAnswer?.isCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="font-semibold text-green-400">Correct!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span className="font-semibold text-red-400">
                        Incorrect. The correct answer is {optionLabels[shuffledOptions.indexOf(currentQuestion.correctIndex)]}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Individual Option Explanations */}
              <div className="mt-4 space-y-2">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Explanations</h4>
                {shuffledOptions.map((originalIndex, displayIndex) => {
                  const label = optionLabels[displayIndex];
                  const isCorrect = originalIndex === currentQuestion.correctIndex;
                  const isSelected = selectedOption === originalIndex;
                  const explanation = currentQuestion.explanations[originalIndex];
                  const isCorrectStart = explanation?.startsWith('CORRECT');

                  return (
                    <div
                      key={originalIndex}
                      className={`p-3 rounded-lg border ${
                        isCorrect
                          ? 'bg-green-500/10 border-green-500/30'
                          : isSelected
                          ? 'bg-red-500/10 border-red-500/30'
                          : 'bg-secondary/30 border-border/50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                            isCorrect
                              ? 'bg-green-500/20 text-green-400'
                              : isSelected
                              ? 'bg-red-500/20 text-red-400'
                              : 'bg-secondary text-muted-foreground'
                          }`}
                        >
                          {label}
                        </span>
                        <div className="flex-1">
                          <p
                            className="text-sm mb-1"
                            dangerouslySetInnerHTML={{ __html: currentQuestion.options[originalIndex] }}
                          />
                          <p
                            className={`text-sm ${
                              isCorrectStart ? 'text-green-300' : 'text-muted-foreground'
                            }`}
                            dangerouslySetInnerHTML={{ __html: explanation || '' }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="btn-secondary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" /> Previous
            </button>

            {!showExplanation ? (
              <button
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="btn-primary flex items-center gap-2"
              >
                {currentIndex < totalQuestions - 1 ? (
                  <>Next <ArrowRight className="w-4 h-4" /></>
                ) : (
                  <>Finish <Trophy className="w-4 h-4" /></>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Question Navigator */}
        <div className="mt-6 quiz-card">
          <h4 className="font-semibold text-sm text-muted-foreground mb-3">Question Navigator</h4>
          <div className="flex flex-wrap gap-2">
            {topicQuestions.map((q, idx) => {
              const ans = answers[q.id];
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={q.id}
                  onClick={() => goToQuestion(idx)}
                  className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                    isCurrent
                      ? 'bg-primary text-primary-foreground ring-2 ring-primary/50'
                      : ans?.isCorrect
                      ? 'bg-green-500/20 border border-green-500/50 text-green-400 hover:bg-green-500/30'
                      : ans
                      ? 'bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30'
                      : 'bg-secondary border border-border text-muted-foreground hover:bg-primary/10'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
