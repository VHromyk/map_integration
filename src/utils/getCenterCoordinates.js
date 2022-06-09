export const getCenterCoordinates = (location) => {
 const resultObj = {
     lat: null,
     lng: null,
 };

 const obj = {
     lt: [],
     ln: [],
 };

 for (let i = 0; i < location.length; i += 1) {
     obj.lt.push(location[i].lat);
     obj.ln.push(location[i].lng);

     resultObj.lat = obj.lt.reduce((a, b) => a + b) / obj.lt.length;
     resultObj.lng = obj.ln.reduce((a, b) => a + b) / obj.ln.length;
 }

 return resultObj;
}