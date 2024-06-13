import React, { useEffect, useState } from 'react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import '../css/News.css';
import '../css/Header-Footer.css';

interface NewsItem {
    title: string;
    link: string;
    pubDate: string;
}

const News: React.FC = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://localhost:5000/api/news'); // Change port if needed
                const data = await response.json();
                setNews(data);
            } catch (err: any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (error) return <div>Error: {error.message}</div>;

    if (loading) {
        return (
            <div className="page">
                <Header />
                <div className="News">
                    <h1>Loading...</h1>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <>
            <div className="pageNews">
                <Header />
                <div className="News">
                    <h1>Останні новини</h1>
                    <div className="news-list">
                        {news.map((item, index) => (
                            <div key={index} className="news-item">
                                <h2><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></h2>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default News;
