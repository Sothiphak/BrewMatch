const firebaseConfig = {
    apiKey: "AIzaSyCAPzgrJnwJU9F5rKjWvQhQk4vM9Icqi6s",
    authDomain: "sip-savvy-2a069.firebaseapp.com",
    projectId: "sip-savvy-2a069",
    storageBucket: "sip-savvy-2a069.firebasestorage.app",
    messagingSenderId: "320568055978",
    appId: "1:320568055978:web:583d88b5d9474836e398d3",
    measurementId: "G-Y6VTQ10XSM"
  };

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { 
    getFirestore, 
    doc, 
    setDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// --- ALL RECIPE DATA ---
const initialRecipesData = [
  {id: 1, name: "Classic Latte", type: "Coffee", category: "Milk Coffees", milk: "Dairy", sweetness: "Medium", temperature: "Hot", base: "Espresso", flavorNotes: ["Classic", "Creamy"], ingredients: ["1 shot espresso", "1 cup steamed milk"], instructions: ["Brew espresso.", "Pour steamed milk over espresso."], image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=60", difficulty: "Medium", prepTime: "5 mins", caffeineLevel: "High", tags: ["Traditional", "Comfort"]},
  {id: 2, name: "Green Tea", type: "Tea", category: "Pure Teas", milk: "None", sweetness: "None", temperature: "Hot", base: "Green Tea", flavorNotes: ["Grassy", "Refreshing"], ingredients: ["1 tsp green tea leaves", "1 cup hot water"], instructions: ["Steep tea leaves for 2-3 minutes."], image: "https://images.unsplash.com/photo-1627435601361-ec25f24754b2?auto=format&fit=crop&q=60", difficulty: "Easy", prepTime: "3 mins", caffeineLevel: "Medium", tags: ["Healthy", "Simple"]},
  {id: 3, name: "Iced Mocha", type: "Coffee", category: "Flavored Coffees", milk: "Dairy", sweetness: "High", temperature: "Cold", base: "Espresso", flavorNotes: ["Chocolate", "Rich"], ingredients: ["2 shots espresso", "1 cup cold milk", "Chocolate syrup", "Ice"], instructions: ["Combine ingredients and stir."], image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=60", difficulty: "Easy", prepTime: "7 mins", caffeineLevel: "High", tags: ["Indulgent", "Dessert Drink"]},
  {id: 4, name: "Lemonade", type: "Other", category: "Fruit Drinks", milk: "None", sweetness: "Medium", temperature: "Cold", base: "Fruit", flavorNotes: ["Tart", "Sweet", "Citrusy"], ingredients: ["1 cup lemon juice", "1 cup sugar", "4 cups water"], instructions: ["Mix and serve over ice."], image: "https://images.unsplash.com/photo-1575596511277-5722d413dbf5?auto=format&fit=crop&q=60", difficulty: "Easy", prepTime: "10 mins", caffeineLevel: "None", tags: ["Refreshing", "Summer"]},
  {id: 5, name: "Cappuccino", type: "Coffee", category: "Milk Coffees", milk: "Dairy", sweetness: "Low", temperature: "Hot", base: "Espresso", flavorNotes: ["Balanced", "Foamy"], ingredients: ["1 shot espresso", "1/3 cup steamed milk", "1/3 cup milk foam"], instructions: ["Layer espresso, steamed milk, and foam."], image: "https://images.unsplash.com/photo-1517256064527-09c73fc730e0?auto=format&fit=crop&q=60", difficulty: "Medium", prepTime: "6 mins", caffeineLevel: "High", tags: ["Italian", "Classic"]},
  {id: 6, name: "Chamomile Tea", type: "Tea", category: "Herbal Teas", milk: "None", sweetness: "None", temperature: "Hot", base: "Herbal Tea", flavorNotes: ["Floral", "Calming"], ingredients: ["1-2 tsp chamomile flowers", "1 cup boiling water"], instructions: ["Steep for 5-7 minutes."], image: "https://images.unsplash.com/photo-1594755380410-9a9745a91700?auto=format&fit=crop&q=60", difficulty: "Easy", prepTime: "7 mins", caffeineLevel: "None", tags: ["Relaxing", "Bedtime"]},
  {id: 7, name: "Americano", type: "Coffee", category: "Black Coffees", milk: "None", sweetness: "None", temperature: "Hot", base: "Espresso", flavorNotes: ["Bold", "Robust"], ingredients: ["1 shot espresso", "3/4 cup hot water"], instructions: ["Pour hot water over espresso."], image: "drinks/americano.png", difficulty: "Easy", prepTime: "3 mins", caffeineLevel: "High", tags: ["Simple", "Classic"]},
  {id: 8, name: "Chai Latte", type: "Tea", category: "Milk Teas", milk: "Dairy", sweetness: "Medium", temperature: "Hot", base: "Black Tea", flavorNotes: ["Spiced", "Aromatic"], ingredients: ["1 chai tea bag", "1/2 cup water", "1/2 cup milk"], instructions: ["Steep tea, add warm milk."], image: "https://images.unsplash.com/photo-1578899805437-4cd14030d3e0?auto=format&fit=crop&q=60", difficulty: "Easy", prepTime: "10 mins", caffeineLevel: "Medium", tags: ["Comfort", "Spicy"]},
  {id: 9, name: "Strawberry Smoothie", type: "Other", category: "Smoothies", milk: "Dairy", sweetness: "Medium", temperature: "Cold", base: "Fruit", flavorNotes: ["Fruity", "Sweet"], ingredients: ["1 cup frozen strawberries", "1/2 cup milk", "1/2 banana"], instructions: ["Blend until smooth."], image: "https://images.unsplash.com/photo-1600718374662-0815315c1657?auto=format&fit=crop&q=60", difficulty: "Easy", prepTime: "5 mins", caffeineLevel: "None", tags: ["Healthy", "Breakfast"]},
  {id: 10, name: "Matcha Latte", type: "Tea", category: "Milk Teas", milk: "Oat", sweetness: "Medium", temperature: "Hot", base: "Matcha", flavorNotes: ["Earthy", "Smooth"], ingredients: ["1 tsp matcha powder", "2 tbsp hot water", "1 cup steamed milk"], instructions: ["Whisk matcha and water, then add milk."], image: "https://images.unsplash.com/photo-1558160074-26c1174ffd39?auto=format&fit=crop&q=60", difficulty: "Medium", prepTime: "7 mins", caffeineLevel: "Medium", tags: ["Trendy", "Earthy"]},
  {id: 11, name: "Cold Brew", type: "Coffee", category: "Black Coffees", milk: "None", sweetness: "None", temperature: "Cold", base: "Coffee Grounds", flavorNotes: ["Smooth", "Low Acidity"], ingredients: ["1 cup coarse coffee", "4 cups cold water"], instructions: ["Steep for 12-18 hours and strain."], image: "https://images.unsplash.com/photo-1517701559438-c38c2871d33b?auto=format&fit=crop&q=60", difficulty: "Easy", prepTime: "12-18 hrs", caffeineLevel: "High (concentrate)", tags: ["Summer", "Make Ahead"]},
  
  {
    "id": 12,
    "name": "Flat White",
    "type": "Coffee",
    "category": "Milk Coffees",
    "milk": "Dairy",
    "sweetness": "Low",
    "temperature": "Hot",
    "base": "Espresso",
    "flavorNotes": ["Smooth", "Velvety"],
    "ingredients": ["1 shot espresso", "Steamed milk"],
    "instructions": ["Pour steamed milk over espresso."],
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=60",
    "difficulty": "Medium",
    "prepTime": "5 mins",
    "caffeineLevel": "High",
    "tags": ["Australian", "Creamy"]
  },
  {
    "id": 13,
    "name": "Café au Lait",
    "type": "Coffee",
    "category": "Milk Coffees",
    "milk": "Dairy",
    "sweetness": "Medium",
    "temperature": "Hot",
    "base": "Brewed Coffee",
    "flavorNotes": ["Mild", "Balanced"],
    "ingredients": ["1 cup brewed coffee", "1 cup steamed milk"],
    "instructions": ["Combine equal parts coffee and steamed milk."],
    "image": "https://images.unsplash.com/photo-1517256064527-09c73fc730e0?auto=format&fit=crop&q=60",
    "difficulty": "Easy",
    "prepTime": "5 mins",
    "caffeineLevel": "Medium",
    "tags": ["French", "Breakfast"]
  },
  {
    "id": 14,
    "name": "Espresso Tonic",
    "type": "Coffee",
    "category": "Flavored Coffees",
    "milk": "None",
    "sweetness": "Low",
    "temperature": "Cold",
    "base": "Espresso",
    "flavorNotes": ["Citrusy", "Effervescent"],
    "ingredients": ["1 shot espresso", "Tonic water", "Ice"],
    "instructions": ["Pour tonic water over ice, add espresso shot."],
    "image": "https://images.unsplash.com/photo-1593443320739-77f7493963da?auto=format&fit=crop&q=60",
    "difficulty": "Easy",
    "prepTime": "3 mins",
    "caffeineLevel": "High",
    "tags": ["Refreshing", "Modern"]
  },
  {
    "id": 15,
    "name": "Cloud Coffee",
    "type": "Coffee",
    "category": "Flavored Coffees",
    "milk": "Dairy",
    "sweetness": "Medium",
    "temperature": "Cold",
    "base": "Espresso",
    "flavorNotes": ["Frothy", "Tropical"],
    "ingredients": ["1 shot espresso", "Coconut water", "Cream", "Ice"],
    "instructions": ["Froth espresso with cream, pour over ice and coconut water."],
    "image": "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=60",
    "difficulty": "Medium",
    "prepTime": "5 mins",
    "caffeineLevel": "High",
    "tags": ["Trendy", "Summer"]
  },
  {
    "id": 16,
    "name": "Vietnamese Egg Coffee",
    "type": "Coffee",
    "category": "Flavored Coffees",
    "milk": "None",
    "sweetness": "High",
    "temperature": "Hot",
    "base": "Robusta Coffee",
    "flavorNotes": ["Rich", "Custardy"],
    "ingredients": ["1 shot robusta coffee", "1 egg yolk", "2 tbsp condensed milk"],
    "instructions": ["Whisk egg yolk and condensed milk until frothy, pour over hot coffee."],
    "image": "https://images.unsplash.com/photo-1517701559438-c38c2871d33b?auto=format&fit=crop&q=60",
    "difficulty": "Medium",
    "prepTime": "7 mins",
    "caffeineLevel": "High",
    "tags": ["Vietnamese", "Dessert"]
  },
  {
    "id": 17,
    "name": "Affogato",
    "type": "Coffee",
    "category": "Dessert Coffees",
    "milk": "Dairy",
    "sweetness": "High",
    "temperature": "Hot & Cold",
    "base": "Espresso",
    "flavorNotes": ["Creamy", "Bold"],
    "ingredients": ["1 scoop vanilla ice cream", "1 shot hot espresso"],
    "instructions": ["Pour hot espresso over ice cream."],
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=60",
    "difficulty": "Easy",
    "prepTime": "2 mins",
    "caffeineLevel": "High",
    "tags": ["Italian", "Dessert"]
  },
  {
    "id": 18,
    "name": "Irish Coffee",
    "type": "Coffee",
    "category": "Alcoholic Coffees",
    "milk": "Cream",
    "sweetness": "Medium",
    "temperature": "Hot",
    "base": "Brewed Coffee",
    "flavorNotes": ["Warm", "Whiskey-infused"],
    "ingredients": ["1 cup hot coffee", "1 shot Irish whiskey", "1 tsp brown sugar", "Whipped cream"],
    "instructions": ["Stir whiskey and sugar into coffee, top with whipped cream."],
    "image": "https://images.unsplash.com/photo-1517256064527-09c73fc730e0?auto=format&fit=crop&q=60",
    "difficulty": "Medium",
    "prepTime": "5 mins",
    "caffeineLevel": "Medium",
    "tags": ["Classic", "Evening"]
  },
  {
    "id": 19,
    "name": "Cortado",
    "type": "Coffee",
    "category": "Milk Coffees",
    "milk": "Dairy",
    "sweetness": "Low",
    "temperature": "Hot",
    "base": "Espresso",
    "flavorNotes": ["Balanced", "Smooth"],
    "ingredients": ["1 shot espresso", "1 shot steamed milk"],
    "instructions": ["Combine equal parts espresso and steamed milk."],
    "image": "https://images.unsplash.com/photo-1593443320739-77f7493963da?auto=format&fit=crop&q=60",
    "difficulty": "Easy",
    "prepTime": "4 mins",
    "caffeineLevel": "High",
    "tags": ["Spanish", "Minimalist"]
  },
  {
    "id": 20,
    "name": "Dalgona Coffee",
    "type": "Coffee",
    "category": "Whipped Coffees",
    "milk": "Dairy",
    "sweetness": "High",
    "temperature": "Cold",
    "base": "Instant Coffee",
    "flavorNotes": ["Sweet", "Frothy"],
    "ingredients": ["2 tbsp instant coffee", "2 tbsp sugar", "2 tbsp hot water", "1 cup milk"],
    "instructions": ["Whisk coffee, sugar, and water until frothy, spoon over milk."],
    "image": "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=60",
    "difficulty": "Medium",
    "prepTime": "10 mins",
    "caffeineLevel": "Medium",
    "tags": ["Viral", "Korean"]
  },
  {
    "id": 21,
    "name": "Turkish Coffee",
    "type": "Coffee",
    "category": "Traditional Coffees",
    "milk": "None",
    "sweetness": "Variable",
    "temperature": "Hot",
    "base": "Finely Ground Coffee",
    "flavorNotes": ["Strong", "Spiced"],
    "ingredients": ["1 tbsp finely ground coffee", "1 cup water", "Sugar (optional)", "Cardamom (optional)"],
    "instructions": ["Combine ingredients in a cezve, heat until frothy, pour into cup."],
    "image": "https://images.unsplash.com/photo-1517701559438-c38c2871d33b?auto=format&fit=crop&q=60",
    "difficulty": "Medium",
    "prepTime": "7 mins",
    "caffeineLevel": "High",
    "tags": ["Middle Eastern", "Traditional"]
  }
];


// --- STATE MANAGEMENT ---
let state = {
    recipes: initialRecipesData, 
    filteredRecipes: [],
    preferences: {},
    searchTerm: "",
    sortOption: "default",
    userFavorites: new Set(),
    unsubscribeFavorites: null,
    currentPage: "home",
};

// --- DOM ELEMENTS ---
const pagesContainer = document.getElementById('pages-container');
const initialView = document.getElementById('initial-view');
const authContainer = document.getElementById('auth-container');
const recipesContainer = document.getElementById('recipesContainer');
const favoritesContainer = document.getElementById('favoritesContainer');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const recipeDetailModal = document.getElementById('recipe-detail-modal');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const filterSelectorsContainer = document.getElementById('filterSelectors');
const resetFiltersBtn = document.getElementById('resetFilters');
const mobileFiltersToggle = document.getElementById('mobile-filters-toggle');
const filtersSidebar = document.getElementById('filters-sidebar');
const navLinks = document.querySelectorAll('.nav-link');

// --- HELPER FUNCTIONS ---
const getUniqueValues = (recipes, key) => { const allValues = new Set(recipes.flatMap(recipe => recipe[key]).filter(Boolean)); return ["Any", ...Array.from(allValues).sort()]; };
const parsePrepTime = (timeString) => { if (!timeString) return Infinity; const minsMatch = timeString.match(/^(\d+)\s*mins?/); if (minsMatch) return parseInt(minsMatch[1], 10); const hrsMatch = timeString.match(/^(\d+)-?\d*\s*hrs?/); if (hrsMatch) return parseInt(hrsMatch[1], 10) * 60; return Infinity; };
const mapDifficultyToValue = (difficulty) => ({ "Easy": 1, "Medium": 2, "Hard": 3 }[difficulty] || 4);

// --- MODAL & UI LOGIC ---
function openModal(modal) { modal.classList.remove('hidden'); }
function closeModal(modal) { modal.classList.add('hidden'); const errorElement = modal.querySelector('.modal-error'); if (errorElement) errorElement.textContent = ''; }
function setupModalTriggers() {
    document.getElementById('prompt-login-btn').addEventListener('click', () => openModal(loginModal));
    document.getElementById('prompt-register-btn').addEventListener('click', () => openModal(registerModal));
    loginModal.querySelector('#login-close').addEventListener('click', () => closeModal(loginModal));
    registerModal.querySelector('#register-close').addEventListener('click', () => closeModal(registerModal));
    loginModal.querySelector('#login-switch-to-register').addEventListener('click', (e) => { e.preventDefault(); closeModal(loginModal); openModal(registerModal); });
    registerModal.querySelector('#register-switch-to-login').addEventListener('click', (e) => { e.preventDefault(); closeModal(registerModal); openModal(loginModal); });
}

function updateUIForAuthState(user) {
    if (user) {
        initialView.style.display = 'none';
        pagesContainer.classList.remove('hidden');
        authContainer.innerHTML = `<span class="user-text">${user.email.split('@')[0]}</span><button id="logout-btn" class="auth-button logout-button">Logout</button>`;
        document.getElementById('logout-btn').addEventListener('click', handleLogout);
        listenToFavorites(user.uid);
        showPage(state.currentPage); 
    } else {
        initialView.style.display = 'flex';
        pagesContainer.classList.add('hidden');
        authContainer.innerHTML = `<button id="login-nav-btn" class="auth-button login-button">Login</button><button id="register-nav-btn" class="auth-button register-button">Register</button>`;
        document.getElementById('login-nav-btn').addEventListener('click', () => openModal(loginModal));
        document.getElementById('register-nav-btn').addEventListener('click', () => openModal(registerModal));
        if (state.unsubscribeFavorites) { state.unsubscribeFavorites(); state.unsubscribeFavorites = null; }
        state.userFavorites.clear();
        showPage('home'); // Reset to home page on logout
    }
    lucide.createIcons();
}

// --- NAVIGATION / PAGE SWITCHING ---
function showPage(pageId) {
    state.currentPage = pageId;
    document.querySelectorAll('.page-content').forEach(page => page.classList.remove('active'));
    document.getElementById(`page-${pageId}`).classList.add('active');
    navLinks.forEach(link => link.classList.toggle('active', link.dataset.page === pageId));

    if (pageId === 'favorites') {
        renderFavoritesPage();
    } else if (pageId === 'home') {
        applyFiltersAndRender();
    }
}

function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = e.target.dataset.page;
            if(auth.currentUser){
                showPage(pageId);
            } else if (pageId === 'about' || pageId === 'home') {
                // Allow viewing about/home page even when logged out
                showPage(pageId);
            }
             else {
                openModal(loginModal); // Prompt login for favorites
            }
        });
    });
}

// --- FIREBASE AUTH HANDLERS ---
onAuthStateChanged(auth, user => { updateUIForAuthState(user); });
document.getElementById('login-form').addEventListener('submit', async (e) => { e.preventDefault(); const email = e.target.elements['login-email'].value; const password = e.target.elements['login-password'].value; const errorEl = document.getElementById('login-error'); errorEl.textContent = ''; try { await signInWithEmailAndPassword(auth, email, password); closeModal(loginModal); } catch (error) { errorEl.textContent = "Failed to login. Please check credentials."; } });
document.getElementById('register-form').addEventListener('submit', async (e) => { e.preventDefault(); const email = e.target.elements['register-email'].value; const password = e.target.elements['register-password'].value; const errorEl = document.getElementById('register-error'); errorEl.textContent = ''; try { await createUserWithEmailAndPassword(auth, email, password); closeModal(registerModal); } catch (error) { errorEl.textContent = "Failed to register. Password must be 6+ chars."; } });
async function handleLogout() { try { await signOut(auth); } catch (error) { console.error("Logout Error:", error.message); } }

// --- FIRESTORE FAVORITES LOGIC ---
function listenToFavorites(userId) {
    const userDocRef = doc(db, "users", userId);
    state.unsubscribeFavorites = onSnapshot(userDocRef, (docSnap) => {
        state.userFavorites = new Set(docSnap.exists() && docSnap.data().favorites ? docSnap.data().favorites : []);
        updateFavoriteIcons();
        if (state.currentPage === 'favorites') { renderFavoritesPage(); }
    });
}
async function toggleFavorite(recipeId) {
    const user = auth.currentUser;
    if (!user) { openModal(loginModal); return; }
    const newFavorites = new Set(state.userFavorites);
    newFavorites.has(recipeId) ? newFavorites.delete(recipeId) : newFavorites.add(recipeId);
    try { await setDoc(doc(db, "users", user.uid), { favorites: Array.from(newFavorites) }, { merge: true }); } 
    catch (error) { console.error("Error updating favorites: ", error); }
}

// --- FILTERING & RENDERING LOGIC ---
function createFilterSelectors() { const preferenceOptions = { type: ["All", "Coffee", "Tea", "Other"], category: getUniqueValues(state.recipes, 'category'), milk: getUniqueValues(state.recipes, 'milk'), sweetness: getUniqueValues(state.recipes, 'sweetness'), temperature: getUniqueValues(state.recipes, 'temperature'), difficulty: ["Any", "Easy", "Medium", "Hard"], caffeineLevel: getUniqueValues(state.recipes, 'caffeineLevel'), }; filterSelectorsContainer.innerHTML = Object.entries(preferenceOptions).map(([key, options]) => ` <div class="filter-selector"> <label class="filter-label">${key.charAt(0).toUpperCase() + key.slice(1)}</label> <div class="select-container"> <select data-filter-key="${key}" class="filter-select"> ${options.map(opt => `<option value="${opt.toLowerCase()}">${opt}</option>`).join('')} </select> <i data-lucide="chevron-down" class="select-arrow h-5 w-5"></i> </div> </div> `).join(''); document.querySelectorAll('.filter-select').forEach(select => { select.addEventListener('change', (event) => { const key = event.target.dataset.filterKey; const value = event.target.value; if (value === 'all' || value === 'any') { delete state.preferences[key]; } else { state.preferences[key] = value; } applyFiltersAndRender(); }); }); lucide.createIcons(); }
function applyFiltersAndRender() { let recipesToFilter = [...state.recipes]; if (state.searchTerm) { recipesToFilter = recipesToFilter.filter(r => r.name.toLowerCase().includes(state.searchTerm) || (r.ingredients && r.ingredients.some(i => i.toLowerCase().includes(state.searchTerm)))); } Object.entries(state.preferences).forEach(([key, value]) => { if (value) { recipesToFilter = recipesToFilter.filter(r => String(r[key]).toLowerCase() === value); } }); switch (state.sortOption) { case "name-asc": recipesToFilter.sort((a, b) => a.name.localeCompare(b.name)); break; case "name-desc": recipesToFilter.sort((a, b) => b.name.localeCompare(a.name)); break; case "prepTime-asc": recipesToFilter.sort((a, b) => parsePrepTime(a.prepTime) - parsePrepTime(b.prepTime)); break; case "prepTime-desc": recipesToFilter.sort((a, b) => parsePrepTime(b.prepTime) - parsePrepTime(a.prepTime)); break; case "difficulty-asc": recipesToFilter.sort((a, b) => mapDifficultyToValue(a.difficulty) - mapDifficultyToValue(b.difficulty)); break; case "difficulty-desc": recipesToFilter.sort((a, b) => mapDifficultyToValue(b.difficulty) - mapDifficultyToValue(a.difficulty)); break; } state.filteredRecipes = recipesToFilter; renderRecipes(); }

function renderRecipes() {
    recipesContainer.innerHTML = '';
    const groupedRecipes = state.filteredRecipes.reduce((acc, recipe) => { const type = recipe.type || 'Other'; if (!acc[type]) acc[type] = []; acc[type].push(recipe); return acc; }, {});
    const categoryOrder = ['Coffee', 'Tea', 'Other'];
    categoryOrder.forEach(categoryName => {
        if (groupedRecipes[categoryName] && groupedRecipes[categoryName].length > 0) {
            const categoryHtml = ` <div class="drink-category"> <h2 class="drink-category-title">${categoryName}</h2> <div class="horizontal-scroll-container"> ${groupedRecipes[categoryName].map(createRecipeCardHTML).join('')} </div> </div>`;
            recipesContainer.insertAdjacentHTML('beforeend', categoryHtml);
        }
    });
    if (state.filteredRecipes.length === 0) { recipesContainer.innerHTML = `<div class="no-results"><i data-lucide="search-x" class="no-results-icon"></i><h3>No Drinks Found</h3><p>Try adjusting filters.</p></div>`; }
    lucide.createIcons();
}

function renderFavoritesPage() {
    const favoriteRecipes = state.recipes.filter(recipe => state.userFavorites.has(recipe.id));
    favoritesContainer.innerHTML = '';
    if (favoriteRecipes.length === 0) {
        favoritesContainer.innerHTML = `<div class="no-results"><i data-lucide="heart-off" class="no-results-icon"></i><h3>No Favorites Yet</h3><p>Click the heart on a drink to save it here.</p></div>`;
    } else {
        favoritesContainer.innerHTML = favoriteRecipes.map(createRecipeCardHTML).join('');
    }
    lucide.createIcons();
}

function createRecipeCardHTML(recipe) { const isFavorite = state.userFavorites.has(recipe.id); return ` <div class="recipe-card animate-fadeIn" data-recipe-id="${recipe.id}"> <div class="recipe-image-container"> <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" onerror="this.onerror=null;this.src='https://placehold.co/600x400/e0e7ff/4f46e5?text=Image+Not+Found';"> <button class="favorite-button ${isFavorite ? 'active' : ''}" data-recipe-id="${recipe.id}"> <i data-lucide="heart" class="h-5 w-5"></i> </button> </div> <div class="recipe-card-content"> <h3 class="recipe-card-title">${recipe.name}</h3> <p class="recipe-card-category">${recipe.category}</p> </div> </div>`; }
function updateFavoriteIcons() { document.querySelectorAll('.favorite-button').forEach(button => { const recipeId = parseInt(button.dataset.recipeId); button.classList.toggle('active', state.userFavorites.has(recipeId)); }); }
function showRecipeDetail(recipeId) { const recipe = state.recipes.find(r => r.id === recipeId); if (!recipe) return; const detailContainer = recipeDetailModal.querySelector('.recipe-detail-container'); detailContainer.innerHTML = ` <button id="backButton" class="back-button"><i data-lucide="arrow-left" class="back-icon h-5 w-5"></i> Back</button> <div class="recipe-detail animate-fadeIn"> <div class="recipe-header"> <h2 class="recipe-name">${recipe.name}</h2> </div> <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image-detail"> <div class="recipe-detail-grid"> <div> <h3 class="recipe-section-title">Details</h3> <ul class="recipe-details-list"> <li><strong>Difficulty:</strong> ${recipe.difficulty}</li> <li><strong>Prep Time:</strong> ${recipe.prepTime}</li> <li><strong>Caffeine:</strong> ${recipe.caffeineLevel}</li> ${recipe.milk && recipe.milk !== "None" ? `<li><strong>Milk:</strong> ${recipe.milk}</li>` : ''} <li><strong>Sweetness:</strong> ${recipe.sweetness}</li> <li><strong>Temperature:</strong> ${recipe.temperature}</li> </ul> </div> <div> <h3 class="recipe-section-title">Ingredients</h3> <ul class="ingredients-list">${(recipe.ingredients || []).map(ing => `<li>${ing}</li>`).join('')}</ul> </div> </div> <div> <h3 class="recipe-section-title">Instructions</h3> <ol class="instructions-list">${(recipe.instructions || []).map(step => `<li>${step}</li>`).join('')}</ol> </div> </div>`; recipeDetailModal.classList.remove('hidden'); lucide.createIcons(); detailContainer.querySelector('#backButton').addEventListener('click', () => { recipeDetailModal.classList.add('hidden'); }); }

// --- EVENT LISTENERS ---
function attachEventListeners() {
    searchInput.addEventListener('input', (e) => { state.searchTerm = e.target.value.toLowerCase(); applyFiltersAndRender(); });
    sortSelect.addEventListener('change', (e) => { state.sortOption = e.target.value; applyFiltersAndRender(); });
    resetFiltersBtn.addEventListener('click', () => { state.preferences = {}; state.searchTerm = ""; state.sortOption = "default"; searchInput.value = ""; sortSelect.value = "default"; document.querySelectorAll('.filter-select').forEach(s => s.selectedIndex = 0); applyFiltersAndRender(); });
    mobileFiltersToggle.addEventListener('click', () => { filtersSidebar.classList.toggle('active'); mobileFiltersToggle.querySelector('span').textContent = filtersSidebar.classList.contains('active') ? 'Hide Filters' : 'Show Filters'; });
}
function attachCardEventListeners() {
    const mainContentArea = document.getElementById('pages-container');
    mainContentArea.addEventListener('click', (e) => {
        const card = e.target.closest('.recipe-card');
        if (!card) return;
        const recipeId = parseInt(card.dataset.recipeId);
        if (e.target.closest('.favorite-button')) {
            e.stopPropagation();
            toggleFavorite(recipeId);
        } else {
            showRecipeDetail(recipeId);
        }
    });
}

// --- INITIALIZATION ---
function init() {
    lucide.createIcons();
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    setupModalTriggers();
    setupNavigation();
    createFilterSelectors();
    attachEventListeners();
    attachCardEventListeners();
}

init();
