import { useMemo } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { renderStructuredAnswer } from "@/data/formatAnswer";

// Renders simple markdown: fenced code blocks, tables, bullets, bold.
export function AnswerRenderer({ text }: { text: string }) {
  const { locale } = useLocale();
  const resolved = useMemo(() => renderStructuredAnswer(text, locale), [text, locale]);
  const blocks = useMemo(() => parseBlocks(resolved), [resolved]);

  return (
    <div className="space-y-4 text-[15px] leading-[1.85] text-foreground/90">
      {blocks.map((b, i) => {
        if (b.type === "code") {
          return (
            <pre
              key={i}
              className="overflow-x-auto rounded-lg border border-border bg-background/60 p-4 text-[13px] leading-relaxed"
            >
              <code className="text-primary/90">{b.content}</code>
            </pre>
          );
        }
        if (b.type === "table") {
          return (
            <div key={i} className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/40">
                  <tr>
                    {b.rows[0].map((c, j) => (
                      <th key={j} className="px-3 py-2 text-left font-semibold">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {b.rows.slice(1).map((r, ri) => (
                    <tr key={ri} className="border-t border-border">
                      {r.map((c, j) => (
                        <td key={j} className="px-3 py-2">{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <p key={i} className="whitespace-pre-wrap">
            {b.content}
          </p>
        );
      })}
    </div>
  );
}

type Block =
  | { type: "text"; content: string }
  | { type: "code"; content: string }
  | { type: "table"; rows: string[][] };

function parseBlocks(text: string): Block[] {
  const blocks: Block[] = [];
  const lines = text.split("\n");
  let i = 0;
  let buf: string[] = [];

  const flushText = () => {
    if (buf.length) {
      blocks.push({ type: "text", content: buf.join("\n").trim() });
      buf = [];
    }
  };

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim().startsWith("```")) {
      flushText();
      i++;
      const code: string[] = [];
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        code.push(lines[i]);
        i++;
      }
      blocks.push({ type: "code", content: code.join("\n") });
      i++;
      continue;
    }
    // Markdown table
    if (line.includes("|") && lines[i + 1]?.match(/^\s*\|?[\s:-|]+\|?\s*$/)) {
      flushText();
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes("|")) {
        if (lines[i].match(/^\s*\|?[\s:-|]+\|?\s*$/)) {
          i++;
          continue;
        }
        rows.push(
          lines[i]
            .split("|")
            .map((s) => s.trim())
            .filter((s, idx, arr) => !(idx === 0 && s === "") && !(idx === arr.length - 1 && s === ""))
        );
        i++;
      }
      blocks.push({ type: "table", rows });
      continue;
    }
    buf.push(line);
    i++;
  }
  flushText();
  return blocks;
}
