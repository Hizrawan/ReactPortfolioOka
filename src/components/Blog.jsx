import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Scroll from "../assets/images/down-arrow.svg"

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://dev.to/api/articles?username=hizrawandwioka')
            .then(response => response.json())
            .then(data => {
                const latestPosts = data.slice(0, 5); // Get the latest 6 posts
                setPosts(latestPosts);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="mainblog">
            <div className='blog-container'>
                <div className="blog-section">
                    {posts.map((post, index) => (
                        <a key={index} href={post.url} target="_blank" className="post-card-link" rel="noopener noreferrer">
                            <div className="card-blog">
                                <strong>{post.title}</strong>
                                <p>{post.description}</p>
                            </div>
                        </a>
                    ))}


                    <a href="https://dev.to/hizrawandwioka" className="post-card-link">
                        <div className="card-blog">
                            <h4>Show More</h4>
                            <p>View all posts</p>
                        </div>
                    </a>
                </div>

                <h1 className='title-edu'>Blogs</h1>
            </div>

            <div className="scroll-button">
                <Link to="contact" spy={true} smooth={true} offset={-15} duration={500}>
                    <img src={Scroll} alt="Scroll to Next Section" />
                </Link>
            </div>
        </div>
    )
}

export default Blog