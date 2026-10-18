import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Article, Comment, ReadingTheme, ReadingFontSize, ReadingFontFamily, Category } from '../types/blog';
import { INITIAL_ARTICLES, INITIAL_COMMENTS } from '../data/initialArticles';

interface BlogContextType {
  articles: Article[];
  comments: Comment[];
  bookmarks: string[];
  theme: ReadingTheme;
  fontSize: ReadingFontSize;
  fontFamily: ReadingFontFamily;
  activeArticleId: string | null;
  activeArticle: Article | null;
  isEditorOpen: boolean;
  editingArticle: Article | null;
  searchQuery: string;
  selectedCategory: string;
  activeView: 'feed' | 'bookmarks' | 'archive';
  
  // Actions
  selectArticle: (id: string | null) => void;
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  addClap: (id: string) => void;
  addComment: (articleId: string, authorName: string, content: string) => void;
  likeComment: (commentId: string) => void;
  saveArticle: (articleData: Partial<Article>, existingId?: string) => string;
  deleteArticle: (id: string) => void;
  setTheme: (theme: ReadingTheme) => void;
  setFontSize: (size: ReadingFontSize) => void;
  setFontFamily: (family: ReadingFontFamily) => void;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setActiveView: (view: 'feed' | 'bookmarks' | 'archive') => void;
  openEditor: (articleId?: string) => void;
  closeEditor: () => void;
}

const STORAGE_KEYS = {
  ARTICLES: 'meridian_articles_v1',
  COMMENTS: 'meridian_comments_v1',
  BOOKMARKS: 'meridian_bookmarks_v1',
  THEME: 'meridian_reading_theme_v1',
  FONT_SIZE: 'meridian_reading_fontsize_v1',
  FONT_FAMILY: 'meridian_reading_fontfamily_v1',
};

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ARTICLES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to load articles from storage', e);
    }
    return INITIAL_ARTICLES;
  });

  const [comments, setComments] = useState<Comment[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMMENTS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.error('Failed to load comments from storage', e);
    }
    return INITIAL_COMMENTS;
  });

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.error('Failed to load bookmarks from storage', e);
    }
    return ['arch-of-light'];
  });

  const [theme, setThemeState] = useState<ReadingTheme>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    return (saved as ReadingTheme) || 'archival';
  });

  const [fontSize, setFontSizeState] = useState<ReadingFontSize>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.FONT_SIZE);
    return (saved as ReadingFontSize) || 'normal';
  });

  const [fontFamily, setFontFamilyState] = useState<ReadingFontFamily>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.FONT_FAMILY);
    return (saved as ReadingFontFamily) || 'serif';
  });

  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeView, setActiveView] = useState<'feed' | 'bookmarks' | 'archive'>('feed');

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(articles));
    } catch (e) {
      console.error(e);
    }
  }, [articles]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.COMMENTS, JSON.stringify(comments));
    } catch (e) {
      console.error(e);
    }
  }, [comments]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarks]);

  const setTheme = (newTheme: ReadingTheme) => {
    setThemeState(newTheme);
    localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
  };

  const setFontSize = (size: ReadingFontSize) => {
    setFontSizeState(size);
    localStorage.setItem(STORAGE_KEYS.FONT_SIZE, size);
  };

  const setFontFamily = (family: ReadingFontFamily) => {
    setFontFamilyState(family);
    localStorage.setItem(STORAGE_KEYS.FONT_FAMILY, family);
  };

  const selectArticle = (id: string | null) => {
    setActiveArticleId(id);
    if (id) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]
    );
  };

  const isBookmarked = (id: string) => bookmarks.includes(id);

  const addClap = (id: string) => {
    setArticles(prev =>
      prev.map(art => (art.id === id ? { ...art, claps: art.claps + 1 } : art))
    );
  };

  const addComment = (articleId: string, authorName: string, content: string) => {
    const newComment: Comment = {
      id: 'c_' + Date.now(),
      articleId,
      authorName: authorName.trim() || 'Anonymous Reader',
      content: content.trim(),
      createdAt: 'Just now',
      likes: 0
    };
    setComments(prev => [newComment, ...prev]);
  };

  const likeComment = (commentId: string) => {
    setComments(prev =>
      prev.map(c => (c.id === commentId ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  const saveArticle = (articleData: Partial<Article>, existingId?: string): string => {
    const now = new Date();
    const publishedDate = now.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    // Estimate read time
    const wordCount = (articleData.content || '').split(/\s+/).filter(Boolean).length;
    const readMinutes = Math.max(1, Math.ceil(wordCount / 200));

    if (existingId) {
      setArticles(prev =>
        prev.map(art => {
          if (art.id === existingId) {
            return {
              ...art,
              ...articleData,
              readTimeMinutes: readMinutes,
            } as Article;
          }
          return art;
        })
      );
      closeEditor();
      return existingId;
    } else {
      const newId = 'art_' + Date.now();
      const slug = (articleData.title || 'untitled')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      const newArticle: Article = {
        id: newId,
        slug,
        title: articleData.title || 'Untitled Essay',
        deck: articleData.deck || '',
        content: articleData.content || '',
        coverImage: articleData.coverImage || INITIAL_ARTICLES[0].coverImage,
        coverCaption: articleData.coverCaption || 'Author field capture.',
        category: (articleData.category as Category) || 'Cultural Theory',
        tags: articleData.tags && articleData.tags.length > 0 ? articleData.tags : ['Essay'],
        author: articleData.author || {
          name: 'Author Contributor',
          role: 'Independent Essayist',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80',
          bio: 'Contributor to The Meridian Journal.'
        },
        publishedAt: publishedDate,
        readTimeMinutes: readMinutes,
        claps: 1,
        isFeatured: false,
        isLeadStory: false
      };

      setArticles(prev => [newArticle, ...prev]);
      closeEditor();
      setActiveArticleId(newId);
      return newId;
    }
  };

  const deleteArticle = (id: string) => {
    setArticles(prev => prev.filter(art => art.id !== id));
    if (activeArticleId === id) {
      setActiveArticleId(null);
    }
  };

  const openEditor = (articleId?: string) => {
    setEditingArticleId(articleId || null);
    setIsEditorOpen(true);
  };

  const closeEditor = () => {
    setIsEditorOpen(false);
    setEditingArticleId(null);
  };

  const activeArticle = articles.find(a => a.id === activeArticleId) || null;
  const editingArticle = articles.find(a => a.id === editingArticleId) || null;

  return (
    <BlogContext.Provider
      value={{
        articles,
        comments,
        bookmarks,
        theme,
        fontSize,
        fontFamily,
        activeArticleId,
        activeArticle,
        isEditorOpen,
        editingArticle,
        searchQuery,
        selectedCategory,
        activeView,
        selectArticle,
        toggleBookmark,
        isBookmarked,
        addClap,
        addComment,
        likeComment,
        saveArticle,
        deleteArticle,
        setTheme,
        setFontSize,
        setFontFamily,
        setSearchQuery,
        setSelectedCategory,
        setActiveView,
        openEditor,
        closeEditor,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
