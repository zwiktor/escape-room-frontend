// src/components/StoryCard.js
import './StoryCard.css';
import React from 'react';
import {useAuth} from "./auth/AuthContext";
import { useHistory } from "react-router-dom";

function StoryCard({ id, title, description }) {
  const { token } = useAuth();
  let history = useHistory();

  return (
    <div className="story-card">
      <h2>{title}</h2>
      <p>{description}</p>
        {token ? (
            <div>
              <button onClick={() => history.push(`/story/${id}`)}>Rozpocznij</button>
            </div>
          ) : (
            <button >Zaloguj sie</button>
          )}

    </div>
  );
}

export default StoryCard;