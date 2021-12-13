import React, { useState, useEffect } from 'react'

import NewsCards from './components/NewsCards/NewsCards'

import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey = process.env.REACT_APP_ALAN_KEY;

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                }
            },
        })
    }, [])

    return (
        <div>
            <h1>ALAN AI</h1>
            <NewsCards articles={newsArticles} />
        </div>
    )
}

export default App
