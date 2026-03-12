  const API_BASE_URL = 'http://192.168.107.10:8060/api/auth';

document.addEventListener("DOMContentLoaded", () => {
  

    // Buttons for showing forms
    const btnLogin = document.getElementById('btnLogin');
    const loginForm = document.getElementById('loginForm');
    const initialButtons = document.querySelector('.initial-buttons');

    // Check if user is already logged in when page loads
    checkAuthStatus();

    // Button click to show login form
    if (btnLogin && loginForm && initialButtons) {
        btnLogin.addEventListener('click', () => {
            // Hide initial buttons
            initialButtons.style.display = 'none';
            // Show login form
            loginForm.style.display = 'block';
        });
    }

    if (!loginForm) {
        console.error("Login form with id='loginForm' not found in HTML");
        return;
    }

    // Login Form Submission
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const submitButton = loginForm.querySelector(".form__button");
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = "Logging in...";
        submitButton.disabled = true;
        
        const username = loginForm.querySelector("#loginUsername").value.trim();
        const password = loginForm.querySelector("#loginPassword").value;
        
        try {
            await authenticateUser(username, password, loginForm);
        } catch (error) {
            console.error("Login error:", error);
            setFormMessage(loginForm, "error", "An error occurred during login");
        } finally {
            // Restore button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });

    // Authentication function (FIXED to properly store data)
    async function authenticateUser(username, password, form) {
        // Validate input fields first
        if (!username.trim()) {
            setFormMessage(form, "error", "Please enter your username");
            return;
        }
        
        if (!password) {
            setFormMessage(form, "error", "Please enter your password");
            return;
        }

        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                // Store authentication token
                sessionStorage.setItem('authToken', data.token);
                sessionStorage.setItem('user', JSON.stringify(data.user));
                
                // Store user role and city information properly
                sessionStorage.setItem('userRole', data.user.role);
                // sessionStorage.setItem('userId', data.user.id);
                sessionStorage.setItem('username', data.user.username);
                // sessionStorage.setItem('userEmail', data.user.email);
                
                // For city users (role === "USER"), store the city
                if (data.user.role === "USER" && data.user.city) {
                    sessionStorage.setItem('selectedCity', data.user.city);
                    sessionStorage.setItem('userCity', data.user.city); // Backup key
                    console.log("City user logged in. City:", data.user.city);
                }
                
                // For admin users
                if (data.user.role === "ADMIN") {
                    console.log("Admin user logged in");
                }
                
                setFormMessage(form, "success", "Login successful! Redirecting...");

                // Clear form fields
                document.getElementById('loginUsername').value = '';
                document.getElementById('loginPassword').value = '';
                
                // Show user info
                console.log("Login successful:", data.user);
                console.log("Stored role:", data.user.role);
                console.log("Stored city:", data.user.city);
                
                // Redirect after a short delay
                setTimeout(() => {
                    redirectBasedOnUser(data.user);
                }, 500);
                
            } else {
                // Handle API validation errors or authentication failures
                let errorMessage = "Login failed";
                
                if (data.message) {
                    if (data.message.includes("Invalid credentials")) {
                        errorMessage = "Incorrect username or password";
                    } else if (data.message.includes("Validation failed")) {
                        errorMessage = "Please check your username and password format";
                    } else {
                        errorMessage = data.message;
                    }
                } else if (response.status === 401) {
                    errorMessage = "Incorrect username or password";
                } else if (response.status === 400) {
                    errorMessage = "Please check your username and password format";
                }
                
                setFormMessage(form, "error", errorMessage);
            }
        } catch (error) {
            console.error('API Login error:', error);
            setFormMessage(form, "error", "Network error. Please check if the server is running.");
        }
    }

    // Check if user is already authenticated (FIXED)
    function checkAuthStatus() {
        const token = sessionStorage.getItem('authToken');
        if (token) {
            // Verify token is still valid
            fetch(`${API_BASE_URL}/profile`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Token validation failed');
                }
            })
            .then(data => {
                if (data.success) {
                    // Store user data in session storage
                    sessionStorage.setItem("userRole", data.user.role);
                    sessionStorage.setItem('username', data.user.username);
                    
                    // If user role is USER (city user), store city
                    if (data.user.role === "USER" && data.user.city) {
                        sessionStorage.setItem("selectedCity", data.user.city);
                        sessionStorage.setItem('userCity', data.user.city);
                    }
                    
                    console.log("User already logged in:", data.user);
                    redirectBasedOnUser(data.user);
                } else {
                    // Token is invalid, remove it
                    clearAuthData();
                }
            })
            .catch(error => {
                console.error('Auth check error:', error);
                // Remove potentially invalid token
                clearAuthData();
            });
        }
    }

    // Utility functions
    function setFormMessage(formElement, type, message) {
        const messageElement = formElement.querySelector(".form__message");
        if (messageElement) {
            messageElement.textContent = message;
            messageElement.classList.remove("form__message--success", "form__message--error");
            messageElement.classList.add(`form__message--${type}`);
            
            // Auto-clear success messages after 5 seconds
            if (type === "success") {
                setTimeout(() => {
                    messageElement.textContent = "";
                    messageElement.classList.remove("form__message--success");
                }, 500);
            }
        }
    }

    function clearAuthData() {
          document.getElementById('loginUsername').value = '';
          document.getElementById('loginPassword').value = '';

        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('user');
        // Clear session data too
        sessionStorage.removeItem('userRole');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('selectedCity');
        sessionStorage.removeItem('userCity');

    }

    // Test connection on page load
    // testBackendConnection();
});

// FIXED redirect function based on your API response structure
function redirectBasedOnUser(user) {
    try {
        console.log("Redirecting user:", user);
        
        // Check user role and redirect accordingly
        if (user.role === "ADMIN") {
            console.log("Redirecting admin user to home page");
            window.location.href = "http://127.0.0.1:5506/home/home.html";
        } else if (user.role === "USER") {
            console.log(`Redirecting city user (${user.city}) to home page`);
            window.location.href = "http://127.0.0.1:5506/home/home.html";
        } else {
            console.log("Unknown role, redirecting to home page");
            window.location.href = "http://127.0.0.1:5506/home/home.html";
        }
        
    } catch (error) {
        console.error('Redirect error:', error);
        // Fallback redirect to home page
        window.location.href = "http://127.0.0.1:5506/home/home.html";
    }
}

// Logout function (can be called from other pages)
function logout() {
    const token = sessionStorage.getItem('authToken');

    fetch(`${API_BASE_URL}/logout`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Logout response:', data);
    })
    .catch(error => {
        console.error('Logout error:', error);
    })
    .finally(() => {
        // Clear all stored data
        clearAllAuthData();
        // Redirect to login page
        const loginUrl = window.location.origin + '/Login2.html';
        window.location.href = loginUrl;
    });
}

// Clear all authentication data
function clearAllAuthData() {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('user');
    sessionStorage.clear();
}

// Helper function to get current user info
function getCurrentUser() {
    const userStr = sessionStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
}

// Helper function to check if user is authenticated
function isAuthenticated() {
    return !!sessionStorage.getItem('authToken');
}

// Helper function to make authenticated API requests
async function authenticatedFetch(url, options = {}) {
    const token = sessionStorage.getItem('authToken');
    
    if (!token) {
        throw new Error('No authentication token found');
    }
    
    const defaultOptions = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    };
    
    const mergedOptions = {
        ...defaultOptions,
        ...options,
        headers: {
            ...defaultOptions.headers,
            ...options.headers
        }
    };
    
    const response = await fetch(url, mergedOptions);
    
    if (response.status === 401) {
        // Token expired or invalid
        clearAllAuthData();
        window.location.href = '/Login2.html';
        throw new Error('Authentication expired');
    }
    
    return response;
}

// Test backend connection
// async function testBackendConnection() {
//     try {
//         const response = await fetch(`${API_BASE_URL}/profile`, {
//             method: 'GET'
//         });
        
//         if (response.ok || response.status === 401) {
//             console.log('✅ Backend connection successful');
//         } else {
//             console.warn('⚠️ Backend responded but may have issues');
//         }
//     } catch (error) {
//         console.error('❌ Backend connection failed:', error);
//         console.log('Please make sure your Spring Boot application is running on port 8060');
//     }
// }

// Function to get user profile
async function getUserProfile() {
    try {
        const response = await authenticatedFetch(`${API_BASE_URL}/profile`);
        const data = await response.json();
        
        if (data.success) {
            return data.user;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('Error fetching user profile:', error);
        return null;
    }
}

// Global reference to clear auth data
function clearAuthData() {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('selectedCity');
    sessionStorage.removeItem('userCity');
    sessionStorage.removeItem('userId');
    // sessionStorage.removeItem('userEmail');
}

// Export functions for use in other scripts
window.UridaAuth = {
    logout,
    getCurrentUser,
    isAuthenticated,
    authenticatedFetch,
    getUserProfile,
    // testBackendConnection,
    clearAuthData
};