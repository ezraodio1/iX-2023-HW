export class Task {
    constructor(description) {
        this.description = description;
    }

    static fromJSON(json) {
        return new Task(json.description);
    }
}