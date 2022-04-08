::READ ME
::THIS SCRIPT WILL CREATE A SIMPLE FRONT END DIRECTORY STRUCTURE FOR SIMPLE FRONT END PROJECT USING CMD COMMANDS
::FEEL FREE TO ADD YOUR DIRECTORIES ACCORDING TO YOUR DIRECTORY STRUCTURE USING MKDIR
::ITS HAS BEEN TESTED AND WORKING IN WINDOWS 11 64 BIT OS
::TO USE THIS 
::PASTE THE CreateWebAppProject.cmd file in a folder
::RIGHT CLICK ON THE FOLDER CONTAINING CreateWebAppProject.cmd
::CHOOSE OPEN IN WINDOWS TERMINAL OPTION
::WHEN THE TERMINAL/CMD PROMPTS OPEN 
::WRITE CreateWebAppProject.cmd FOLLOWED BY THE NAME OF THE PROJECT
::EXAMPLE IF THE PROJECT NAME IS Calculator
::WRITE CreateWebAppProject.cmd Calculator in front of the prompt and press enter.
::WAIT FOR THE MAGIC.

@echo off

:: enter project name
echo %1

:: setting project name as parent directory name for the project you ant to create
mkdir %1
echo main project %1 created as a parent directory

:: move to the parent directory
cd %1

::CREATING INDEX.HTML FILE
::creating an index file while passing the html boiler plate code to the index.html

echo ^<^!DOCTYPE html^> >> index.html

echo ^<html lang="en"^> >> index.html

echo ^<head^> >> index.html

echo ^<meta charset="UTF-8"^> >> index.html

echo ^<meta http-equiv="X-UA-Compatible" content="IE=edge"^> >> index.html

echo ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^> >> index.html

echo ^<meta name="description" content=""^> >> index.html

echo ^<title^>%1^</title^> >> index.html

echo ^<link rel="stylesheet" href="./css/style.css"^> >> index.html

echo ^</head^> >> index.html

echo ^<body^> >> index.html
    
echo ^<script src="./js/script.js"^>^</script^> >> index.html

echo ^</body^> >> index.html

echo ^</html^> >> index.html

::CREATING CHILD DIRECTORIES

:: create a css directory
mkdir css

::move inside css folder to create style.css
cd ./css

::creating a style.css file by passing the css boiler plate code to the style.css file
echo ^/* Resets*/ >> style.css

echo ^* ^{ >> style.css

echo padding: 0px; >> style.css

echo margin: 0px; >> style.css

echo box-sizing: border-box; >> style.css

echo font-size: 100%%; >> style.css

echo } >> style.css

::back to parent directory
cd ../

:: create a javasvript directory
mkdir js 

::move inside js folder to create script.js file
cd ./js

::creating a script.js file by passing the js boiler plate code to the script.js file
echo console.log("connected to js"); > script.js

::back to parent directory
cd ../

:: create images directory 
mkdir images

:: view all files created
echo JS ,CSS ,AND IMAGES DIRECTORIES HAVE BEEN CREATED AS SHOWN IN THE DIRECTORY STRUCTURE BELOW

dir

echo COMPLETED 

::Script by
::matare





