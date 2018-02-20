/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let a=[];
    for(let j =0; j<preferences.length; j++)
    {
        a[j]=preferences[j]-1;
    }
    console.log(a);
    let count = 0;
  for(let i =0;i<a.length; i++)
  {
    let c = a[i];
    let k = a[c];
    if(c==k)
        continue;
    if(i===a[k]) {
        count++;
        delete a[i];
        delete a[k];
        delete a[c];
        i=0;
    }
  }
   return count;
};

