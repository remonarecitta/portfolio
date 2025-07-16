import { useState, useRef, useEffect } from 'react';
import './Terminal.css';

const responses = {
  'remona -v' : 'v5.0 – 5 years of front-end',
  'fun-fact': 'I love coming up with creative but useless app ideas, do check out my projects',
  'git status' : 'Currently thinking sbout new project Idea',
  'git log': `c3f1e45 (HEAD -> main) feat: mentoring frontend team & owning performance module
e4a9b23 refactor: migrated legacy components to modular micro-frontends 🚀
b7f5d88 test: achieved 85% test coverage with Playwright + Jest 🔍
a9c3a67 feat: built GraphQL layer for dynamic dashboards
97fa80a init: first full-time job as Full Stack Software Engineer 🧠`,
  help: 'Available commands: remona -v, fun-fact, git status, git log, help, clear',
  clear: 'clear',
};

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const terminalRef = useRef(null);
const inputRef = useRef(null);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    const output = responses[trimmed] || `Command not found: ${trimmed}`;
    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="terminal-wrapper">
      <div className="terminal-window" ref={terminalRef} onClick={() => inputRef.current?.focus()}>
        {history.map((entry, idx) => (
          <div key={idx}>
            <p className="terminal-line">&gt; <span className="command">{entry.command}</span></p>
            <p className="terminal-output">{entry.output}</p>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <p className="terminal-line">
            &gt; <input
  ref={inputRef}
  type="text"
  value={input}
  onChange={(e) => setInput(e.target.value)}
  className="terminal-input"
  autoComplete="off"
  placeholder='Type "help" for commands'
/>

          </p>
        </form>
      </div>
    </div>
  );
};

export default Terminal;
