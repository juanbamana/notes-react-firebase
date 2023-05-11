import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { ReactComponent as Send } from "../assets/img/send.svg";
import { isEmpty } from 'lodash'
import './AddNotes.scss'
import firebase from '../utils/firebase'
import 'firebase/compat/firestore';


const db = firebase.firestore(firebase)

export const AddNotes = () => {

    const [task, setTask] = useState("")

    const onSubmit = (e) => {

        e.preventDefault();

        if (!isEmpty(task)) {

            db.collection('tasks').add({

                name: task,
                completed: false
            })
                .then(() => {

                    setTask("")
                })

        }

    }
    return (
        <Form onSubmit={onSubmit} className="add-task">
            <input
                type="text"
                placeholder="Nueva tarea..."
                onChange={(e) => setTask(e.target.value)}
            />
            <Button type="submit">

                <Send />

            </Button>
        </Form>
    )
}
