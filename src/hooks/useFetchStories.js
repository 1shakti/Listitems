import axios from 'axios';
import { useEffect, useRef, useState } from 'react'

const useFetchStories = ({ storyIds }) => {
    const [stories, setStories] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [status, setStatus] = useState({});
    const ref = useRef(null);

    useEffect(() => {
      if (ref.current) return;
      fetchStory();
      ref.current = true;
    }, []);

    const fetchStory = async (fromScroll = false) => {
      const key = fromScroll ? 'scroll' : '';
      try {
        const jump =
          storyIds.length - currentIndex >= 20
            ? 20
            : storyIds.length - currentIndex;
        setStatus({ [key + 'loading']: true });
        const storyPromises = [];
        for (let i = currentIndex; i < currentIndex + jump; i++) {
          const promise = axios.get(
            `https://hacker-news.firebaseio.com/v0/item/${storyIds[i]}.json`
          );
          storyPromises.push(promise);
        }
        const resolvedStories = await Promise.all(storyPromises);
        const data = resolvedStories.map((response) => response.data);
        setStories((prev) => [...prev, ...data]);
        setCurrentIndex((prev) => prev + jump);
        setStatus({});
      } catch (err) {
        setStatus({ error: true, message: err.message });
      }
    };

    const handleScroll = (e) => {
      const node = e.target;
      const isBottom =
        Math.ceil(node.scrollTop) === node.scrollHeight - node.offsetHeight;
      if (isBottom && !status.scrollloading) {
        if (currentIndex + 1 === storyIds.length) return;
        fetchStory(true);
      }
    };

    return { status, stories, handleScroll }
}

export default useFetchStories