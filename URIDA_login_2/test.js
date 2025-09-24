// URIDA_login_2.js - Minimal changes to add role-based city selection
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const API_BASE_URL = 'http://192.168.107.49:8060/api/auth';

    // Check if login form exists
    if (!loginForm) {
        console.error("Login form with id='login' not found in HTML");
        return;
    }

    // Check if user is already logged in
    checkAuthStatus();

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

    // Authentication function
    async function authenticateUser(username, password, form) {
        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (data.success) {
                // Store authentication token and user data
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                
                setFormMessage(form, "success", "Login successful! Redirecting...");
                
                // Show user info
                console.log("Login successful:", data.user);
                
                // Redirect based on user type
                setTimeout(() => {
                    redirectBasedOnUser(data.user);
                }, 100);
            } else {
                setFormMessage(form, "error", data.message || "Login failed");
            }
        } catch (error) {
            console.error('Login error:', error);
            setFormMessage(form, "error", "Network error. Please check if the server is running.");
            throw error; // Re-throw to be caught by the main catch block
        }
    }

    // Check if user is already authenticated
    function checkAuthStatus() {
        const token = localStorage.getItem('authToken');
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
                    // User is authenticated, redirect based on user type
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
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
    }

    // Image Effect JavaScript (keeping original functionality)
    const distanceSlider = document.getElementById('distance');
    const thicknessSlider = document.getElementById('thickness');
    const imgWraps = document.querySelectorAll('.img-wrap');

    if (distanceSlider) {
        distanceSlider.oninput = e => {
            imgWraps.forEach(wrap => {
                wrap.style.setProperty('--distance', e.target.value + '%');
            });
        };
    }

    if (thicknessSlider) {
        thicknessSlider.oninput = e => {
            imgWraps.forEach(wrap => {
                wrap.style.setProperty('--border', e.target.value + 'px');
            });
        };
    }

    // Test connection on page load
    testBackendConnection();
});

// Function to redirect users based on their credentials (Global function)
function redirectBasedOnUser(user) {
    try {
        const username = user.username.toLowerCase();
        
        // Store user role and info for home page
        if (username === 'admin') {
            // Admin user
            sessionStorage.setItem('userRole', 'admin');
            sessionStorage.setItem('username', username);
            window.location.href = "/home/home.html";
            return;
        }
        
        // Extract city code from username (format: citycode_user)
        const cityCode = username.split('_')[0];
        
        // City code to full name mapping (keeping your original mapping)
        const cityPages = {
            'agr': 'agra',
            'alg': 'aligarh', 
            'ayd': 'ayodhya',
            'brl': 'bareilly',
            'frz': 'firozabad',
            'gzb': 'ghaziabad',
            'grk': 'gorakhpur',
            'jhs': 'jhansi',
            'knp': 'kanpur',
            'lko': 'lucknow',
            'mrt': 'meerut',
            'mrb': 'moradabad',
            'pry': 'prayagraj',
            'snp': 'saharanpur',
            'sjp': 'shahjahanpur',
            'vns': 'varanasi',
            'mtv': 'mathura'
        };
        
        // Get city name from mapping
        const cityName = cityPages[cityCode];
        
        if (cityName) {
            // Store city user info for home page
            sessionStorage.setItem('userRole', 'city');
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('selectedCity', cityName);
        }
        
        // Redirect to home page (keeping your original redirect)
        window.location.href = "/home/home.html";
        console.log(`Redirecting to home page for ${cityName || username}`);
        
    } catch (error) {
        console.error('Redirect error:', error);
        // Fallback redirect to home page
        window.location.href = "/home/home.html";
    }
}

// Helper function to clear authentication data
function clearAuthData() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    // Clear session data too
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('selectedCity');
}

// Global utility functions that can be called from other pages

// Logout function (can be called from other pages)
function logout() {
    const token = localStorage.getItem('authToken');
    
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
        // Clear local storage and redirect to login page
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        sessionStorage.clear();
        // Redirect to login page (dynamically get current origin and path)
        const loginUrl = window.location.origin + '/URIDA_login_2.html';
        window.location.href = loginUrl;
    });
}

// Helper function to get current user info
function getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
}

// Helper function to check if user is authenticated
function isAuthenticated() {
    return !!localStorage.getItem('authToken');
}

// Helper function to make authenticated API requests
async function authenticatedFetch(url, options = {}) {
    const token = localStorage.getItem('authToken');
    
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
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        window.location.href = '/';
        throw new Error('Authentication expired');
    }
    
    return response;
}

// Test backend connection
async function testBackendConnection() {
    try {
        const response = await fetch(`${API_BASE_URL}/logout`, {
            method: 'POST'
        });
        
        if (response.ok) {
            console.log('✅ Backend connection successful');
        } else {
            console.warn('⚠️ Backend responded but may have issues');
        }
    } catch (error) {
        console.error('❌ Backend connection failed:', error);
        console.log('Please make sure your Spring Boot application is running on port 8060');
    }
}

// Function to get user profile (example usage for other pages)
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

// Export functions for use in other scripts
window.UridaAuth = {
    logout,
    getCurrentUser,
    isAuthenticated,
    authenticatedFetch,
    getUserProfile,
    testBackendConnection
};