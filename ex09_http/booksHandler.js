export const booksHandler = (req, res) => {

  const {method, url} = req;

  console.log('url == ', url)

      const urlSplitted = url.split('?');
      const urlString  = urlSplitted[0];
      const queryString = urlSplitted[1];

      const urlArr = urlString.split('/');
      //console.log('urlArr', urlArr, urlArr.length);

      let id = null;
        if(urlArr.length ===  4) {
        const id = +urlArr[urlArr.length-1];

  switch(method) {
    case 'POST':
      res.writeHead(201, {'Content-Type': 'application/json'});
      res.end(`{
    "id": 1,
    "name": "Преступление и наказание",
    "author": "Ф. М. Достоевский",
    "description": "Это произвдедение было написано..."
}`);
      return;
    case 'GET':
      if(id) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(`{
    "id": 1,
    "name": "Преступление и наказание",
    "author": "Ф. М. Достоевский",
    "description": "Это произвдедение было написано..."
}`);
      } else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(`[{
    "id": 1,
    "name": "Преступление и наказание",
    "author": "Ф. М. Достоевский",
    "description": "Это произвдедение было написано..."
}]`);
      }
      return;
    case 'PATCH':
    case 'PUT':
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(`{
    "id": 1,
    "name": "Преступление и наказание!",
    "author": "Ф. М. Достоевский",
    "description": "Это произвдедение было написано..."
}`);
      return;
    case 'DELETE':
      res.writeHead(204, {'Content-Type': 'application/json'});
      res.end(null);
      return;
  };

res.writeHead(500, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(
      {
        status: "error",
        message: "method not implemented"
      }
    )
  );
}}
