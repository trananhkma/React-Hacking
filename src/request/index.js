import axios from 'axios';


const mainInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 10000,
  // headers: {'X-Custom-Header': 'foobar'},
});

mainInstance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // const newResponse = {...response, data: [{id:'0', userId: '10', title: 'Yolo', body: 'Xyz'}, ...response.data] }
  // return newResponse;
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export function getPost(id) {
  return mainInstance({
    url: `/posts/${id}`,
    method: 'get'
  });
};

export function deletePost(postNumber = 1) {
  // return axios.delete(`https://jsonplaceholder.typicode.com/posts/${postNumber}`)
  return mainInstance({
    url: `/posts/${postNumber}`,
    method: 'delete',
  });
}