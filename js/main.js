
// var x = document.getElementById("insertion").innerHTML;
//fonction pour inserer un titre
// function monTitre() {
//     document.getElementById("insertitre").innerHTML = "&lt;h1&gt;Titre&lt;/h1&gt;<br>";
//     document.getElementById("titre").innerHTML = "<h1>Titre</h1>";
//     // alert("salut");
// }
function monTitre() {
    var titre1 = document.createElement("div");
    titre1.innerHTML = "&lt;h1&gt;Titre&lt;/h1&gt;<br>";
    document.getElementById('editor').appendChild(titre1);
    var titre2 = document.createElement("h1");
    titre2.innerHTML = "Titre";
    document.getElementById('preview').appendChild(titre2);
}

//fonction pour inserer un Paragraphe
// function monPara() {
//     document.getElementById("inserpara").innerHTML = "&lt;p&gt;Ceci est un paragraphe&lt;/p&gt;";
//     document.getElementById("para").innerHTML = "<p>Ceci est un paragraphe</p>";
// }
function monPara() {
    var para1 = document.createElement("div");
    para1.innerHTML = "&lt;p&gt;Ceci est un paragraphe&lt;/p&gt;";
    document.getElementById('editor').appendChild(para1);
    var para2 = document.createElement("p");
    para2.innerHTML = "Ceci est un paragraphe";
    document.getElementById('preview').appendChild(para2);
}

//fonction pour inserer une liste ordonnée
// function maListe() {
//     document.getElementById("inserlistol").innerHTML = "&lt;ol&gt;<br>&nbsp;&nbsp;&nbsp;&lt;li&gt;Item1&lt;/li&gt;<br>&nbsp;&nbsp;&nbsp;&lt;li&gt;Item2&lt;/li&gt;<br>&nbsp;&nbsp;&nbsp;&lt;li&gt;Item3&lt;/li&gt;<br>&lt;/ol&gt;<br>";
//     document.getElementById("listOl").innerHTML = "<ol><li>Item1</li><li>Item2</li><li>Item3</li></ol>";
// }
function maListeOl() {
    var list1 = document.createElement("div");
    list1.innerHTML = "&lt;ol&gt;<br>&lt;li&gt;Item1&lt;/li&gt;<br>&lt;li&gt;Item2&lt;/li&gt;<br>&lt;li&gt;Item3&lt;/li&gt;<br>&lt;/ol&gt;<br>";
    document.getElementById('editor').appendChild(list1);
    var list2 = document.createElement("ol");
    list2.innerHTML = "<li>Item1</li><li>Item2</li><li>Item3</li>";
    document.getElementById('preview').appendChild(list2);
}

//fonction pour inserer une liste non-ordonnée
function maListeUl() {
    var list1 = document.createElement("div");
    list1.innerHTML = "&lt;ul&gt;<br>&lt;li&gt;Item1&lt;/li&gt;<br>&lt;li&gt;Item2&lt;/li&gt;<br>&lt;li&gt;Item3&lt;/li&gt;<br>&lt;/ul&gt;<br>";
    document.getElementById('editor').appendChild(list1);
    var list2 = document.createElement("ul");
    list2.innerHTML = "<li>Item1</li><li>Item2</li><li>Item3</li>";
    document.getElementById('preview').appendChild(list2);
}

// fonction pour inserer une image
function image() {
	var img1 = document.createElement("div");
    img1.innerHTML = "&lt;img src='res/bebe.jpg'&gt;<br>";
    document.getElementById('editor').appendChild(img1);
    var img2 = document.createElement("div");
    img2.innerHTML = "<img src='res/bebe.jpg'>";
    document.getElementById('preview').appendChild(img2);
}

//fonction pour modifier un paragraphe
function changePara(){
    p=prompt('Saisir une valeur !')

    // if(!isNaN(p)){
    //     alert(p)
    // }
    while((p=="") || !isNaN(p)){
        var p = prompt('Saisir un nouveau paragraphe');
    }
    document.getElementById('para1').innerHTML="&lt;p&gt;"+p+"&lt;/p&gt;";
    document.getElementById('para2').innerHTML=p;
}

//fonction pour inserer une video
function maVideo(){
    var video1 = document.createElement("div");
    video1.innerHTML = "&lt;video src='res/restau.mp4'&gt;<br>";
    document.getElementById('editor').appendChild(video1);
    var video2 = document.createElement("div");
    video2.innerHTML = "<video src='res/restau.mp4'><br>";
    document.getElementById('preview').appendChild(video2);
}

// fonction pour inserer un lien
function monLien(){
    var lien1 = document.createElement("div");
    lien1.innerHTML="&lt;a href='https://gomycode.tn/?'&gt;<br>";
    document.getElementById('editor').appendChild(lien1);
    var lien2 = document.createElement("div");
    lien2.innerHTML = "<a href='https://gomycode.tn/?' target=_blank>Mon lien</a><br>";
    document.getElementById('preview').appendChild(lien2);
}

// fonction pour inserer de l'audio
function audio(){
    var audio1 = document.createElement("div");
    audio1.innerHTML="&lt;audio controls&gt;<br>&lt;source src='res/SampleAudio.mp3'&gt;&lt;/source&gt;<br>&lt;/audio&gt;<br>";
    document.getElementById('editor').appendChild(audio1);
    var audio2 = document.createElement("div");
    audio2.innerHTML = "<audio controls><source src='res/shanson.mp3'></source></audio><br>";
    document.getElementById('preview').appendChild(audio2);
}