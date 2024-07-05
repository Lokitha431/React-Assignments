import React, { useState } from 'react';
import './Styles.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateBody, setUpdateBody] = useState('');
  const [postId, setPostId] = useState('');
  const [postMessage, setPostMessage] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  const fetchUserData = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setUserData(data);
        setError('');
      })
      .catch(error => {
        console.error('Error: ', error);
        if (error.message.includes('404')) {
          setError('User not found');
        } else if (error.message.includes('403')) {
          setError('API rate limit exceeded');
        } else if (error.message.includes('400')) {
          setError('Bad Request');
        } else {
          setError('An error occurred while fetching the data');
        }
        setUserData(null);
      });
  };

  const createPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        userId: 1,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setPostMessage(`Post created with ID: ${data.id}`);
        setPostTitle('');
        setPostBody('');
      })
      .catch(error => {
        setPostMessage('Error creating post');
      });
  };

  const updatePost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: postId,
        title: updateTitle,
        body: updateBody,
        userId: 1,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setUpdateMessage(`Post updated: ${JSON.stringify(data)}`);
        setPostId('');
        setUpdateTitle('');
        setUpdateBody('');
      })
      .catch(error => {
        setUpdateMessage('Error updating post');
      });
  };

  return (
  <center>
    <div className='app'>
        <h1>API Fetching Using GitHub API</h1>
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Enter GitHub Username'
        />&nbsp; &nbsp;&nbsp;&nbsp;
        <button onClick={fetchUserData}>Fetch User</button>
        <div>
          {error && <p>{error}</p>}
          {userData && (
            <div className='info'>
              <h3>User Information</h3>
              <p><strong>Username: </strong>{userData.login}</p>
              <p><strong>Name: </strong>{userData.name}</p>
              <p><strong>Followers: </strong>{userData.followers}</p>
              <p><strong>Following: </strong>{userData.following}</p>
              <p><strong>Repositories: </strong>{userData.public_repos}</p>
            </div>
          )}
        </div>
        <h2>POST (Create a New Post)</h2>
        <input type='text' value={postTitle} onChange={(e) => setPostTitle(e.target.value)} placeholder='Post Title' />&nbsp;&nbsp;&nbsp;&nbsp;
        <textarea value={postBody} onChange={(e) => setPostBody(e.target.value)} placeholder='Post Body' />&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={createPost}>Create Post</button>
        {postMessage && <p>{postMessage}</p>}

        <h2>PUT (Update a Post)</h2>
        <input type='text' value={postId} onChange={(e) => setPostId(e.target.value)} placeholder='Post ID' />&nbsp;&nbsp;&nbsp;&nbsp;
        <input type='text' value={updateTitle} onChange={(e) => setUpdateTitle(e.target.value)} placeholder='Update Title' />&nbsp;&nbsp;&nbsp;&nbsp;
        <textarea value={updateBody} onChange={(e) => setUpdateBody(e.target.value)} placeholder='Update Body' />&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={updatePost}>Update Post</button>
        {updateMessage && <p>{updateMessage}</p>}
    </div>
  </center>
  );
};

export default App;




