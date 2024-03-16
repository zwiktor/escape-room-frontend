// src/components/StoryDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Link } from 'react-router-dom';
function StoryDetail() {
  let { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    async function fetchStoryDetail() {
      try {
        const response = await axios.get(`http://localhost:8000/story/${id}`);
        setStory(response.data);
      } catch (error) {
        console.error("Failed to fetch story details:", error);
      }
    }

    fetchStoryDetail();
  }, [id]);

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{story.title}</h2>
      <p>{story.description}</p>
      <Link to="/" className="menu-item">Home</Link>
    </div>
  );
}

export default StoryDetail;