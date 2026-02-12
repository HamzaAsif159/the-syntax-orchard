import React from 'react';

type Status = 'seedling' | 'budding' | 'evergreen';

interface Note {
  _id: string;
  title: string;
  slug: { current: string };
  status: Status;
  tags?: string[];
}

interface Props {
  note: Note;
}

export default function NoteCard({ note }: Props) {
  const statusStyles: Record<Status, { bg: string; text: string; border: string; emoji: string }> = {
    seedling:   { bg: 'bg-amber-50',  text: 'text-amber-800',  border: 'border-amber-200',  emoji: '🌱' },
    budding:    { bg: 'bg-sky-50',    text: 'text-sky-800',    border: 'border-sky-200',    emoji: '🌸' },
    evergreen:  { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200', emoji: '🌳' },
  };

  const style = statusStyles[note.status] || {
    bg: 'bg-gray-50',
    text: 'text-gray-800',
    border: 'border-gray-200',
    emoji: '❓'
  };

  return (
    <a
      href={`/notes/${note.slug.current}`}
      className="group block p-6 bg-white border border-stone-200 rounded-xl hover:shadow-md hover:border-stone-300 hover:-translate-y-0.5 transition-all duration-200"
    >
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full border font-medium ${style.bg} ${style.text} ${style.border}`}
      >
        <span className="text-base">{style.emoji}</span>
        {note.status.charAt(0).toUpperCase() + note.status.slice(1)}
      </span>

      <h3 className="mt-5 text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
        {note.title}
      </h3>

      {note.tags?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {note.tags.map((t) => (
            <span key={t} className="text-xs text-stone-500 bg-stone-100 px-2.5 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}