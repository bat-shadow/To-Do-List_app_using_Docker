from flask import Flask, request, jsonify
import psycopg2
import time

app = Flask(__name__)

def connect_db():
    while True:
        try:
            connection = psycopg2.connect(
                host="db",
                database="todo",
                user="postgres",
                password="postgres"
            )
            return connection
        except:
            print("Waiting for database...")
            time.sleep(3)

db = connect_db()

@app.route("/tasks", methods=["GET"])
def get_tasks():
    cursor = db.cursor()
    cursor.execute("SELECT id, title FROM tasks;")
    rows = cursor.fetchall()
    tasks = [{"id": r[0], "title": r[1]} for r in rows]
    return jsonify(tasks)

@app.route("/tasks", methods=["POST"])
def add_task():
    data = request.json
    cursor = db.cursor()
    cursor.execute("INSERT INTO tasks (title) VALUES (%s);", (data["title"],))
    db.commit()
    return {"message": "Task added"}

@app.route("/tasks/<int:id>", methods=["PUT"])
def update_task(id):
    data = request.json
    cursor = db.cursor()
    cursor.execute("UPDATE tasks SET title = %s WHERE id = %s;", (data["title"], id))
    db.commit()
    return {"message": "Task updated"}

@app.route("/tasks/<int:id>", methods=["DELETE"])
def delete_task(id):
    cursor = db.cursor()
    cursor.execute("DELETE FROM tasks WHERE id = %s;", (id,))
    db.commit()
    return {"message": "Task deleted"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)