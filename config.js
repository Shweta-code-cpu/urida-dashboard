window.BASE_URL_All = "http://192.168.106.125";

const API_BASE_URL = 'http://192.168.106.125:8060/api/auth';

document.addEventListener("DOMContentLoaded", () => {

    // Do NOT run if login page and no token
    if (!document.cookie.includes("token")) {
        console.log("Not logged in — config protection skipped.");
        return;
    }

    fetch(`${API_BASE_URL}/profile`, {
        method: "GET",
        credentials: "include"
    })
    .then(res => {
        if (!res.ok) throw new Error("Not authenticated");
        return res.json();
    })
    .then(data => {
        if (!data.success) {
            window.location.replace("/login/Login2.html");
        }
    })
    .catch(() => {
        window.location.replace("/login/Login2.html");
    });

});


let inactivityTime = function () {
  let timer;
  const logoutAfter = 2 * 60 * 1000; // 2 minutes

  function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(logoutUser, logoutAfter);
  }

  function logoutUser() {
    fetch(`${API_BASE_URL}/auth/inactivity-logout`, {
      method: "POST",
      credentials: "include"
    }).finally(() => {
      alert("Session expired due to inactivity. Please log in again.");
      sessionStorage.clear();
      window.location.href = '/login/Login2.html';
    });
  }

  window.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;
  document.onclick = resetTimer;
  document.onscroll = resetTimer;
};

inactivityTime();
