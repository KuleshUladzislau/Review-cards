import type { Meta } from '@storybook/react'
import AddCardModal from '@/pages/cards/add-card-modal/add-card-modal.tsx'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'
import { Button } from '@/components/ui'

import { useState } from 'react'

const meta = {
  title: 'page/addCard',
  component: AddCardModal,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: '/' },
    }),
  },
} satisfies Meta<typeof AddCardModal>

export default meta

export const Default = {
  render: () => {
    const [open, setOpen] = useState(true)
    const openModalHandler = () => setOpen(!open)

    return (
      <>
        <AddCardModal open={open} setOpen={openModalHandler} onSubmit={() => {}} />
        <Button onClick={openModalHandler}>AddNewCard</Button>
      </>
    )
  },
}
