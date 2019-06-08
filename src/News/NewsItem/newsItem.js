import React from 'react';
import './newsItem.css' 

class NewsItem extends React.Component {

    render(props) {
        return(
            <a className = "newsContainer col-2" href = {this.props.article.url}>

                <div className = "title">
                    <p>
                    {this.props.article.title}
                    </p>
                
                </div>
            </a>
        );
    }
}

export default NewsItem;