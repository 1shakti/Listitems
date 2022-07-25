import React from 'react'
import List from '../components/List'
import useFetchStories from '../hooks/useFetchStories';

const JobNews = ({ jobIds }) => {
    const { stories, status, handleScroll } = useFetchStories({ storyIds: jobIds })

    return (
      <List onScroll={handleScroll}>
        {status.loading && <p>Loading...</p>}
        {stories.map(
          (story) =>
            story?.title && <List.Item key={story.id}>{story.title}</List.Item>
        )}
        {status.scrollloading && <p>Loading...</p>}
      </List>
    );
}

export default JobNews