var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var input1=document.getElementById("myid").value;

var cities=[];
var cities_temp=[];
var cities_humidity=[];
var cities_temp1=[];
var cities_humidity1=[];
var cities_temp2=[];
var cities_humidity2=[];
var cities_temp3=[];
var cities_humidity3=[];
var cities_temp4=[];
var cities_humidity4=[];
//  cities ===1  patna 2 for kolkata 3 for mumbai 4 for chennai





function fun1()
{
  firebase.initializeApp({
    apiKey:'AIzaSyDFsh-ugayxmbgog0Lr9xXn_78aZRxN7xw',
    authDomain:'anupam-88a62.firebaseapp.com',
    projectId:'anupam-88a62'

  });
  
  //setInterval(fun,40000);
  fun5554();
}



//THIS FUNCITON READ ALL THE VALUES  
function fun5554()
{
  var input11=document.getElementById("myid").value;
  var input22=document.getElementById("myhour").value;
  var s1234=input22;
  var s124=input22;
  s1234=s1234+" performance data";


  var db=firebase.firestore();
var docRef = db.collection(s1234).doc("performance");

// here we are writing code for sending the data 




docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        console.log("next line ");
        var s1=doc.data();
        
        var s122=input11;
        console.log(s1[s122]);
        if(s1[s122]>100)
        s1[s122]=100;
        document.getElementById("myh1").innerHTML="the performance in the city "+s124+" at the time "+input11+" is "+s1[s122];
        var s1=JSON.stringify(doc.data());
        var k1=s1.length;
        console.log(k1)
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
//var docRef=db.collection("dellhi performance data").doc("performance");


db.collection("dellhi performance data").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      //String s1=(doc.data()).toString();
      
      console.log(doc.data());

  });
});


}
// to send the data to the firebase
function fun4335()
{
  var s429="mumbai";
s429=s429+" performance data";

//var dr=db.collection(s429).doc("performance");
db.collection(s429).doc("performance").set({
  1 : 0,2 : 0,3 : 0,4 : 0,5 : 0,6 : 0,7 : 30.0,8 : 20.0,9 : 10.0,10 : 20.0,11 : 50.0,12 : 70.0,13 : 80.0,14 : 90.0,15 : 80.0,16 : 50.0,17 : 50.0,18 : 40.0,19 : 30.0,20 : 30.0,21 : 0.0,22 : 10.0,23 : 10.0,24 : 0
  
})
.then(function() {
  console.log("Document successfully written!");
})
.catch(function(error) {
  console.error("Error writing document: ", error);
});

}





















// this function is for writing in tree document foramt 
function fun(){

  var db=firebase.firestore();
  var citiesRef = db.collection("DELHI_DATA");
  
  
  

var ty='delhi';



// from here we getting data and storing in an array take the mean and send to database;
fetch('https://api.openweathermap.org/data/2.5/weather?q='+ty+'&appid=cd6499407231b788bab245c8198e5d85')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var humidity = data['main']['humidity'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  cities_temp.push(tempValue);
  cities_humidity.push(humidity);
  console.log('the sizw of cites are '+cities_temp.length);

  
  if(today.getMinutes()<70)
  {
    var kk;
    var sum44=0;
    var n=cities_temp.length;
    var m=cities_humidity.length;
    if(n!=0)
    {

      for(kk=0;kk<n;kk++)
      {
        sum44=sum44+cities_temp[kk];
        console.log('the value of sum44 is '+sum44);
      }
      sum44=sum44/n;
    }
    var sum444=0;
    if(m!=0)
    {
      for(kk=0;kk<m;kk++)
      {
        sum444= sum444 + cities_humidity[kk];
        
      }
      sum444 = sum444/m;
      console.log('thus is humidity value '+ sum444);
      
  
    }
    var t= new Date();
    var tt=t.getHours();
    
    citiesRef.doc(ty+"   "+dateTime).set({
      "temp":sum44,
      "hum":sum444,
      "hours":t.getHours()
    });
      
  




}

  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });






  fun11();

  

    return;

}








function fun11(){

  var db=firebase.firestore();
  var citiesRef = db.collection("PATNA_DATA");
  console.log('the fun11 is called ');
  
  
  

var ty="patna";



// from here we getting data and storing in an array take the mean and send to database;
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+ty+'&appid=85d3ce150925300301465e158113364a')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var humidity = data['main']['humidity'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  cities_temp1.push(tempValue);
  cities_humidity1.push(humidity);
  console.log('the sizw of cites are '+cities_temp1.length);

  
  if(today.getMinutes()<70)
  {
    var kk;
    var sum44=0;
    var n=cities_temp1.length;
    var m=cities_humidity1.length;
    if(n!=0)
    {

      for(kk=0;kk<n;kk++)
      {
        sum44=sum44+cities_temp1[kk];
        console.log('the value of sum44 is '+sum44);
      }
      sum44=sum44/n;
    }
    var sum444=0;
    if(m!=0)
    {
      for(kk=0;kk<m;kk++)
      {
        sum444= sum444 + cities_humidity1[kk];
        
      }
      sum444 = sum444/m;
      console.log('thus is humidity value '+ sum444);
      
  
    }
    var t= new Date();
    var tt=t.getHours();
    
    citiesRef.doc(ty+" "+dateTime).set({
      "temp":sum44,
      "hum":sum444,
      "hours":t.getHours()
    });
      
  




}

  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });








 fun12();

    return;

}





function fun12(){

  var db=firebase.firestore();
  var citiesRef = db.collection("KOLKATA_DATA");

  console.log('the function fun12 is called ');
  
  
  

var ty="kolkata";



// from here we getting data and storing in an array take the mean and send to database;
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+ty+'&appid=85d3ce150925300301465e158113364a')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var humidity = data['main']['humidity'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  cities_temp2.push(tempValue);
  cities_humidity2.push(humidity);
  console.log('the sizw of cites are '+cities_temp1.length);

  
  if(today.getMinutes()<70)
  {
    var kk;
    var sum44=0;
    var n=cities_temp2.length;
    var m=cities_humidity2.length;
    if(n!=0)
    {

      for(kk=0;kk<n;kk++)
      {
        sum44=sum44+cities_temp2[kk];
        console.log('the value of sum44 is '+sum44);
      }
      sum44=sum44/n;
    }
    var sum444=0;
    if(m!=0)
    {
      for(kk=0;kk<m;kk++)
      {
        sum444= sum444 + cities_humidity2[kk];
        
      }
      sum444 = sum444/m;
      console.log('thus is humidity value '+ sum444);
      
  
    }
    var t= new Date();
    var tt=t.getHours();
    
    citiesRef.doc(ty+dateTime).set({
      "temp":sum44,
      "hum":sum444,
      "hours":t.getHours()
    });
      
  




}

  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });







  fun13();


    return;

}




function fun13(){

  var db=firebase.firestore();
  var citiesRef = db.collection("MUMBAI_DATA");
  console.log(' the fun13 is called ');
  
  
  

var ty="mumbai";



// from here we getting data and storing in an array take the mean and send to database;
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+ty+'&appid=85d3ce150925300301465e158113364a')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var humidity = data['main']['humidity'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  cities_temp3.push(tempValue);
  cities_humidity3.push(humidity);
  console.log('the sizw of cites are '+cities_temp1.length);

  
  if(today.getMinutes()<70)
  {
    var kk;
    var sum44=0;
    var n=cities_temp3.length;
    var m=cities_humidity3.length;
    if(n!=0)
    {

      for(kk=0;kk<n;kk++)
      {
        sum44=sum44+cities_temp3[kk];
        console.log('the value of sum44 is '+sum44);
      }
      sum44=sum44/n;
    }
    var sum444=0;
    if(m!=0)
    {
      for(kk=0;kk<m;kk++)
      {
        sum444= sum444 + cities_humidity3[kk];
        
      }
      sum444 = sum444/m;
      console.log('thus is humidity value of mumbai '+ sum444);
      
  
    }
    var t= new Date();
    var tt=t.getHours();
    
    citiesRef.doc(ty+dateTime).set({
      "temp":sum44,
      "hum":sum444,
      "hours":t.getHours()
    });
      
  




}

  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });








fun14();

    return;

}




function fun14(){

  var db=firebase.firestore();
  var citiesRef = db.collection("CHENNAI_DATA");
  console.log('the data is for cheenai');
  
  
  

var ty="chennai";



// from here we getting data and storing in an array take the mean and send to database;
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+ty+'&appid=85d3ce150925300301465e158113364a')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var humidity = data['main']['humidity'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  cities_temp4.push(tempValue);
  cities_humidity4.push(humidity);
  console.log('the sizw of cites are '+cities_temp1.length);

  
  if(today.getMinutes()<70)
  {
    var kk;
    var sum44=0;
    var n=cities_temp4.length;
    var m=cities_humidity4.length;
    if(n!=0)
    {

      for(kk=0;kk<n;kk++)
      {
        sum44=sum44+cities_temp4[kk];
        console.log('the value of sum44 is '+sum44);
      }
      sum44=sum44/n;
    }
    var sum444=0;
    if(m!=0)
    {
      for(kk=0;kk<m;kk++)
      {
        sum444= sum444 + cities_humidity4[kk];
        
      }
      sum444 = sum444/m;
      console.log('thus is humidity value '+ sum444);
      
  
    }
    var t= new Date();
    var tt=t.getHours();
    
    citiesRef.doc(ty+dateTime).set({
      "temp":sum44,
      "hum":sum444,
      "hours":t.getHours()
    });
      
  




}

  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });










    return;

}














































function Myfunction(){

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyCs02SPm8eyjIXEjdzimQU-hcVsrBSPGBA',
  authDomain: 'project1-487bf.firebaseapp.com',
  projectId: 'project1-487bf'
});

var db = firebase.firestore();
//we are checking the date codition 
var d = new Date();
var n = d.getMinutes();

return;


db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});








// after this we are calling the weather api to collect and store data 
fetch('https://api.openweathermap.org/data/2.5/weather?q='+'delhi'+'&appid=85d3ce150925300301465e158113364a')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var humidity = data['main']['humidity'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  var db= firebase.firestore();
  db.collection("users").add({
    location:'delhi',
    time_:dateTime,
    description: descValue,
    tempareture: tempValue,
    humidity_:humidity
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });


  localStorage.setItem(Math.random(),tempValue);
  input.value ="";

})
.catch(err => alert("Wrong city name!"));







fetch('https://api.openweathermap.org/data/2.5/weather?q='+'patna'+'&appid=85d3ce150925300301465e158113364a')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var humidity = data['main']['humidity'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  var db= firebase.firestore();
  db.collection("users").add({
    location:'patna',
    time_:dateTime,
    description: descValue ,
    tempareture: tempValue,
    humidity_:humidity
    
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });


  localStorage.setItem(Math.random(),tempValue);
  input.value ="";

})
.catch(err => alert("Wrong city name!"));





fetch('https://api.openweathermap.org/data/2.5/weather?q='+'mumbai'+'&appid=85d3ce150925300301465e158113364a')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var humidity = data['main']['humidity'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  var db= firebase.firestore();
  db.collection("users").add({
    location:'mumbai',
    time_:dateTime,
    description: descValue,
    tempareture: tempValue,
    humidity_:humidity
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });


  localStorage.setItem(Math.random(),tempValue);
  input.value ="";

})
.catch(err => alert("Wrong city name!"));












fetch('https://api.openweathermap.org/data/2.5/weather?q='+'kolkata'+'&appid=85d3ce150925300301465e158113364a')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var humidity = data['main']['humidity'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  var db= firebase.firestore();
  db.collection("users").add({
    location:'kolkata',
    time_:dateTime,
    description: descValue,
    tempareture: tempValue,
    humidity_:humidity
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });


  localStorage.setItem(Math.random(),tempValue);
  input.value ="";

})
.catch(err => alert("Wrong city name!"));







fetch('https://api.openweathermap.org/data/2.5/weather?q='+'chennai'+'&appid=85d3ce150925300301465e158113364a')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var humidity = data['main']['humidity'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  var db= firebase.firestore();
  db.collection("users").add({
    location:'chennai',
    time_:dateTime,
    description: descValue,
    tempareture: tempValue,
    humidity_:humidity
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });


  localStorage.setItem(Math.random(),tempValue);
  input.value ="";

})
.catch(err => alert("Wrong city name!"));










}

//main.innerHTML="this is anupam thakur "+tempValue;