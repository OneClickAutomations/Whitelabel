import {
  Code,
  Image,
  MessageSquare,
  Music,
  PenTool,
  Search,
  Share2,
  Video,
  Volume2,
  Globe,
  Database,
  Box,
  Megaphone,
  FileText,
  LayoutTemplate,
  BookOpen
} from 'lucide-react';

export const apps = [
  { icon: PenTool, name: 'AI Writer', description: 'Create compelling content in seconds' },
  { icon: Image, name: 'AI Image Generator', description: 'Generate stunning visuals instantly' },
  { icon: Video, name: 'AI Video Creator', description: 'Create professional videos effortlessly' },
  { icon: Volume2, name: 'AI Voice Generator', description: 'Natural voice synthesis for any text' },
  { icon: Code, name: 'AI Code Assistant', description: 'Smart coding companion for developers' },
  { icon: Music, name: 'AI Music Composer', description: 'Create original music tracks instantly' },
  { icon: Search, name: 'AI SEO Optimizer', description: 'Optimize content for search engines' },
  { icon: Share2, name: 'AI Social Media Manager', description: 'Automate your social presence' },
  { icon: MessageSquare, name: 'AI Chatbot Builder', description: 'Build intelligent conversational agents' },
  { icon: Globe, name: 'AI Translation Tool', description: 'Break language barriers instantly' },
  { icon: Database, name: 'AI Data Analyzer', description: 'Extract insights from your data' },
  { icon: Box, name: 'AI Logo Generator', description: 'Create unique brand identities' },
  { icon: Megaphone, name: 'AI Ad Generator', description: 'Generate converting ad copy' },
  { icon: FileText, name: 'AI Marketing Proposals', description: 'Create winning proposals' },
  { icon: LayoutTemplate, name: 'AI Funnel Generator', description: 'Design high-converting funnels' },
  { icon: BookOpen, name: 'AI Blog Generator', description: 'Generate engaging blog content' }
] as const;