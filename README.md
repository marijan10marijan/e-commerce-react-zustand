# E-Commerce App

This is a client-side e-commerce application built using React, where users can browse products, filter them, view product details, and manage a shopping cart. It includes client-side pagination for product navigation and uses Zustand for state management. All product data is stored locally in a `products.js` file, so there is no backend or API fetching in this project.

## Features

### 1. View All Products

- Users can see a list of products displayed in a grid layout.
- Products are paginated with 16 items per page, and users can navigate through pages using pagination buttons.

### 2. Product Filtering

- Users can filter products based on multiple criteria, such as:
  - Price range
  - Gender
  - Size
  - Brand
  - Color
  - Best-selling products
- Filters are applied in real-time, allowing users to refine their search quickly.

### 3. Client-Side Pagination

- Pagination is implemented on the client side, with users able to navigate through pages of products.
- Pagination updates dynamically based on filtered products. For example, if the filter reduces the number of items to less than a page, the pagination adjusts accordingly.

### 4. Search Functionality

- Users can search for products by entering text in the search bar.
- The search matches the product title, color, or gender and updates the product list accordingly.

### 5. Single Product Page

- By clicking on a product, users are navigated to a detailed product page.
- The product page displays:
  - Product image
  - Title
  - Price
  - Size
  - Description
- Users can select the quantity of the product they want to add to the cart and add it with one click.
- A notification is shown when a product is successfully added to the cart.

### 6. Similar Products

- Below the product details on the single product page, users can see a list of similar products based on the current product's category or attributes.

### 7. Shopping Cart

- Users can view all products added to the cart on the cart page.
- Each product displays:
  - Product name
  - Quantity
  - Price
  - Total cost (quantity x price)
- The cart page also displays the total cost of all items in the cart.

### 8. State Management with Zustand

- Zustand is used for global state management to handle the cart and filters.
- All the product filtering, cart updates, and state changes are managed using Zustand, making the app simple and scalable.

## Technologies Used

- **React**: Frontend UI library for building the components.
- **Zustand**: A lightweight state management library for managing the global state of the app (filters, cart, search).
- **React Router**: For routing between different pages (product listing, single product, cart).
- **CSS/ Tailwind CSS**: For styling the UI.
- **JavaScript (ES6+)**: For application logic.

## Running the Project

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/e-commerce-app.git
   ```

2. Navigate into the project directory:

   ```bash
   cd e-commerce-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000`.

## Folder Structure

- `components`: Contains all the React components used in the app.
- `data`: Contains the `products.js` file with product data.
- `store`: Contains Zustand store files for managing global state.

## Future Improvements

- Add a backend with API integration for product data.
- Implement user authentication.
- Add product sorting (by price, rating, etc.).
- Introduce checkout functionality for the cart.

## License

This project is open-source and available under the [MIT License](LICENSE).
