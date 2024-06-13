import React, { useState, useEffect } from 'react';

const Database = () => {
  const [newsCount, setNewsCount] = useState(0);

  const fetchNewsCount = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/news');
      const news = await response.json();
      setNewsCount(news.length);
    } catch (error) {
      console.error('Error fetching news count:', error);
    }
  };

  const clearDatabase = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/news', {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Database cleared');
        setNewsCount(0);
      }
    } catch (error) {
      console.error('Error clearing the database:', error);
    }
  };

  useEffect(() => {
    fetchNewsCount();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1>Number of records in the database: {newsCount}</h1>
        <button style={styles.button} onClick={clearDatabase}>
          Clear database
        </button>
        <button style={styles.button} onClick={fetchNewsCount}>
          Refresh
        </button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#EEE8E4',
  },
  content: {
    maxWidth: '600px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#857D78',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    outline: 'none',
  },
};

export default Database;
