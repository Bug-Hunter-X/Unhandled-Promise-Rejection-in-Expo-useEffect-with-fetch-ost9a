# Unhandled Promise Rejection in Expo useEffect with fetch
This repository demonstrates an uncommon error in Expo related to unhandled promise rejections within a useEffect hook when fetching data using the fetch API. The error message itself can be unclear, making debugging challenging.

## Problem
The original code uses a useEffect hook to fetch data from an external API. However, if the fetch call fails for any reason (network error, server error, etc.), it results in an unhandled promise rejection, leading to a crash or unexpected behavior in the app.

## Solution
The solution involves adding proper error handling within the .then() chain of the fetch call. This allows you to gracefully handle potential errors and provide appropriate feedback to the user, preventing the app from crashing.  The updated code includes a .catch() block to catch and log any errors.
