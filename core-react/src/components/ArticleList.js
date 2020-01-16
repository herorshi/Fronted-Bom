import React from 'react'
import PropTypes from 'prop-types';
import {Article} from 'Component'
import styless from './ArticleList.scss'


const ArticleList = ({ articles })=>(
    <div className={styless.articles}>
        {
            articles.map(article => <Article key={article.id} {...article} ></Article> )
        }
    </div>
)


 ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropType.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
            content:PropTypes.string.isRequired
        })).isRequired    
 }



