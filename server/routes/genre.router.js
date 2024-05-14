const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  // console.log('req.params:',req.params);
  const sqlText = `
  SELECT * FROM "movies"
    JOIN "movies_genres" AS "md" ON "movies"."id" = "md"."movie_id"
    JOIN "genres" ON "genres"."id" = "md"."genre_id"
    WHERE "movies"."id" = $1;`
  //;
  pool.query(sqlText, [req.params.id]).then((response) => {
    res.send(response.rows);
  }).catch(error => {
    console.log(error);
    res.sendStatus(500);
  });
});

module.exports = router;