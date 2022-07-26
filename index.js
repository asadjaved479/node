

const http=require('http');

const dataControl=(req,resp)=>
{
  resp.write("javaScript");
  resp.end();
}

http.createServer(dataControl).listen(4600);