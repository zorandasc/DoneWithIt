ON FRONTEND : REACT-NATIVE

YARN ADD

npx expo start

 Change IP addresd in api/config/settings.js, in line with backend:
apiUrl: "http://192.168.100.4:9000/api",


ON BACKEND: NODE-EXPRESS

NPM INSTALL

npm run start

Change IP addresd in: config/development.jsoon, with IP on your local device.
{
  "assetsBaseUrl": "http://192.168.100.4:9000/assets/",
  "port": 9000
}

PUBLISHED TO 
https://expo.dev/@zorand666/DoneWithIt?serviceType=classic&distribution=expo-go&release-channel=staging