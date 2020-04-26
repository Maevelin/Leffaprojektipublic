async function hae_elokuva(){
  //const response = await fetch('http://www.omdbapi.com/?t=Star+wars&y=2016&apikey=a95f3723');
//const data = await response.json();
//function hae_elokuva(){
  // console.log("toimiiko");
  var leffan_nimi = document.getElementById("leffa").value;
  var vuosi = document.getElementById("vuosi").value;
  var posteri = document.getElementById("leffan_posteri");

  var hakurimpsu = 'http://www.omdbapi.com/?t=' + leffan_nimi + '&y=' + vuosi + '&apikey=a95f3723';
  console.log(hakurimpsu);
  const response = await fetch(hakurimpsu);
  const data = await response.json();
  console.log(data);
  document.getElementById("elokuvan_nimi").innerHTML = data.Title;
  posteri.src = data.Poster;
  // ylläolevalla tavalla tähän voi lisätä esim näyttelijöitä ja mitä vaan. Katso Poster -esimerkki
  //document.getElementById("elokuvan_nimi").innerHTML = leffan_nimi;
}
