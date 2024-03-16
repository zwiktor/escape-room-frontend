// src/components/StoriesList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StoryCard from './StoryCard';

function StoriesList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function fetchStories() {
      try {
        const response = await axios.get('http://localhost:8000/story/', {
          headers: {
            'accept': 'application/json',
          },
        });
        setStories(response.data); // Assuming the response data is an array of stories
      } catch (error) {
        console.error("Failed to fetch stories:", error);
      }
    }

    fetchStories();
  }, []);

  return (
    <div className="stories-list">
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          id={story.id}
          title={story.title}
          description={story.description}
        />
      ))}
    </div>
  );
}

export default StoriesList;