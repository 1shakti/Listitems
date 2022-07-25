import { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import JobNews from './JobNews';
import NewNews from './NewNews';

export default function News() {
  const [newsIds, setNewsIds] = useState([]);
  const [jobIds, setJobIds] = useState([]);
  const [status, setStatus] = useState({});
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) return;
    fetchIds();
    ref.current = true;
  }, []);

  const fetchIds = async () => {
    try {
      setStatus({ loading: true });
      const newsResponse = await fetch(
        'https://hacker-news.firebaseio.com/v0/newstories.json'
      );
      const newsIdsJson = await newsResponse.json();
      const jobsResponse = await fetch(
        'https://hacker-news.firebaseio.com/v0/jobstories.json'
      );
      const jobsIdsJson = await jobsResponse.json();
      setNewsIds(newsIdsJson);
      setJobIds(jobsIdsJson);
      setStatus({});
    } catch (err) {
      setStatus({ error: true, message: err.message });
    }
  };

  if (!ref.current || status.loading) {
    return <p>Loading...</p>;
  }

  if (status.error) {
    return <p>{status.message}</p>;
  }

  return (
    <Layout>
      <Layout.Header />
      <Layout.Main>
        <NewNews newsIds={newsIds} />
        <JobNews jobIds={jobIds} />
      </Layout.Main>
    </Layout>
  );
}
