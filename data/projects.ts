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
    title: "RGB-D Multimodal Recognition｜RGB-D 多模态物体识别",
    eyebrow: "Multimodal AI · Computer Vision",
    summary: "基于NYUv2室内RGB-D数据，研究深度几何信息能否增强CLIP的物体级识别能力，并设计深度先验注入与多模态融合机制。",
    type: "Research",
    year: "2026",
    tags: ["CLIP", "RGB-D", "PyTorch", "Multimodal Learning"],
    highlight: "通过深度几何先验与多模态融合，将物体识别准确率从76.94%提升至83.00%。",
    problem: "在室内物体识别中，仅依赖RGB外观容易受到纹理相似、视角变化和遮挡等因素影响。我的核心问题是：与物体mask对齐的深度几何信息，是否能够真正补充CLIP的视觉表征，而不是简单增加一个模态。",
    solution: "基于NYUv2构建object-centric RGB-D数据协议，提取与目标物体对齐的深度几何特征，并围绕深度先验注入、Prompt优化和CLIP内部特征融合设计多组实验，通过消融实验和多随机种子评估验证改进来源。",
    contributions: [ "Object-centric RGB-D 数据协议", "深度几何特征设计", "多模态融合与门控机制", "多随机种子与消融实验"],
    status: "Featured"
  },
  {
    slug: "multimodal-fake-news",
    title: "Multimodal Fake News Detection｜多模态虚假新闻检测",
    eyebrow: "Multimodal Learning · Reliability",
    summary: "围绕图文多模态虚假新闻检测，研究文本与图像在冲突、缺失或质量退化情况下的可靠性问题，并设计模态路由与鲁棒性评估机制。",
    type: "Research",
    year: "2026",
    tags: ["RoBERTa", "CLIP", "Routing", "Robustness"],
    highlight: "重点研究模型能否判断不同模态何时可靠，并在模态质量变化时维持稳定预测。",
    problem: "多模态虚假新闻检测并不只是把文本和图像简单融合。当文本与图像信息冲突、某一模态质量下降或跨事件分布发生变化时，融合模型可能受到不可靠模态干扰，导致预测性能下降。",
    solution: "以图文多模态虚假新闻检测为任务基础，分别构建文本与图像退化协议，并研究基于语义信息和模态效用的路由机制；同时通过多随机种子、跨事件划分和选择性预测评估模型的可靠性与鲁棒性。",
    contributions: ["模态可靠性与路由机制", "文本 / 图像独立退化协议", "跨事件与多随机种子评估", "选择性预测与鲁棒性分析"],
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
