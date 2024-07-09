import React from 'react'

const Blog = () => {
  return (
    <div className="mainblog">
     <div className="blog-section">
        <a href="@UserPosts[i].Url" target="_blank" className="post-card-link">
            <div className="card-blog">
                <strong> @UserPosts[i].Title</strong>
                <p>@UserPosts[i].Description</p>
            </div>
        </a>
        <a href="@UserPosts[i].Url" target="_blank" className="post-card-link">
            <div className="card-blog">
                <strong> @UserPosts[i].Title</strong>
                <p>@UserPosts[i].Description</p>
            </div>
        </a>
        <a href="@UserPosts[i].Url" target="_blank" className="post-card-link">
            <div className="card-blog">
                <strong> @UserPosts[i].Title</strong>
                <p>@UserPosts[i].Description</p>
            </div>
        </a>
        <a href="@UserPosts[i].Url" target="_blank" className="post-card-link">
            <div className="card-blog">
                <strong> @UserPosts[i].Title</strong>
                <p>@UserPosts[i].Description</p>
            </div>
        </a>
        <a href="@UserPosts[i].Url" target="_blank" className="post-card-link">
            <div className="card-blog">
                <strong> @UserPosts[i].Title</strong>
                <p>@UserPosts[i].Description</p>
            </div>
        </a>
    
    <a href="https://dev.to/hizrawandwioka" className="post-card-link">
        <div className="card-blog">
            <h4>Show More</h4>
            <p>View all posts</p>
        </div>
    </a>
</div>

     <h1>Blogs</h1>
 </div>
  )
}

export default Blog