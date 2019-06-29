const http = require('http')
const createHandler = require('gogs-webhook-handler')
const handler = createHandler({ path: '/webhook', secret: 'myhashsecret' })
const process = require('child_process')
 
http.createServer((req, res) => {
  handler(req, res, err => {
    res.statusCode = 404
    res.end('webhook is running~~')
  })
}).listen(7777)
 
handler.on('error', err => {
  console.error('Error:', err.message)
})
 
handler.on('push', event => {
  try{
   process.execSync('git reset --hard origin/master')
   process.execSync('git clean -f')   
   process.execSync('git pull')
   process.execSync('git checkout master')
} catch (e) {
    process.execSync('git checkout -- "*"')
    process.execSync('git pull')
  }
  process.execSync('now')
  process.execSync('now alias https://my-docz-project.chenxixian.now.sh docz.chenxixian.cn')
})
 
handler.on('issues', event => {
  console.log('Received an issue event for %s action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title)
})

