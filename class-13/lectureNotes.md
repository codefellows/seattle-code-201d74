# Lecture Notes

## Persistence of Data
### What?
- the ability to store data to be accessed at a later point in time
  - databases (301)
  - local storage 
    - an object in our browser specific to your computer than can store data as a property

## Why?
- So that a user is able to retain data accross page refreshes and on different parts of the application 

## Local Storage
### How data is stored
- you can set string data into storage as a key: value pair
- to stringify objects and arrays use `JSON.stringify()`

### Methods on Local Storage
- `getItem(key)`
- `setItem(key, value)`
- `clear()`
- `removeItem(key)`