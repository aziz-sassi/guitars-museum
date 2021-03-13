var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123',
  database : 'items'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM guitars', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
var postguitar = function(params,callback){
  let syntax =`INSERT INTO guitars ( model, imageUrl,year,likes) VALUES (?,?,?,?)`
connection.query(syntax,params,(err,result)=>{
  return err ? callback(err,null) : callback(null,result)
})
}
var updatelike =function(params,callback){
  connection.query(`UPDATE guitars SET likes = ? WHERE id= ?`,params,(err,results)=>{
    return err ? callback(err,null) : callback(null,results)
  })
}
var deleteitem = function (params,callback) {
  const syntax = `DELETE FROM guitars WHERE id = ?`;
  connection.query(syntax,params,(err,results)=>{
    return err ? callback(err, null) : callback(null,results)
  })
}

module.exports={
  selectAll ,
  postguitar,
  updatelike,
  deleteitem
}
