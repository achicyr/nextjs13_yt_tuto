import prisma from "."

export async function getAllTodos() {
  try {
    const todos = await prisma.todo.findMany()
    return { todos }
  } catch (error) {
    return { error: {error, msg:'Failed to fetch todos!'} }
  }
}

export async function getTodoById(id) {
  try {
    const todo = await prisma.todo.findUnique({
      where: {id}
    })
    if (!todo) throw new Error()
    return {todo}
  } catch (error) {
    return { error: {error, msg:'Failed to get todo!'} }
  }
}

export async function createTodo(title) {
  try {
    const todo = await prisma.todo.create({ data: {title, isCompleted: false} })
    console.log('todo created');
    console.log(todo);
    if (!todo) throw new Error()
    return {todo}
  } catch (error) {
    return { error: {error, msg:'Failed to create todo!'} }
  }
}

export async function deleteTodo(id) {
  try {
    const todo = await prisma.todo.delete({ where: {id} })
    if (!todo) throw new Error()
    return todo
  } catch (error) {
    return { error: {error, msg:'Failed to get todo!'} }
  }
}

export async function completeTodo(id) {}
