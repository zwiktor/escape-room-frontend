import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StoryComponent = ({ storyId }) => {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function inside the useEffect hook
    const fetchStory = async () => {
      try {
        // Start loading
        setLoading(true);
        // Asynchronously fetch the story data
        const response = await axios.get(`http://127.0.0.1:8000/story/${storyId}`);
        setStory(response.data);
      } catch (error) {
        // If an error is caught, set the error state
        console.error('Failed to fetch story', error);
        setError(error);
      } finally {
        // Set loading to false once the request is complete
        setLoading(false);
      }
    };

    // Call the async function
    fetchStory();
  }, [storyId]); // Depend on storyId so the effect runs again if it changes

  // Conditional rendering based on the state of the request
  if (loading) return <div>Loading story...</div>;
  if (error) return <div>Error loading story. Please try again.</div>;

  // Render the story if not loading and no error
  return (
    <div>
      <h2>{story.title}</h2>
      <p>{story.description}</p>
      {/* Display more story details here */}
    </div>
  );
};

export default StoryComponent;