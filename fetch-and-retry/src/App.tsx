import { useEffect, useState } from 'react'
import useFetch from './components/useFetch';


function App() {
  const [url, setUrl] = useState('');
  const [fetchedPosts, setFetchedPosts] = useState([])
  const [fetchError, setFetchError] = useState(false);
  const [posts, err] = useFetch(url);


  function getPosts() {
    if (err) {
      setFetchError(true);
    } else {
      setFetchedPosts(posts);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    useEffect(() => {
      getPosts(url)
    }, [url])

  }

  function handleRefetch() {
    useEffect(() => {
      const retryWait = setInterval(() => {
        useEffect(() => {
          getPosts(url)
        }, [url])
      }, 3000);
      return () => clearInterval(retryWait);
    }, [])

  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        <button type='submit'>Fetch</button>
        {fetchError ? <button onClick={handleRefetch}>Retry</button> : ''}
      </form>
      <div className="">
        {fetchedPosts.length > 0 ? fetchedPosts.map(post => (
          <div className="">
            user id: {post.userId}
            <br />
            id: {post.id}
            <br />
            title: {post.title}
            <br />
            body: {post.body}
          </div>
        )) : ''}

      </div>


    </>

  )
}

export default App
