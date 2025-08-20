import React, { useState } from "react";
import "./Articles.css";
import { Badge } from "react-bootstrap";

const sampleArticles = [
  { id: 1, title: "Days of December", status: "Published" },
  { id: 2, title: "Self Nourishment", status: "Draft" },
  { id: 3, title: "Momemnts fo Myself", status: "Published" },
  { id: 4, title: "All about US", status: "Draft" },
  { id: 5, title: "Don't Be Depressed", status: "Published" },
  { id: 6, title: "Eat Sleep Repeat", status: "Draft" },
  { id: 7, title: "School Days", status: "Published" },
  { id: 8, title: "I Want to Live", status: "Draft" },
  { id: 9, title: "Dont Look Behind", status: "Draft" },
];

const Articles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = sampleArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(sampleArticles.length / articlesPerPage);

  return (
    <div className="articles-section">
      <h3>My Articles</h3>
      <hr />
      <ul>
        {currentArticles.map((article) => (
          <li key={article.id} className="article-item">
            {article.title}{" "}
            <Badge
              pill
              bg={
                article.status === "Published"
                  ? "success"
                  : article.status === "Draft"
                  ? "warning"
                  : "secondary"
              }
            >
              {article.status}
            </Badge>
          </li>
        ))}
      </ul>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Articles;
