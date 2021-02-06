//Set Value for Greeting User From Local Storage
if (localStorage.getItem("Name") != null) {
  var textnode4 = document.createTextNode("Welcome back " + localStorage.getItem("Name") + "!");
} else {
  var textnode4 = document.createTextNode("Welcome User!");
}
const p3 = document.createElement("P");
p3.id = "username";
p3.setAttribute('class', "button xxlarge black");
document.getElementById("usernamediv").appendChild(p3);
document.getElementById("username").appendChild(textnode4);

//Code for Nested Select Statements
const myChoices = selectInfo;
console.log(myChoices);
//create select
const mySelect1 = document.createElement("select");
mySelect1.id = "mySelect1";

document.getElementById("myDiv1").appendChild(mySelect1);

const myOptions1 = document.createElement("option");
myOptions1.value = myChoices.choices[0].key;
myOptions1.textContent = myChoices.choices[0].description;
myOptions1.selected = this;
myOptions1.disabled = true;
//set options
const myOptions2 = document.createElement("option");
myOptions2.value = myChoices.choices[0].option_1;
myOptions2.textContent = myChoices.choices[0].option_1;

const myOptions3 = document.createElement("option");
myOptions3.value = myChoices.choices[0].option_2;
myOptions3.textContent = myChoices.choices[0].option_2;
//append to select
document.getElementById("mySelect1").appendChild(myOptions1);
document.getElementById("mySelect1").appendChild(myOptions2);
document.getElementById("mySelect1").appendChild(myOptions3);


//on chnage => funtion 1
document.getElementById("mySelect1").addEventListener("change", () => {
  console.log(mySelect1.value);
  //delete the options if already appended
  if (document.getElementById("mySelect2")) {
    var parent2 = document.getElementById("mySelect2").parentNode;
    var mySel3 = document.getElementById("mySelect3");
    if (parent2.hasChildNodes()) {
      if (mySel3 != null && mySel3.length > 0) {
        parent.removeChild(mySel3);

        console.log(myDiv1);
      }

    }
  }
  //delete the options if already appended
  parent = document.getElementById("mySelect1").parentNode;
  var mySel1 = document.getElementById("mySelect2");
  if (parent.hasChildNodes()) {
    if (mySel1 != null && mySel1.length > 0) {
      parent.removeChild(mySel1);

      console.log(myDiv1);

    }

  }
  //after options are cleared enter new options
  const mySelect2 = document.createElement("select");
  mySelect2.id = "mySelect2";
  document.getElementById("myDiv1").appendChild(mySelect2);
  var choosen;
  const myOptions21 = document.createElement("option");
  //loop through to find right options
  for (i in myChoices.choices) {
    if (mySelect1.value == myChoices.choices[i].key) {
      choosen = i;
      myOptions21.value = myChoices.choices[i].key;
      myOptions21.textContent = myChoices.choices[i].description;
    }
  }
  myOptions21.selected = this;
  myOptions21.disabled = true;
  const myOptions22 = document.createElement("option");
  myOptions22.value = myChoices.choices[choosen].option_1;
  myOptions22.textContent = myChoices.choices[choosen].option_1;

  const myOptions23 = document.createElement("option");
  myOptions23.value = myChoices.choices[choosen].option_2;
  myOptions23.textContent = myChoices.choices[choosen].option_2;
  //set options
  document.getElementById("mySelect2").appendChild(myOptions21);
  document.getElementById("mySelect2").appendChild(myOptions22);
  document.getElementById("mySelect2").appendChild(myOptions23);




  //on change => call nested select 3
  document.getElementById("mySelect2").addEventListener("change", () => {
    console.log(mySelect2.value);
    //delete the options for 3rd select statement
    if (document.getElementById("mySelect2")) {
      var parent2 = document.getElementById("mySelect2").parentNode;
      var mySel3 = document.getElementById("mySelect3");
      if (parent2.hasChildNodes()) {
        if (mySel3 != null && mySel3.length > 0) {
          parent.removeChild(mySel3);

          console.log(myDiv1);
        }

      }
    }
    //create the new select statements
    const mySelect3 = document.createElement("select");
    mySelect3.id = "mySelect3";
    document.getElementById("myDiv1").appendChild(mySelect3);
    var choosen3;
    const myOptions31 = document.createElement("option");
    for (j in myChoices.choices) {
      if (mySelect2.value == myChoices.choices[j].key) {
        choosen3 = j;
        myOptions31.value = myChoices.choices[j].key;
        myOptions31.textContent = myChoices.choices[j].description;
      }
    }
    myOptions31.selected = this;
    myOptions31.disabled = true;
    const myOptions32 = document.createElement("option");
    myOptions32.value = myChoices.choices[choosen3].option_1;
    myOptions32.textContent = myChoices.choices[choosen3].option_1;
    //set
    const myOptions33 = document.createElement("option");
    myOptions33.value = myChoices.choices[choosen3].option_2;
    myOptions33.textContent = myChoices.choices[choosen3].option_2;
    //append
    document.getElementById("mySelect3").appendChild(myOptions31);
    document.getElementById("mySelect3").appendChild(myOptions32);
    document.getElementById("mySelect3").appendChild(myOptions33);





    //Finally we have all 3 choices// call funciton to show
    document.getElementById("mySelect3").addEventListener("change", () => {
      console.log(mySelect3.value);

      //Code to remove previous selected result Image video and text        
      if (document.getElementById("result").hasChildNodes()) {
        if (document.getElementById("jpg") != null) {
          document.getElementById("result").removeChild(document.getElementById("jpg"));
        }
      }
      if (document.getElementById("result").hasChildNodes()) {
        if (document.getElementById("mp4") != null) {
          document.getElementById("result").removeChild(document.getElementById("mp4"));
        }
      }
      if (document.getElementById("shows_inner").hasChildNodes()) {
        if (document.getElementById("node") != null) {
          document.getElementById("shows_inner").removeChild(document.getElementById("node"));
        }
      }

      //loop through josn to find the key and show choice
      for (k in myChoices.choices) {
        if (mySelect3.value == myChoices.choices[k].key) {
          choosen = k;
          //Dynamically creates img  
          const img = document.createElement("img");
          img.id = "jpg";
          img.setAttribute('src', 'img/' + myChoices.choices[k].result + '.jpg');
          img.setAttribute('alt', myChoices.choices[k].result);
          img.setAttribute('width', '150px');
          document.getElementById("result").appendChild(img);

          var textnode = document.createTextNode("\u00A0");
          document.getElementById("result").appendChild(textnode);

          //Dynamically creates Video  
          const video = document.createElement("video");
          video.id = "mp4"
          video.setAttribute('src', 'video/' + myChoices.choices[k].result + '.mp4');
          video.setAttribute('width', '400px');
          video.setAttribute('controls', 'controls');
          document.getElementById("result").appendChild(video);

          //Dynamically creates Texts 
          const p = document.createElement("P");
          p.id = "node";
          var textnode2 = document.createTextNode("You have selected a " + mySelect1.value + " from " + mySelect2.value + " with genre " + mySelect3.value + " and hence, we recommend \"" + myChoices.choices[k].result + "\" ");

          document.getElementById("shows_inner").appendChild(p);
          document.getElementById("node").appendChild(textnode2);
        }
      }

    })
  })
})


//funciton to validate and store information in local storage
function validateForm() {
  //validation
  var name = document.forms["Form"]["Name"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  //validation
  var country = document.forms["Form"]["Country"].value;
  if (country == "") {
    alert("Country must be filled out");
    return false;
  }
  if (typeof (Storage) !== "undefined") {
    // Storing in local storage
    localStorage.setItem("Name", name);
    localStorage.setItem("Country", country);

    // Set
    var parent6 = document.getElementById("usernamediv");
    //Delete old username if exists
    if (document.getElementById("usernamediv").hasChildNodes()) {
      if (document.getElementById("username") != null) {
        document.getElementById("usernamediv").removeChild(document.getElementById("username"));
      }
    }
    //Add and Show new username
    const p2 = document.createElement("P");
    p2.id = "username";
    p2.setAttribute('class', "button xxlarge black");

    var textnode3 = document.createTextNode("Welcome " + localStorage.getItem("Name"));

    document.getElementById("usernamediv").appendChild(p2);
    document.getElementById("username").appendChild(textnode3);
    //document.getElementById("username").innerHTML = "Welcome " + localStorage.getItem("Name");
  }

}
