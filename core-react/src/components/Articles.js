import React from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { setPropTypes,compose,withHandlers } from 'recompose'
import { Swith,Route } from 'react-router-dom'
import { ArticleList,EditArticle  } from 'Component'
history.replaceState(data,title,data)
const Articles = ({ articles,onEditArticle }) => (
  <Switch>
      <Route
      exact
      path='/articles'
      render = {()=> <ArticleList articles = {articles}  />}
       />
      <Route
        path='/articles/:id/edit'
        render = {({match:{ params } })=>
                <EditArticle 
                {...articles.find(article => article.id === +params )}
                onSubmit = { onEditArticle }
                />
    }
      />
  </Switch>
);
export default compose(
    withRouter,/// ตัวนี้ ทำให้ใช้ ตัว propsของ router ได้
    withState('articles','setArticles',[
        {id:1,title:'My Article#1' ,content:'My Content#1', authorId:1 },
        {id:2,title:'My Article#2' ,content:'My Content#2', authorId:2 },
        {id:3,title:'My Article#3' ,content:'My Content#3', authorId:1 },
        {id:4,title:'My Article#4' ,content:'My Content#4', authorId:2 },
        {id:5,title:'My Article#5' ,content:'My Content#5', authorId:1 },
        {id:6,title:'My Article#6' ,content:'My Content#6', authorId:1 }
    ]),
    withHandlers({
        onEditArticle: ({ history,articles,setArticles })=> (id,article)=>{

            // this.setState(
            //     ({articles}) => ({articles: articles.map(item => item.id === id ? { ...item,article } : item)
            //     }), ()=> history.push('/articles'));
        setArticles(
             articles.map(
                item => item.id === id ? { ...item,article } : item
            )
        )
        history.push('/articles')
      }
    }),
)(Articles)

