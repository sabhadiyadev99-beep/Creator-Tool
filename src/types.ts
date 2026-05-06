/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ToolFAQ {
  question: string;
  answer: string;
}

export interface ToolMetadata {
  id: string;
  name: string;
  path: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  longContent: string;
  faqs: ToolFAQ[];
  category: 'text' | 'social' | 'academic' | 'creative';
  icon: string;
}
