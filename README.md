

# Travel-List Web App

This project is a React application that helps users create a packing list for their trips. It allows users to add items, mark them as packed, and delete them. It also provides a summary of how much of the packing is complete.

## Features

- **Add Items**: Users can add items with a description and quantity to the packing list.
- **Mark Items as Packed**: Users can toggle the packed status of each item by clicking on the checkbox.
- **Delete Items**: Users can delete items from the list.
- **Sort Items**: The list can be sorted by input order, description, or packed status.
- **Packing Statistics**: Displays the total number of items and the percentage of packed items.

## Demo

You can view a live demo of the app here: [https://travel-list-gules-two.vercel.app](#) 

## Screenshots

![https://github.com/AayushKarwa/travel-list/blob/main/src/assets/demo.png?raw=true](#) 

## Getting Started

To run the app locally, follow these steps:

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (v14.x or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AayushKarwa/travel-list.git
   ```

2. Navigate to the project directory:

   ```bash
   cd travel-list
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser:

   ```
   http://localhost:3000
   ```

### Build for Production

To build the app for production, run:

```bash
npm run build
```

This will create a `dist` folder with the optimized build.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: As the build tool for faster development.
- **CSS**: For styling the components.

## Project Structure

```
travel-list/
│
├── public/           # Static assets
├── src/              # Source files
│   ├── components/   # React components
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── package.json      # Project dependencies
└── README.md         # Project documentation
```

## Contributing

Contributions are welcome! Please follow these steps if you would like to contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push the branch: `git push origin feature/your-feature`
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This README can be customized further based on any additional features you add to the project or any specific guidelines you want to include. Let me know if you need help with anything else!
