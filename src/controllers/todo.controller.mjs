import express from 'express';

const createTodoController = async (req, res) => {
    res.status(200).json({
        message: "Ok"
    })
}

const getTodoController = async (req, res) => {

}

export { createTodoController, getTodoController }