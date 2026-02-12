import { PortableText } from '@portabletext/react';

interface NoteContentProps {
  note: {
    body: any[];
  };
}

export default function NoteContent({ note }: NoteContentProps) {
  const components = {
    types: {
      code({ value }: any) {
        return (
          <div className="my-8 rounded-xl overflow-hidden border border-stone-200 shadow-lg">
            <div className="bg-stone-100 px-4 py-2 text-xs font-mono text-stone-600 border-b border-stone-200">
              {value.language || 'text'}
            </div>
            <pre className="p-5 overflow-x-auto text-sm leading-relaxed m-0 bg-[#1e1e1e] text-[#d4d4d4]">
              <code className={`language-${value.language || 'text'}`}>
                {value.code}
              </code>
            </pre>
          </div>
        );
      },
    },
    marks: {
      link({ children, value }: any) {
        return (
          <a
            href={value.href}
            className="text-emerald-600 hover:text-emerald-700 underline decoration-emerald-300 underline-offset-2 hover:decoration-emerald-600 transition-all"
            target={value.href.startsWith('/') ? undefined : '_blank'}
            rel={value.href.startsWith('/') ? undefined : 'noopener noreferrer'}
          >
            {children}
          </a>
        );
      },
      strong({ children }: any) {
        return <strong className="font-semibold text-stone-900">{children}</strong>;
      },
      em({ children }: any) {
        return <em className="italic text-stone-800">{children}</em>;
      },
      code({ children }: any) {
        return (
          <code className="bg-stone-100 text-rose-700 px-1.5 py-0.5 rounded text-sm font-mono">
            {children}
          </code>
        );
      },
    },
    block: {
      h1({ children }: any) {
        return <h1 className="text-4xl font-serif mb-6 mt-12 text-stone-900 font-bold">{children}</h1>;
      },
      h2({ children }: any) {
        return <h2 className="text-3xl font-serif mb-4 mt-10 text-stone-900 font-bold">{children}</h2>;
      },
      h3({ children }: any) {
        return <h3 className="text-2xl font-serif mb-3 mt-8 text-stone-900 font-bold">{children}</h3>;
      },
      h4({ children }: any) {
        return <h4 className="text-xl font-serif mb-3 mt-6 text-stone-900 font-semibold">{children}</h4>;
      },
      normal({ children }: any) {
        return <p className="leading-relaxed text-stone-700 mb-5 text-lg">{children}</p>;
      },
      blockquote({ children }: any) {
        return (
          <blockquote className="border-l-4 border-emerald-400 pl-6 py-2 my-8 italic text-stone-600 bg-stone-50/50 rounded-r-lg">
            {children}
          </blockquote>
        );
      },
    },
    list: {
      bullet({ children }: any) {
        return <ul className="my-6 space-y-2 ml-6 list-disc marker:text-emerald-600">{children}</ul>;
      },
      number({ children }: any) {
        return <ol className="my-6 space-y-2 ml-6 list-decimal marker:text-emerald-600">{children}</ol>;
      },
    },
    listItem({ children }: any) {
      return <li className="text-stone-700 mb-1 pl-1">{children}</li>;
    },
  };

  return (
    <div className="
      max-w-none
      prose prose-stone prose-lg
      prose-headings:font-serif prose-headings:tracking-tight prose-headings:text-stone-900
      prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
      prose-p:leading-relaxed prose-p:text-stone-700 prose-p:text-lg
      prose-li:text-stone-700 prose-li:my-0
      prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-a:decoration-emerald-400 prose-a:underline-offset-2
      prose-strong:text-stone-900
      prose-code:text-rose-700 prose-code:bg-stone-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
      prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0
      prose-blockquote:border-l-4 prose-blockquote:border-emerald-400 prose-blockquote:pl-6 prose-blockquote:italic
      prose-img:rounded-lg prose-img:shadow-md
    ">
      <PortableText value={note.body} components={components} />
    </div>
  );
}