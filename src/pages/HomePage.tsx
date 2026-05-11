import { useNavigate } from 'react-router';
import { questions } from '../data/questions';
import { BookOpen, Cpu, Binary, Hash, ArrowRight, Layers } from 'lucide-react';

const topicIcons: Record<number, React.ReactNode> = {
  1: <BookOpen className="w-6 h-6" />,
  2: <Cpu className="w-6 h-6" />,
  3: <Binary className="w-6 h-6" />,
  4: <Hash className="w-6 h-6" />,
  5: <Hash className="w-6 h-6" />,
  6: <Hash className="w-6 h-6" />,
  7: <Layers className="w-6 h-6" />,
  8: <Layers className="w-6 h-6" />,
  9: <Layers className="w-6 h-6" />,
  10: <Layers className="w-6 h-6" />,
  11: <BookOpen className="w-6 h-6" />,
  12: <Binary className="w-6 h-6" />,
  13: <Cpu className="w-6 h-6" />,
  14: <Cpu className="w-6 h-6" />,
  15: <BookOpen className="w-6 h-6" />,
  16: <Layers className="w-6 h-6" />,
  17: <BookOpen className="w-6 h-6" />,
  18: <Layers className="w-6 h-6" />,
};

interface TopicGroup {
  id: number;
  name: string;
  count: number;
  subtopics: string[];
}

export default function HomePage() {
  const navigate = useNavigate();

  // Group questions by topic
  const topicMap = new Map<number, { name: string; subtopics: Set<string>; count: number }>();

  for (const q of questions) {
    if (!topicMap.has(q.topicId)) {
      topicMap.set(q.topicId, { name: q.topic, subtopics: new Set(), count: 0 });
    }
    const t = topicMap.get(q.topicId)!;
    t.count++;
    if (q.subtopic) t.subtopics.add(q.subtopic);
  }

  const topics: TopicGroup[] = Array.from(topicMap.entries())
    .map(([id, data]) => ({
      id,
      name: data.name,
      count: data.count,
      subtopics: Array.from(data.subtopics),
    }))
    .sort((a, b) => a.id - b.id);

  const totalQuestions = questions.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <header className="border-b border-border bg-card/50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Cpu className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">Digital Logic Design Quiz</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Master the fundamentals of digital logic with {totalQuestions} scenario-based MCQs
          </p>
        </div>
      </header>

      {/* Topics Grid */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Select a Topic</h2>
          <span className="text-sm text-muted-foreground">{totalQuestions} questions total</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => navigate(`/quiz/${topic.id}`)}
              className="topic-card group text-left w-full"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {topicIcons[topic.id] || <BookOpen className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm leading-tight">{topic.id}. {topic.name}</h3>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {topic.subtopics.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {topic.subtopics.map((st) => (
                    <span key={st} className="sub-badge">{st}</span>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{topic.count} questions</span>
                <span className="group-hover:text-primary transition-colors">Start Quiz &rarr;</span>
              </div>
            </button>
          ))}
        </div>

        {/* All Topics Quiz */}
        <div className="mt-8">
          <button
            onClick={() => navigate('/quiz/0')}
            className="w-full bg-primary/10 border border-primary/30 rounded-xl p-6 text-left hover:bg-primary/20 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Full Course Quiz</h3>
                  <p className="text-sm text-muted-foreground">All {totalQuestions} questions from every topic</p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-10 p-6 rounded-xl border border-border bg-card/30">
          <h3 className="font-semibold mb-3">How to Use This Quiz</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">&#8226;</span>
              <span>Select a topic to practice specific concepts, or try the Full Course Quiz for comprehensive review.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">&#8226;</span>
              <span>Each question presents a real-world scenario to test your understanding.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">&#8226;</span>
              <span>Select your answer and submit to see detailed explanations for all options.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-0.5">&#8226;</span>
              <span>Correct answers are highlighted in <span className="text-green-400">green</span>, incorrect in <span className="text-red-400">red</span>.</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
