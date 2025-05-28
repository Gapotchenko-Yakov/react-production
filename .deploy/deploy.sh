cd ~/react-production
npm run build:prod

rm -rf /var/www/react_production/html
mv ~/react-production/build ~/../var/www/react_production/html