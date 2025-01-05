import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = ({Category}) => {

    const [articles, SetArticle] = useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&Category=${Category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=>response.json()).then(data=> SetArticle(data.articles));
    },[Category])

  return (
    <div>
    <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
    {articles.map((news,index)=>{
        return <NewsItem key = {index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>

  })}
    </div>
  )
}

export default NewsBoard