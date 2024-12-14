import React from 'react';
import Navbar from './Navbar';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Improve Your Security at Home',
      snippet: 'Learn effective ways to improve your home security and keep your family safe with these simple tips...',
      date: 'December 12, 2024',
    },
    {
      id: 2,
      title: 'Top 5 Reasons You Need Office Security Systems',
      snippet: 'Discover the top 5 reasons why every business should invest in a reliable office security system...',
      date: 'December 10, 2024',
    },
    {
      id: 3,
      title: 'Personal Safety Tips for Everyone',
      snippet: 'Here are some personal safety tips that everyone should know, whether you’re at home or on the go...',
      date: 'December 8, 2024',
    },
  ];

  return (
    <div style={styles.mainWrapper}>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Our Blog</h1>
        <div style={styles.postsContainer}>
          {blogPosts.map((post) => (
            <div key={post.id} style={styles.post}>
              <h2 style={styles.postTitle}>{post.title}</h2>
              <p style={styles.postSnippet}>{post.snippet}</p>
              <p style={styles.postDate}>{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainWrapper: {
    fontFamily: '"Roboto", sans-serif',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
  },
  container: {
    padding: '2rem',
    backgroundColor: 'white',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    margin: '2rem auto',
    maxWidth: '900px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '2rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  postsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  post: {
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    transition: 'transform 0.2s ease',
  },
  postTitle: {
    fontSize: '1.8rem',
    color: '#444',
    marginBottom: '0.5rem',
  },
  postSnippet: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '1rem',
  },
  postDate: {
    fontSize: '0.9rem',
    color: '#999',
    marginBottom: '1rem',
  },
  readMore: {
    fontSize: '1rem',
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  readMoreHover: {
    textDecoration: 'underline',
  },
};

export default BlogPage;
