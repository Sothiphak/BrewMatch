// The recipe data is moved back into this file
const initialRecipesData = [
  { id: 1, name: "Classic Latte", type: "Coffee", category: "Milk Coffees", milk: "Dairy", sweetness: "Medium", temperature: "Hot", base: "Espresso", flavorNotes: ["Classic", "Creamy"], ingredients: ["1 shot espresso", "1 cup steamed milk"], instructions: ["Brew espresso.", "Pour steamed milk over espresso."], image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=60", difficulty: "Medium", prepTime: "5 mins", caffeineLevel: "High", tags: ["Traditional", "Comfort"] },
  { id: 2, name: "Green Tea", type: "Tea", category: "Pure Teas", milk: "None", sweetness: "None", temperature: "Hot", base: "Green Tea", flavorNotes: ["Grassy", "Refreshing"], ingredients: ["1 tsp green tea leaves", "1 cup hot water"], instructions: ["Steep tea leaves for 2-3 minutes."], image: "https://images.unsplash.com/photo-1627435601361-ec25f24754b2?auto=format&fit=crop&q=60", difficulty: "Easy", prepTime: "3 mins", caffeineLevel: "Medium", tags: ["Healthy", "Simple"] },
  { id: 3, name: "Iced Mocha", type: "Coffee", category: "Flavored Coffees", milk: "Dairy", sweetness: "High", temperature: "Cold", base: "Espresso", flavorNotes: ["Chocolate", "Rich"], ingredients: ["2 shots espresso", "1 cup cold milk", "Chocolate syrup", "Ice"], instructions: ["Combine ingredients and stir."], image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=60", difficulty: "Easy", prepTime: "7 mins", caffeineLevel: "High", tags: ["Indulgent", "Dessert Drink"] },
  { id: 4, name: "Lemonade", type: "Other", category: "Fruit Drinks", milk: "None", sweetness: "Medium", temperature: "Cold", base: "Fruit", flavorNotes: ["Tart", "Sweet", "Citrusy"], ingredients: ["1 cup lemon juice", "1 cup sugar", "4 cups water"], instructions: ["Mix and serve over ice."], image: "https://images.unsplash.com/photo-1575596511277-5722d413dbf5?auto=format&fit=crop&q=60", difficulty: "Easy", prepTime: "10 mins", caffeineLevel: "None", tags: ["Refreshing", "Summer"] },
  { id: 5, name: "Cappuccino", type: "Coffee", category: "Milk Coffees", milk: "Dairy", sweetness: "Low", temperature: "Hot", base: "Espresso", flavorNotes: ["Balanced", "Foamy"], ingredients: ["1 shot espresso", "1/3 cup steamed milk", "1/3 cup milk foam"], instructions: ["Layer espresso, steamed milk, and foam."], image: "https://images.unsplash.com/photo-1517256064527-09c73fc730e0?auto=format&fit=crop&q=60", difficulty: "Medium", prepTime: "6 mins", caffeineLevel: "High", tags: ["Italian", "Classic"] },
  { id: 6, name: "Chamomile Tea", type: "Tea", category: "Herbal Teas", milk: "None", sweetness: "None", temperature: "Hot", base: "Herbal Tea", flavorNotes: ["Floral", "Calming"], ingredients: ["1-2 tsp chamomile flowers", "1 cup boiling water"], instructions: ["Steep for 5-7 minutes."], image: "https://images.unsplash.com/photo-1594755380410-9a9745a91700?auto=format&fit=crop&q=60", difficulty: "Easy", prepTime: "7 mins", caffeineLevel: "None", tags: ["Relaxing", "Bedtime"] },
  { id: 7, name: "Americano", type: "Coffee", category: "Black Coffees", milk: "None", sweetness: "None", temperature: "Hot", base: "Espresso", flavorNotes: ["Bold", "Robust"], ingredients: ["1 shot espresso", "3/4 cup hot water"], instructions: ["Pour hot water over espresso."], image: "https://i.pinimg.com/736x/cb/48/db/cb48db04009801523739569e0f33cfc3.jpg", difficulty: "Easy", prepTime: "3 mins", caffeineLevel: "High", tags: ["Simple", "Classic"] },
  { id: 8, name: "Chai Latte", type: "Tea", category: "Milk Teas", milk: "Dairy", sweetness: "Medium", temperature: "Hot", base: "Black Tea", flavorNotes: ["Spiced", "Aromatic"], ingredients: ["1 chai tea bag", "1/2 cup water", "1/2 cup milk"], instructions: ["Steep tea, add warm milk."], image: "https://images.unsplash.com/photo-1578899805437-4cd14030d3e0?auto=format&fit=crop&q=60", difficulty: "Easy", prepTime: "10 mins", caffeineLevel: "Medium", tags: ["Comfort", "Spicy"] },
  { id: 9, name: "Strawberry Smoothie", type: "Other", category: "Smoothies", milk: "Dairy", sweetness: "Medium", temperature: "Cold", base: "Fruit", flavorNotes: ["Fruity", "Sweet"], ingredients: ["1 cup frozen strawberries", "1/2 cup milk", "1/2 banana"], instructions: ["Blend until smooth."], image: "https://images.unsplash.com/photo-1600718374662-0815315c1657?auto=format&fit=crop&q=60", difficulty: "Easy", prepTime: "5 mins", caffeineLevel: "None", tags: ["Healthy", "Breakfast"] },
  { id: 10, name: "Matcha Latte", type: "Tea", category: "Milk Teas", milk: "Oat", sweetness: "Medium", temperature: "Hot", base: "Matcha", flavorNotes: ["Earthy", "Smooth"], ingredients: ["1 tsp matcha powder", "2 tbsp hot water", "1 cup steamed milk"], instructions: ["Whisk matcha and water, then add milk."], image: "https://images.unsplash.com/photo-1558160074-26c1174ffd39?auto=format&fit=crop&q=60", difficulty: "Medium", prepTime: "7 mins", caffeineLevel: "Medium", tags: ["Trendy", "Earthy"] },
  { id: 11, name: "Cold Brew", type: "Coffee", category: "Black Coffees", milk: "None", sweetness: "None", temperature: "Cold", base: "Coffee Grounds", flavorNotes: ["Smooth", "Low Acidity"], ingredients: ["1 cup coarse coffee", "4 cups cold water"], instructions: ["Steep for 12-18 hours and strain."], image: "https://images.unsplash.com/photo-1517701559438-c38c2871d33b?auto=format&fit=crop&q=60", difficulty: "Easy", prepTime: "12-18 hrs", caffeineLevel: "High (concentrate)", tags: ["Summer", "Make Ahead"] },
  { id: 12, name: "Flat White", type: "Coffee", category: "Milk Coffees", milk: "Dairy", sweetness: "Low", temperature: "Hot", base: "Espresso", flavorNotes: ["Smooth", "Velvety"], ingredients: ["1 shot espresso", "Steamed milk"], instructions: ["Pour steamed milk over espresso."], image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=60", difficulty: "Medium", prepTime: "5 mins", caffeineLevel: "High", tags: ["Australian", "Creamy"] },
  { id: 13, name: "Café au Lait", type: "Coffee", category: "Milk Coffees", milk: "Dairy", sweetness: "Medium", temperature: "Hot", "base": "Brewed Coffee", "flavorNotes": ["Mild", "Balanced"], "ingredients": ["1 cup brewed coffee", "1 cup steamed milk"], "instructions": ["Combine equal parts coffee and steamed milk."], "image": "https://images.unsplash.com/photo-1517256064527-09c73fc730e0?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "5 mins", "caffeineLevel": "Medium", "tags": ["French", "Breakfast"] },
  { id: 14, name: "Espresso Tonic", type: "Coffee", category: "Flavored Coffees", milk: "None", sweetness: "Low", temperature: "Cold", base: "Espresso", flavorNotes: ["Citrusy", "Effervescent"], ingredients: ["1 shot espresso", "Tonic water", "Ice"], instructions: ["Pour tonic water over ice, add espresso shot."], image: "https://images.unsplash.com/photo-1593443320739-77f7493963da?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "3 mins", "caffeineLevel": "High", "tags": ["Refreshing", "Modern"] },
  { id: 15, name: "Cloud Coffee", type: "Coffee", category: "Flavored Coffees", milk: "Dairy", sweetness: "Medium", temperature: "Cold", base: "Espresso", flavorNotes: ["Frothy", "Tropical"], ingredients: ["1 shot espresso", "Coconut water", "Cream", "Ice"], instructions: ["Froth espresso with cream, pour over ice and coconut water."], image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "5 mins", "caffeineLevel": "High", "tags": ["Trendy", "Summer"] },
  { id: 16, name: "Vietnamese Egg Coffee", type: "Coffee", category: "Flavored Coffees", milk: "None", sweetness: "High", temperature: "Hot", base: "Robusta Coffee", flavorNotes: ["Rich", "Custardy"], ingredients: ["1 shot robusta coffee", "1 egg yolk", "2 tbsp condensed milk"], instructions: ["Whisk egg yolk and condensed milk until frothy, pour over hot coffee."], image: "https://images.unsplash.com/photo-1517701559438-c38c2871d33b?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "7 mins", "caffeineLevel": "High", tags: ["Vietnamese", "Dessert"] },
  { id: 17, "name": "Affogato", "type": "Coffee", "category": "Dessert Coffees", "milk": "Dairy", "sweetness": "High", "temperature": "Hot & Cold", "base": "Espresso", "flavorNotes": ["Creamy", "Bold"], "ingredients": ["1 scoop vanilla ice cream", "1 shot hot espresso"], "instructions": ["Pour hot espresso over ice cream."], "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "2 mins", "caffeineLevel": "High", "tags": ["Italian", "Dessert"] },
  { id: 18, "name": "Irish Coffee", "type": "Coffee", "category": "Alcoholic Coffees", "milk": "Cream", "sweetness": "Medium", "temperature": "Hot", "base": "Brewed Coffee", "flavorNotes": ["Warm", "Whiskey-infused"], "ingredients": ["1 cup hot coffee", "1 shot Irish whiskey", "1 tsp brown sugar", "Whipped cream"], "instructions": ["Stir whiskey and sugar into coffee, top with whipped cream."], "image": "https://images.unsplash.com/photo-1517256064527-09c73fc730e0?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "5 mins", "caffeineLevel": "Medium", "tags": ["Classic", "Evening"] },
  { id: 19, "name": "Cortado", "type": "Coffee", "category": "Milk Coffees", "milk": "Dairy", "sweetness": "Low", "temperature": "Hot", "base": "Espresso", "flavorNotes": ["Balanced", "Smooth"], "ingredients": ["1 shot espresso", "1 shot steamed milk"], "instructions": ["Combine equal parts espresso and steamed milk."], "image": "https://images.unsplash.com/photo-1593443320739-77f7493963da?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "4 mins", "caffeineLevel": "High", "tags": ["Spanish", "Minimalist"] },
  { id: 20, "name": "Dalgona Coffee", "type": "Coffee", "category": "Whipped Coffees", "milk": "Dairy", "sweetness": "High", "temperature": "Cold", "base": "Instant Coffee", "flavorNotes": ["Sweet", "Frothy"], "ingredients": ["2 tbsp instant coffee", "2 tbsp sugar", "2 tbsp hot water", "1 cup milk"], "instructions": ["Whisk coffee, sugar, and water until frothy, spoon over milk."], "image": "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "10 mins", "caffeineLevel": "Medium", "tags": ["Viral", "Korean"] },
  { id: 21, "name": "Turkish Coffee", "type": "Coffee", "category": "Traditional Coffees", "milk": "None", "sweetness": "Variable", "temperature": "Hot", "base": "Finely Ground Coffee", "flavorNotes": ["Strong", "Spiced"], "ingredients": ["1 tbsp finely ground coffee", "1 cup water", "Sugar (optional)", "Cardamom (optional)"], "instructions": ["Combine ingredients in a cezve, heat until frothy, pour into cup."], "image": "https://images.unsplash.com/photo-1517701559438-c38c2871d33b?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "7 mins", "caffeineLevel": "High", "tags": ["Middle Eastern", "Traditional"] },
  { id: 22, "name": "Espresso Macchiato", "type": "Coffee", "category": "Milk Coffees", "milk": "Dairy", "sweetness": "None", "temperature": "Hot", "base": "Espresso", "flavorNotes": ["Bold", "Hint of Milk"], "ingredients": ["1 shot espresso", "Dollop of frothed milk"], "instructions": ["Brew espresso, top with a small amount of frothed milk."], "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "3 mins", "caffeineLevel": "High", "tags": ["Italian", "Strong"] },
  { id: 23, "name": "Herbal Infusion", "type": "Tea", "category": "Herbal Teas", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "Herbal Tea", "flavorNotes": ["Soothing", "Aromatic"], "ingredients": ["1 herbal tea bag", "1 cup hot water"], "instructions": ["Steep tea bag for 5 minutes."], "image": "https://images.unsplash.com/photo-1627435601361-ec25f24754b2?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "5 mins", "caffeineLevel": "None", "tags": ["Relaxing", "Wellness"] },
  { id: 24, "name": "Sparkling Water with Lime", "type": "Other", "category": "Water", "milk": "None", "sweetness": "None", "temperature": "Cold", "base": "Water", "flavorNotes": ["Refreshing", "Citrusy"], "ingredients": ["1 cup sparkling water", "1/4 lime, squeezed"], "instructions": ["Combine and serve with ice."], "image": "https://images.unsplash.com/photo-1546793617-649069d3e8e1?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "2 mins", "caffeineLevel": "None", "tags": ["Simple", "Hydrating"] },
  { id: 25, "name": "Peppermint Tea", "type": "Tea", "category": "Herbal Teas", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "Herbal Tea", "flavorNotes": ["Minty", "Cooling"], "ingredients": ["1 peppermint tea bag", "1 cup boiling water"], "instructions": ["Steep for 3-5 minutes."], "image": "https://images.unsplash.com/photo-1594755380410-9a9745a91700?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "5 mins", "caffeineLevel": "None", "tags": ["Digestive", "Soothing"] },
  { id: 26, "name": "Hot Chocolate", "type": "Other", "category": "Hot Drinks", "milk": "Dairy", "sweetness": "High", "temperature": "Hot", "base": "Cocoa", "flavorNotes": ["Rich", "Sweet", "Chocolatey"], "ingredients": ["2 tbsp cocoa powder", "2 tbsp sugar", "1 cup milk", "Pinch of salt"], "instructions": ["Combine cocoa, sugar, salt in a mug. Heat milk and whisk into mixture."], "image": "https://images.unsplash.com/photo-1542962452-98448f10738a?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "5 mins", "caffeineLevel": "Low", "tags": ["Comfort", "Dessert"] },
  { id: 27, "name": "Ginger Tea", "type": "Tea", "category": "Herbal Teas", "milk": "None", "sweetness": "Low", "temperature": "Hot", "base": "Ginger", "flavorNotes": ["Spicy", "Warming"], "ingredients": ["1 inch fresh ginger, sliced", "1 cup hot water", "Honey (optional)"], "instructions": ["Steep ginger in hot water for 5-10 minutes. Add honey if desired."], "image": "https://images.unsplash.com/photo-1627435601361-ec25f24754b2?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "8 mins", "caffeineLevel": "None", "tags": ["Wellness", "Spicy"] },
  { id: 28, "name": "Mango Lassi", "type": "Other", "category": "Smoothies", "milk": "Dairy", "sweetness": "High", "temperature": "Cold", "base": "Fruit", "flavorNotes": ["Sweet", "Creamy", "Fruity"], "ingredients": ["1 cup chopped mango", "1/2 cup yogurt", "1/4 cup milk", "1 tbsp sugar"], "instructions": ["Blend all ingredients until smooth."], "image": "https://images.unsplash.com/photo-1589139268615-5421c6b3e3e2?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "5 mins", "caffeineLevel": "None", "tags": ["Indian", "Refreshing"] },
  { id: 29, "name": "Iced Tea", "type": "Tea", "category": "Pure Teas", "milk": "None", "sweetness": "Variable", "temperature": "Cold", "base": "Black Tea", "flavorNotes": ["Refreshing", "Simple"], "ingredients": ["1 black tea bag", "1 cup hot water", "Ice", "Lemon (optional)"], "instructions": ["Steep tea bag in hot water. Let cool, then pour over ice. Add lemon."], "image": "https://images.unsplash.com/photo-1574742614743-157947f6f1c4?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "15 mins", "caffeineLevel": "Medium", "tags": ["Summer", "Classic"] },
  { id: 30, "name": "Cucumber Mint Water", "type": "Other", "category": "Water", "milk": "None", "sweetness": "None", "temperature": "Cold", "base": "Water", "flavorNotes": ["Cooling", "Fresh"], "ingredients": ["1/2 cucumber, sliced", "5-6 mint leaves", "4 cups water"], "instructions": ["Combine all ingredients in a pitcher and chill for 1 hour."], "image": "https://images.unsplash.com/photo-1578330768997-6a4a1a0f9a2b?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "60 mins", "caffeineLevel": "None", "tags": ["Detox", "Hydrating"] },
  { id: 31, "name": "Golden Milk (Turmeric Latte)", "type": "Other", "category": "Hot Drinks", "milk": "Almond", "sweetness": "Medium", "temperature": "Hot", "base": "Milk", "flavorNotes": ["Spiced", "Earthy"], "ingredients": ["1 cup almond milk", "1 tsp turmeric", "1/2 tsp ginger powder", "Pinch black pepper", "1 tsp honey"], "instructions": ["Heat milk and spices, whisk in honey."], "image": "https://images.unsplash.com/photo-1594755380410-9a9745a91700?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "5 mins", "caffeineLevel": "None", "tags": ["Wellness", "Anti-inflammatory"] },
  { id: 32, "name": "Sparkling Cranberry Juice", "type": "Other", "category": "Fruit Drinks", "milk": "None", "sweetness": "Medium", "temperature": "Cold", "base": "Fruit", "flavorNotes": ["Tart", "Bubbly"], "ingredients": ["1/2 cup cranberry juice", "1/2 cup sparkling water", "Ice", "Lime wedge"], "instructions": ["Combine juice and sparkling water, serve over ice with lime."], "image": "https://images.unsplash.com/photo-1517256064527-09c73fc730e0?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "2 mins", "caffeineLevel": "None", "tags": ["Festive", "Refreshing"] },
  { id: 33, "name": "Spiced Apple Cider", "type": "Other", "category": "Hot Drinks", "milk": "None", "sweetness": "High", "temperature": "Hot", "base": "Fruit", "flavorNotes": ["Warm", "Spiced"], "ingredients": ["1 cup apple cider", "1 cinnamon stick", "2 cloves"], "instructions": ["Simmer cider with spices for 10 minutes."], "image": "https://images.unsplash.com/photo-1578899805437-4cd14030d3e0?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "10 mins", "caffeineLevel": "None", "tags": ["Autumn", "Comfort"] },
  { id: 34, "name": "Horchata", "type": "Other", "category": "Traditional Drinks", "milk": "None", "sweetness": "Medium", "temperature": "Cold", "base": "Rice", "flavorNotes": ["Creamy", "Cinnamony"], "ingredients": ["1 cup white rice", "4 cups water", "1 cinnamon stick", "1/2 cup sugar", "Vanilla extract"], "instructions": ["Soak rice and cinnamon, blend, strain, add sugar and vanilla."], "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "8 hrs", "caffeineLevel": "None", "tags": ["Mexican", "Sweet"] },
  { id: 35, "name": "Agua Fresca de Jamaica (Hibiscus)", "type": "Other", "category": "Fruit Drinks", "milk": "None", "sweetness": "Medium", "temperature": "Cold", "base": "Herbal", "flavorNotes": ["Floral", "Tart"], "ingredients": ["1 cup dried hibiscus flowers", "4 cups water", "1/2 cup sugar"], "instructions": ["Boil hibiscus and water, steep, strain, add sugar."], "image": "https://images.unsplash.com/photo-1575596511277-5722d413dbf5?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "20 mins", "caffeineLevel": "None", "tags": ["Mexican", "Refreshing"] },
  { id: 36, "name": "Red Eye", "type": "Coffee", "category": "Black Coffees", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "Brewed Coffee", "flavorNotes": ["Extra Strong", "Bold"], "ingredients": ["1 cup brewed coffee", "1 shot espresso"], "instructions": ["Pour espresso into brewed coffee."], "image": "https://images.unsplash.com/photo-1517701559438-c38c2871d33b?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "2 mins", "caffeineLevel": "Very High", "tags": ["Strong", "Wake Up"] },
  { id: 37, "name": "Black Tea (Hot)", "type": "Tea", "category": "Pure Teas", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "Black Tea", "flavorNotes": ["Bold", "Malty"], "ingredients": ["1 black tea bag", "1 cup hot water"], "instructions": ["Steep tea bag for 3-5 minutes."], "image": "https://images.unsplash.com/photo-1627435601361-ec25f24754b2?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "3 mins", "caffeineLevel": "High", "tags": ["Classic", "Morning"] },
  { id: 38, "name": "Sparkling Lemon & Ginger", "type": "Other", "category": "Fruit Drinks", "milk": "None", "sweetness": "Low", "temperature": "Cold", "base": "Fruit", "flavorNotes": ["Zingy", "Spicy"], "ingredients": ["1/2 cup lemon juice", "1 inch ginger, sliced", "1 cup sparkling water", "Ice"], "instructions": ["Muddle ginger and lemon juice, top with sparkling water."], "image": "https://images.unsplash.com/photo-1575596511277-5722d413dbf5?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "5 mins", "caffeineLevel": "None", "tags": ["Healthy", "Refreshing"] },
  { id: 39, "name": "White Tea", "type": "Tea", "category": "Pure Teas", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "White Tea", "flavorNotes": ["Delicate", "Floral"], "ingredients": ["1 tsp white tea leaves", "1 cup hot water (80°C)"], "instructions": ["Steep tea leaves for 1-3 minutes."], "image": "https://images.unsplash.com/photo-1627435601361-ec25f24754b2?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "2 mins", "caffeineLevel": "Low", "tags": ["Delicate", "Subtle"] },
  { id: 40, "name": "Espresso Con Panna", "type": "Coffee", "category": "Dessert Coffees", "milk": "Cream", "sweetness": "High", "temperature": "Hot", "base": "Espresso", "flavorNotes": ["Rich", "Sweet"], "ingredients": ["1 shot espresso", "Whipped cream"], "instructions": ["Pour espresso into cup, top with whipped cream."], "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "2 mins", "caffeineLevel": "High", "tags": ["Italian", "Dessert"] },
  { id: 41, "name": "Pu-erh Tea", "type": "Tea", "category": "Fermented Teas", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "Pu-erh Tea", "flavorNotes": ["Earthy", "Deep"], "ingredients": ["1 tsp Pu-erh tea leaves", "1 cup hot water"], "instructions": ["Rinse leaves briefly, then steep for 3-5 minutes."], "image": "https://images.unsplash.com/photo-1627435601361-ec25f24754b2?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "4 mins", "caffeineLevel": "Medium", "tags": ["Aged", "Rich"] },
  { id: 42, "name": "Iced Green Tea Latte", "type": "Tea", "category": "Milk Teas", "milk": "Dairy", "sweetness": "Medium", "temperature": "Cold", "base": "Green Tea", "flavorNotes": ["Grassy", "Creamy"], "ingredients": ["1 tsp matcha powder", "2 tbsp hot water", "1 cup cold milk", "Ice"], "instructions": ["Whisk matcha and hot water, pour over ice, top with cold milk."], "image": "https://images.unsplash.com/photo-1558160074-26c1174ffd39?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "5 mins", "caffeineLevel": "Medium", "tags": ["Refreshing", "Modern"] },
  { id: 43, "name": "Smoothie Bowl (Berry)", "type": "Other", "category": "Smoothies", "milk": "Almond", "sweetness": "Medium", "temperature": "Cold", "base": "Fruit", "flavorNotes": ["Fruity", "Thick"], "ingredients": ["1 cup mixed berries", "1/2 cup almond milk", "1/2 banana", "Toppings (granola, fruit)"], "instructions": ["Blend fruits and milk until thick. Pour into bowl and add toppings."], "image": "https://images.unsplash.com/photo-1600718374662-0815315c1657?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "7 mins", "caffeineLevel": "None", "tags": ["Breakfast", "Healthy"] },
  { id: 44, "name": "Robusta Espresso", "type": "Coffee", "category": "Black Coffees", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "Robusta Espresso", "flavorNotes": ["Strong", "Earthy"], "ingredients": ["1 shot robusta espresso beans"], "instructions": ["Brew a shot of robusta espresso."], "image": "https://i.pinimg.com/736x/cb/48/db/cb48db04009801523739569e0f33cfc3.jpg", "difficulty": "Medium", "prepTime": "1 min", "caffeineLevel": "Very High", "tags": ["Strong", "Pure"] },
  { id: 45, "name": "Oolong Tea", "type": "Tea", "category": "Oolong Teas", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "Oolong Tea", "flavorNotes": ["Floral", "Fruity"], "ingredients": ["1 tsp oolong tea leaves", "1 cup hot water"], "instructions": ["Steep tea leaves for 2-4 minutes."], "image": "https://images.unsplash.com/photo-1627435601361-ec25f24754b2?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "3 mins", "caffeineLevel": "Medium", "tags": ["Complex", "Aromatic"] },
  { id: 46, "name": "Coconut Water", "type": "Other", "category": "Water", "milk": "None", "sweetness": "Low", "temperature": "Cold", "base": "Coconut Water", "flavorNotes": ["Hydrating", "Subtly Sweet"], "ingredients": ["1 can/fresh coconut water", "Ice (optional)"], "instructions": ["Serve chilled or over ice."], "image": "https://images.unsplash.com/photo-1546793617-649069d3e8e1?auto=format&fit=crop&q=60", "difficulty": "Very Easy", "prepTime": "1 min", "caffeineLevel": "None", "tags": ["Electrolyte", "Tropical"] },
  { id: 47, "name": "Caramel Macchiato", "type": "Coffee", "category": "Flavored Coffees", "milk": "Dairy", "sweetness": "High", "temperature": "Hot", "base": "Espresso", "flavorNotes": ["Sweet", "Caramel"], "ingredients": ["1 shot espresso", "1 cup steamed milk", "Vanilla syrup", "Caramel drizzle"], "instructions": ["Layer vanilla syrup, steamed milk, espresso, and caramel."], "image": "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "7 mins", "caffeineLevel": "High", "tags": ["Dessert Drink", "Popular"] },
  { id: 48, "name": "Rooibos Tea", "type": "Tea", "category": "Herbal Teas", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "Rooibos Tea", "flavorNotes": ["Earthy", "Sweet"], "ingredients": ["1 tsp rooibos tea leaves", "1 cup boiling water"], "instructions": ["Steep for 5-7 minutes."], "image": "https://images.unsplash.com/photo-1594755380410-9a9745a91700?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "6 mins", "caffeineLevel": "None", "tags": ["Caffeine-Free", "African"] },
  { id: 49, "name": "Iced Peach Tea", "type": "Tea", "category": "Flavored Teas", "milk": "None", "sweetness": "Medium", "temperature": "Cold", "base": "Black Tea", "flavorNotes": ["Fruity", "Sweet"], "ingredients": ["1 black tea bag", "1 cup hot water", "Peach syrup", "Ice"], "instructions": ["Steep tea, cool, add peach syrup and ice."], "image": "https://images.unsplash.com/photo-1574742614743-157947f6f1c4?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "10 mins", "caffeineLevel": "Medium", "tags": ["Summer", "Fruity"] },
  { id: 50, "name": "Mocha Frappuccino", "type": "Coffee", "category": "Blended Coffees", "milk": "Dairy", "sweetness": "High", "temperature": "Cold", "base": "Coffee", "flavorNotes": ["Chocolate", "Blended"], "ingredients": ["1 cup cold coffee", "1/2 cup milk", "Chocolate syrup", "Ice", "Whipped cream"], "instructions": ["Blend coffee, milk, chocolate syrup, and ice until smooth. Top with whipped cream."], "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "5 mins", "caffeineLevel": "High", "tags": ["Dessert Drink", "Blended"] },
  { id: 51, "name": "Earl Grey Tea", "type": "Tea", "category": "Flavored Teas", "milk": "Optional", "sweetness": "Optional", "temperature": "Hot", "base": "Black Tea", "flavorNotes": ["Citrusy", "Floral"], "ingredients": ["1 Earl Grey tea bag", "1 cup hot water", "Lemon (optional)"], "instructions": ["Steep tea for 3-5 minutes. Add lemon if desired."], "image": "https://images.unsplash.com/photo-1627435601361-ec25f24754b2?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "4 mins", "caffeineLevel": "Medium", "tags": ["Classic", "Aromatic"] },
  { id: 52, "name": "Mint Hot Chocolate", "type": "Other", "category": "Hot Drinks", "milk": "Dairy", "sweetness": "High", "temperature": "Hot", "base": "Cocoa", "flavorNotes": ["Chocolate", "Minty"], "ingredients": ["1 cup milk", "2 tbsp cocoa powder", "2 tbsp sugar", "Peppermint extract", "Whipped cream"], "instructions": ["Heat milk, whisk in cocoa and sugar. Add peppermint extract. Top with whipped cream."], "image": "https://images.unsplash.com/photo-1542962452-98448f10738a?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "6 mins", "caffeineLevel": "Low", "tags": ["Holiday", "Indulgent"] },
  { id: 53, "name": "Lavender Latte", "type": "Coffee", "category": "Flavored Coffees", "milk": "Dairy", "sweetness": "Medium", "temperature": "Hot", "base": "Espresso", "flavorNotes": ["Floral", "Creamy"], "ingredients": ["1 shot espresso", "1 cup steamed milk", "Lavender syrup"], "instructions": ["Add lavender syrup to espresso, top with steamed milk."], "image": "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "6 mins", "caffeineLevel": "High", "tags": ["Trendy", "Unique"] },
  { id: 54, "name": "Bubble Tea (Milk Tea)", "type": "Tea", "category": "Milk Teas", "milk": "Dairy", "sweetness": "High", "temperature": "Cold", "base": "Black Tea", "flavorNotes": ["Sweet", "Chewy"], "ingredients": ["1 cup black tea (cold)", "1/2 cup milk", "2 tbsp sugar", "Tapioca pearls"], "instructions": ["Cook tapioca pearls. Combine tea, milk, sugar. Add pearls."], "image": "https://images.unsplash.com/photo-1578899805437-4cd14030d3e0?auto=format&fit=crop&q=60", "difficulty": "Hard", "prepTime": "30 mins", "caffeineLevel": "Medium", "tags": ["Asian", "Fun"] },
  { id: 55, "name": "Elderflower Presse", "type": "Other", "category": "Fruit Drinks", "milk": "None", "sweetness": "Medium", "temperature": "Cold", "base": "Herbal", "flavorNotes": ["Floral", "Sweet"], "ingredients": ["Elderflower cordial", "Sparkling water", "Lemon slice", "Ice"], "instructions": ["Mix cordial with sparkling water, serve over ice with lemon."], "image": "https://images.unsplash.com/photo-1575596511277-5722d413dbf5?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "2 mins", "caffeineLevel": "None", "tags": ["European", "Summer"] },
  { id: 56, "name": "Pumpkin Spice Latte", "type": "Coffee", "category": "Flavored Coffees", "milk": "Dairy", "sweetness": "High", "temperature": "Hot", "base": "Espresso", "flavorNotes": ["Spiced", "Sweet", "Autumn"], "ingredients": ["1 shot espresso", "1 cup steamed milk", "Pumpkin spice syrup", "Whipped cream"], "instructions": ["Add syrup to espresso, top with steamed milk and cream."], "image": "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "8 mins", "caffeineLevel": "High", "tags": ["Seasonal", "Popular"] },
  { id: 57, "name": "Moroccan Mint Tea", "type": "Tea", "category": "Flavored Teas", "milk": "None", "sweetness": "High", "temperature": "Hot", "base": "Green Tea", "flavorNotes": ["Minty", "Sweet"], "ingredients": ["Green tea leaves", "Fresh mint", "Sugar", "Hot water"], "instructions": ["Steep green tea and mint. Add plenty of sugar."], "image": "https://images.unsplash.com/photo-1627435601361-ec25f24754b2?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "10 mins", "caffeineLevel": "Medium", "tags": ["Traditional", "Cultural"] },
  { id: 58, "name": "Root Beer Float", "type": "Other", "category": "Dessert Drinks", "milk": "Dairy", "sweetness": "High", "temperature": "Cold", "base": "Soda", "flavorNotes": ["Sweet", "Creamy", "Vanilla"], "ingredients": ["1 scoop vanilla ice cream", "Root beer"], "instructions": ["Place ice cream in glass, pour root beer over."], "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=60", "difficulty": "Very Easy", "prepTime": "2 mins", "caffeineLevel": "None", "tags": ["Classic", "American"] },
  { id: 59, "name": "Iced Americano", "type": "Coffee", "category": "Black Coffees", "milk": "None", "sweetness": "None", "temperature": "Cold", "base": "Espresso", "flavorNotes": ["Bold", "Refreshing"], "ingredients": ["2 shots espresso", "Cold water", "Ice"], "instructions": ["Pour espresso over ice, top with cold water."], "image": "https://i.pinimg.com/736x/cb/48/db/cb48db04009801523739569e0f33cfc3.jpg", "difficulty": "Easy", "prepTime": "3 mins", "caffeineLevel": "High", "tags": ["Simple", "Summer"] },
  { id: 60, "name": "Jasmine Tea", "type": "Tea", "category": "Flavored Teas", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "Green Tea", "flavorNotes": ["Floral", "Light"], "ingredients": ["1 tsp jasmine tea leaves", "1 cup hot water"], "instructions": ["Steep for 2-3 minutes."], "image": "https://images.unsplash.com/photo-1627435601361-ec25f24754b2?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "3 mins", "caffeineLevel": "Medium", "tags": ["Aromatic", "Chinese"] },
  { id: 61, "name": "Hot Toddy", "type": "Other", "category": "Hot Drinks", "milk": "None", "sweetness": "Medium", "temperature": "Hot", "base": "Whiskey", "flavorNotes": ["Warm", "Citrusy", "Spiced"], "ingredients": ["1.5 oz whiskey", "1 tbsp honey", "1/2 lemon, squeezed", "1 cup hot water", "Cinnamon stick"], "instructions": ["Combine all in a mug, stir until honey dissolves."], "image": "https://images.unsplash.com/photo-1517256064527-09c73fc730e0?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "5 mins", "caffeineLevel": "None", "tags": ["Remedy", "Evening"] },
  { id: 62, "name": "Piccolo Latte", "type": "Coffee", "category": "Milk Coffees", "milk": "Dairy", "sweetness": "Low", "temperature": "Hot", "base": "Espresso", "flavorNotes": ["Intense", "Milky"], "ingredients": ["1 ristretto shot", "Steamed milk"], "instructions": ["Pour steamed milk over ristretto shot."], "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "4 mins", "caffeineLevel": "High", "tags": ["Concentrated", "Small"] },
  { id: 63, "name": "Genmaicha", "type": "Tea", "category": "Pure Teas", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "Green Tea", "flavorNotes": ["Nutty", "Toasty"], "ingredients": ["1 tsp Genmaicha tea", "1 cup hot water"], "instructions": ["Steep for 3 minutes."], "image": "https://images.unsplash.com/photo-1627435601361-ec25f24754b2?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "3 mins", "caffeineLevel": "Medium", "tags": ["Japanese", "Unique"] },
  { id: 64, "name": "Basil Lemonade", "type": "Other", "category": "Fruit Drinks", "milk": "None", "sweetness": "Medium", "temperature": "Cold", "base": "Fruit", "flavorNotes": ["Herbal", "Citrusy"], "ingredients": ["1 cup lemon juice", "1 cup sugar", "4 cups water", "Fresh basil leaves"], "instructions": ["Muddle basil, mix with lemonade ingredients."], "image": "https://images.unsplash.com/photo-1575596511277-5722d413dbf5?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "15 mins", "caffeineLevel": "None", "tags": ["Herbaceous", "Summer"] },
  { id: 65, "name": "Bulletproof Coffee", "type": "Coffee", "category": "Specialty Coffees", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "Brewed Coffee", "flavorNotes": ["Rich", "Energizing"], "ingredients": ["1 cup hot coffee", "1 tbsp grass-fed butter", "1 tbsp MCT oil"], "instructions": ["Blend all ingredients until frothy."], "image": "https://i.pinimg.com/736x/cb/48/db/cb48db04009801523739569e0f33cfc3.jpg", "difficulty": "Easy", "prepTime": "3 mins", "caffeineLevel": "High", "tags": ["Keto", "High Fat"] },
  { id: 66, "name": "Thai Iced Tea", "type": "Tea", "category": "Milk Teas", "milk": "Condensed Milk", "sweetness": "High", "temperature": "Cold", "base": "Black Tea", "flavorNotes": ["Sweet", "Creamy", "Spiced"], "ingredients": ["Thai tea mix", "Hot water", "Condensed milk", "Ice"], "instructions": ["Brew tea, cool, mix with condensed milk, serve over ice."], "image": "https://images.unsplash.com/photo-1578899805437-4cd14030d3e0?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "20 mins", "caffeineLevel": "Medium", "tags": ["Thai", "Sweet"] },
  { id: 67, "name": "Shirley Temple", "type": "Other", "category": "Mocktails", "milk": "None", "sweetness": "High", "temperature": "Cold", "base": "Soda", "flavorNotes": ["Sweet", "Fruity"], "ingredients": ["Ginger ale", "Grenadine", "Maraschino cherry", "Ice"], "instructions": ["Combine ginger ale and grenadine, garnish with cherry."], "image": "https://images.unsplash.com/photo-1575596511277-5722d413dbf5?auto=format&fit=crop&q=60", "difficulty": "Very Easy", "prepTime": "2 mins", "caffeineLevel": "None", "tags": ["Classic", "Kid-Friendly"] },
  { id: 68, "name": "Macadamia Nut Latte", "type": "Coffee", "category": "Flavored Coffees", "milk": "Macadamia", "sweetness": "Medium", "temperature": "Hot", "base": "Espresso", "flavorNotes": ["Nutty", "Creamy"], "ingredients": ["1 shot espresso", "1 cup steamed macadamia milk", "Macadamia nut syrup (optional)"], "instructions": ["Combine espresso and steamed milk. Add syrup if desired."], "image": "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "5 mins", "caffeineLevel": "High", "tags": ["Nut Milk", "Specialty"] },
  { id: 69, "name": "Sage Tea", "type": "Tea", "category": "Herbal Teas", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "Herbal Tea", "flavorNotes": ["Earthy", "Herbal"], "ingredients": ["Fresh sage leaves", "1 cup boiling water", "Honey (optional)"], "instructions": ["Steep sage leaves for 5-10 minutes. Add honey."], "image": "https://images.unsplash.com/photo-1594755380410-9a9745a91700?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "7 mins", "caffeineLevel": "None", "tags": ["Medicinal", "Soothing"] },
  { id: 70, "name": "Virgin Mojito", "type": "Other", "category": "Mocktails", "milk": "None", "sweetness": "Medium", "temperature": "Cold", "base": "Soda", "flavorNotes": ["Minty", "Lime", "Refreshing"], "ingredients": ["Fresh mint leaves", "Lime wedges", "Sugar", "Soda water", "Ice"], "instructions": ["Muddle mint, lime, and sugar. Top with ice and soda water."], "image": "https://images.unsplash.com/photo-1575596511277-5722d413dbf5?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "5 mins", "caffeineLevel": "None", "tags": ["Party", "Refreshing"] },
  { id: 71, "name": "Dirty Chai Latte", "type": "Coffee", "category": "Flavored Coffees", "milk": "Dairy", "sweetness": "Medium", "temperature": "Hot", "base": "Espresso", "flavorNotes": ["Spiced", "Coffee", "Sweet"], "ingredients": ["1 shot espresso", "1 chai latte (prepared)"], "instructions": ["Add espresso shot to prepared chai latte."], "image": "https://images.unsplash.com/photo-1578899805437-4cd14030d3e0?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "10 mins", "caffeineLevel": "High", "tags": ["Fusion", "Popular"] },
  { id: 72, "name": "Iced Hibiscus Tea", "type": "Tea", "category": "Herbal Teas", "milk": "None", "sweetness": "Medium", "temperature": "Cold", "base": "Herbal Tea", "flavorNotes": ["Tart", "Floral"], "ingredients": ["Dried hibiscus flowers", "Hot water", "Sugar (optional)", "Ice"], "instructions": ["Steep hibiscus, cool, sweeten, pour over ice."], "image": "https://images.unsplash.com/photo-1574742614743-157947f6f1c4?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "15 mins", "caffeineLevel": "None", "tags": ["Refreshing", "Vibrant"] },
  { id: 73, "name": "Peanut Butter Smoothie", "type": "Other", "category": "Smoothies", "milk": "Dairy", "sweetness": "Medium", "temperature": "Cold", "base": "Nut Butter", "flavorNotes": ["Nutty", "Creamy"], "ingredients": ["2 tbsp peanut butter", "1 banana", "1 cup milk", "1 tbsp honey"], "instructions": ["Blend all ingredients until smooth."], "image": "https://images.unsplash.com/photo-1600718374662-0815315c1657?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "5 mins", "caffeineLevel": "None", "tags": ["Protein", "Energizing"] },
  { id: 74, "name": "Cold Foam Cold Brew", "type": "Coffee", "category": "Cold Coffees", "milk": "Dairy", "sweetness": "Variable", "temperature": "Cold", "base": "Cold Brew", "flavorNotes": ["Smooth", "Creamy"], "ingredients": ["Cold brew coffee", "Cold foam (milk + sweetener, frothed)"], "instructions": ["Pour cold brew over ice, top with cold foam."], "image": "https://images.unsplash.com/photo-1517701559438-c38c2871d33b?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "5 mins", "caffeineLevel": "High", "tags": ["Trendy", "Modern"] },
  { id: 75, "name": "Butterfly Pea Flower Tea", "type": "Tea", "category": "Herbal Teas", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "Herbal Tea", "flavorNotes": ["Earthy", "Color-changing"], "ingredients": ["Dried butterfly pea flowers", "Hot water", "Lemon (optional)"], "instructions": ["Steep flowers. Add lemon to change color."], "image": "https://images.unsplash.com/photo-1627435601361-ec25f24754b2?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "4 mins", "caffeineLevel": "None", "tags": ["Unique", "Visual"] },
  { id: 76, "name": "Coconut Coffee", "type": "Coffee", "category": "Flavored Coffees", "milk": "Coconut Milk", "sweetness": "Medium", "temperature": "Hot", "base": "Brewed Coffee", "flavorNotes": ["Tropical", "Creamy"], "ingredients": ["1 cup brewed coffee", "1/4 cup coconut milk", "Sweetener (optional)"], "instructions": ["Mix coffee with coconut milk and sweetener."], "image": "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "3 mins", "caffeineLevel": "Medium", "tags": ["Tropical", "Dairy-Free"] },
  { id: 77, "name": "Apple Juice", "type": "Other", "category": "Fruit Drinks", "milk": "None", "sweetness": "High", "temperature": "Cold", "base": "Fruit", "flavorNotes": ["Sweet", "Fruity"], "ingredients": ["Fresh apples", "Water"], "instructions": ["Juice apples, strain, serve chilled."], "image": "https://images.unsplash.com/photo-1575596511277-5722d413dbf5?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "10 mins", "caffeineLevel": "None", "tags": ["Simple", "Kid-Friendly"] },
  { id: 78, "name": "Hot Buttered Rum", "type": "Other", "category": "Hot Drinks", "milk": "Butter", "sweetness": "High", "temperature": "Hot", "base": "Rum", "flavorNotes": ["Warm", "Spiced", "Rich"], "ingredients": ["2 oz dark rum", "1 tbsp butter", "Brown sugar", "Spices (cinnamon, nutmeg)", "Hot water"], "instructions": ["Mix butter, sugar, spices. Add rum and hot water."], "image": "https://images.unsplash.com/photo-1517256064527-09c73fc730e0?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "5 mins", "caffeineLevel": "None", "tags": ["Holiday", "Alcoholic"] },
  { id: 79, "name": "Long Black", "type": "Coffee", "category": "Black Coffees", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "Espresso", "flavorNotes": ["Strong", "Clean"], "ingredients": ["2 shots espresso", "Hot water"], "instructions": ["Pour hot water into cup, then add espresso shots."], "image": "https://i.pinimg.com/736x/cb/48/db/cb48db04009801523739569e0f33cfc3.jpg", "difficulty": "Easy", "prepTime": "3 mins", "caffeineLevel": "High", "tags": ["Australian", "Simple"] },
  { id: 80, "name": "White Hot Chocolate", "type": "Other", "category": "Hot Drinks", "milk": "Dairy", "sweetness": "High", "temperature": "Hot", "base": "White Chocolate", "flavorNotes": ["Sweet", "Creamy"], "ingredients": ["1 cup milk", "White chocolate chips", "Whipped cream"], "instructions": ["Heat milk, whisk in white chocolate until melted. Top with cream."], "image": "https://images.unsplash.com/photo-1542962452-98448f10738a?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "5 mins", "caffeineLevel": "None", "tags": ["Dessert", "Sweet"] },
  { id: 81, "name": "Honey Lemon Ginger Tea", "type": "Tea", "category": "Herbal Teas", "milk": "None", "sweetness": "Medium", "temperature": "Hot", "base": "Herbal Tea", "flavorNotes": ["Soothing", "Spicy", "Sweet"], "ingredients": ["Ginger slices", "Lemon slices", "Honey", "Hot water"], "instructions": ["Steep ginger and lemon, add honey to taste."], "image": "https://images.unsplash.com/photo-1627435601361-ec25f24754b2?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "7 mins", "caffeineLevel": "None", "tags": ["Wellness", "Cold Remedy"] },
  { id: 82, "name": "Cherry Limeade", "type": "Other", "category": "Fruit Drinks", "milk": "None", "sweetness": "High", "temperature": "Cold", "base": "Fruit", "flavorNotes": ["Sweet", "Tart", "Fruity"], "ingredients": ["Cherry juice", "Lime juice", "Soda water", "Ice", "Cherries/Lime for garnish"], "instructions": ["Combine juices, top with soda water and ice. Garnish."], "image": "https://images.unsplash.com/photo-1575596511277-5722d413dbf5?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "5 mins", "caffeineLevel": "None", "tags": ["Summer", "Fruity"] },
  { id: 83, "name": "Iced Coconut Latte", "type": "Coffee", "category": "Flavored Coffees", "milk": "Coconut Milk", "sweetness": "Medium", "temperature": "Cold", "base": "Espresso", "flavorNotes": ["Tropical", "Creamy"], "ingredients": ["2 shots espresso", "1 cup cold coconut milk", "Ice"], "instructions": ["Combine espresso and coconut milk over ice."], "image": "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "4 mins", "caffeineLevel": "High", "tags": ["Dairy-Free", "Refreshing"] },
  { id: 84, "name": "Chai Frappuccino", "type": "Tea", "category": "Blended Teas", "milk": "Dairy", "sweetness": "High", "temperature": "Cold", "base": "Chai Concentrate", "flavorNotes": ["Spiced", "Blended", "Sweet"], "ingredients": ["Chai concentrate", "Milk", "Ice", "Whipped cream"], "instructions": ["Blend chai concentrate, milk, and ice. Top with whipped cream."], "image": "https://images.unsplash.com/photo-1578899805437-4cd14030d3e0?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "5 mins", "caffeineLevel": "Medium", "tags": ["Dessert Drink", "Blended"] },
  { id: 85, "name": "Arnold Palmer", "type": "Other", "category": "Mixed Drinks (Non-Alcoholic)", "milk": "None", "sweetness": "Medium", "temperature": "Cold", "base": "Tea & Lemonade", "flavorNotes": ["Sweet", "Tart", "Refreshing"], "ingredients": ["1/2 cup iced tea", "1/2 cup lemonade", "Ice"], "instructions": ["Combine iced tea and lemonade over ice."], "image": "https://images.unsplash.com/photo-1575596511277-5722d413dbf5?auto=format&fit=crop&q=60", "difficulty": "Very Easy", "prepTime": "2 mins", "caffeineLevel": "Low", "tags": ["Classic", "Summer"] },
  { id: 86, "name": "Cortadito", "type": "Coffee", "category": "Milk Coffees", "milk": "Dairy", "sweetness": "Medium", "temperature": "Hot", "base": "Espresso", "flavorNotes": ["Strong", "Sweet"], "ingredients": ["1 shot espresso", "Small amount of steamed milk (sweetened)"], "instructions": ["Brew espresso. Prepare a small amount of sweetened steamed milk and add to espresso."], "image": "https://images.unsplash.com/photo-1593443320739-77f7493963da?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "4 mins", "caffeineLevel": "High", "tags": ["Cuban", "Sweet"] },
  { id: 87, "name": "Iced Oolong Tea", "type": "Tea", "category": "Oolong Teas", "milk": "None", "sweetness": "None", "temperature": "Cold", "base": "Oolong Tea", "flavorNotes": ["Floral", "Fruity", "Refreshing"], "ingredients": ["1 tsp oolong tea leaves", "1 cup hot water", "Ice"], "instructions": ["Steep tea, cool, pour over ice."], "image": "https://images.unsplash.com/photo-1627435601361-ec25f24754b2?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "10 mins", "caffeineLevel": "Medium", "tags": ["Refreshing", "Summer"] },
  { id: 88, "name": "Kombucha", "type": "Other", "category": "Fermented Drinks", "milk": "None", "sweetness": "Low", "temperature": "Cold", "base": "Fermented Tea", "flavorNotes": ["Tangy", "Fizzy"], "ingredients": ["Kombucha (store-bought or homemade)"], "instructions": ["Serve chilled."], "image": "https://images.unsplash.com/photo-1546793617-649069d3e8e1?auto=format&fit=crop&q=60", "difficulty": "Very Easy", "prepTime": "1 min", "caffeineLevel": "Low", "tags": ["Healthy", "Probiotic"] },
  { id: 89, "name": "Cascara Latte", "type": "Coffee", "category": "Coffee Fruit Drinks", "milk": "Dairy", "sweetness": "Medium", "temperature": "Hot", "base": "Espresso", "flavorNotes": ["Fruity", "Sweet", "Coffee Cherry"], "ingredients": ["1 shot espresso", "1 cup steamed milk", "Cascara syrup"], "instructions": ["Add cascara syrup to espresso, top with steamed milk."], "image": "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=60", "difficulty": "Medium", "prepTime": "6 mins", "caffeineLevel": "High", "tags": ["Unique", "Fruity Coffee"] },
  { id: 90, "name": "Barley Tea (Mugicha)", "type": "Tea", "category": "Grain Teas", "milk": "None", "sweetness": "None", "temperature": "Cold", "base": "Roasted Barley", "flavorNotes": ["Toasty", "Earthy"], "ingredients": ["Roasted barley tea bags", "Water"], "instructions": ["Brew tea bags in hot or cold water, chill."], "image": "https://images.unsplash.com/photo-1627435601361-ec25f24754b2?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "15 mins", "caffeineLevel": "None", "tags": ["Korean", "Japanese", "Refreshing"] },
  { id: 91, "name": "Ginger Beer", "type": "Other", "category": "Sodas", "milk": "None", "sweetness": "High", "temperature": "Cold", "base": "Ginger", "flavorNotes": ["Spicy", "Sweet", "Fizzy"], "ingredients": ["Ginger beer (store-bought)"], "instructions": ["Serve chilled, perhaps with a lime wedge."], "image": "https://images.unsplash.com/photo-1575596511277-5722d413dbf5?auto=format&fit=crop&q=60", "difficulty": "Very Easy", "prepTime": "1 min", "caffeineLevel": "None", "tags": ["Spicy", "Refreshing"] },
  { id: 92, "name": "Espresso Lungo", "type": "Coffee", "category": "Black Coffees", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "Espresso", "flavorNotes": ["Less Intense", "Milder"], "ingredients": ["1 shot espresso"], "instructions": ["Brew an espresso shot with more water for a longer extraction."], "image": "https://i.pinimg.com/736x/cb/48/db/cb48db04009801523739569e0f33cfc3.jpg", "difficulty": "Easy", "prepTime": "1 min", "caffeineLevel": "Medium", "tags": ["Italian", "Milder"] },
  { id: 93, "name": "Fruit Infused Water (Strawberry-Mint)", "type": "Other", "category": "Water", "milk": "None", "sweetness": "None", "temperature": "Cold", "base": "Water", "flavorNotes": ["Fruity", "Fresh"], "ingredients": ["Sliced strawberries", "Fresh mint leaves", "Water"], "instructions": ["Combine ingredients in pitcher, chill for 1-4 hours."], "image": "https://images.unsplash.com/photo-1546793617-649069d3e8e1?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "60 mins", "caffeineLevel": "None", "tags": ["Healthy", "Hydrating"] },
  { id: 94, "name": "Iced White Mocha", "type": "Coffee", "category": "Flavored Coffees", "milk": "Dairy", "sweetness": "High", "temperature": "Cold", "base": "Espresso", "flavorNotes": ["Sweet", "White Chocolate", "Creamy"], "ingredients": ["2 shots espresso", "1 cup cold milk", "White chocolate sauce", "Ice", "Whipped cream (optional)"], "instructions": ["Combine ingredients and stir. Top with whipped cream."], "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "7 mins", "caffeineLevel": "High", "tags": ["Indulgent", "Dessert Drink"] },
  { id: 95, "name": "Rose Tea", "type": "Tea", "category": "Herbal Teas", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "Herbal Tea", "flavorNotes": ["Floral", "Fragrant"], "ingredients": ["Dried rosebuds", "1 cup hot water"], "instructions": ["Steep rosebuds for 5 minutes."], "image": "https://images.unsplash.com/photo-1627435601361-ec25f24754b2?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "5 mins", "caffeineLevel": "None", "tags": ["Aromatic", "Relaxing"] },
  { id: 96, "name": "Lemon Iced Tea", "type": "Tea", "category": "Flavored Teas", "milk": "None", "sweetness": "Medium", "temperature": "Cold", "base": "Black Tea", "flavorNotes": ["Tangy", "Refreshing"], "ingredients": ["1 black tea bag", "1 cup hot water", "Lemon juice", "Sugar", "Ice"], "instructions": ["Steep tea, cool, mix with lemon juice and sugar. Pour over ice."], "image": "https://images.unsplash.com/photo-1574742614743-157947f6f1c4?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "15 mins", "caffeineLevel": "Medium", "tags": ["Classic", "Summer"] },
  { id: 97, "name": "Espresso Doppio", "type": "Coffee", "category": "Black Coffees", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "Espresso", "flavorNotes": ["Double Strength", "Intense"], "ingredients": ["2 shots espresso"], "instructions": ["Brew two shots of espresso into one cup."], "image": "https://i.pinimg.com/736x/cb/48/db/cb48db04009801523739569e0f33cfc3.jpg", "difficulty": "Easy", "prepTime": "1 min", "caffeineLevel": "Very High", "tags": ["Strong", "Double"] },
  { id: 98, "name": "Strawberry Banana Smoothie", "type": "Other", "category": "Smoothies", "milk": "Dairy", "sweetness": "Medium", "temperature": "Cold", "base": "Fruit", "flavorNotes": ["Fruity", "Sweet", "Creamy"], "ingredients": ["1 cup frozen strawberries", "1 banana", "1/2 cup milk"], "instructions": ["Blend all ingredients until smooth."], "image": "https://images.unsplash.com/photo-1600718374662-0815315c1657?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "5 mins", "caffeineLevel": "None", "tags": ["Breakfast", "Popular"] },
  { id: 99, "name": "Cinnamon Tea", "type": "Tea", "category": "Herbal Teas", "milk": "None", "sweetness": "None", "temperature": "Hot", "base": "Herbal Tea", "flavorNotes": ["Warm", "Spiced"], "ingredients": ["1 cinnamon stick", "1 cup hot water", "Honey (optional)"], "instructions": ["Steep cinnamon stick in hot water for 5-10 minutes. Add honey."], "image": "https://images.unsplash.com/photo-1594755380410-9a9745a91700?auto=format&fit=crop&q=60", "difficulty": "Easy", "prepTime": "7 mins", "caffeineLevel": "None", "tags": ["Comfort", "Spiced"] },
  { id: 100, "name": "Classic Cola", "type": "Other", "category": "Sodas", "milk": "None", "sweetness": "High", "temperature": "Cold", "base": "Soda", "flavorNotes": ["Sweet", "Fizzy"], "ingredients": ["Cola soda", "Ice (optional)"], "instructions": ["Serve chilled over ice."], "image": "https://images.unsplash.com/photo-1575596511277-5722d413dbf5?auto=format&fit=crop&q=60", "difficulty": "Very Easy", "prepTime": "1 min", "caffeineLevel": "Medium", "tags": ["Carbonated", "Popular"] },
];

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCAPzgrJnwJU9F5rKjWvQhQk4vM9Icqi6s",
  authDomain: "sip-savvy-2a069.firebaseapp.com",
  projectId: "sip-savvy-2a069",
  storageBucket: "sip-savvy-2a069.firebasestorage.app",
  messagingSenderId: "320568055978",
  appId: "1:320568055978:web:583d88b5d9474836e398d3",
  measurementId: "G-Y6VTQ10XSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

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
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const filterSelectorsContainer = document.getElementById('filterSelectors');
const resetFiltersBtn = document.getElementById('resetFilters');
const mobileFiltersToggle = document.getElementById('mobile-filters-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const mainFooter = document.getElementById('main-footer'); // Get the footer element


// --- HELPER FUNCTIONS ---
const getUniqueValues = (recipes, key) => {
  const allValues = new Set(recipes.flatMap(recipe => {
    // Ensure we handle arrays of tags/flavorNotes correctly if they were implemented differently
    // For single string values, it's just recipe[key]
    if (Array.isArray(recipe[key])) {
      return recipe[key];
    }
    return [recipe[key]];
  }).filter(Boolean));
  return ["Any", ...Array.from(allValues).sort()];
};

const parsePrepTime = (timeString) => {
  if (!timeString) return Infinity; // Handle undefined or null timeString
  timeString = timeString.toLowerCase(); // Convert to lowercase for consistent matching

  let totalMinutes = 0; // Initialize to 0, not Infinity, for calculation

  // Handle "X mins" format
  const minsMatch = timeString.match(/(\d+)\s*mins?/);
  if (minsMatch) {
    totalMinutes += parseInt(minsMatch[1], 10);
  }

  // Handle "X hrs" or "X-Y hrs" format
  const hrsMatch = timeString.match(/(\d+)-?(\d*)\s*hrs?/);
  if (hrsMatch) {
    const hours = parseInt(hrsMatch[1], 10); // Take the first number for single or range
    totalMinutes += hours * 60; // Convert hours to minutes
  }

  // If after all parsing, totalMinutes is still 0 (meaning no time found), return Infinity to push to end
  return totalMinutes === 0 ? Infinity : totalMinutes;
};


const mapDifficultyToValue = (difficulty) => {
  const difficultyMap = {
    "easy": 1,
    "medium": 2,
    "hard": 3
  };
  // Convert difficulty to lowercase before lookup for robustness
  // If difficulty is null or undefined, toLowerCase() would throw an error.
  if (typeof difficulty === 'string') {
    return difficultyMap[difficulty.toLowerCase()] || 4; // Default to 4 for unknown or "Any"
  }
  return 4; // Return 4 for non-string difficulties (e.g., null, undefined, or empty)
};

// --- MODAL & UI LOGIC ---
function openModal(modal) {
  modal.classList.remove('hidden');
  mainFooter.style.display = 'none'; // Hide footer when modal is open
}

function closeModal(modal) {
  modal.classList.add('hidden');
  // Only show footer if neither initial view nor any modal is active
  const isAnyModalOpen = !loginModal.classList.contains('hidden') || !registerModal.classList.contains('hidden');
  if (initialView.style.display === 'none' && !isAnyModalOpen) {
    mainFooter.style.display = 'block';
  } else {
    mainFooter.style.display = 'none'; // Keep hidden if initial view or another modal is active
  }
  const errorElement = modal.querySelector('.modal-error');
  if (errorElement) errorElement.textContent = '';
}
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
    mainFooter.style.display = 'block'; // Show footer when logged in and content is visible
  } else {
    initialView.style.display = 'flex';
    pagesContainer.classList.add('hidden');
    authContainer.innerHTML = `<button id="login-nav-btn" class="auth-button login-button">Login</button><button id="register-nav-btn" class="auth-button register-button">Register</button>`;
    document.getElementById('login-nav-btn').addEventListener('click', () => openModal(loginModal));
    document.getElementById('register-nav-btn').addEventListener('click', () => openModal(registerModal));
    if (state.unsubscribeFavorites) { state.unsubscribeFavorites(); state.unsubscribeFavorites = null; }
    state.userFavorites.clear();
    // When logged out, the initial view is shown, and the footer should be hidden.
    // The "home" page content might still technically be in the DOM but hidden by initialView.
    showPage('home'); // This ensures state.currentPage is 'home' for proper navigation later
    mainFooter.style.display = 'none'; // Hide footer when initial view is active
  }
  lucide.createIcons();
}

// --- NAVIGATION & PAGE MANAGEMENT ---
function showPage(pageId) {
  state.currentPage = pageId;
  document.querySelectorAll('.page-content').forEach(page => {
    if (page.id === `page-${pageId}`) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });

  // Update nav links active state, but don't show active for recipe-detail
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  if (pageId === 'favorites') {
    renderFavoritesPage();
  } else if (pageId === 'home') {
    applyFiltersAndRender(); // Re-apply filters and render when returning to home
  }
  // No special action for 'about' or 'recipe-detail' as they are static or populated on demand
}

function setupNavigation() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = e.target.closest('.nav-link').dataset.page;
      if (auth.currentUser) {
        showPage(pageId);
      } else if (pageId === 'about' || pageId === 'home') {
        showPage(pageId);
      } else {
        openModal(loginModal);
      }
    });
  });
}

function showRecipeDetail(recipeId) {
  const recipe = state.recipes.find(r => r.id === recipeId);
  const container = document.getElementById('page-recipe-detail');

  if (recipe) {
    container.innerHTML = `
            <div class="recipe-detail-page">
                <div class="recipe-page-grid">
                    <div class="recipe-image-column">
                        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image-detail" onerror="this.onerror=null;this.src='https://placehold.co/600x400/e0e7ff/4f46e5?text=Image+Not+Found';">
                    </div>

                    <div class="recipe-text-column">
                        <button id="back-to-home-btn" class="back-button">
                            <i data-lucide="arrow-left"></i> Back to all drinks
                        </button>
                        <h1 class="recipe-name">${recipe.name}</h1>

                        <div class="recipe-info-grid">
                            <div class="recipe-details-column">
                                <h3 class="recipe-section-title">Details</h3>
                                <ul class="details-list">
                                    <li><strong>Difficulty:</strong> ${recipe.difficulty}</li>
                                    <li><strong>Prep Time:</strong> ${recipe.prepTime}</li>
                                    <li><strong>Caffeine:</strong> ${recipe.caffeineLevel}</li>
                                    <li><strong>Temp:</strong> ${recipe.temperature}</li>
                                </ul>
                            </div>
                            <div class="recipe-ingredients-column">
                                <h3 class="recipe-section-title">Ingredients</h3>
                                <ul class="ingredients-list">
                                    ${(recipe.ingredients || []).map(ing => `<li>${ing}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="recipe-instructions-column">
                                <h3 class="recipe-section-title">Instructions</h3>
                                <ol class="instructions-list">
                                    ${(recipe.instructions || []).map(step => `<li>${step}</li>`).join('')}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    document.getElementById('back-to-home-btn').addEventListener('click', () => showPage('home'));
    showPage('recipe-detail');
  } else {
    container.innerHTML = `<h1>Recipe not found.</h1>`;
    showPage('recipe-detail');
  }
  lucide.createIcons();
}

// --- FIREBASE AUTH HANDLERS ---
onAuthStateChanged(auth, user => { updateUIForAuthState(user); });

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = e.target.elements['login-email'].value;
  const password = e.target.elements['login-password'].value;
  const rememberMe = e.target.elements['login-remember-me'].checked;
  const errorEl = document.getElementById('login-error');
  errorEl.textContent = '';

  try {
    // Set persistence based on "Remember me" checkbox
    await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
    await signInWithEmailAndPassword(auth, email, password);
    closeModal(loginModal);
  } catch (error) {
    errorEl.textContent = "Failed to login. Please check credentials.";
  }
});

document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = e.target.elements['register-email'].value;
  const password = e.target.elements['register-password'].value;
  const confirmPassword = e.target.elements['register-confirm-password'].value;
  const errorEl = document.getElementById('register-error');
  errorEl.textContent = '';

  if (password !== confirmPassword) {
    errorEl.textContent = "Passwords do not match.";
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    closeModal(registerModal);
  } catch (error) {
    errorEl.textContent = "Failed to register. Password must be 6+ chars and email valid.";
  }
});

async function handleLogout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error.message);
  }
}

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
function createFilterSelectors() {
  const preferenceOptions = {
    category: getUniqueValues(state.recipes, 'category'),
    temperature: getUniqueValues(state.recipes, 'temperature'),
    difficulty: ["Any", "Easy", "Medium", "Hard"],
    caffeineLevel: getUniqueValues(state.recipes, 'caffeineLevel'),
  };

  filterSelectorsContainer.innerHTML = Object.entries(preferenceOptions).map(([key, options]) => `
        <div class="filter-selector">
            <label class="filter-label">${key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <div class="select-container">
                <select data-filter-key="${key}" class="filter-select">
                    ${options.map(opt => `<option value="${opt.toLowerCase()}">${opt}</option>`).join('')}
                </select>
                <i data-lucide="chevron-down" class="select-arrow h-5 w-5"></i>
            </div>
        </div>
    `).join('');

  document.querySelectorAll('.filter-select').forEach(select => {
    select.addEventListener('change', (event) => {
      const key = event.target.dataset.filterKey;
      const value = event.target.value;
      if (value === 'all' || value === 'any') {
        delete state.preferences[key];
      } else {
        state.preferences[key] = value;
      }
      applyFiltersAndRender();
    });
  });
  lucide.createIcons();
}
function applyFiltersAndRender() {
  let recipesToFilter = [...state.recipes];

  // Apply search term filter
  if (state.searchTerm) {
    recipesToFilter = recipesToFilter.filter(r =>
      r.name.toLowerCase().includes(state.searchTerm) ||
      (r.ingredients && r.ingredients.some(i => i.toLowerCase().includes(state.searchTerm)))
    );
  }

  // Apply preference filters
  Object.entries(state.preferences).forEach(([key, value]) => {
    if (value && value !== 'any') { // Ensure 'any' doesn't filter
      recipesToFilter = recipesToFilter.filter(r =>
        String(r[key]).toLowerCase() === value
      );
    }
  });

  // Apply sorting
  switch (state.sortOption) {
    case "name-asc":
      recipesToFilter.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      recipesToFilter.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "prepTime-asc":
      recipesToFilter.sort((a, b) => parsePrepTime(a.prepTime) - parsePrepTime(b.prepTime));
      break;
    case "prepTime-desc":
      recipesToFilter.sort((a, b) => parsePrepTime(b.prepTime) - parsePrepTime(a.prepTime));
      break;
    case "difficulty-asc":
      recipesToFilter.sort((a, b) => mapDifficultyToValue(a.difficulty) - mapDifficultyToValue(b.difficulty));
      break;
    case "difficulty-desc":
      recipesToFilter.sort((a, b) => mapDifficultyToValue(b.difficulty) - mapDifficultyToValue(a.difficulty));
      break;
    // For 'default' or any unrecognized option, no specific sort is applied,
    // so it maintains original order or whatever was last applied.
  }
  
  state.filteredRecipes = recipesToFilter;
  renderRecipes();
}

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
    // Use recipes-grid-container for favorites as it's a static grid, not a horizontal scroll
    favoritesContainer.classList.add('recipes-grid-container'); 
    favoritesContainer.innerHTML = favoriteRecipes.map(createRecipeCardHTML).join('');
  }
  lucide.createIcons();
}

function createRecipeCardHTML(recipe) {
  const isFavorite = state.userFavorites.has(recipe.id);
  return `
    <div class="recipe-card-wrapper">
        <div class="recipe-card animate-fadeIn" data-recipe-id="${recipe.id}">
            <div class="recipe-image-container">
                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" onerror="this.onerror=null;this.src='https://placehold.co/600x400/e0e7ff/4f46e5?text=Image+Not+Found';">
            </div>
            <div class="recipe-card-content">
                <h3 class="recipe-card-title">${recipe.name}</h3>
                <p class="recipe-card-category">${recipe.category}</p>
            </div>
        </div>
        <button class="favorite-button ${isFavorite ? 'active' : ''}" data-recipe-id="${recipe.id}">
            <i data-lucide="heart" class="h-5 w-5"></i>
        </button>
    </div>`;
}
function updateFavoriteIcons() { document.querySelectorAll('.favorite-button').forEach(button => { const recipeId = parseInt(button.dataset.recipeId); button.classList.toggle('active', state.userFavorites.has(recipeId)); }); }


// --- EVENT LISTENERS ---
function attachEventListeners() {
  searchInput.addEventListener('input', (e) => { state.searchTerm = e.target.value.toLowerCase(); applyFiltersAndRender(); });
  sortSelect.addEventListener('change', (e) => { state.sortOption = e.target.value; applyFiltersAndRender(); });
  resetFiltersBtn.addEventListener('click', () => { 
    state.preferences = {}; 
    state.searchTerm = ""; 
    state.sortOption = "default"; 
    searchInput.value = ""; 
    sortSelect.value = "default"; 
    document.querySelectorAll('.filter-select').forEach(s => s.selectedIndex = 0); 
    applyFiltersAndRender(); // Apply filters to show all recipes in default state
  });
  mobileFiltersToggle.addEventListener('click', () => { filtersSidebar.classList.toggle('active'); mobileFiltersToggle.querySelector('span').textContent = filtersSidebar.classList.contains('active') ? 'Hide Filters' : 'Show Filters'; });
}
function attachCardEventListeners() {
  const mainContentArea = document.getElementById('content-wrapper');
  mainContentArea.addEventListener('click', (e) => {
    const card = e.target.closest('.recipe-card');
    const favButton = e.target.closest('.favorite-button');

    if (favButton) {
      const recipeId = parseInt(favButton.dataset.recipeId);
      toggleFavorite(recipeId);
      return;
    }

    if (card) {
      const recipeId = parseInt(card.dataset.recipeId);
      showRecipeDetail(recipeId);
    }
  });
}

// --- INITIALIZATION ---
function init() {
  lucide.createIcons();
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  mobileMenuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });
  mobileNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
    });
  });
  setupModalTriggers();
  setupNavigation();
  createFilterSelectors();
  attachEventListeners();
  attachCardEventListeners();

  // IMPORTANT: Call applyFiltersAndRender initially to populate the home page
  // This will also hide/show the footer correctly based on the initial auth state.
  applyFiltersAndRender(); 
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});