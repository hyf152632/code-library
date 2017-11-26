```javascript
axios.get(url,{
    headers: {
        referer: 'https:/c.y.qq.com',
        host: 'c.y.qq.com'
    },
    params: req.query
}).then((response) => {
    res.json(response.data)
}).catch((e) => {
    console.log(e);
})
```



