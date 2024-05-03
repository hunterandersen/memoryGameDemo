# Steps to Creating the Memory Game

## Project Setup
1. Create an empty project folder within repos/
1. Create a folder within that called `images`
1. Go to a site like pexels.com (somewhere that has free images for download)
1. Find some images you like that will test the player's memory
1. Download 10-20 free images and save them in your `images` folder
1. Open your terminal to the project folder (the folder that holds `images`, NOT the `images` folder)
1. `npm create vite@latest`
    - For Project Name, simply answer `.`
    - When it says the current directory is not empty, choose to `Ignore files and continue`
    - For Package Name, leave the suggested name, hit enter
    - For framework, choose React
    - For variant, choose JavaScript
1. `npm install`
1. `git init`
1. `git add .`
1. `git commit -m "project setup"`
1. Go to github.com and create a new, empty repository
1. Copy the 3 lines under `…or push an existing repository from the command line`
1. Paste them into the terminal and hit enter

## Setup Image Imports
1. Directly underneath the import statements, create a new line which creates a variable and sets it equal to `import.meta.glob("../images/*")`
1. Then create a second variable and use `Object.keys()` to get an array of all the keys from the first variable.
### Verify the images will work
1. Test that the second variable is working correctly by console logging it.
    - It should have all the image filepaths that point to each of the images you downloaded
1. Render each image onto the screen
    - Inside the return statement, use curly braces to invoke `.map()` on the second variable
    - Create a callback function for `.map()` which returns `<img />` tags
    - The `<img />` tags should have a `src` attribute set equal to the value of each item in the array

## Set up State
1. Create a state variable
    - This variable will remember which images have been displayed previously throughout the game
    - Initialize it to an empty array
