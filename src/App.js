import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import wordsToNumber from 'words-to-numbers'

import NewsCards from './components/NewsCards/NewsCards'
import useStyles from './styles.js'

const alanKey = process.env.REACT_APP_ALAN_KEY;
const alanLogoSrc = '/Alandownload.png';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }
                else if(command === 'highlight'){
                    setActiveArticle((prevArticle) => prevArticle + 1);
                }
                else if(command === 'open'){
                    const parsedNum = number.length > 2 ? wordsToNumber(number, {fuzzy: true}) : number;
                    const article = articles[parsedNum-1];

                    if(parsedNum > 20){
                        alanBtn().playText('Please try again.');
                    }
                    else{
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                    }
                }
            },
        })
    }, [])

    return (
        <div>
            <div className={classes.logoContainer}>
                <img className={classes.alanLogo} src={alanLogoSrc} alt='Alan Logo'/>
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
        </div>
    )
}

export default App
