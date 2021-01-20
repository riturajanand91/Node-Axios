const express = require("express");
const router = new express.Router();
const axios = require('axios')

/**  Axios Get Request */
router.get('/get', async (req, res) => {
  try {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(resp.data)
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
})

/**  Axios Post Request */
router.post('/post', async (req, res) => {

  const dataToPost = {
    userId: 1,
    title: 'A Dummy Post',
    body: 'This is dummy post maybe'
  }
  try {
    const resp = await axios.post('https://jsonplaceholder.typicode.com/posts',dataToPost);
    res.json(resp.data)
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
})

/**  Axios PUT Request */
router.put('/put', async (req, res) => {
  const dataToPost = {
    userId: 1,
    title: 'A updated Dummy Post',
    body: 'This is dummy post updated'
  }
  try {
    const resp = await axios.put('https://jsonplaceholder.typicode.com/posts/1',dataToPost);
    res.json(resp.data)
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
})

module.exports = router;
