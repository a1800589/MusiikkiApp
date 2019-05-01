const express = require('express');
const app = express();

var helmet = require('helmet')
app.use(helmet())

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Accept, Accept-Language, Content-Language, Content-Type");
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('kappaleet.db');

app.listen(8080, function () {
    console.log('Node toimii ,kappale.db, localhost:8080');
});

app.get('/', function (req, res) {
    return res.send({ error: false, message: 'Toimii' })
});

app.get('/kappale/all', function (req, res) {
  db.all('SELECT * FROM kappale', function(error, results) {
  if (error) throw error;
  return res.status(200).json(results);
})
})
app.get('/kappale/one/:id', function (req, res) {
  let id = req.params.id;
  db.get('SELECT * FROM kappale where id=?', [id], function (error, result) {
  if (error) throw error;
  if (typeof(result) == 'undefined') {
  return res.status(200).send({});
  }
  return res.status(200).json(result);
  })
})

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads')
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

app.post('/kappale/add', upload.single('kuva'),function (req, res) {
  let tap = req.body;
  let kuva = null;
  if (req.file) { kuva=req.file.originalname }
  db.run('INSERT INTO kappale (artisti, albumi, kappale, genre, kuva) VALUES (?, ?, ?, ?, ?)',
  [tap.artisti, tap.albumi, tap.kappale, tap.genre, kuva], function (error, result, fields) {
  if (error) throw error;
  return res.status(200).json({count: 1});
  })
})


app.post('/kappale/muokkaa/:id', upload.single('kuva'),function (req, res) {
  let id = req.params.id;
  let tap = req.body;
  let kuva = null;
  if (req.file) { kuva=req.file.originalname }
  db.run('UPDATE kappale SET artisti = ?, albumi = ?, kappale = ?, genre = ?, kuva= ? where id= ?', [tap.artisti, tap.albumi, tap.kappale, tap.genre, kuva, tap.id], function (error, result, fields) {
  if (error) throw error;
  return res.status(200).json({count: 1});
  })
})



app.get('/kappale/delete/:id', function (req, res) {
  let id = req.params.id;
  db.run('DELETE FROM kappale WHERE id = ?', [id], function (error, result) {
  if (error) throw error;
  if (this.changes === 0) {
  return res.status(200).json({count: 0});
  }
  return res.status(200).json({count: 1});
  })

})

app.get('/download/:nimi', function(req, res){
var file = './uploads/' + req.params.nimi;
res.download(file);
});

app.get('*', function (req, res) {
return res.status(404).json({ error: true, message: 'Ei pyydettyä palvelua' })
})
