/*
 *
 * Title: Todo List Create
 * Description: Todo List
 * Author: Trishan Saha
 * Date: 09-Set-2021
 *
 */

// select element and assign in variable
let newTask = document.querySelector('#new-task')
let form = document.querySelector('form')
let todoUl = document.querySelector('#items')
let completeUl = document.querySelector('.complete-list ul')
let addTaskBtn = document.querySelector('#addTask')

// functions

let addItem = function (event) {
  event.preventDefault()
  let listItem = createTask(newTask.value)
  todoUl.appendChild(listItem)
  newTask.value = ''
  // bind the new list item to the incomplete list
  bindIncomplteItems(listItem, completeTask)
}

let completeTask = function () {
  let listItem = this.parentNode
  let deleteBtn = document.createElement('button')
  deleteBtn.innerText = 'Delete'
  deleteBtn.className = 'delete'
  listItem.appendChild(deleteBtn)

  let checkbox = listItem.querySelector('input[type="checkbox"]')
  checkbox.remove()

  completeUl.appendChild(listItem)
}

let bindIncomplteItems = function (listItem, completeTask) {
  let checkbox = listItem.querySelector('input[type="checkbox"]')
  checkbox.onchange = completeTask
}

let createTask = function (task) {
  let listItem = document.createElement('li')
  let checkbox = document.createElement('input')
  let label = document.createElement('label')

  checkbox.type = 'checkbox'
  label.innerText = task

  listItem.appendChild(checkbox)
  listItem.appendChild(label)

  return listItem
}

addTaskBtn.addEventListener('click', addItem)
