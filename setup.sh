#echo "" > log/forever.log 
forever start -l  log/forever.log --append -e log/error.log --append deploy.js
