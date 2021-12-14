import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

import NewsCards from './components/NewsCards/NewsCards'
import useStyles from './styles.js'

const alanKey = process.env.REACT_APP_ALAN_KEY;
const alanLogoSrc = 'https://alan.app/static/meduza_logo.3d2c10da.png';

const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const classes = useStyles();

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
            <div className={classes.logoContainer}>
                <img className={classes.alanLogo} src={alanLogoSrc} alt='Alan Logo'/>
            </div>
            <NewsCards articles={newsArticles} />
        </div>
    )
}

export default App
