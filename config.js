window.BASE_URL_All = "http://192.168.107.137";

// const API_BASE_URL = 'http://192.168.106.130:8060/api/auth';

// document.addEventListener("DOMContentLoaded", () => {
//     const token = localStorage.getItem("authToken");
//     if (!token) {
//         window.location.replace("/login/Login2.html");
//         return;
//     }

//     authenticatedFetch(`${API_BASE_URL}/profile`)
//         .then(res => {
//             if (!res.ok) throw new Error("Invalid token");
//             return res.json();
//         })
//         .then(data => {
//             if (!data.success) {
//                 localStorage.removeItem("authToken");
//                 window.location.replace("/login/Login2.html");
//             }
//         })
//         .catch(() => {
//             localStorage.removeItem("authToken");
//             window.location.replace("/login/Login2.html");
//         });
// });
