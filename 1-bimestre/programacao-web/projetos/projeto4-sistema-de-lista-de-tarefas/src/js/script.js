const taskInput = document.getElementById('taskInput')
const addBtn = document.getElementById('addBtn')
const taskList = document.getElementById('taskList')
const message = document.getElementById('message')
const emptyState = document.getElementById('emptyState')
const taskCount = document.getElementById('taskCount')

let tasks = []

function showMessage() {
    message.style.display = 'block'
    setTimeout(() => {
        message.style.display = 'none'
    }, 3000)
}

function updateCount() {
    const total = tasks.length
    const completed = tasks.filter(task => task.completed).length
    
    if (total === 0) {
        taskCount.textContent = ''
    } else {
        taskCount.textContent = `${completed} de ${total} tarefa(s) concluída(s)`
    }
}

function renderTasks() {
    taskList.innerHTML = ''

    if (tasks.length === 0) {
        taskList.appendChild(emptyState)
        emptyState.style.display = 'block'
    } else {
        emptyState.style.display = 'none'
        
        tasks.forEach((task, index) => {
            const li = document.createElement('li')
            li.className = 'task-item'
            
            const taskText = document.createElement('span')
            taskText.className = 'task-text'
            if (task.completed) {
                taskText.classList.add('completed')
            }
            taskText.textContent = task.text
            taskText.title = 'Clique para marcar como concluída'
            
            taskText.addEventListener('click', () => {
                toggleTask(index)
            })

            const removeBtn = document.createElement('button')
            removeBtn.className = 'remove-btn'
            removeBtn.textContent = 'Remover'
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation()
                removeTask(index)
            })

            li.appendChild(taskText)
            li.appendChild(removeBtn)
            taskList.appendChild(li)
        })
    }

    updateCount()
}

function addTask() {
    const text = taskInput.value.trim()

    if (text === '') {
        showMessage()
        taskInput.focus()
        return
    }

    tasks.push({
        text: text,
        completed: false
    })

    taskInput.value = ''
    taskInput.focus()

    renderTasks()
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed
    renderTasks()
}

function removeTask(index) {
    tasks.splice(index, 1)
    renderTasks()
}

addBtn.addEventListener('click', addTask)

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask()
    }
})

renderTasks()