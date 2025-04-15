

# Rick and Morty Wiki

A React application that allows users to browse and filter characters, episodes, and locations from the Rick and Morty universe. This app utilizes the Rick and Morty API to fetch and display data.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Demo
[Link to live demo](https://rick-morty-wiki-xi.vercel.app/)

## Features
- View and search for characters, episodes, and locations.
- Filter characters by status, gender, and species.
- Pagination for easy navigation through results.
- Responsive design for various screen sizes.

## Technologies
- React
- Bootstrap
- Rick and Morty API

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Kip-rotich46/rick-and-morty-wiki.git
    cd rick-and-morty-wiki
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage
### Characters Page
- **Search:** Enter a character's name to search for specific characters.
- **Filters:** Use filters to narrow down the list of characters by status, gender, and species.
- **Pagination:** Navigate through pages of characters using the pagination controls.

### Episodes Page
- **Search:** Enter an episode name or number to search for specific episodes.
- **Pagination:** Navigate through pages of episodes using the pagination controls.

### Locations Page
- **Search:** Enter a location name to search for specific locations.
- **Pagination:** Navigate through pages of locations using the pagination controls.

## API
This application uses the [Rick and Morty API](https://rickandmortyapi.com/) to fetch data.

### Endpoints
- **Characters:** `https://rickandmortyapi.com/api/character`
- **Episodes:** `https://rickandmortyapi.com/api/episode`
- **Locations:** `https://rickandmortyapi.com/api/location`

### Example Request
To fetch characters:
```javascript
const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}`;

useEffect(() => {
  (async function () {
    let data = await fetch(api).then((res) => res.json());
    updateFetchedData(data);
  })();
}, [api]);
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize the content as needed for your specific application and repository.
