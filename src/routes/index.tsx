import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Copy, Download, Hash, Sparkles, WandSparkles } from "lucide-react";

import { ParsedHtml } from "@/components/site/parsed-html";
import { pageHtml } from "@/content/index";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.tubepilot.app";

type GeneratorResult = {
  titles: string[];
  description: string;
  hashtags: string[];
};

function makeCreatorPack(rawTopic: string): GeneratorResult {
  const topic = rawTopic.trim().replace(/[.!?]+$/, "");
  const cleanTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
  const words = topic.toLowerCase().match(/[a-z0-9]+/g) ?? [];
  const keywords = [...new Set(words.filter((word) => word.length > 2))].slice(0, 5);
  const tags = [...new Set([
    ...keywords,
    "youtube",
    "contentcreator",
    "youtubegrowth",
    "creator",
  ])].slice(0, 8);
  const hashtagList = tags.map((tag) => `#${tag.replace(/\s+/g, "")}`);

  return {
    titles: [
      `${cleanTopic}: The Beginner-Friendly Guide`,
      `I Tried ${cleanTopic} — Here's What You Should Know`,
      `7 Things to Know Before You Start ${cleanTopic}`,
    ],
    description:
      `Want to learn about ${topic}? In this video, we break down the key ideas, practical tips, and simple steps to help you get started.\n\n\u2728 What you'll learn:\n\u2022 The essentials of ${topic}\n\u2022 Practical tips you can try today\n\u2022 Common mistakes and how to avoid them\n\nIf this video helps, give it a like, subscribe for more creator-friendly guides, and share your questions in the comments!\n\nSubscribe for more videos like this.\n\n#${tags.slice(0, 3).join(" #")}`,
    hashtags: hashtagList,
  };
}

function InteractiveGenerator() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState<GeneratorResult | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  function handleGenerate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!topic.trim()) {
      setError("Enter a video topic or idea to generate your creator pack.");
      setResult(null);
      return;
    }
    setError("");
    setIsGenerating(true);
    // Instant local demo generation. Connect a server AI endpoint here for live model output.
    window.setTimeout(() => {
      setResult(makeCreatorPack(topic));
      setIsGenerating(false);
      setCopied("");
    }, 180);
  }

  async function copyText(label: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      window.setTimeout(() => setCopied(""), 1800);
    } catch {
      setCopied("");
    }
  }

  return (
    <section
      aria-labelledby="ai-generator-title"
      className="relative overflow-hidden border-y border-[#ead9ec] bg-gradient-to-b from-[#fffaff] via-white to-[#fbf7fc] px-4 py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-fuchsia-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />
      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e7cde9] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#74146f] shadow-sm">
            <Sparkles size={15} /> TubePilot AI Studio
          </span>
          <h2 id="ai-generator-title" className="text-3xl font-black tracking-tight text-[#241327] sm:text-4xl">
            Turn your video idea into a <span className="text-[#861b80]">creator-ready pack.</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-[#695b6d]">
            Add your YouTube topic and get title ideas, a ready-to-edit description, and relevant hashtags in seconds.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-3xl border border-[#ead9ec] bg-white p-4 shadow-[0_24px_80px_-36px_rgba(91,20,91,0.35)] sm:p-7">
          <form onSubmit={handleGenerate} className="space-y-4">
            <label htmlFor="video-topic" className="block text-sm font-semibold text-[#332238]">
              What's your next video about?
            </label>
            <textarea
              id="video-topic"
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              placeholder="e.g. 5 free AI tools every YouTube creator should know"
              rows={3}
              maxLength={240}
              className="w-full resize-y rounded-2xl border border-[#dfcfe2] bg-[#fdfafd] px-4 py-4 text-base text-[#241327] outline-none transition placeholder:text-[#a293a5] focus:border-[#8b2685] focus:ring-4 focus:ring-[#8b2685]/10"
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs text-[#8a7b8d]">{topic.length}/240 characters · English works best for this demo</span>
              <button
                type="submit"
                disabled={isGenerating}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#74146f] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#74146f]/20 transition hover:-translate-y-0.5 hover:bg-[#5e105a] disabled:cursor-wait disabled:opacity-70"
              >
                {isGenerating ? <><WandSparkles size={17} className="animate-pulse" /> Creating your pack…</> : <><Sparkles size={17} /> Generate with AI <ArrowRight size={17} /></>}
              </button>
            </div>
            {error && <p role="alert" className="text-sm font-medium text-red-600">{error}</p>}
          </form>

          {result && (
            <div aria-live="polite" className="mt-7 space-y-5 border-t border-[#f0e6f1] pt-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a4a87]">Your creator pack</p>
                  <h3 className="mt-1 text-xl font-extrabold text-[#2d1b31]">Ready to refine and publish</h3>
                </div>
                <span className="rounded-full bg-[#f5eaf6] px-3 py-1 text-xs font-semibold text-[#74146f]">Instant demo output</span>
              </div>

              <div className="rounded-2xl bg-[#fcf8fc] p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h4 className="font-bold text-[#332238]">YouTube title ideas</h4>
                  <button type="button" onClick={() => copyText("titles", result.titles.join("\n"))} className="inline-flex items-center gap-1 text-xs font-semibold text-[#74146f] hover:underline">
                    {copied === "titles" ? <Check size={14} /> : <Copy size={14} />} {copied === "titles" ? "Copied" : "Copy all"}
                  </button>
                </div>
                <ol className="space-y-2">
                  {result.titles.map((title, index) => (
                    <li key={title} className="flex gap-3 rounded-xl border border-[#eee3ef] bg-white p-3 text-sm text-[#382b3b]">
                      <span className="font-bold text-[#8a3d85]">0{index + 1}</span><span>{title}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl bg-[#fcf8fc] p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h4 className="font-bold text-[#332238]">Video description</h4>
                  <button type="button" onClick={() => copyText("description", result.description)} className="inline-flex items-center gap-1 text-xs font-semibold text-[#74146f] hover:underline">
                    {copied === "description" ? <Check size={14} /> : <Copy size={14} />} {copied === "description" ? "Copied" : "Copy"}
                  </button>
                </div>
                <p className="whitespace-pre-line text-sm leading-7 text-[#5f5362]">{result.description}</p>
              </div>

              <div className="rounded-2xl bg-[#fcf8fc] p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h4 className="flex items-center gap-2 font-bold text-[#332238]"><Hash size={17} /> Suggested hashtags</h4>
                  <button type="button" onClick={() => copyText("hashtags", result.hashtags.join(" "))} className="inline-flex items-center gap-1 text-xs font-semibold text-[#74146f] hover:underline">
                    {copied === "hashtags" ? <Check size={14} /> : <Copy size={14} />} {copied === "hashtags" ? "Copied" : "Copy"}
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.hashtags.map((tag) => <span key={tag} className="rounded-full border border-[#e8d5ea] bg-white px-3 py-1.5 text-sm font-medium text-[#782174]">{tag}</span>)}
                </div>
              </div>
              <p className="text-xs leading-5 text-[#8b7d8e]">Demo generator: outputs are created locally from topic-based templates, not from a live AI model. Review every suggestion and adjust it to your video before publishing.</p>
            </div>
          )}
        </div>

        <div className="mx-auto mt-7 max-w-3xl rounded-2xl bg-[#26152a] px-5 py-6 text-center text-white shadow-xl shadow-[#35173a]/15 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e8bde8]">Take your workflow further</p>
          <h3 className="mt-2 text-xl font-extrabold sm:text-2xl">Create, optimize and schedule with TubePilot</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#e5d8e7]">Get the TubePilot Android app and manage more of your YouTube creator workflow in one place.</p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#5f155b] transition hover:-translate-y-0.5 hover:bg-[#f7eaf7]">
              <Download size={17} /> Download on Google Play
            </a>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Get TubePilot for Android on Google Play" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Get TubePilot for Android <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TubePilot - AI YouTube Creator OS" },
      { name: "description", content: "TubePilot is your AI YouTube Creator OS to CREATE videos, OPTIMIZE titles and descriptions, SCHEDULE publishing, and GROW your channel with AI tools and the TubePilot Model Context Protocol (MCP) layer." },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TubePilot" },
      { property: "og:title", content: "TubePilot - AI YouTube Creator OS" },
      { property: "og:description", content: "CREATE, OPTIMIZE, SCHEDULE and GROW with TubePilot AI tools and our Model Context Protocol (MCP) layer." },
      { property: "og:url", content: "https://tubepilot.app/" },
      { property: "og:image", content: "https://tubepilot.app/images/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://tubepilot.app/images/logo.png" },
      { name: "twitter:title", content: "TubePilot - AI YouTube Creator OS" },
      { name: "twitter:description", content: "CREATE, OPTIMIZE, SCHEDULE and GROW with TubePilot AI tools and our MCP layer." },
    ],
    links: [{ rel: "canonical", href: "https://tubepilot.app/" }],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <>
      <InteractiveGenerator />
      <ParsedHtml html={pageHtml} />
    </>
  );
}
