import React from 'react'
import { Modal } from '@mui/material'
import TweetForm from './TweetForm'

const TweetModal = ({open, setOpen} : {open: boolean, setOpen: () => any}) => {

  return (
    <Modal open={open} onClose={() => setOpen()}>
      <div style={{backgroundColor: '#fff', width: 600, position: 'absolute', top: '25%', left: '50%',  transform: 'translate(-50%, -50%)'}}>
        <TweetForm modal={true} setOpen={() => setOpen()}/>
      </div>
    </Modal>
  )
}

export default TweetModal