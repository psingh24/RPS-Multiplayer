$(document).ready(function() {

var count = 0


 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCgQFFxv6-cd0vRQesrZUD447sO7AEYklo",
    authDomain: "clickevent-e44d0.firebaseapp.com",
    databaseURL: "https://clickevent-e44d0.firebaseio.com",
    projectId: "clickevent-e44d0",
    storageBucket: "clickevent-e44d0.appspot.com",
    messagingSenderId: "673662977249"
  };
  firebase.initializeApp(config);

var database = firebase.database()

var ref = database.ref('list');
var chat = database.ref('chat')
ref.on('value', getData)
chat.on('value', chatData)
$("#click").click(function(){
		count++;
		$("#clickCount").html(count)


	})

$("#submit").click(function(){
	var name = $("#name").val().trim();
	var score = count;

	var data = {
			name: name,
			score: count
		}
		ref.push(data)
 
})

function getData(data) {
	// console.log(data.val())
	$("#scoreList").empty()
	var list = data.val()
	var keys = Object.keys(list)
	
	// list.key(data)
	console.log(keys)
	

	for (var i = 0; i < keys.length; i++) {
		// console.log(keys[i])
		
		var k = keys[i]
// // console.log(list[i].score)
		var int = list[k].name;
		var sc = list[k].score;
		console.log(int, sc)

		$("#scoreList").append("<li>"+int+":"+sc+"</li>")
	
	}
}
// var chatMessage = $("#message").val().trim();
$("#chatSubmit").click(function(){
	var chatMessage = $("#message").val().trim();
	

	var data = {
			message: chatMessage
		}
		chat.push(data)
})

function chatData(data) {
	// console.log(data.val())
	$(".chatBox").empty()
	var list = data.val()
	var keys = Object.keys(list)
	
	// list.key(data)
	console.log(keys)
	

	for (var i = 0; i < keys.length; i++) {
		// console.log(keys[i])
		
		var k = keys[i]
// // console.log(list[i].score)
		var int = list[k].message;
		// var sc = list[k].score;
		// console.log(int, sc)

		$(".chatBox").append("<p>"+int+"</p>")
	
	}
}



})










