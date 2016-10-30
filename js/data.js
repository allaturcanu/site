
var ziarray=new Array("Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata")
var lunaarray=new Array("Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decemberie")
function datacom() {
  var mydate=new Date()
  var year=mydate.getYear()
  if (year < 1000)
    year+=1900
  var day=mydate.getDay()
  var month=mydate.getMonth()
  var daym=mydate.getDate()
  if (daym<10)
    daym="0"+daym
  var cdate="<small><font color='black' face='Arial'><b>"+ziarray[day]+", "+daym+" "+lunaarray[month]+" "+year+"<br> </b></font></small>"
  document.getElementById("data").innerHTML=cdate
}
function arata() {
  if (document.getElementById("data"))
    setInterval("datacom()",1000)
}
window.onload=arata;
