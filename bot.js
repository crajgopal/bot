function response(){
 let answers ={
 "Hi":"Hi , how are you ? Do you have any salesforce question? Do you need suggestion? Type 'suggest'",
 "hi":"Hi , how are you ? Do you have any salesforce question? Do you need suggestion? Type suggest",
 "Hello":"Hello , how are you ?",
 "hello":"Hello , how are you ?",
 "bye" : "Bye , take care .",
 "":"Enter your salesforce related question if you need an answer.",
 "your name?": "I am Freelance bot",
 "what is your name?": "I am Freelance bot",
 "suggest":"Sales force questions like :  Which Platform is used for developing an App in Salesforce?, How to build Salesforce on Mobile Application? , What are Primitive Data Types? , What does the Data Wrapper Class contain? ,Is Return Type a must for a Method? ,  How long is Bit Variable for a long statement?, What are the development tools for Apex?, What is the use of Debug Log?",
 "Which Platform is used for developing an App in Salesforce?":"The force.com platform is used for developing an App in Salesforce.",
 "How to build Salesforce on Mobile Application?":" Mobile SDK can be used to build Salesforce on the mobile application.",
 "What are Primitive Data Types?":"Integer, Double, Long, Date, Date-Time, String, ID, Boolean, etc., are some of the examples of primitive data types. These are passed by value and not by reference.",
"What does the Data Wrapper Class contain?":"Data Wrapper Class contains abstract, structured and collection data.",
"Is Return Type a must for a Method?":"Yes, the return type is a must for a method",
"How long is Bit Variable for a long statement?":"The long statement has 64-bit.",
"What are the development tools for Apex?":"The development tools for Apex are Force. Com Developer Tools, Force. Com IDE and Code Editor.",
"What is the use of Debug Log?":"Debug Log is used for catching the exception.",
"What is Force.com Platform?":" Force.com is a Platform As A Service (PAAS) and simplifies the development and deployment of cloud-based applications and websites. The developers make use of the Integrated Development Environment or IDE to create apps and websites. Later, these are deployed in the multi-tenant servers of Force.com.",



}




let question=document.getElementById('userq').value;

if(question in answers){
document.getElementById('bottxt').innerHTML =answers[question]
}
else
document.getElementById('bottxt').innerHTML="Sorry ,I dont know. Will get back to you email the author....."
}
