# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Configuring the Application

Once pulled from the Git Repo: 

### Inside the parent directory (edf-parker-react-flask)

1. Run `npm install` to install the necessary node modules
2. Run `npm start' to ensure the front end boots up @ http://localhost:3000

### Inside the backend directory (edf-parker-react-flask/api) & in a seperate shell

1. Ensure [Pipenv](https://formulae.brew.sh/formula/pipenv) is installed
2. Run `pipenv install` 
3. Run `python api.py` or `python3 api.py` to ensure the backend runs @ http://127.0.0.1:5000/
4. Make sure to replace the mongodb connection string in api.py to one that works for you
5. Enjoy!
