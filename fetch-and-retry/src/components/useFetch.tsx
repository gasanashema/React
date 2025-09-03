import { useEffect, useState } from 'react'

const useFetch = ({ url }: { url: string }) => {
    const [posts, setPosts] = useState([])
    let err = false;
    useEffect(() => {
        async function getdata() {
            await fetch(url)
                .then(res => res.json())
                .then(res => setPosts(res))
                .catch(() => err = true)
        }
        getdata();
    }, []);
    return [posts, err];
}

export default useFetch;