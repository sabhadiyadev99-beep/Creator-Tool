import { ToolMetadata } from './types';

export const TOOLS: ToolMetadata[] = [
  {
    id: 'text-formatter',
    name: 'Text Formatter',
    path: '/text-formatter',
    description: 'Convert text to uppercase, lowercase, bold style, and add emojis automatically.',
    seoTitle: 'Free Text Formatter Tool - Convert Case & Add Emojis',
    seoDescription: 'Use our free online text formatter to convert text to uppercase, lowercase, bold Unicode styles, and automatically add emojis for social media.',
    category: 'text',
    icon: 'Type',
    longContent: `
      <h2>Optimize Your Content with Our Text Formatter</h2>
      <p>In the digital age, presentation is everything. Whether you are a student writing an essay or a creator crafting a social media post, how your text looks matters. Our Text Formatter Tool is designed to save you time and effort by automating common text manipulation tasks.</p>
      <h3>Features of the Text Formatter</h3>
      <ul>
        <li><strong>Case Conversion:</strong> Instantly switch between UPPERCASE, lowercase, and Title Case.</li>
        <li><strong>Bold Unicode Styles:</strong> Stand out on platforms like Instagram and Twitter with bold Unicode characters.</li>
        <li><strong>Auto-Emoji:</strong> Our smart algorithm adds relevant emojis to spice up your content.</li>
        <li><strong>Spacing Fixes:</strong> Remove extra spaces and clean up messy formatting.</li>
      </ul>
      <h3>Why Use a Text Formatter?</h3>
      <p>Clean text improves readability and engagement. For creators, bold styles can increase click-through rates. For students, proper spacing ensures your work looks professional.</p>
    `,
    faqs: [
      { question: "Is this tool free to use?", answer: "Yes, all our tools are 100% free with no registration required." },
      { question: "Does this work on Instagram?", answer: "Yes! Our bold styles use Unicode characters which are compatible with most social media platforms." }
    ]
  },
  {
    id: 'fancy-fonts',
    name: 'Fancy Font Generator',
    path: '/fancy-fonts',
    description: 'Convert normal text into multiple Unicode font styles for social media bios.',
    seoTitle: 'Fancy Font Generator - 10+ Cool Text Styles for Bio',
    seoDescription: 'Transform your plain text into cool, fancy fonts for your Instagram, TikTok, and Twitter bio. Copy and paste 10+ different styles.',
    category: 'creative',
    icon: 'Type',
    longContent: `
      <h2>Stand Out with Fancy Fonts</h2>
      <p>Your social media bio is your digital first impression. Why settle for boring default fonts when you can use our Fancy Font Generator to express your personality? This tool uses various Unicode mathematical alphanumeric symbols to create styles that look like different fonts but are actually special characters.</p>
      <h3>Popular Fancy Font Styles</h3>
      <p>We provide a wide range of styles including script, gothic, bold, italic, and double-struck fonts. These are perfect for highlighting important information in your bio or making your name stand out in a comments section.</p>
    `,
    faqs: [
      { question: "Will these fonts work everywhere?", answer: "Most modern apps and browsers support these Unicode styles. However, some screen readers may have difficulty reading them, so we recommend using them primarily for aesthetic accents." }
    ]
  },
  {
    id: 'hashtag-gen',
    name: 'Hashtag Generator',
    path: '/hashtag-generator',
    description: 'Generate 20-30 relevant hashtags for your niche instantly.',
    seoTitle: 'Free Hashtag Generator - Boost Your Instagram Growth',
    seoDescription: 'Generate high-performing hashtags for Instagram and TikTok. Simply enter your keyword and get 20-30 relevant tags to boost your reach.',
    category: 'social',
    icon: 'Hash',
    longContent: `
      <h2>The Secret to Viral Growth: Strategic Hashtags</h2>
      <p>Hashtags are the filing system of social media. Using the right hashtags connects your content with users who are actually interested in what you do. Our Hashtag Generator analyzes your keyword to provide a mix of popular and niche-specific tags.</p>
      <h3>How to Use Hashtags Effectively</h3>
      <p>Don't just use the most popular tags; you'll get buried in the noise. Mix high-volume tags with lower-volume, specific tags to reach your target audience effectively. We recommend using 15-20 tags for Instagram and 3-5 for TikTok.</p>
    `,
    faqs: [
      { question: "How many hashtags should I use?", answer: "For Instagram, 20-30 tags are allowed, but quality matters more than quantity. For TikTok, 3-6 highly relevant tags often perform best." }
    ]
  },
  {
    id: 'caption-improver',
    name: 'Caption Improver (AI)',
    path: '/caption-improver',
    description: 'Use AI to turn raw captions into engaging social media copy.',
    seoTitle: 'AI Social Media Caption Generator - Improve Your Reach',
    seoDescription: 'Our AI-powered Caption Improver takes your raw notes and transforms them into engaging, high-conversion social media captions in various tones.',
    category: 'social',
    icon: 'Sparkles',
    longContent: `
      <h2>Write Better Captions with AI</h2>
      <p>Struggling with writer's block? Our AI Caption Improver uses advanced language models to polish your thoughts into professional, funny, or casual social media posts. Just provide the raw idea, and let the AI do the heavy lifting.</p>
      <h3>Choose Your Tone</h3>
      <p>Whether you want to sound like a corporate pro, a funny friend, or a chill creator, our tool has you enabled. Select your preferred tone and watch your engagement grow.</p>
    `,
    faqs: [
      { question: "How does the AI work?", answer: "Our tool uses Google's Gemini AI to analyze your text and rewrite it according to established social media copywriting principles." }
    ]
  },
  {
    id: 'text-summarizer',
    name: 'Text Summarizer',
    path: '/summarizer',
    description: 'Compress long paragraphs into short, digestible summaries with AI.',
    seoTitle: 'Free AI Text Summarizer - Shorten Long Articles Fast',
    seoDescription: 'Save time reading with our AI Text Summarizer. Extract key points from long articles, essays, or reports in seconds.',
    category: 'academic',
    icon: 'FileText',
    longContent: `
      <h2>Save Time with AI Summarization</h2>
      <p>In a world of information overload, the ability to quickly grasp the essence of a text is invaluable. Our AI Text Summarizer is perfect for students, researchers, and busy professionals who need to digest large amounts of information quickly.</p>
      <h3>Summarization for Every Need</h3>
      <p>Choose between short summaries for a quick overview, medium summaries for a balanced look, or long bullet points for a detailed breakdown of the source material.</p>
    `,
    faqs: [
      { question: "Is there a word limit?", answer: "For best results, we recommend summarizing texts up to 3,000 words at a time." }
    ]
  }
];
