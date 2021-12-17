import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import wordsToNumber from 'words-to-numbers'

import NewsCards from './components/NewsCards/NewsCards'
import { Typography } from '@material-ui/core'
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
                    setActiveArticle(number);
                }
                else if(command === 'open'){
                    const parsedNum = number.length > 2 ? wordsToNumber(number, {fuzzy: true}) : number;
                    const article = articles[parsedNum-1];

                    if(article){
                        if(parsedNum > 20){
                            alanBtn().playText('Please try again.');
                        }
                        else{
                            window.open(article?.url, '_blank');
                            alanBtn().playText('Opening...');
                        }
                    }
                    else{
                        alanBtn().playText('Could you please repeat it again.');
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
            <Typography className={classes.footer} variant='body2' component='p'>This app is made using Alan AI</Typography>
        </div>
    )
}

export default App
