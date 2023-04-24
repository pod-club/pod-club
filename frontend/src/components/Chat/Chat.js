// import React, { useState } from "react";
// import "./Chat.css";

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [image, setImage] = useState(null);
//   const [reportedUser, setReportedUser] = useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("message", newMessage);
//     formData.append("image", image);
//     setMessages([...messages, formData]);
//     setNewMessage("");
//     setImage(null);
//   };

//   const handleDelete = (index) => {
//     const newMessages = [...messages];
//     newMessages.splice(index, 1);
//     setMessages(newMessages);
//   };

//   const handleReply = (index) => {
//     setNewMessage(`@${messages[index].sender} ${newMessage}`);
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     setImage(file);
//   };

//   const handleReportUser = (index) => {
//     const reportedUser = messages[index].sender;
//     setReportedUser(reportedUser);
//     // Handle report user logic here
//     console.log(`User ${reportedUser} has been reported.`);
//   };

//   return (
//     <div className="chat-container">
//       {reportedUser && (
//         <div className="alert-container"> 
//           User {reportedUser} has been reported.
//           <button className="dismiss-button" onClick={() => setReportedUser(null)}>Dismiss</button>
//         </div>
//       )}
//       <ul className="chat-list">
//         {messages.map((message, index) => (
//           <li key={index} className="chat-item">
//             <div className="chat-bubble">{message.get("message")}</div>
//             {message.get("image") && (
//               <img className="chat-image" src={URL.createObjectURL(message.get("image"))} alt="" />
//             )}
//             <div className="chat-actions">
//               <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
//               <button className="reply-button" onClick={() => handleReply(index)}>Reply</button>
//               <button className="report-button" onClick={() => handleReportUser(index)}>Report</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <form className="chat-form" onSubmit={handleSubmit}>
//         <input
//           className="chat-input"
//           type="text"
//           value={newMessage}
//           onChange={(event) => setNewMessage(event.target.value)}
//           placeholder="Type a message"
//         />
//         <input
//           className="chat-file-input"
//           type="file"
//           accept="image/*"
//           onChange={handleImageUpload}
//         />
//         <button className="chat-send-button" type="submit">
//           <i className="fa fa-paper-plane"></i>
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Chat;
import React from "react";
import logo from '../assets/PodClub__1_-removebg-preview.png';

function chat () {
    return (
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src={logo} alt="ChitChat Logo"/>
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>

        {/* For profile photo */}
  <form class="flex items-center space-x-6">
  <div class="shrink-0">
    <img class="h-16 w-16 object-cover rounded-full" src= {logo} alt="logo" />
  </div>
  <label class="block">
    <span class="sr-only">Choose profile photo</span>
    <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
  </label>
</form>
</div>
    );
}

export default chat;
