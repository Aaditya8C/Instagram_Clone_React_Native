// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {

//     function userIsAuthenticated(){
//     		return request.auth != null;
//     }

//     //Security Rules for group collection ('posts')
//     match /{path=**}/posts/{postId}{
//     		allow read,write : if userIsAuthenticated();
//     }

//     match /users/{userId}{
//     		allow read,write : if userIsAuthenticated();
//     }
//     match /{document=**} {
//       allow read, write: if request.time < timestamp.date(2024, 5, 12);
//     }
//   }
// }
