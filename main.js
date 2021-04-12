var w=[
    "https://cdn1.byjus.com/wp-content/uploads/2019/10/my-father-essay-for-class-1.jpeg"
    "https://i.pinimg.com/originals/92/20/a5/9220a5bd090a73abd1088ce95fb2976b.jpg",
    "https://cdn3.vectorstock.com/i/1000x1000/41/22/cartoon-boy-kid-son-family-image-vector-15024122.jpg"
  ];
  var i=0;
  function nextslide(){
    if (i>3){
  i=0;
  }
    document.getElementById ("img").src=w[i];
    i++;
  }