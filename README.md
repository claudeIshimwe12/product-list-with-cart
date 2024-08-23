# Angular Products Page with Cart

This project is a simple Angular application that displays a products page with an integrated cart on the right side. Users can add products to the cart, adjust the quantity of products, and remove products from the cart. The project demonstrates the use of Angular components, services, and state management to build a responsive and interactive shopping experience.

### Please follow this link to preview the final project https://small-product-cart-angular.netlify.app/

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features

- **Add to Cart**: Users can add products to the cart by clicking the "Add to Cart" button on a product card.
- **Remove from Cart**: Users can remove products from the cart by clicking the "Remove" button in the cart.
- **Quantity Adjustment**: Users can increase or decrease the quantity of a product in the cart using the "+" and "-" buttons on the product card.
- **Responsive Design**: The layout is responsive, ensuring a smooth experience across different screen sizes.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/angular-products-page.git
   cd angular-products-page
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   ng serve
   ```
   The application will be available at `http://localhost:4200/`.

## Usage

Once the application is running:

1. Browse the products on the main page.
2. Click "Add to Cart" to add a product to the cart.
3. Use the "+" and "-" buttons on the product card to adjust the quantity in the cart.
4. Click "Remove" to remove a product from the cart.

## Technologies Used

- **Angular**: A framework for building dynamic web applications.
- **TypeScript**: A statically typed superset of JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **RxJS**: A library for reactive programming using observables.
- **NgRx**: Possibly there is going to be an NgRx integration in this project, you can check in the branches for the one named feat/rxjs-implementation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add a new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a Pull Request.
