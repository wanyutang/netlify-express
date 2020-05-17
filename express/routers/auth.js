'use strict';

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});
router.get('/demo', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js! demo</h1>');
  res.end();
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.get('/demores', (req, res) => res.json({ user: "demo" ,pwdcode: "1qaz2wsx" }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

module.exports = router;
