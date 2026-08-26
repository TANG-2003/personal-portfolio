export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  type: "Research" | "AI Product" | "Agent" | "Mini App" | "Game";
  year: string;
  tags: string[];
  highlight?: string;
  problem: string;
  solution: string;
  contributions: string[];
  status: "Featured" | "In progress" | "Completed";
};

export const projects: Project[] = [
  {
    slug: "rgbd-multimodal-recognition",
    title: "RGB-D Multimodal Recognition",
    eyebrow: "Multimodal AI · Computer Vision",
    summary: "Object-centric RGB-D recognition with CLIP and depth-aware fusion for indoor object classification.",
    type: "Research",
    year: "2026",
    tags: ["CLIP", "RGB-D", "Multimodal", "PyTorch"],
    highlight: "Explores when aligned depth geometry can improve RGB recognition.",
    problem: "RGB appearance alone can be ambiguous for indoor objects with similar textures or viewpoints.",
    solution: "Build an object-centric RGB-D pipeline and evaluate depth-aware fusion and gating strategies on indoor recognition benchmarks.",
    contributions: ["Object-centric data protocol", "Depth feature design", "Multimodal gating", "Multi-seed evaluation"],
    status: "Featured"
  },
  {
    slug: "multimodal-fake-news",
    title: "Multimodal Fake News Detection",
    eyebrow: "Multimodal Learning · Reliability",
    summary: "A research system studying text-image reliability, routing and robustness for fake news detection.",
    type: "Research",
    year: "2026",
    tags: ["RoBERTa", "CLIP", "Routing", "Robustness"],
    highlight: "Focuses on whether a model can predict which modality is reliable.",
    problem: "Text and image evidence may conflict, degrade independently, or become misleading under distribution shifts.",
    solution: "Study modality-aware routing, corruption protocols and reliability prediction across multimodal fake-news settings.",
    contributions: ["Reliability routing", "Corruption protocols", "Cross-event evaluation", "Selective prediction"],
    status: "Featured"
  },
  {
    slug: "live-subtitle-translator",
    title: "Live Subtitle Translator",
    eyebrow: "AI Learning Product",
    summary: "A browser learning tool for real-time bilingual subtitles, translation and vocabulary support while watching videos.",
    type: "AI Product",
    year: "2026",
    tags: ["Browser Extension", "LLM", "JavaScript", "UX"],
    highlight: "Turns passive video watching into an interactive language-learning flow.",
    problem: "Language learners often switch between video, dictionary and translation tools, breaking immersion.",
    solution: "Overlay bilingual subtitles and lightweight vocabulary explanations directly in the video experience.",
    contributions: ["Product concept", "Interaction design", "Subtitle synchronization", "LLM integration"],
    status: "Featured"
  },
  {
    slug: "research-memory-agent",
    title: "Research Memory Agent",
    eyebrow: "AI Agent · Knowledge Workflow",
    summary: "A personal research agent that tracks papers, organizes discoveries and helps retrieve prior reading later.",
    type: "Agent",
    year: "2026",
    tags: ["Agent", "RAG", "Research", "Automation"],
    problem: "Useful papers are easy to discover but hard to organize, revisit and connect over time.",
    solution: "Create a persistent research workspace that pushes relevant papers and stores structured notes for later retrieval.",
    contributions: ["Workflow design", "Paper ingestion", "Memory structure", "Personalized retrieval"],
    status: "In progress"
  },
  {
    slug: "interactive-elevator",
    title: "Interactive Elevator",
    eyebrow: "Vibe Coding · Interaction Demo",
    summary: "A small interactive elevator simulator with floor selection, door controls and state transitions.",
    type: "Mini App",
    year: "2026",
    tags: ["Frontend", "Interaction", "Prototype"],
    problem: "Simple interface demos often look static and fail to communicate interaction logic.",
    solution: "Build a compact state-based elevator experience with clickable controls and visible door behavior.",
    contributions: ["State design", "Interaction logic", "UI implementation"],
    status: "Completed"
  },
  {
    slug: "vibe-coding-game",
    title: "Vibe Coding Mini Game",
    eyebrow: "Playground · Game Prototype",
    summary: "A lightweight web game built as an end-to-end vibe-coding experiment from idea to playable prototype.",
    type: "Game",
    year: "2026",
    tags: ["Game", "Web", "Prototype"],
    problem: "Explore how quickly a rough idea can become a polished, playable interaction.",
    solution: "Use an iterative build-test-refine loop to turn a simple concept into a browser game.",
    contributions: ["Concept", "Rapid prototyping", "Interaction polish"],
    status: "Completed"
  }
];
