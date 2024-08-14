import Modal from './Modal.jsx';
import { useState, useRef } from 'react';
export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');
  const dialog = useRef();
  function handleTask(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === '') {
      dialog.current.open();
    } else {
      onAdd(enteredTask);
      setEnteredTask('');
    }
  }

  return (
    <>
      <Modal ref={dialog} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          Invalid input
        </h2>
        <p className="text-stone-600 mb-4">
          Looks like you forgot to enter a value.
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 sounded-sm bg-stone-200"
          onChange={handleTask}
          value={enteredTask}
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-900"
        >
          Add task
        </button>
      </div>
    </>
  );
}
