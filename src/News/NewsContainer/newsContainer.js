import React from 'react';
import NewsItem from '../NewsItem/newsItem';
import {getTechArticles, getSportsArticles, getScienceArticles} from '../newsService';
import './newsContainer.css'

class NewsContainer extends React.Component {
    state = {
        techArticles: ["","",""],
        sportsArticles: ["","",""],
        scienceArticles: ["","",""]
    }
    async componentDidMount() {
         
         await getTechArticles().then( (response) => {
             this.setState({techArticles: response.articles});
         });
         await getSportsArticles().then( (response) => {
            this.setState({sportsArticles: response.articles});
        });
        await getScienceArticles().then( (response) => {
            this.setState({scienceArticles: response.articles});
        });
         
    }

    render() {
        return (
            <div >
                <h2>Tech</h2>
                <hr></hr>
                <div className = "flexbox">
                {
                    this.state.techArticles.map( (article, index) =>
                        <NewsItem key = {index} article = {article}></NewsItem> 
                        )

                }
                    </div> 

                    <h2>Sports</h2>
                <hr></hr>
                <div className = "flexbox">
                {
                    this.state.sportsArticles.map( (article, index) =>
                        <NewsItem key = {index} article = {article}></NewsItem> 
                        )

                }
                    </div> 

                    <h2>Science</h2>
                <hr></hr>
                <div className = "flexbox">
                {
                    this.state.scienceArticles.map( (article, index) =>
                        <NewsItem key = {index} article = {article}></NewsItem> 
                        )

                }
                    </div> 

                
            </div>

        )
    }

    
}

export default NewsContainer ;