import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router';
import { questions, type Question } from '../data/questions';
import { ArrowLeft, BookOpen, CheckCircle2, Info } from 'lucide-react';

const BATCH_SIZE = 15;

export default function ReadingPage() {
  const navigate = useNavigate();
  const [displayQuestions, setDisplayQuestions] = useState<readonly Question[]>([]);
  const [loadedCount, setLoadedCount] = useState(BATCH_SIZE);
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDisplayQuestions(questions.slice(0, loadedCount));
  }, [loadedCount]);

  const loadMore = useCallback(() => {
    if (loadedCount < questions.length) {
      setLoadedCount((prev) => Math.min(prev + BATCH_SIZE, questions.length));
    }
  }, [loadedCount]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [loadMore]);

  const optionLabels = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-8 sticky top-0 bg-background/80 backdrop-blur-md z-10 py-4 border-b border-border">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="w-4 h-4" />
            <span className="font-semibold uppercase tracking-wider">Reading Mode</span>
          </div>
          <div className="text-sm font-medium">
            {displayQuestions.length} / {questions.length} Questions
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-12 pb-20">
          {displayQuestions.map((q, idx) => {
            const showTopicHeader = idx === 0 || q.topicId !== displayQuestions[idx - 1].topicId;

            return (
              <div key={q.id}>
                {showTopicHeader && (
                  <div className="mb-6 mt-12 first:mt-0">
                    <h2 className="text-2xl font-bold border-b-2 border-primary/20 pb-2 flex items-center gap-3">
                      <span className="bg-primary/10 text-primary w-8 h-8 rounded-lg flex items-center justify-center text-sm">
                        {q.topicId}
                      </span>
                      {q.topic}
                    </h2>
                  </div>
                )}

                <div className="quiz-card hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-muted-foreground">QID: {q.id}</span>
                    {q.subtopic && (
                      <span className="text-xs bg-secondary px-2 py-1 rounded">
                        {q.subtopic}
                      </span>
                    )}
                  </div>

                  {/* Scenario */}
                  <div className="mb-6">
                    <p
                      className="text-lg leading-relaxed font-medium"
                      dangerouslySetInnerHTML={{ __html: q.scenario }}
                    />
                  </div>

                  {/* Options List - Plain */}
                  <div className="space-y-2 mb-8">
                    {q.options.map((opt, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20 border border-border/50">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-muted-foreground">
                          {optionLabels[i]}
                        </span>
                        <span className="text-sm" dangerouslySetInnerHTML={{ __html: opt }} />
                      </div>
                    ))}
                  </div>

                  {/* Explanation Section */}
                  <div className="mt-6 p-5 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="flex items-center gap-2 mb-4 text-primary">
                      <Info className="w-5 h-5" />
                      <h4 className="font-bold uppercase tracking-tight text-sm">Answer & Explanations</h4>
                    </div>

                    <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="font-semibold text-green-400">
                        Correct Answer: {optionLabels[q.correctIndex]}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {q.explanations.map((exp, i) => (
                        <div key={i} className="flex items-start gap-3 group">
                          <span className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold transition-colors ${
                            i === q.correctIndex 
                              ? 'bg-green-500 text-white' 
                              : 'bg-secondary text-muted-foreground group-hover:bg-secondary/80'
                          }`}>
                            {optionLabels[i]}
                          </span>
                          <div className="flex-1">
                             <p className={`text-sm leading-relaxed ${
                               i === q.correctIndex ? 'text-foreground font-medium' : 'text-muted-foreground'
                             }`} dangerouslySetInnerHTML={{ __html: exp }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Observer Target */}
        <div ref={observerTarget} className="h-10 flex items-center justify-center">
          {loadedCount < questions.length && (
            <div className="flex items-center gap-2 text-muted-foreground animate-pulse">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm ml-2">Loading more questions...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
