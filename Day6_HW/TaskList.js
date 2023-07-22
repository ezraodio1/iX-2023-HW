class Task {
    constructor(description) {
        this.description = description;
    }

    static fromJSON(json) {
        return new Task(json.description);
    }
}

class UI {
    constructor() {
        this.form = document.getElementById('form');

        this.taskDesc = document.getElementById("task");
        
        this.tableBody = document.getElementById('table-body');

        this.form.addEventListener('submit', (e) => this.onFormSubmit(e));

        this.tasks = [];
        this.loadTasksFromLocalStorage();
        this.renderTaskTable();
    }

    onFormSubmit(e) {
        e.preventDefault();

        if (this.taskDesc.value === '') {
            return;
        }

        const task = new Task(this.taskDesc.value);
        this.tasks.push(task);
        
        this.saveTasksToLocalStorage();
        this.renderTaskTable();

        this.taskDesc.value = '';

    }

    renderTaskTable() {
        this.tableBody.innerHTML = '';

        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];

            const tr = this.createTableRow(task);
            this.tableBody.appendChild(tr);
        }
    }

    createTableRow(task) {
        const tr = document.createElement('tr');

        const tdDesc = document.createElement('td');
        const complete = document.createElement('td');
        const actions = document.createElement('td');

        const trashbtn = document.createElement('button');
        trashbtn.innerHTML = "Delete";
        trashbtn.addEventListener('click', () => {
            this.onDeleteTaskClicked(task);
        })

        const checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox"); 

        tdDesc.innerHTML = task.description;

        complete.appendChild(checkbox);
        actions.appendChild(trashbtn);

        tr.appendChild(tdDesc);
        tr.appendChild(complete);
        tr.appendChild(actions);

        return tr;
    }

    saveTasksToLocalStorage() {
        const json = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', json);
    }

    loadTasksFromLocalStorage() {
        const json = localStorage.getItem('tasks');
        if (json) {
            const taskArr = JSON.parse(json);
            this.tasks = taskArr.map((task) => Task.fromJSON(task));
        }
    }

    onDeleteTaskClicked(task) {
        this.tasks = this.tasks.filter((currentTask) => {
            return task.description !== currentTask.description;
        });
        console.log(this.tasks);
        this.saveTasksToLocalStorage();
        this.renderTaskTable();
    }
}

const ui = new UI();