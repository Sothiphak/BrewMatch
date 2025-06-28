const initialRecipesData = [
  {
    id: 1,
    name: "Classic Latte",
    type: "Coffee",
    category: "Milk Coffees",
    milk: "Dairy",
    sweetness: "Medium",
    temperature: "Hot",
    base: "Espresso",
    flavorNotes: ["Classic", "Creamy"],
    ingredients: ["1 shot espresso", "1 cup steamed milk"],
    instructions: "First, brew a fresh shot of espresso. Then, steam your milk until it's hot and has a thin layer of microfoam. Finally, pour the steamed milk over the espresso, holding back the foam slightly, then spoon it on top to finish.",
    image: "/drinks/classiclatte.png",
    difficulty: "Medium",
    prepTime: "5 mins",
    caffeineLevel: "High",
    tags: ["Traditional", "Comfort"]
  },
  {
    id: 2,
    name: "Green Tea",
    type: "Tea",
    category: "Pure Teas",
    milk: "None",
    sweetness: "None",
    temperature: "Hot",
    base: "Green Tea",
    flavorNotes: ["Grassy", "Refreshing"],
    ingredients: ["1 tsp green tea leaves", "1 cup hot water"],
    instructions: "Heat water to just below boiling (around 80°C or 175°F). Place green tea leaves in a tea infuser or directly into your cup. Pour the hot water over the leaves and steep for 2-3 minutes. Remove the leaves and enjoy.",
    image: "/drinks/greentea.png",
    difficulty: "Easy",
    prepTime: "3 mins",
    caffeineLevel: "Medium",
    tags: ["Healthy", "Simple"]
  },
  {
    id: 3,
    name: "Iced Mocha",
    type: "Coffee",
    category: "Flavored Coffees",
    milk: "Dairy",
    sweetness: "High",
    temperature: "Cold",
    base: "Espresso",
    flavorNotes: ["Chocolate", "Rich"],
    ingredients: ["2 shots espresso", "1 cup cold milk", "Chocolate syrup", "Ice"],
    instructions: "Start by brewing two shots of espresso and let them cool slightly. In a glass, add chocolate syrup and a splash of cold milk, stirring well to combine. Fill the glass with ice, then pour in the remaining cold milk and finally, the cooled espresso shots. Stir gently and serve.",
    image: "/drinks/icedmocha.png",
    difficulty: "Easy",
    prepTime: "7 mins",
    caffeineLevel: "High",
    tags: ["Indulgent", "Dessert Drink"]
  },
  {
    id: 4,
    name: "Lemonade",
    type: "Other",
    category: "Fruit Drinks",
    milk: "None",
    sweetness: "Medium",
    temperature: "Cold",
    base: "Fruit",
    flavorNotes: ["Tart", "Sweet", "Citrusy"],
    ingredients: ["1 cup lemon juice", "1 cup sugar", "4 cups water"],
    instructions: "In a pitcher, combine sugar and 1 cup of hot water, stirring until the sugar completely dissolves to make a simple syrup. Add the fresh lemon juice and the remaining 3 cups of cold water. Stir well. Serve over ice with a lemon slice for garnish.",
    image: "/drinks/lemonade.png",
    difficulty: "Easy",
    prepTime: "10 mins",
    caffeineLevel: "None",
    tags: ["Refreshing", "Summer"]
  },
  {
    id: 5,
    name: "Cappuccino",
    type: "Coffee",
    category: "Milk Coffees",
    milk: "Dairy",
    sweetness: "Low",
    temperature: "Hot",
    base: "Espresso",
    flavorNotes: ["Balanced", "Foamy"],
    ingredients: ["1 shot espresso", "1/3 cup steamed milk", "1/3 cup milk foam"],
    instructions: "Brew one shot of espresso directly into your cup. Steam milk until it's hot and approximately one-third of the volume is foamed. Gently pour the steamed milk into the espresso, allowing the liquid milk to combine. Spoon the remaining milk foam on top to create the classic cappuccino layers.",
    image: "/drinks/capuchhino.png",
    difficulty: "Medium",
    prepTime: "6 mins",
    caffeineLevel: "High",
    tags: ["Italian", "Classic"]
  },
  {
    id: 6,
    name: "Chamomile Tea",
    type: "Tea",
    category: "Herbal Teas",
    milk: "None",
    sweetness: "None",
    temperature: "Hot",
    base: "Herbal Tea",
    flavorNotes: ["Floral", "Calming"],
    ingredients: ["1-2 tsp chamomile flowers", "1 cup boiling water"],
    instructions: "Bring fresh water to a rolling boil. Place 1-2 teaspoons of dried chamomile flowers (or one tea bag) into your mug. Pour the boiling water over the chamomile and let it steep for 5-7 minutes. Strain the flowers if necessary, and enjoy this calming brew.",
    image: "/drinks/chamomiletea.png",
    difficulty: "Easy",
    prepTime: "7 mins",
    caffeineLevel: "None",
    tags: ["Relaxing", "Bedtime"]
  },
  {
    id: 7,
    name: "Americano",
    type: "Coffee",
    category: "Black Coffees",
    milk: "None",
    sweetness: "None",
    temperature: "Hot",
    base: "Espresso",
    flavorNotes: ["Bold", "Robust"],
    ingredients: ["1 shot espresso", "3/4 cup hot water"],
    instructions: "Brew one shot of espresso. In a separate mug, heat water until it's hot but not boiling. Carefully pour the hot water into the mug, then gently add the espresso shot on top. Stir briefly if desired and serve immediately.",
    image: "/drinks/americano.png",
    difficulty: "Easy",
    prepTime: "3 mins",
    caffeineLevel: "High",
    tags: ["Simple", "Classic"]
  },
  {
    id: 8,
    name: "Chai Latte",
    type: "Tea",
    category: "Milk Teas",
    milk: "Dairy",
    sweetness: "Medium",
    temperature: "Hot",
    base: "Black Tea",
    flavorNotes: ["Spiced", "Aromatic"],
    ingredients: ["1 chai tea bag", "1/2 cup water", "1/2 cup milk"],
    instructions: "Place a chai tea bag in a small saucepan with 1/2 cup of water. Bring to a simmer over medium heat and steep for 5 minutes. Remove the tea bag. Add 1/2 cup of milk to the saucepan and heat until warm, but do not boil. Pour into a mug and sweeten to taste.",
    image: "/drinks/chailatte.png",
    difficulty: "Easy",
    prepTime: "10 mins",
    caffeineLevel: "Medium",
    tags: ["Comfort", "Spicy"]
  },
  {
    id: 9,
    name: "Strawberry Smoothie",
    type: "Other",
    category: "Smoothies",
    milk: "Dairy",
    sweetness: "Medium",
    temperature: "Cold",
    base: "Fruit",
    flavorNotes: ["Fruity", "Sweet"],
    ingredients: ["1 cup frozen strawberries", "1/2 cup milk", "1/2 banana"],
    instructions: "Combine the frozen strawberries, milk, and half a banana in a blender. Blend on high speed until completely smooth and creamy. Pour into a glass and serve immediately.",
    image: "/drinks/strawberrysmoothie.png",
    difficulty: "Easy",
    prepTime: "5 mins",
    caffeineLevel: "None",
    tags: ["Healthy", "Breakfast"]
  },
  {
    id: 10,
    name: "Matcha Latte",
    type: "Tea",
    category: "Milk Teas",
    milk: "Oat",
    sweetness: "Medium",
    temperature: "Hot",
    base: "Matcha",
    flavorNotes: ["Earthy", "Smooth"],
    ingredients: ["1 tsp matcha powder", "2 tbsp hot water", "1 cup steamed milk"],
    instructions: "In a small bowl, combine matcha powder with 2 tablespoons of hot (not boiling) water. Whisk vigorously with a bamboo whisk or a small kitchen whisk until the matcha is fully dissolved and frothy. Steam your preferred milk until hot and slightly foamy. Pour the steamed milk into your mug, then gently pour the whisked matcha over the top. Sweeten if desired.",
    image: "/drinks/matchalatte.png",
    difficulty: "Medium",
    prepTime: "7 mins",
    caffeineLevel: "Medium",
    tags: ["Trendy", "Earthy"]
  },
  {
    id: 11,
    name: "Cold Brew",
    type: "Coffee",
    category: "Black Coffees",
    milk: "None",
    sweetness: "None",
    temperature: "Cold",
    base: "Coffee Grounds",
    flavorNotes: ["Smooth", "Low Acidity"],
    ingredients: ["1 cup coarse coffee", "4 cups cold water"],
    instructions: "Combine 1 cup of coarse-ground coffee with 4 cups of cold water in a large jar or pitcher. Stir gently to ensure all grounds are saturated. Cover and steep at room temperature or in the refrigerator for 12-18 hours. After steeping, strain the concentrate through a fine-mesh sieve lined with cheesecloth or a coffee filter. Dilute with water or milk to taste before serving over ice.",
    image: "/drinks/coldbrew.png",
    difficulty: "Easy",
    prepTime: "12-18 hrs",
    caffeineLevel: "High (concentrate)",
    tags: ["Summer", "Make Ahead"]
  },
  {
    id: 12,
    name: "Flat White",
    type: "Coffee",
    category: "Milk Coffees",
    milk: "Dairy",
    sweetness: "Low",
    temperature: "Hot",
    base: "Espresso",
    flavorNotes: ["Smooth", "Velvety"],
    ingredients: ["1 shot espresso", "Steamed milk"],
    instructions: "Brew one shot of espresso into a small, preheated cup. Steam milk to create a very fine, velvety microfoam with minimal air. Gently pour the steamed milk directly into the espresso, aiming for an even integration of coffee and milk with a smooth, flat surface.",
    image: "/drinks/flatwhite.png",
    difficulty: "Medium",
    prepTime: "5 mins",
    caffeineLevel: "High",
    tags: ["Australian", "Creamy"]
  },
  {
    id: 13,
    name: "Café au Lait",
    type: "Coffee",
    category: "Milk Coffees",
    milk: "Dairy",
    sweetness: "Medium",
    temperature: "Hot",
    base: "Brewed Coffee",
    flavorNotes: ["Mild", "Balanced"],
    ingredients: ["1 cup brewed coffee", "1 cup steamed milk"],
    instructions: "Brew a fresh cup of your favorite coffee. Simultaneously, steam 1 cup of milk until hot. In a large mug, combine equal parts hot brewed coffee and steamed milk. Stir gently and enjoy this classic breakfast beverage.",
    image: "/drinks/cafeaulati.png",
    difficulty: "Easy",
    prepTime: "5 mins",
    caffeineLevel: "Medium",
    tags: ["French", "Breakfast"]
  },
  {
    id: 14,
    name: "Espresso Tonic",
    type: "Coffee",
    category: "Flavored Coffees",
    milk: "None",
    sweetness: "Low",
    temperature: "Cold",
    base: "Espresso",
    flavorNotes: ["Citrusy", "Effervescent"],
    ingredients: ["1 shot espresso", "Tonic water", "Ice"],
    instructions: "Fill a glass with ice. Pour in your desired amount of tonic water. Slowly brew one shot of espresso and gently pour it over the back of a spoon into the tonic water to create a layered effect. Serve immediately and enjoy the refreshing contrast.",
    image: "/drinks/espressotonic.png",
    difficulty: "Easy",
    prepTime: "3 mins",
    caffeineLevel: "High",
    tags: ["Refreshing", "Modern"]
  },
  {
    id: 15,
    name: "Cloud Coffee",
    type: "Coffee",
    category: "Flavored Coffees",
    milk: "Dairy",
    sweetness: "Medium",
    temperature: "Cold",
    base: "Espresso",
    flavorNotes: ["Frothy", "Tropical"],
    ingredients: ["1 shot espresso", "Coconut water", "Cream", "Ice"],
    instructions: "Brew a shot of espresso. In a separate small bowl, whisk or froth a small amount of heavy cream until light and airy. In a serving glass, fill with ice, then pour in coconut water. Gently pour the frothed cream over the coconut water, and finally, carefully add the espresso shot on top to create a beautiful cloud effect.",
    image: "/drinks/cloudcoffee.png",
    difficulty: "Medium",
    prepTime: "5 mins",
    caffeineLevel: "High",
    tags: ["Trendy", "Summer"]
  },
  {
    id: 16,
    name: "Vietnamese Egg Coffee",
    type: "Coffee",
    category: "Flavored Coffees",
    milk: "None",
    sweetness: "High",
    temperature: "Hot",
    base: "Robusta Coffee",
    flavorNotes: ["Rich", "Custardy"],
    ingredients: ["1 shot robusta coffee", "1 egg yolk", "2 tbsp condensed milk"],
    instructions: "First, brew a strong shot of robusta coffee and keep it hot. In a separate bowl, whisk one egg yolk with two tablespoons of condensed milk until the mixture is thick, pale, and frothy. Pour the hot coffee into a small glass or cup, then gently spoon the frothy egg mixture on top. Serve immediately.",
    image: "/drinks/vietnameseeggcoffee.png",
    difficulty: "Medium",
    prepTime: "7 mins",
    caffeineLevel: "High",
    tags: ["Vietnamese", "Dessert"]
  },
  {
    id: 17,
    name: "Affogato",
    type: "Coffee",
    category: "Dessert Coffees",
    milk: "Dairy",
    sweetness: "High",
    temperature: "Hot & Cold",
    base: "Espresso",
    flavorNotes: ["Creamy", "Bold"],
    ingredients: ["1 scoop vanilla ice cream", "1 shot hot espresso"],
    instructions: "Place one scoop of vanilla ice cream into a small, chilled serving glass or bowl. Immediately brew a hot shot of espresso and pour it directly over the ice cream. The hot espresso will melt the ice cream, creating a delicious creamy coffee dessert. Serve and enjoy quickly.",
    image: "/drinks/affogato.png",
    difficulty: "Easy",
    prepTime: "2 mins",
    caffeineLevel: "High",
    tags: ["Italian", "Dessert"]
  },
  {
    id: 18,
    name: "Irish Coffee",
    type: "Coffee",
    category: "Alcoholic Coffees",
    milk: "Cream",
    sweetness: "Medium",
    temperature: "Hot",
    base: "Brewed Coffee",
    flavorNotes: ["Warm", "Whiskey-infused"],
    ingredients: ["1 cup hot coffee", "1 shot Irish whiskey", "1 tsp brown sugar", "Whipped cream"],
    instructions: "Pour hot brewed coffee into a heat-proof glass. Add Irish whiskey and brown sugar, stirring until the sugar dissolves completely. Gently float a layer of lightly whipped cream on top of the coffee mixture by pouring it over the back of a spoon. Do not stir the cream into the coffee; it should remain as a distinct layer.",
    image: "/drinks/irishcoffee.png",
    difficulty: "Medium",
    prepTime: "5 mins",
    caffeineLevel: "Medium",
    tags: ["Classic", "Evening"]
  },
  {
    id: 19,
    name: "Cortado",
    type: "Coffee",
    category: "Milk Coffees",
    milk: "Dairy",
    sweetness: "Low",
    temperature: "Hot",
    base: "Espresso",
    flavorNotes: ["Balanced", "Smooth"],
    ingredients: ["1 shot espresso", "1 shot steamed milk"],
    instructions: "Brew one shot of espresso into a small, preheated glass. Steam an equal amount of milk to create a very smooth, velvety texture with minimal foam. Gently pour the steamed milk into the espresso, aiming for a perfectly balanced ratio and smooth integration. Serve immediately.",
    image: "/drinks/cortado.png",
    difficulty: "Easy",
    prepTime: "4 mins",
    caffeineLevel: "High",
    tags: ["Spanish", "Minimalist"]
  },
  {
    id: 20,
    name: "Dalgona Coffee",
    type: "Coffee",
    category: "Whipped Coffees",
    milk: "Dairy",
    sweetness: "High",
    temperature: "Cold",
    base: "Instant Coffee",
    flavorNotes: ["Sweet", "Frothy"],
    ingredients: ["2 tbsp instant coffee", "2 tbsp sugar", "2 tbsp hot water", "1 cup milk"],
    instructions: "In a mixing bowl, combine instant coffee, sugar, and hot water. Whisk vigorously by hand or with an electric mixer until the mixture becomes thick, creamy, and light brown, forming stiff peaks. Fill a glass with ice and pour in 1 cup of your preferred milk. Spoon the whipped coffee mixture on top of the milk. Stir before drinking to combine the layers.",
    image: "/drinks/dalgonacoffee.png",
    difficulty: "Medium",
    prepTime: "10 mins",
    caffeineLevel: "Medium",
    tags: ["Viral", "Korean"]
  },
  {
    id: 21,
    name: "Turkish Coffee",
    type: "Coffee",
    category: "Traditional Coffees",
    milk: "None",
    sweetness: "Variable",
    temperature: "Hot",
    base: "Finely Ground Coffee",
    flavorNotes: ["Strong", "Spiced"],
    ingredients: ["1 tbsp finely ground coffee", "1 cup water", "Sugar (optional)", "Cardamom (optional)"],
    instructions: "Combine finely ground coffee, cold water, and optional sugar and cardamom in a cezve (Turkish coffee pot). Stir briefly. Heat slowly over medium-low heat, without stirring, until foam begins to rise. Just before it boils over, remove from heat. Pour a small amount of foam into your serving cup, then return the cezve to the heat to let it rise again. Repeat once more. Finally, pour the rest of the coffee into the cup, letting the grounds settle at the bottom. Serve hot.",
    image: "/drinks/turkishcoffee.png",
    difficulty: "Medium",
    prepTime: "7 mins",
    caffeineLevel: "High",
    tags: ["Middle Eastern", "Traditional"]
  },
  {
    id: 22,
    name: "Espresso Macchiato",
    type: "Coffee",
    category: "Milk Coffees",
    milk: "Dairy",
    sweetness: "None",
    temperature: "Hot",
    base: "Espresso",
    flavorNotes: ["Bold", "Hint of Milk"],
    ingredients: ["1 shot espresso", "Dollop of frothed milk"],
    instructions: "Brew one shot of espresso directly into a small espresso cup. Steam a very small amount of milk to create a firm, fine foam. Using a spoon, scoop just a dollop of this frothed milk and place it directly on top of the espresso. The term 'macchiato' means 'stained' or 'marked' in Italian, referring to the espresso being marked with milk.",
    image: "/drinks/esp.png",
    difficulty: "Easy",
    prepTime: "3 mins",
    caffeineLevel: "High",
    tags: ["Italian", "Strong"]
  },
  {
    id: 23,
    name: "Herbal Infusion",
    type: "Tea",
    category: "Herbal Teas",
    milk: "None",
    sweetness: "None",
    temperature: "Hot",
    base: "Herbal Tea",
    flavorNotes: ["Soothing", "Aromatic"],
    ingredients: ["1 herbal tea bag", "1 cup hot water"],
    instructions: "Bring fresh water to a boil. Place one herbal tea bag into your mug. Pour the boiling water over the tea bag and let it steep for at least 5 minutes, or longer for a stronger flavor. Remove the tea bag and enjoy your soothing herbal infusion.",
    image: "/drinks/herbalinfusion.png",
    difficulty: "Easy",
    prepTime: "5 mins",
    caffeineLevel: "None",
    tags: ["Relaxing", "Wellness"]
  },
  {
    id: 24,
    name: "Sparkling Water with Lime",
    type: "Other",
    category: "Water",
    milk: "None",
    sweetness: "None",
    temperature: "Cold",
    base: "Water",
    flavorNotes: ["Refreshing", "Citrusy"],
    ingredients: ["1 cup sparkling water", "1/4 lime, squeezed"],
    instructions: "Fill a glass with ice. Pour in 1 cup of sparkling water. Squeeze the juice from a quarter of a lime directly into the glass. Stir gently and serve for a simple, refreshing drink.",
    image: "/drinks/sparklingwater.png",
    difficulty: "Easy",
    prepTime: "2 mins",
    caffeineLevel: "None",
    tags: ["Simple", "Hydrating"]
  },
  {
    id: 25,
    name: "Peppermint Tea",
    type: "Tea",
    category: "Herbal Teas",
    milk: "None",
    sweetness: "None",
    temperature: "Hot",
    base: "Herbal Tea",
    flavorNotes: ["Minty", "Cooling"],
    ingredients: ["1 peppermint tea bag", "1 cup boiling water"],
    instructions: "Bring fresh water to a rolling boil. Place one peppermint tea bag into your mug. Pour the boiling water over the tea bag and let it steep for 3-5 minutes, depending on your preferred strength. Remove the tea bag and enjoy the soothing, minty flavor.",
    image: "/drinks/pepperminttea.png",
    difficulty: "Easy",
    prepTime: "5 mins",
    caffeineLevel: "None",
    tags: ["Digestive", "Soothing"]
  },
  {
    id: 26,
    name: "Hot Chocolate",
    type: "Other",
    category: "Hot Drinks",
    milk: "Dairy",
    sweetness: "High",
    temperature: "Hot",
    base: "Cocoa",
    flavorNotes: ["Rich", "Sweet", "Chocolatey"],
    ingredients: ["2 tbsp cocoa powder", "2 tbsp sugar", "1 cup milk", "Pinch of salt"],
    instructions: "In a mug, combine cocoa powder, sugar, and a pinch of salt. Heat milk in a small saucepan or microwave until hot but not boiling. Pour a small amount of hot milk into the dry ingredients and whisk vigorously to form a smooth paste. Gradually whisk in the remaining hot milk until fully combined and smooth. Serve immediately, optionally topped with whipped cream or marshmallows.",
    image: "/drinks/hotchocolate.png",
    difficulty: "Easy",
    prepTime: "5 mins",
    caffeineLevel: "Low",
    tags: ["Comfort", "Dessert"]
  },
  {
    id: 27,
    name: "Ginger Tea",
    type: "Tea",
    category: "Herbal Teas",
    milk: "None",
    sweetness: "Low",
    temperature: "Hot",
    base: "Ginger",
    flavorNotes: ["Spicy", "Warming"],
    ingredients: ["1 inch fresh ginger, sliced", "1 cup hot water", "Honey (optional)"],
    instructions: "Peel and thinly slice about a 1-inch piece of fresh ginger. Place the ginger slices in a mug. Bring 1 cup of fresh water to a boil and pour it over the ginger. Let it steep for 5-10 minutes, depending on how strong you like your ginger flavor. Strain the ginger slices before drinking, and add honey or lemon if desired.",
    image: "/drinks/gingertea.png",
    difficulty: "Easy",
    prepTime: "8 mins",
    caffeineLevel: "None",
    tags: ["Wellness", "Spicy"]
  },
  {
    id: 28,
    name: "Mango Lassi",
    type: "Other",
    category: "Smoothies",
    milk: "Dairy",
    sweetness: "High",
    temperature: "Cold",
    base: "  Fruit",
    flavorNotes: ["Sweet", "Creamy", "Fruity"],
    ingredients: ["1 cup chopped mango", "1/2 cup yogurt", "1/4 cup milk", "1 tbsp sugar"],
    instructions: "In a blender, combine 1 cup of chopped ripe mango (fresh or frozen), 1/2 cup of plain yogurt, 1/4 cup of milk, and 1 tablespoon of sugar. Blend on high speed until the mixture is completely smooth and creamy. Pour into a glass and serve immediately, optionally garnished with a sprinkle of cardamom or a mint leaf.",
    image: "/drinks/mangolassi.png",
    difficulty: "Medium",
    prepTime: "5 mins",
    caffeineLevel: "None",
    tags: ["Indian", "Refreshing"]
  },
  {
    id: 29,
    name: "Iced Tea",
    type: "Tea",
    category: "Pure Teas",
    milk: "None",
    sweetness: "Variable",
    temperature: "Cold",
    base: "Black Tea",
    flavorNotes: ["Refreshing", "Simple"],
    ingredients: ["1 black tea bag", "1 cup hot water", "Ice", "Lemon (optional)"],
    instructions: "Place one black tea bag in a heat-proof cup and pour 1 cup of hot water over it. Steep for 3-5 minutes, then remove the tea bag. Let the tea cool completely to room temperature. Fill a tall glass with ice, then pour the cooled tea over the ice. Add a slice of lemon if desired, and sweeten to taste. Stir well before serving.",
    image: "/drinks/icedtea.png",
    difficulty: "Easy",
    prepTime: "15 mins",
    caffeineLevel: "Medium",
    tags: ["Summer", "Classic"]
  },
  {
    id: 30,
    name: "Cucumber Mint Water",
    type: "Other",
    category: "Water",
    milk: "None",
    sweetness: "None",
    temperature: "Cold",
    base: "Water",
    flavorNotes: ["Cooling", "Fresh"],
    ingredients: ["1/2 cucumber, sliced", "5-6 mint leaves", "4 cups water"],
    instructions: "Thinly slice half a cucumber and gently crush 5-6 fresh mint leaves to release their aroma. Place the cucumber slices and mint leaves in a pitcher. Pour 4 cups of cold water over them. Stir gently and chill in the refrigerator for at least 1 hour to allow the flavors to infuse. Serve over ice.",
    image: "/drinks/cucumber.png",
    difficulty: "Easy",
    prepTime: "60 mins",
    caffeineLevel: "None",
    tags: ["Detox", "Hydrating"]
  },
  {
    id: 31,
    name: "Golden Milk (Turmeric Latte)",
    type: "Other",
    category: "Hot Drinks",
    milk: "Almond",
    sweetness: "Medium",
    temperature: "Hot",
    base: "Milk",
    flavorNotes: ["Spiced", "Earthy"],
    ingredients: ["1 cup almond milk", "1 tsp turmeric", "1/2 tsp ginger powder", "Pinch black pepper", "1 tsp honey"],
    instructions: "In a small saucepan, combine almond milk, turmeric, ginger powder, and a pinch of black pepper (which helps activate the turmeric). Heat over medium heat, whisking constantly, until the mixture is hot and frothy but not boiling. Remove from heat, stir in honey or your preferred sweetener until dissolved. Pour into a mug and enjoy immediately.",
    image: "/drinks/goldenmilk.png",
    difficulty: "Easy",
    prepTime: "5 mins",
    caffeineLevel: "None",
    tags: ["Wellness", "Anti-inflammatory"]
  },
  {
    id: 32,
    name: "Sparkling Cranberry Juice",
    type: "Other",
    category: "Fruit Drinks",
    milk: "None",
    sweetness: "Medium",
    temperature: "Cold",
    base: "Fruit",
    flavorNotes: ["Tart", "Bubbly"],
    ingredients: ["1/2 cup cranberry juice", "1/2 cup sparkling water", "Ice", "Lime wedge"],
    instructions: "Fill a glass with ice. Pour in 1/2 cup of cranberry juice. Top with 1/2 cup of sparkling water. Squeeze in a lime wedge for an extra citrusy kick. Stir gently and serve immediately for a refreshing and festive drink.",
    image: "/drinks/cranberry.png",
    difficulty: "Easy",
    prepTime: "2 mins",
    caffeineLevel: "None",
    tags: ["Festive", "Refreshing"]
  },
  {
    id: 33,
    name: "Spiced Apple Cider",
    type: "Other",
    category: "Hot Drinks",
    milk: "None",
    sweetness: "High",
    temperature: "Hot",
    base: "Fruit",
    flavorNotes: ["Warm", "Spiced"],
    ingredients: ["1 cup apple cider", "1 cinnamon stick", "2 cloves"],
    instructions: "In a small saucepan, combine 1 cup of apple cider, one cinnamon stick, and two whole cloves. Bring the mixture to a gentle simmer over medium heat. Reduce heat to low and let it simmer for at least 10 minutes to allow the flavors to infuse. Remove the spices before serving. Pour into a mug and enjoy this comforting, warm drink.",
    image: "/drinks/applecider.png",
    difficulty: "Easy",
    prepTime: "10 mins",
    caffeineLevel: "None",
    tags: ["Autumn", "Comfort"]
  },
  {
    id: 34,
    name: "Horchata",
    type: "Other",
    category: "Traditional Drinks",
    milk: "None",
    sweetness: "Medium",
    temperature: "Cold",
    base: "Rice",
    flavorNotes: ["Creamy", "Cinnamony"],
    ingredients: ["1 cup white rice", "4 cups water", "1 cinnamon stick", "1/2 cup sugar", "Vanilla extract"],
    instructions: "Rinse 1 cup of white rice thoroughly. Combine the rinsed rice, 4 cups of water, and 1 cinnamon stick in a bowl. Let it soak at room temperature for at least 4 hours, or preferably overnight. After soaking, blend the rice, water, and cinnamon stick until smooth. Strain the mixture through a fine-mesh sieve or cheesecloth to remove any solids. Stir in 1/2 cup of sugar and a dash of vanilla extract until dissolved. Chill thoroughly before serving over ice.",
    image: "/drinks/horchata.png",
    difficulty: "Medium",
    prepTime: "8 hrs",
    caffeineLevel: "None",
    tags: ["Mexican", "Sweet"]
  },
  {
    id: 35,
    name: "Agua Fresca de Jamaica (Hibiscus)",
    type: "Other",
    category: "Fruit Drinks",
    milk: "None",
    sweetness: "Medium",
    temperature: "Cold",
    base: "Herbal",
    flavorNotes: ["Floral", "Tart"],
    ingredients: ["1 cup dried hibiscus flowers", "4 cups water", "1/2 cup sugar"],
    instructions: "In a saucepan, combine 1 cup of dried hibiscus flowers with 4 cups of water. Bring to a boil, then reduce heat and simmer for 10 minutes. Remove from heat and let steep for another 10 minutes. Strain the liquid, discarding the flowers. While still warm, stir in 1/2 cup of sugar until dissolved. Let cool completely, then chill in the refrigerator. Serve cold over ice.",
    image: "/drinks/agua.png",
    difficulty: "Easy",
    prepTime: "20 mins",
    caffeineLevel: "None",
    tags: ["Mexican", "Refreshing"]
  },
  {
    id: 36,
    name: "Red Eye",
    type: "Coffee",
    category: "Black Coffees",
    milk: "None",
    sweetness: "None",
    temperature: "Hot",
    base: "Brewed Coffee",
    flavorNotes: ["Extra Strong", "Bold"],
    ingredients: ["1 cup brewed coffee", "1 shot espresso"],
    instructions: "Brew a strong cup of your favorite black coffee. In a separate espresso machine, pull one shot of espresso. Carefully pour the hot espresso shot directly into your freshly brewed cup of coffee. Stir briefly and serve immediately for an extra caffeine kick.",
    image: "/drinks/redeye.png",
    difficulty: "Easy",
    prepTime: "2 mins",
    caffeineLevel: "Very High",
    tags: ["Strong", "Wake Up"]
  },
  {
    id: 37,
    name: "Black Tea (Hot)",
    type: "Tea",
    category: "Pure Teas",
    milk: "None",
    sweetness: "None",
    temperature: "Hot",
    base: "Black Tea",
    flavorNotes: ["Bold", "Malty"],
    ingredients: ["1 black tea bag", "1 cup hot water"],
    instructions: "Bring fresh, cold water to a rolling boil. Place one black tea bag (or 1 teaspoon of loose leaf black tea in an infuser) into your mug. Pour the boiling water over the tea. Steep for 3-5 minutes, depending on your desired strength. Remove the tea bag/infuser and enjoy your classic hot black tea.",
    image: "/drinks/blacktea.png",
    difficulty: "Easy",
    prepTime: "3 mins",
    caffeineLevel: "High",
    tags: ["Classic", "Morning"]
  },
  {
    id: 38,
    name: "Sparkling Lemon & Ginger",
    type: "Other",
    category: "Fruit Drinks",
    milk: "None",
    sweetness: "Low",
    temperature: "Cold",
    base: "Fruit",
    flavorNotes: ["Zingy", "Spicy"],
    ingredients: ["1/2 cup lemon juice", "1 inch ginger, sliced", "1 cup sparkling water", "Ice"],
    instructions: "In a glass, add a few slices of fresh ginger and 1/2 cup of fresh lemon juice. Muddle them gently to release the ginger's flavor. Fill the glass with ice, then top with 1 cup of sparkling water. Stir lightly and serve for a refreshing and zingy beverage.",
    image: "/drinks/sparklinglemon.png",
    difficulty: "Easy",
    prepTime: "5 mins",
    caffeineLevel: "None",
    tags: ["Healthy", "Refreshing"]
  },
  {
    id: 39,
    name: "White Tea",
    type: "Tea",
    category: "Pure Teas",
    milk: "None",
    sweetness: "None",
    temperature: "Hot",
    base: "White Tea",
    flavorNotes: ["Delicate", "Floral"],
    ingredients: ["1 tsp white tea leaves", "1 cup hot water (80°C)"],
    instructions: "Heat fresh water to approximately 80°C (175°F). Place 1 teaspoon of white tea leaves into a tea infuser or directly into your cup. Pour the hot water over the leaves and steep for 1-3 minutes. White tea is delicate, so avoid over-steeping. Remove the leaves and enjoy its subtle flavor.",
    image: "/drinks/whitetea.png",
    difficulty: "Easy",
    prepTime: "2 mins",
    caffeineLevel: "Low",
    tags: ["Delicate", "Subtle"]
  },
  {
    id: 40,
    name: "Espresso Con Panna",
    type: "Coffee",
    category: "Dessert Coffees",
    milk: "Cream",
    sweetness: "High",
    temperature: "Hot",
    base: "Espresso",
    flavorNotes: ["Rich", "Sweet"],
    ingredients: ["1 shot espresso", "Whipped cream"],
    instructions: "Brew one shot of hot espresso directly into a small espresso cup. Immediately top the hot espresso with a generous dollop of freshly made or canned whipped cream. Serve and enjoy this simple, indulgent coffee dessert.",
    image: "/drinks/conpanna.png",
    difficulty: "Easy",
    prepTime: "2 mins",
    caffeineLevel: "High",
    tags: ["Italian", "Dessert"]
  },
  {
    id: 41,
    name: "Pu-erh Tea",
    type: "Tea",
    category: "Fermented Teas",
    milk: "None",
    sweetness: "None",
    temperature: "Hot",
    base: "Pu-erh Tea",
    flavorNotes: ["Earthy", "Deep"],
    ingredients: ["1 tsp Pu-erh tea leaves", "1 cup hot water"],
    instructions: "First, 'rinse' the Pu-erh tea leaves by pouring hot water over them in a mug or teapot and immediately discarding the water. This opens up the leaves. Then, pour fresh hot water over the leaves and steep for 3-5 minutes, or longer for a stronger brew. Strain the leaves and enjoy the rich, earthy flavor.",
    image: "/drinks/pu-erh.png",
    difficulty: "Medium",
    prepTime: "4 mins",
    caffeineLevel: "Medium",
    tags: ["Aged", "Rich"]
  },
  {
    id: 42,
    name: "Iced Green Tea Latte",
    type: "Tea",
    category: "Milk Teas",
    milk: "Dairy",
    sweetness: "Medium",
    temperature: "Cold",
    base: "Green Tea",
    flavorNotes: ["Grassy", "Creamy"],
    ingredients: ["1 tsp matcha powder", "2 tbsp hot water", "1 cup cold milk", "Ice"],
    instructions: "In a small bowl, combine 1 teaspoon of matcha powder with 2 tablespoons of hot (not boiling) water. Whisk vigorously until the matcha is fully dissolved and frothy. Fill a tall glass with ice. Pour 1 cup of cold milk into the glass, then gently pour the whisked matcha over the milk. Stir well to combine before enjoying this refreshing iced latte.",
    image: "/drinks/greentealatte.png",
    difficulty: "Medium",
    prepTime: "5 mins",
    caffeineLevel: "Medium",
    tags: ["Refreshing", "Modern"]
  },
  {
    id: 43,
    name: "Smoothie Bowl (Berry)",
    type: "Other",
    category: "Smoothies",
    milk: "Almond",
    sweetness: "Medium",
    temperature: "Cold",
    base: "Fruit",
    flavorNotes: ["Fruity", "Thick"],
    ingredients: ["1 cup mixed berries", "1/2 cup almond milk", "1/2 banana", "Toppings (granola, fruit)"],
    instructions: "In a high-speed blender, combine 1 cup of frozen mixed berries, 1/2 cup of almond milk, and 1/2 a frozen banana. Blend until completely thick and creamy, adding a tiny splash more milk if needed to blend. Pour the smoothie into a bowl and arrange your favorite toppings, such as granola, fresh fruit, or shredded coconut, on top. Serve immediately.",
    image: "/drinks/smoothiebowl.png",
    difficulty: "Easy",
    prepTime: "7 mins",
    caffeineLevel: "None",
    tags: ["Breakfast", "Healthy"]
  },
  {
    id: 44,
    name: "Robusta Espresso",
    type: "Coffee",
    category: "Black Coffees",
    milk: "None",
    sweetness: "None",
    temperature: "Hot",
    base: "Robusta Espresso",
    flavorNotes: ["Strong", "Earthy"],
    ingredients: ["1 shot robusta espresso beans"],
    instructions: "Using an espresso machine, grind fresh robusta espresso beans to a fine consistency. Tamp the grounds evenly into the portafilter. Pull one shot of robusta espresso, aiming for a rich, dark pour with a thick crema. Serve immediately in a demitasse cup.",
    image: "/drinks/robusta.png",
    difficulty: "Medium",
    prepTime: "1 min",
    caffeineLevel: "Very High",
    tags: ["Strong", "Pure"]
  },
  {
    id: 45,
    name: "Oolong Tea",
    type: "Tea",
    category: "Oolong Teas",
    milk: "None",
    sweetness: "None",
    temperature: "Hot",
    base: "Oolong Tea",
    flavorNotes: ["Floral", "Fruity"],
    ingredients: ["1 tsp oolong tea leaves", "1 cup hot water"],
    instructions: "Heat fresh water to about 90°C (195°F). Place 1 teaspoon of oolong tea leaves into a tea infuser or directly into your cup. Pour the hot water over the leaves and steep for 2-4 minutes. Oolong tea leaves can often be re-steeped multiple times, with each infusion offering new flavor nuances. Remove the leaves and enjoy.",
    image: "/drinks/oolong.png",
    difficulty: "Easy",
    prepTime: "3 mins",
    caffeineLevel: "Medium",
    tags: ["Complex", "Aromatic"]
  },
  {
    id: 46,
    name: "Coconut Water",
    type: "Other",
    category: "Water",
    milk: "None",
    sweetness: "Low",
    temperature: "Cold",
    base: "Coconut Water",
    flavorNotes: ["Hydrating", "Subtly Sweet"],
    ingredients: ["1 can/fresh coconut water", "Ice (optional)"],
    instructions: "Open a fresh young coconut or a can of unsweetened coconut water. Pour the coconut water into a glass. Add ice if desired for extra chill. Serve immediately as a naturally hydrating and subtly sweet beverage.",
    image: "/drinks/coconut.png",
    difficulty: "Very Easy",
    prepTime: "1 min",
    caffeineLevel: "None",
    tags: ["Electrolyte", "Tropical"]
  },
  {
    id: 47,
    name: "Caramel Macchiato",
    type: "Coffee",
    category: "Flavored Coffees",
    milk: "Dairy",
    sweetness: "High",
    temperature: "Hot",
    base: "Espresso",
    flavorNotes: ["Sweet", "Caramel"],
    ingredients: ["1 shot espresso", "1 cup steamed milk", "Vanilla syrup", "Caramel drizzle"],
    instructions: "Pump vanilla syrup into the bottom of your mug. Steam 1 cup of milk until hot and slightly frothy. Pour the steamed milk over the vanilla syrup. Brew one shot of espresso and gently pour it on top of the milk, allowing it to create a distinct layer. Finish with a generous drizzle of caramel sauce over the top.",
    image: "/drinks/caramel.png",
    difficulty: "Medium",
    prepTime: "7 mins",
    caffeineLevel: "High",
    tags: ["Dessert Drink", "Popular"]
  },
  {
    id: 48,
    name: "Rooibos Tea",
    type: "Tea",
    category: "Herbal Teas",
    milk: "None",
    sweetness: "None",
    temperature: "Hot",
    base: "Rooibos Tea",
    flavorNotes: ["Earthy", "Sweet"],
    ingredients: ["1 tsp rooibos tea leaves", "1 cup boiling water"],
    instructions: "Bring fresh water to a rolling boil. Place 1 teaspoon of rooibos tea leaves (or one tea bag) into your mug. Pour the boiling water over the rooibos and let it steep for 5-7 minutes. Rooibos is naturally caffeine-free and can be steeped longer without becoming bitter. Remove the leaves/bag and enjoy.",
    image: "/drinks/rooibos.png",
    difficulty: "Easy",
    prepTime: "6 mins",
    caffeineLevel: "None",
    tags: ["Caffeine-Free", "African"]
  },
  {
    id: 49,
    name: "Iced Peach Tea",
    type: "Tea",
    category: "Flavored Teas",
    milk: "None",
    sweetness: "Medium",
    temperature: "Cold",
    base: "Black Tea",
    flavorNotes: ["Fruity", "Sweet"],
    ingredients: ["1 black tea bag", "1 cup hot water", "Peach syrup", "Ice"],
    instructions: "Place one black tea bag in a heat-proof cup and pour 1 cup of hot water over it. Steep for 3-5 minutes, then remove the tea bag. Allow the tea to cool completely to room temperature. In a tall glass, add your desired amount of peach syrup. Fill the glass with ice, then pour the cooled black tea over the ice. Stir well and serve.",
    image: "/drinks/peach.png",
    difficulty: "Easy",
    prepTime: "10 mins",
    caffeineLevel: "Medium",
    tags: ["Summer", "Fruity"]
  },
  {
    id: 50,
    name: "Mocha Frappuccino",
    type: "Coffee",
    category: "Blended Coffees",
    milk: "Dairy",
    sweetness: "High",
    temperature: "Cold",
    base: "Coffee",
    flavorNotes: ["Chocolate", "Blended"],
    ingredients: ["1 cup cold coffee", "1/2 cup milk", "Chocolate syrup", "Ice", "Whipped cream"],
    instructions: "In a blender, combine 1 cup of cold brewed coffee (or leftover espresso), 1/2 cup of milk, a generous amount of chocolate syrup, and a handful of ice. Blend on high speed until the mixture is smooth, thick, and slushy. Pour into a tall glass and top generously with whipped cream and an extra drizzle of chocolate syrup, if desired. Serve immediately.",
    image: "/drinks/mochafrappe.png",
    difficulty: "Medium",
    prepTime: "5 mins",
    caffeineLevel: "High",
    tags: ["Dessert Drink", "Blended"]
  }
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
// These elements are outside the filtersSidebar and remain stable, so global capture is fine
const mobileFiltersToggle = document.getElementById('mobile-filters-toggle');
const filtersSidebar = document.getElementById('filters-sidebar'); 
const navLinks = document.querySelectorAll('.nav-link');
const mainFooter = document.getElementById('main-footer');

// --- HELPER FUNCTIONS ---
const getUniqueValues = (recipes, key) => {
  const allValues = new Set(recipes.flatMap(recipe => {
    if (Array.isArray(recipe[key])) {
      return recipe[key];
    }
    return [recipe[key]];
  }).filter(Boolean));
  return ["Any", ...Array.from(allValues).sort()];
};

const parsePrepTime = (timeString) => {
  if (!timeString) return Infinity;
  timeString = timeString.toLowerCase();
  let totalMinutes = 0;
  const minsMatch = timeString.match(/(\d+)\s*mins?/);
  if (minsMatch) {
    totalMinutes += parseInt(minsMatch[1], 10);
  }
  const hrsMatch = timeString.match(/(\d+)-?(\d*)\s*hrs?/);
  if (hrsMatch) {
    const hours = parseInt(hrsMatch[1], 10);
    totalMinutes += hours * 60;
  }
  return totalMinutes === 0 ? Infinity : totalMinutes;
};

const mapDifficultyToValue = (difficulty) => {
  const difficultyMap = {
    "easy": 1,
    "medium": 2,
    "hard": 3
  };
  if (typeof difficulty === 'string') {
    return difficultyMap[difficulty.toLowerCase()] || 4;
  }
  return 4;
};

// --- MODAL & UI LOGIC ---
function openModal(modal) {
  modal.classList.remove('hidden');
  mainFooter.style.display = 'none';
}

function closeModal(modal) {
  modal.classList.add('hidden');
  const isAnyModalOpen = !loginModal.classList.contains('hidden') || !registerModal.classList.contains('hidden');
  if (initialView.style.display === 'none' && !isAnyModalOpen) {
    mainFooter.style.display = 'block';
  } else {
    mainFooter.style.display = 'none';
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
    mainFooter.style.display = 'block';
  } else {
    initialView.style.display = 'flex';
    pagesContainer.classList.add('hidden');
    authContainer.innerHTML = `<button id="login-nav-btn" class="auth-button login-button">Login</button><button id="register-nav-btn" class="auth-button register-button">Register</button>`;
    document.getElementById('login-nav-btn').addEventListener('click', () => openModal(loginModal));
    document.getElementById('register-nav-btn').addEventListener('click', () => openModal(registerModal));
    if (state.unsubscribeFavorites) { state.unsubscribeFavorites(); state.unsubscribeFavorites = null; }
    state.userFavorites.clear();
    showPage('home');
    mainFooter.style.display = 'none';
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

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  if (pageId === 'favorites') {
    renderFavoritesPage();
  } else if (pageId === 'home') {
    applyFiltersAndRender();
  }
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
    const instructionsArray = Array.isArray(recipe.instructions)
      ? recipe.instructions
      : typeof recipe.instructions === 'string'
        ? recipe.instructions.split('.').map(s => s.trim()).filter(s => s.length > 0)
        : [];

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
                                    ${instructionsArray.map(step => `<li>${step}.</li>`).join('')}
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

  // Build the entire innerHTML for the filtersSidebar, including the close button
  filtersSidebar.innerHTML = `
    <button class="filters-close-button" aria-label="Hide Filters">
      <i data-lucide="x"></i>
    </button>
    <h2 class="filters-title">Find Your Drink</h2>
    <p class="filters-subtitle">Adjust preferences to discover recipes.</p>
    <div class="search-container">
      <input type="text" id="searchInput" placeholder="Search name, ingredient..." class="search-input" />
      <i data-lucide="search" class="search-icon h-5 w-5"></i>
    </div>
    <div id="filterSelectorsContent"></div>
    <button id="resetFilters" class="reset-filters">
      <i data-lucide="x" class="reset-icon h-5 w-5"></i> Reset All Filters
    </button>
  `;

  // Get the newly created container for filter selectors (must be done after innerHTML is set)
  const filterSelectorsContent = document.getElementById('filterSelectorsContent');

  filterSelectorsContent.innerHTML = Object.entries(preferenceOptions).map(([key, options]) => `
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

  // Attach event listener to the new close button after it's added to the DOM
  document.querySelector('.filters-close-button').addEventListener('click', () => {
    filtersSidebar.classList.remove('active');
    // Update the mobile toggle button text and icon when filters are hidden
    if (mobileFiltersToggle) {
        const toggleIcon = mobileFiltersToggle.querySelector('i');
        const toggleTextSpan = mobileFiltersToggle.querySelector('span');
        if (toggleIcon) toggleIcon.setAttribute('data-lucide', 'filter');
        if (toggleTextSpan) toggleTextSpan.textContent = 'Show Filters';
        lucide.createIcons(); // Re-render icon
    }
  });

  // Re-attach event listeners for filter selects as they are dynamically created
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

  // Re-select searchInput here because its parent's innerHTML is rebuilt by createFilterSelectors
  const currentSearchInput = document.getElementById('searchInput');
  if (currentSearchInput) {
      // Update state.searchTerm from the current input value
      state.searchTerm = currentSearchInput.value.toLowerCase();
  }

  // Apply search term filter
  if (state.searchTerm) {
    recipesToFilter = recipesToFilter.filter(r =>
      r.name.toLowerCase().includes(state.searchTerm) ||
      (r.ingredients && r.ingredients.some(i => i.toLowerCase().includes(state.searchTerm)))
    );
  }

  // Apply preference filters
  Object.entries(state.preferences).forEach(([key, value]) => {
    if (value && value !== 'any') {
      recipesToFilter = recipesToFilter.filter(r =>
        String(r[key]).toLowerCase() === value
      );
    }
  });

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
  // These elements are recreated when filtersSidebar.innerHTML is set, so re-select them here.
  const currentSearchInput = document.getElementById('searchInput');
  const currentResetFiltersBtn = document.getElementById('resetFilters');

  if (currentSearchInput) { 
      currentSearchInput.addEventListener('input', (e) => { state.searchTerm = e.target.value.toLowerCase(); applyFiltersAndRender(); });
  }
  
  if (currentResetFiltersBtn) { 
      currentResetFiltersBtn.addEventListener('click', () => { 
          state.preferences = {}; 
          state.searchTerm = ""; 
          // Ensure search input value is cleared
          if (document.getElementById('searchInput')) {
            document.getElementById('searchInput').value = ""; 
          }
          document.querySelectorAll('.filter-select').forEach(s => s.value = 'any'); 
          applyFiltersAndRender();
      });
  }

  if (mobileFiltersToggle && filtersSidebar) {
    mobileFiltersToggle.addEventListener('click', () => { 
      filtersSidebar.classList.toggle('active'); 
      const toggleIcon = mobileFiltersToggle.querySelector('i');
      const toggleTextSpan = mobileFiltersToggle.querySelector('span');
      
      if (toggleIcon && toggleTextSpan) { 
          if (filtersSidebar.classList.contains('active')) {
            toggleTextSpan.textContent = 'Hide Filters';
            toggleIcon.setAttribute('data-lucide', 'x'); 
          } else {
            toggleTextSpan.textContent = 'Show Filters';
            toggleIcon.setAttribute('data-lucide', 'filter');
          }
          lucide.createIcons(); 
      }
    });
  }
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

  applyFiltersAndRender(); 
  updateUIForAuthState(auth.currentUser);
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});