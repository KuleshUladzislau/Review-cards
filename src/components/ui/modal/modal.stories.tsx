import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { Button } from '../button'

import { Modal, ModalType } from './modal.tsx'

import { Card } from '@/components/ui/card'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta

export const ModalWithoutTitle = {
  render: (args: ModalType) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button as="button" variant="primary" onClick={() => setOpen(true)}>
          open Modal
        </Button>
        <Modal {...args} open={open} setOpen={setOpen}>
          <div>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod temper ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor.
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <Button as={'button'} variant={'primary'} onClick={() => setOpen(false)}>
              close modal
            </Button>
          </div>
        </Modal>
      </>
    )
  },
}

export const ModalWithTitle = {
  render: (args: ModalType) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button as="button" variant="primary" onClick={() => setOpen(true)}>
          open Modal
        </Button>
        <Modal {...args} open={open} setOpen={setOpen} title={'close modal'}>
          <div style={{ marginTop: '20px' }}>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod temper ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor.
          </div>
        </Modal>
      </>
    )
  },
}

export const ModalWithCard = {
  render: (args: ModalType) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button as="button" variant="primary" onClick={() => setOpen(true)}>
          open Modal
        </Button>
        <Modal {...args} open={open} setOpen={setOpen} title={'close modal'}>
          <Card>
            delete card
            <Button variant={'primary'} onClick={() => setOpen(false)}>
              close
            </Button>
          </Card>
        </Modal>
      </>
    )
  },
}
