import { useState } from 'react';
import NoteCard from './NoteCard';

type Status = 'seedling' | 'budding' | 'evergreen';

type Note = {
  _id: string;
  title: string;
  slug: { current: string };
  status: Status;
  tags?: string[];
};

interface Props {
  notes: Note[];
}

export default function NotesFilter({ notes }: Props) {
  const [activeStage, setActiveStage] = useState<Status>('All');

  const stages: { value: Status; label: string; emoji: string }[] = [
    { value: 'All',       label: 'All Notes',   emoji: '🌿' },
    { value: 'seedling',  label: 'Seedling',    emoji: '🌱' },
    { value: 'budding',   label: 'Budding',     emoji: '🌸' },
    { value: 'evergreen', label: 'Evergreen',   emoji: '🌳' },
  ];

  const filteredNotes = activeStage === 'All'
    ? notes
    : notes.filter(note => note.status === activeStage);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {stages.map(stage => (
          <button
            key={stage.value}
            onClick={() => setActiveStage(stage.value)}
            className={`
              px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2
              ${activeStage === stage.value
                ? 'bg-emerald-700 text-white shadow-md'
                : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-stone-300'
              }
            `}
          >
            <span className="text-lg">{stage.emoji}</span>
            {stage.label}
          </button>
        ))}
      </div>

      {filteredNotes.length === 0 ? (
        <p className="text-center text-stone-500 py-20 text-lg">
          No {activeStage === 'All' ? '' : activeStage + ' '}notes yet…
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredNotes.map(note => (
            <NoteCard key={note._id} note={note} client:load />
          ))}
        </div>
      )}
    </div>
  );
}