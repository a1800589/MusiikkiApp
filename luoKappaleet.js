var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('kappaleet.db');

db.serialize(function() {

	let sql = "CREATE TABLE kappale (" +
			  "id integer PRIMARY KEY NOT NULL, " +
			  "artisti text NOT NULL, " +
			  "albumi date NOT NULL, " +
			  "kappale text NOT NULL, " +
			  "genre text NOT NULL, " +
			  "kuva text)";

	db.run(sql, function(err) {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Taulu tehtiin");
	});

	sql = "INSERT INTO `kappale` (`id`, `artisti`, `albumi`, `kappale`, `genre`, `kuva`) "+
	" VALUES (1, 'Arch Enemy', 'Will to Power', 'The Eagle Flies Alone', 'Melodic death metal', 'https://metalshockfinland.files.wordpress.com/2017/06/archenemy-cover.jpg')";
	db.run(sql, function(err) {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	sql = "INSERT INTO `kappale` (`id`, `artisti`, `albumi`, `kappale`, `genre`, `kuva`) "+
	" VALUES (2, 'Arch Enemy', 'Will to Power', 'THE WORLD IS YOURS', 'Melodic death metal', 'https://metalshockfinland.files.wordpress.com/2017/06/archenemy-cover.jpg')";
	db.run(sql, function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	sql = "INSERT INTO `kappale` (`id`, `artisti`, `albumi`, `kappale`, `genre`, `kuva`) "+
	" VALUES (3, 'Arch Enemy', 'Will to Power', 'REASON TO BELIEVE', 'Melodic death metal', 'https://metalshockfinland.files.wordpress.com/2017/06/archenemy-cover.jpg')";
	db.run(sql, function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	db.each("SELECT id, kappale FROM kappale", function(err, row) {
		if (err) {
		  return console.log(err.message);
		}
		console.log(row.id + ", " + row.kappale);
	});

	db.close();
});
