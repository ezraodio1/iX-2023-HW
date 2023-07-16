class Task {
    constructor(desc) {
        this.description = desc;
    }
}

class UI {
    constructor() {
        this.form = document.getElementById('form');

        this.taskDesc = document.getElementById("task");
        
        this.tableBody = document.getElementById('table-body');

        this.form.addEventListener('submit', (e) => this.onFormSubmit(e));

        this.tasks = [];
    }

    onFormSubmit(e) {
        e.preventDefault();

        if (this.taskDesc.value === '') {
            return;
        }

        const task = new Task(this.taskDesc.value);
        this.tasks.push(task);
        this.taskDesc.value = '';

        this.renderBookTable();

    }

    renderBookTable() {
        console.log("yay");
        this.tableBody.innerHTML = '';

        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i].description;

            const tr = this.createTableRow(task);
            this.tableBody.appendChild(tr);
        }
    }

    createTableRow(task) {
        console.log("tset");
        const tr = document.createElement('tr');

        const tdDesc = document.createElement('td');
        const complete = document.createElement('td');
        const actions = document.createElement('td');

        const trashbtn = document.createElement('button');
        trashbtn.innerHTML = "Delete";

        const checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox"); 

        tdDesc.innerHTML = task;

        complete.appendChild(checkbox);
        actions.appendChild(trashbtn);

        tr.appendChild(tdDesc);
        tr.appendChild(complete);
        tr.appendChild(actions);

        return tr;
    }
}

const ui = new UI();